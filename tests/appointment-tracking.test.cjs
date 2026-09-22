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

function appointmentHarness(clinic = 'carrera', { lang = 'ca', hash = '', search = '' } = {}) {
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
  const document = new Element();
  const intro = Object.assign(new Element(), { textContent: 'Generic clinic selection introduction' });
  const direct = new Element();
  const languageLink = { href: lang === 'es' ? 'https://www.estudidentalcarrera.com/seus.html' : 'https://www.estudidentalcarrera.com/es/sedes.html' };
  Object.assign(document, {
    documentElement: { lang },
    querySelector: selector => selector === '[data-appointment]' ? form : selector === '[data-appointment-intro]' ? intro : direct,
    querySelectorAll: selector => selector.includes('a[hreflang]') ? [languageLink] : [],
    dispatchEvent() {}, body: new Element()
  });
  const location = new URL(`https://www.estudidentalcarrera.com/${lang === 'es' ? 'es/sedes.html' : 'seus.html'}${search}${hash}`);
  const window = Object.assign(new Element(), { location, track: (name, params) => events.push({ name, params: { ...params } }) });
  let response = { ok: true, status: 200, json: async () => ({ ok: true }) };
  vm.runInNewContext(appointmentSource, {
    document, window, location, URL, URLSearchParams, AbortController, setTimeout, clearTimeout,
    CustomEvent: class { constructor(type, options) { this.type = type; this.detail = options.detail; } },
    crypto: { randomUUID: () => '123e4567-e89b-42d3-a456-426614174000' },
    fetch: async (_url, options) => { requests.push(JSON.parse(options.body)); if (response instanceof Error) throw response; return typeof response === 'function' ? response() : response; }
  });
  return { form, steps, radios, events, requests, window, document, location, intro, direct, languageLink,
    response: value => { response = value; },
    async chooseClinic(value) { radios.forEach(r => { r.checked = r.value === value; }); await radios.find(r => r.value === value).emit('change'); },
    fill() { Object.assign(form.elements.name, { value: 'Private patient' }); form.elements.phone.value = '+34 600 000 000'; form.elements.email.value = 'private@example.invalid'; form.elements.consent.checked = true; }
  };
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
  for (const { params } of h.events) assert.ok(Object.keys(params).every(k => ['form_name', 'form_entry', 'clinic', 'form_step', 'error_type'].includes(k)));
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

for (const lang of ['ca', 'es']) for (const clinic of ['carrera', 'tremp']) {
  test(`${lang}/${clinic}: a clinic link starts at contact details with honest progress and language continuity`, async () => {
    const h = appointmentHarness('', { lang, hash: `#${lang === 'es' ? 'contacto' : 'contacte'}-${clinic}` });
    assert.deepEqual(h.steps.map(s => s.hidden), [true, true, false]);
    assert.equal(h.radios.find(r => r.checked).value, clinic);
    assert.equal(h.form.querySelector('[data-step-count]').textContent, lang === 'es' ? 'Datos de contacto' : 'Dades de contacte');
    assert.equal(h.form.querySelector('.appointment-steps').hidden, true);
    assert.equal(h.steps[2].querySelector('[data-back]').hidden, true);
    assert.match(h.intro.textContent, new RegExp(clinic === 'tremp' ? 'Tremp' : 'Lleida'));
    assert.equal(h.languageLink.href, `${lang === 'es' ? '/seus.html#contacte' : '/es/sedes.html#contacto'}-${clinic}`);
    assert.equal(h.events.length, 0, 'preselection is not user interaction or a lead');
    await h.form.emit('input', { target: h.form.elements.name });
    assert.deepEqual(h.events.map(e => [e.name, e.params.form_entry, e.params.form_step]), [
      ['appointment_start', 'clinic_link', undefined], ['appointment_step', 'clinic_link', 3]
    ]);
    await h.form.emit('submit');
    assert.equal(h.requests.length, 0, 'the shortcut cannot skip name, phone or consent validation');
  });
}

test('editing the clinic from direct entry returns to contact and preserves typed details', async () => {
  const h = appointmentHarness('', { hash: '#contacte-carrera' });
  h.fill();
  await h.form.querySelector('[data-edit-clinic]').click();
  assert.deepEqual(h.steps.map(s => s.hidden), [true, false, true]);
  assert.equal(h.steps[1].querySelector('[data-back]').textContent, 'Tornar al contacte');
  await h.chooseClinic('tremp');
  await h.steps[1].querySelector('[data-back]').click();
  assert.deepEqual(h.steps.map(s => s.hidden), [true, true, false]);
  assert.equal(h.form.elements.name.value, 'Private patient');
  assert.equal(h.form.elements.consent.checked, true);
  assert.match(h.form.querySelector('[data-clinic-summary]').textContent, /Tremp/);
  assert.equal(h.languageLink.href, '/es/sedes.html#contacto-tremp');
});

test('hash changes preserve typed details, and a repeated clinic link reopens contact from clinic editing', async () => {
  const h = appointmentHarness('', { hash: '#contacte-carrera' });
  h.fill();
  h.location.hash = '#contacte-tremp-whatsapp';
  await h.window.emit('hashchange');
  assert.equal(h.radios.find(r => r.checked).value, 'tremp');
  assert.equal(h.form.elements.phone.value, '+34 600 000 000');
  assert.equal(h.direct.open, true);
  await h.form.querySelector('[data-edit-clinic]').click();
  await h.document.emit('click', { target: { closest: () => ({ href: h.location.href }) } });
  assert.deepEqual(h.steps.map(s => s.hidden), [true, true, false]);
});

test('a fragment cannot change the recipient in flight or reopen a sent request; restart is explicit', async () => {
  const h = appointmentHarness('', { hash: '#contacte-carrera' });
  h.fill();
  let accept;
  h.response(() => new Promise(resolve => { accept = resolve; }));
  const submission = h.form.emit('submit');
  h.location.hash = '#contacte-tremp';
  await h.window.emit('hashchange');
  assert.equal(h.radios.find(r => r.checked).value, 'carrera');
  assert.equal(h.requests[0].seu, 'carrera');
  accept({ ok: true, status: 200, json: async () => ({ ok: true }) });
  await submission;
  assert.match(h.form.querySelector('[data-success]').querySelector('[data-success-message]').textContent, /Lleida/);
  await h.window.emit('hashchange');
  assert.ok(h.steps.every(s => s.hidden));
  assert.equal(h.form.querySelector('[data-step-count]').textContent, 'Enviada');
  assert.equal(h.events.filter(e => e.name === 'generate_lead').length, 1);
  await h.form.querySelector('[data-restart]').click();
  assert.deepEqual(h.steps.map(s => s.hidden), [false, true, true]);
  assert.equal(h.form.querySelector('[data-step-count]').textContent, '1 de 3');
  assert.equal(h.form.elements.name.value, '');
  assert.equal(h.form.elements.consent.checked, false);
});

test('generic and invalid links keep the clinic selection and optional orientation steps', async () => {
  for (const hash of ['#contacte', '#contacte-whatsapp', '#contacte-unknown']) {
    const h = appointmentHarness('', { hash });
    assert.deepEqual(h.steps.map(s => s.hidden), [false, true, true]);
    await h.steps[0].querySelector('[data-next]').click();
    await h.steps[1].querySelector('[data-next]').click();
    assert.deepEqual(h.steps.map(s => s.hidden), [true, false, true]);
    assert.equal(h.requests.length, 0);
    assert.equal(h.events.at(-1).params.error_type, 'clinic_required');
  }
});

test('legacy clinic query also opens the short form and does not leak attribution into events', async () => {
  const h = appointmentHarness('', { search: '?seu=tremp&utm_source=test-only&canal=whatsapp' });
  assert.deepEqual(h.steps.map(s => s.hidden), [true, true, false]);
  assert.equal(h.direct.open, true);
  await h.form.emit('input', { target: h.form.elements.name });
  assert.doesNotMatch(JSON.stringify(h.events), /utm_|test-only/);
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
  const tel = { getAttribute: () => 'tel:+34 973 447 534' };
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
