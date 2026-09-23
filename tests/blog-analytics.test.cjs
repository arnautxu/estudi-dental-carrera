const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const handler = require('../api/guide');
const { articles } = require('../data/blog');

const root = path.join(__dirname, '..');
const main = fs.readFileSync(path.join(root, 'assets/js/main.js'), 'utf8');
const tracking = main.slice(main.indexOf('window.track = function'), main.indexOf('/* ---------- CLINIC-AWARE CONTACTS'));
const configuredId = fs.readFileSync(path.join(root, 'index.html'), 'utf8').match(/window\.GA4_ID = '([^']+)'/)[1];

function render(key) {
  let html;
  handler({ query: { key } }, {
    setHeader() {}, status(code) { assert.equal(code, 200); return this; }, send(value) { html = value; }
  });
  return html;
}

function bootstrap(html, saved = null, storageBlocked = false) {
  const script = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
    .find(match => match[1].includes('window.dataLayer'))?.[1];
  assert.ok(script, 'The rendered blog must initialize GA4 before main.js can emit events');
  const sandbox = {
    localStorage: { getItem(key) {
      assert.equal(key, 'edc_consent_v1');
      if (storageBlocked) throw new Error('Storage unavailable');
      return saved;
    } }
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(script, sandbox);
  return sandbox;
}

const commands = sandbox => JSON.parse(JSON.stringify(sandbox.dataLayer.map(args => [...args])));

test('both blog indexes and published articles load one GA4 tag before the shared tracker', () => {
  const keys = ['index-ca', 'index-es', ...articles.filter(a => a.status === 'published').flatMap(a => [a.ca, a.es])];
  for (const key of keys) {
    const html = render(key);
    const loader = `https://www.googletagmanager.com/gtag/js?id=${configuredId}`;
    assert.equal(html.split(loader).length - 1, 1, key);
    assert.ok(html.indexOf(loader) < html.indexOf('/assets/js/main.min.js'), key);
    assert.equal(bootstrap(html).GA4_ID, configuredId, key);
  }
});

test('blog GA4 denies storage first and restores analytics only for a saved boolean opt-in', () => {
  for (const saved of [null, '{invalid', '{}', '{"analytics":false}', '{"analytics":"true"}', '{"analytics":true}']) {
    const queue = commands(bootstrap(render('index-es'), saved));
    assert.deepEqual(queue[0], ['consent', 'default', {
      analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
    }]);
    const updates = queue.filter(args => args[0] === 'consent' && args[1] === 'update');
    assert.deepEqual(updates, saved === '{"analytics":true}' ? [['consent', 'update', { analytics_storage: 'granted' }]] : []);
    assert.deepEqual(queue.at(-1), ['config', configuredId, {
      allow_google_signals: false, allow_ad_personalization_signals: false
    }]);
  }
});

test('campaign consent is independent of analytics and never enables ad personalization', () => {
  for (const saved of [
    '{"campaigns":true}',
    '{"campaigns":true,"analytics":true}',
    '{"campaigns":"true","analytics":true}',
    '{"campaigns":false,"analytics":true}'
  ]) {
    const queue = commands(bootstrap(render('index-ca'), saved));
    const updates = queue.filter(args => args[0] === 'consent' && args[1] === 'update');
    assert.equal(updates.some(args => args[2].ad_user_data === 'granted'), JSON.parse(saved).campaigns === true);
    assert.equal(updates.some(args => args[2].analytics_storage === 'granted'), JSON.parse(saved).analytics === true);
    assert.equal(queue[0][2].ad_personalization, 'denied');
    assert.equal(queue.at(-1)[2].allow_ad_personalization_signals, false);
  }
});

test('changing campaign preference updates both advertising signals and revokes them again', () => {
  const store = new Map([['edc_consent_v1', '{"analytics":true}']]);
  const calls = [];
  const document = {
    documentElement: { lang: 'ca' }, readyState: 'loading',
    addEventListener() {}, querySelectorAll() { return []; }
  };
  const window = {
    location: new URL('https://www.estudidentalcarrera.com/'),
    gtag: (...args) => calls.push(args)
  };
  const consent = main.slice(main.indexOf('(function initConsent()'), main.indexOf('/* ---------- CONVERSION EVENT TRACKING'));
  vm.runInNewContext(consent, {
    window, document, localStorage: {
      getItem: key => store.get(key) || null,
      setItem: (key, value) => store.set(key, value)
    }, setTimeout
  });
  assert.equal(window.EDCConsent.get().campaigns, false, 'old consent does not grant campaign tracking');
  window.EDCConsent.set({ umami: false, campaigns: true });
  assert.deepEqual(JSON.parse(JSON.stringify(calls.at(-1))), ['consent', 'update', {
    analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'denied'
  }]);
  window.EDCConsent.set({ campaigns: false });
  assert.deepEqual(JSON.parse(JSON.stringify(calls.at(-1))), ['consent', 'update', {
    analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
  }]);
});

test('blocked browser storage still initializes the blog tag with denied defaults', () => {
  const sandbox = bootstrap(render('index-ca'), null, true);
  assert.equal(typeof sandbox.gtag, 'function');
  assert.equal(commands(sandbox).filter(args => args[0] === 'consent').length, 1);
  assert.equal(commands(sandbox)[0][2].analytics_storage, 'denied');
});

test('a rendered article sends GA4 and Umami independently and respects changes in consent', () => {
  const sandbox = bootstrap(render('ferula-descarrega'));
  const umami = [];
  let prefs = { analytics: false, umami: true };
  Object.assign(sandbox, {
    URL, location: new URL('https://www.estudidentalcarrera.com/guies/ferula-descarrega.html'),
    document: { documentElement: { lang: 'ca' }, body: { dataset: { clinic: 'carrera' } }, addEventListener() {} },
    EDCConsent: { get: () => prefs },
    EDCUmami: { track: (name, params) => umami.push({ name, params }) }
  });
  vm.runInContext(tracking, sandbox);
  const ga4Events = () => commands(sandbox).filter(args => args[0] === 'event');
  sandbox.track('appointment_cta_click', { clinic: 'lleida', etiqueta: 'guide-contact' });
  assert.equal(umami.length, 1);
  assert.equal(ga4Events().length, 0);
  prefs = { analytics: true, umami: false };
  sandbox.track('appointment_cta_click', { clinic: 'lleida', etiqueta: 'guide-contact' });
  assert.equal(umami.length, 1);
  assert.equal(ga4Events().length, 1);
  assert.equal(ga4Events()[0][2].page_path, '/guies/ferula-descarrega.html');
  prefs = { analytics: true, umami: true };
  sandbox.EDCUmami.track = () => { throw new Error('Umami unavailable'); };
  sandbox.track('phone_click', { clinic: 'lleida' });
  assert.equal(ga4Events().length, 2);
  prefs = { analytics: false, umami: false };
  sandbox.track('phone_click', { clinic: 'lleida' });
  assert.equal(ga4Events().length, 2);
});
