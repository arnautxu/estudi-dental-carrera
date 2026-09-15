const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const appointmentSource = fs.readFileSync(path.join(__dirname, '../assets/js/appointment.js'), 'utf8');
const mainSource = fs.readFileSync(path.join(__dirname, '../assets/js/main.js'), 'utf8');

class Element {
  constructor() { this.listeners = {}; this.children = new Map(); this.dataset = {}; this.attributes = {}; this.value = ''; this.checked = false; this.classList = { add() {}, toggle() {} }; }
  addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); }
  async emit(name, extra = {}) { for (const fn of this.listeners[name] || []) await fn({ target: this, preventDefault() {}, ...extra }); }
  click() { return this.emit('click'); }
  querySelector(selector) { if (!this.children.has(selector)) this.children.set(selector, new Element()); return this.children.get(selector); }
  querySelectorAll() { return []; }
  setAttribute(name, value) { this.attributes[name] = value; }
  removeAttribute(name) { delete this.attributes[name]; }
  focus() {}
}

function appointmentHarness(clinic = 'carrera') {
  const form = new Element();
  const steps = [new Element(), new Element(), new Element()];
  const radios = ['carrera', 'tremp'].map(value => Object.assign(new Element(), { value, checked: value === clinic }));
  const events = [];
  const requests = [];
  const controls = ['name', 'phone', 'email', 'horari', 'consent', 'website'];
  form.elements = Object.fromEntries(controls.map(name => [name, Object.assign(new Element(), { name })]));
  const select = form.querySelector.bind(form);
  form.querySelector = selector => {
    if (selector === '[name="seu"]:checked') return radios.find(r => r.checked);
    if (selector === '[name="seu"]') return radios[0];
    if (selector.startsWith('[name="seu"][value=')) return radios.find(r => selector.includes(r.value));
    const field = selector.match(/^\[name="(\w+)"\]$/)?.[1];
    return form.elements[field] || select(selector);
  };
  form.querySelectorAll = selector => {
    if (selector === '[data-step]') return steps;
    if (selector === '[data-next]') return steps.slice(0, 2).map(s => s.querySelector('[data-next]'));
    if (selector === '[data-back]') return steps.slice(1).map(s => s.querySelector('[data-back]'));
    if (selector === '[name="seu"]') return radios;
    if (selector === '.appointment-steps li') return steps.map(s => s.querySelector('li'));
    const field = selector.match(/^\[name="(\w+)"\]$/)?.[1];
    return form.elements[field] ? [form.elements[field]] : [];
  };
  form.reset = () => { radios.forEach(r => { r.checked = false; }); controls.forEach(key => { form.elements[key].value = ''; form.elements[key].checked = false; }); };
  const document = { documentElement: { lang: 'ca' }, querySelector: selector => selector === '[data-appointment]' ? form : new Element(), querySelectorAll: () => [], dispatchEvent() {}, body: new Element() };
  const location = new URL('https://www.estudidentalcarrera.com/seus.html');
  const window = { location, addEventListener() {}, track: (name, params) => events.push({ name, params: { ...params } }) };
  let response = { ok: true, status: 200, json: async () => ({ ok: true }) };
  vm.runInNewContext(appointmentSource, {
    document, window, location, URL, URLSearchParams, AbortController, setTimeout, clearTimeout,
    CustomEvent: class { constructor(type, options) { this.type = type; this.detail = options.detail; } },
    crypto: { randomUUID: () => '123e4567-e89b-42d3-a456-426614174000' },
    fetch: async (_url, options) => { requests.push(JSON.parse(options.body)); if (response instanceof Error) throw response; return response; }
  });
  return { form, steps, radios, events, requests, response: value => { response = value; }, fill() { Object.assign(form.elements.name, { value: 'Private patient' }); form.elements.phone.value = '+34 600 000 000'; form.elements.email.value = 'private@example.invalid'; form.elements.consent.checked = true; } };
}

test('form measurement deduplicates steps, excludes private values and counts only a confirmed lead', async () => {
  const h = appointmentHarness();
  assert.equal(h.events.length, 0, 'loading the form does not count a start');
  await h.steps[0].querySelector('[data-next]').click();
  await h.steps[1].querySelector('[data-back]').click();
  await h.steps[0].querySelector('[data-next]').click();
  await h.steps[1].querySelector('[data-next]').click();
  assert.equal(h.events.filter(e => e.name === 'appointment_start').length, 1);
  assert.deepEqual(h.events.filter(e => e.name === 'appointment_step').map(e => e.params.form_step), [1, 2, 3]);
  await h.form.emit('submit');
  assert.equal(h.requests.length, 0);
  assert.equal(h.events.at(-1).params.error_type, 'contact_validation');
  h.fill();
  h.response(new Error('Contains private upstream information'));
  await h.form.emit('submit');
  assert.equal(h.events.at(-1).params.error_type, 'network_error');
  assert.equal(h.events.filter(e => e.name === 'generate_lead').length, 0);
  h.response({ ok: true, status: 200, json: async () => ({ ok: true }) });
  await h.form.emit('submit');
  await h.form.emit('submit');
  assert.equal(h.events.filter(e => e.name === 'generate_lead').length, 1);
  assert.equal(h.events.at(-1).params.clinic, 'lleida');
  assert.equal(h.requests[0].requestId, h.requests[1].requestId, 'same retry remains idempotent');
  for (const { params } of h.events) assert.ok(Object.keys(params).every(k => ['form_name', 'clinic', 'form_step', 'error_type'].includes(k)));
  assert.doesNotMatch(JSON.stringify(h.events), /Private|600 000|private@example|requestId|orientation|upstream/);
});

test('Tremp stays separate and rejected requests never become leads', async () => {
  const h = appointmentHarness('tremp');
  await h.steps[0].querySelector('[data-next]').click();
  await h.steps[1].querySelector('[data-next]').click();
  h.fill();
  h.response({ ok: false, status: 429, json: async () => ({ ok: false }) });
  await h.form.emit('submit');
  assert.ok(h.events.every(e => e.params.clinic === 'tremp'));
  assert.equal(h.events.at(-1).params.error_type, 'rate_limited');
  assert.ok(!h.events.some(e => e.name === 'generate_lead'));
});

test('conversion events obey analytics choices and never turn contact taps into leads', async () => {
  let prefs = { umami: false, analytics: false };
  const events = [];
  const document = new Element();
  const location = new URL('https://www.estudidentalcarrera.com/seus.html');
  const window = { location, EDCConsent: { get: () => prefs }, EDCUmami: { track: (name, params) => events.push({ provider: 'umami', name, params }) }, gtag: (_type, name, params) => events.push({ provider: 'ga4', name, params }) };
  const tracking = mainSource.slice(mainSource.indexOf('window.track = function'), mainSource.indexOf('/* ---------- CLINIC-AWARE CONTACTS'));
  vm.runInNewContext(tracking, { window, document, URL });
  window.track('appointment_start', { form_name: 'appointment' });
  assert.equal(events.length, 0);
  prefs = { umami: false, analytics: true };
  const tel = { getAttribute: () => 'tel:+34 650 600 172' };
  await document.emit('click', { target: { closest: selector => selector === 'a[href^="tel:"]' ? tel : null } });
  assert.deepEqual(events.map(e => [e.provider, e.name, e.params.clinic]), [['ga4', 'phone_click', 'tremp']]);
  prefs = { umami: true, analytics: false };
  const cta = { getAttribute: attr => attr === 'data-track' ? 'appointment_cta_click' : 'hero' };
  await document.emit('click', { target: { closest: selector => selector === '[data-track]' ? cta : null } });
  assert.equal(events.length, 2, 'explicit CTA creates one event, not a duplicate generic event');
  assert.equal(events[1].provider, 'umami');
  assert.ok(events.every(e => e.name !== 'generate_lead'));
});

test('revoking Umami before its script loads discards queued events', () => {
  const store = new Map();
  const scripts = [];
  const events = [];
  const document = new Element();
  document.documentElement = { lang: 'ca' };
  document.readyState = 'loading';
  document.createElement = () => new Element();
  document.head = { appendChild: el => scripts.push(el) };
  const window = { location: new URL('https://www.estudidentalcarrera.com'), UMAMI_WEBSITE_ID: '123e4567-e89b-42d3-a456-426614174000' };
  const consent = mainSource.slice(mainSource.indexOf('(function initConsent()'), mainSource.indexOf('/* ---------- CONVERSION EVENT TRACKING'));
  vm.runInNewContext(consent, { window, document, localStorage: { getItem: key => store.get(key), setItem: (key, value) => store.set(key, value) }, setTimeout });
  window.EDCUmami.track('appointment_start', { clinic: 'lleida' });
  assert.equal(scripts.length, 1);
  window.EDCConsent.reject();
  window.umami = { track: (name, params) => events.push({ name, params }) };
  scripts[0].onload();
  assert.equal(events.length, 0);
});
