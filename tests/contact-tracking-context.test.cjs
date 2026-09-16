const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '../assets/js/main.js'), 'utf8');
const tracking = source.slice(source.indexOf('window.track = function'), source.indexOf('/* ---------- CLINIC-AWARE CONTACTS'));

function harness({ pathname = '/es/dentista-tremp.html', lang = 'es', clinic = 'tremp', consent = { umami: true, analytics: true }, umamiThrows = false } = {}) {
  const events = [];
  const listeners = [];
  const document = {
    documentElement: { lang }, body: { dataset: { clinic } },
    addEventListener: (_name, callback) => listeners.push(callback)
  };
  const location = new URL(`https://www.estudidentalcarrera.com${pathname}`);
  const window = {
    location, EDCConsent: { get: () => consent },
    EDCUmami: { track: (name, params) => {
      if (umamiThrows) throw new Error('Provider unavailable');
      events.push({ provider: 'umami', name, params: { ...params } });
    } },
    gtag: (_type, name, params) => events.push({ provider: 'ga4', name, params: { ...params } })
  };
  vm.runInNewContext(tracking, { window, document, URL });
  return {
    events, window,
    click({ href, track, label, position, hreflang = false, text = '' }) {
      const attributes = { href, 'data-track': track, 'data-track-label': label };
      const link = {
        href: href ? new URL(href, location.href).href : undefined,
        textContent: text,
        getAttribute: name => attributes[name],
        hasAttribute: name => name === 'hreflang' && hreflang,
        closest(selector) {
          if (selector === 'a[href^="tel:"]') return href?.startsWith('tel:') ? this : null;
          if (selector === 'a[href*="wa.me"]') return href?.includes('wa.me') ? this : null;
          if (selector === 'a[href]') return href ? this : null;
          if (selector === '[data-track]') return track ? this : null;
          return selector === position ? this : null;
        }
      };
      // Delegation must work when the click lands on an icon inside the link.
      listeners.forEach(callback => callback({ target: { closest: selector => link.closest(selector) } }));
    }
  };
}

test('legacy CA/ES appointment labels join one event with source and destination clinic context', () => {
  for (const lang of ['ca', 'es']) {
    const pathname = lang === 'es' ? '/es/dentista-tremp.html' : '/dentista-tremp.html';
    const h = harness({ pathname, lang });
    h.click({ href: `${lang === 'es' ? '/es/sedes.html#contacto' : '/seus.html#contacte'}-carrera`, track: 'click_cita', label: 'hero' });
    assert.deepEqual(h.events.map(e => [e.provider, e.name]), [['umami', 'appointment_cta_click'], ['ga4', 'appointment_cta_click']]);
    for (const { params } of h.events) assert.deepEqual(params, {
      clinic: 'lleida', etiqueta: 'hero', page_path: pathname, page_language: lang, page_clinic: 'tremp'
    });
  }
});

test('blog treatment links retain their event and article context after integration', () => {
  const h = harness({ pathname: '/guies/ferula-descarrega.html', lang: 'ca', clinic: 'carrera' });
  h.click({ href: '/atm-bruxisme.html', track: 'blog_service_click', label: 'ferula-descarrega' });
  assert.equal(h.events.length, 2);
  for (const event of h.events) {
    assert.equal(event.name, 'blog_service_click');
    assert.equal(event.params.page_path, '/guies/ferula-descarrega.html');
    assert.equal(event.params.page_language, 'ca');
  }
});

test('phone and WhatsApp taps are counted once even when explicitly tagged', () => {
  const h = harness();
  h.click({ href: 'tel:+34973268826', track: 'appointment_cta_click' });
  h.click({ href: 'https://wa.me/34650600172?text=private%20message', track: 'click_cita' });
  assert.deepEqual(h.events.filter(e => e.provider === 'ga4').map(e => [e.name, e.params.clinic]), [
    ['phone_click', 'lleida'], ['whatsapp_click', 'tremp']
  ]);
  assert.equal(h.events.length, 4);
  assert.doesNotMatch(JSON.stringify(h.events), /34973268826|34650600172|private|message|generate_lead/);
});

test('generic appointment links and direct contact choices remain distinct', () => {
  const h = harness({ clinic: '' });
  h.click({ href: '/es/sedes.html#contacto', position: '.nav' });
  h.click({ href: '/es/sedes.html#contacto-tremp-whatsapp', position: '.mobile-cta-bar' });
  const events = h.events.filter(e => e.provider === 'ga4');
  assert.deepEqual(events.map(e => [e.name, e.params.clinic, e.params.etiqueta, e.params.page_clinic]), [
    ['appointment_cta_click', 'unselected', 'navigation', 'general'],
    ['contact_options_click', 'tremp', 'mobile-bar', 'general']
  ]);
});

test('custom contact payloads omit query, fragment and arbitrary visible text or labels', () => {
  const h = harness({ pathname: '/es/dentista-tremp.html?email=private@example.invalid#private-patient' });
  h.click({ href: '/es/sedes.html#contacto-tremp', track: 'appointment_cta_click', label: 'private@example.invalid', text: 'Private Patient +34 600 000 000' });
  for (const { params } of h.events) {
    assert.equal(params.page_path, '/es/dentista-tremp.html');
    assert.equal(params.etiqueta, 'page');
  }
  assert.doesNotMatch(JSON.stringify(h.events), /private|Private|600|email|@/);
});

test('language links, external links and arbitrary data-track values cannot count as a lead', () => {
  const h = harness();
  h.click({ href: '/seus.html#contacte-tremp', hreflang: true, track: 'click_cita' });
  h.click({ href: 'https://example.invalid/es/sedes.html#contacto-tremp' });
  h.click({ href: '/es/equip.html', track: 'generate_lead' });
  assert.deepEqual(h.events, []);
});

test('the appointment funnel receives the same page context without changing its clinic', () => {
  const h = harness({ pathname: '/seus.html', lang: 'ca', clinic: '' });
  h.window.track('generate_lead', { form_name: 'appointment', form_entry: 'clinic_link', clinic: 'tremp' });
  assert.equal(h.events.length, 2);
  for (const { params } of h.events) assert.deepEqual(params, {
    form_name: 'appointment', form_entry: 'clinic_link', clinic: 'tremp',
    page_path: '/seus.html', page_language: 'ca', page_clinic: 'general'
  });
});

test('every consent combination independently gates custom events', () => {
  for (const umami of [false, true]) for (const analytics of [false, true]) {
    const h = harness({ consent: { umami, analytics } });
    h.click({ href: '/es/sedes.html#contacto-tremp' });
    assert.deepEqual(h.events.map(e => e.provider), [...(umami ? ['umami'] : []), ...(analytics ? ['ga4'] : [])]);
  }
});

test('an unavailable Umami provider does not suppress consented GA4 events', () => {
  const h = harness({ umamiThrows: true });
  h.click({ href: 'tel:+34650600172' });
  assert.equal(h.events.length, 1);
  assert.equal(h.events[0].provider, 'ga4');
  assert.equal(h.events[0].name, 'phone_click');
});

test('existing static, landing, guide and Lleida CTA labels retain their useful placement', () => {
  const h = harness();
  const labels = [
    'hero', 'cta-band', 'serveis-cta', 'landing-hero', 'landing-section',
    'landing-section-tremp', 'landing-footer', 'landing-alternative-tremp',
    'guide-contact', 'lleida-first-visit'
  ];
  for (const label of labels) h.click({ href: '/es/sedes.html#contacto-tremp', track: 'appointment_cta_click', label });
  const events = h.events.filter(e => e.provider === 'ga4');
  assert.deepEqual(events.map(e => e.params.etiqueta), labels);
  assert.ok(events.every(e => e.name === 'appointment_cta_click' && e.params.clinic === 'tremp'));
});

test('directions clicks identify the clinic while omitting the Maps URL and visible text', () => {
  for (const clinic of ['tremp', 'carrera']) {
    const h = harness({ clinic });
    h.click({
      href: 'https://www.google.com/maps/dir/?api=1&destination=clinic-address&origin=private-location',
      track: 'directions_click', label: 'landing-practical', text: 'Private directions text'
    });
    assert.equal(h.events.length, 2);
    for (const event of h.events) {
      assert.equal(event.name, 'directions_click');
      assert.equal(event.params.clinic, clinic === 'carrera' ? 'lleida' : 'tremp');
      assert.equal(event.params.etiqueta, 'landing-practical');
    }
    assert.doesNotMatch(JSON.stringify(h.events), /maps|google|destination|origin|private|Private|clinic-address|generate_lead/);
  }
});
