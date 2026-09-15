const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { guides } = require('../data/guides');
const { pages } = require('../data/landing-pages');
const guideHandler = require('../api/guide');
const landingHandler = require('../api/landing');
const config = require('../vercel.json');
const ORIGIN = 'https://www.estudidentalcarrera.com';
const root = path.resolve(__dirname, '..');

function render(handler, key) {
  let html, status;
  handler({ query: { key } }, {
    setHeader() {}, status(code) { status = code; return this; }, send(body) { html = body; },
  });
  return { html, status };
}

function resolveLocal(href, fromPath) {
  const url = new URL(href, ORIGIN + '/' + fromPath);
  if (url.origin !== ORIGIN) return null;
  const pathname = decodeURIComponent(url.pathname).replace(/^\//, '');
  const guide = Object.entries(guides).find(([, page]) => page.path === pathname);
  const service = Object.entries(pages).find(([, page]) => page.path === pathname);
  if (guide) return { html: render(guideHandler, guide[0]).html, anchor: url.hash.slice(1) };
  if (service) return { html: render(landingHandler, service[0]).html, anchor: url.hash.slice(1) };
  if (['guies.html', 'es/guias.html'].includes(pathname)) return { html: render(guideHandler, pathname === 'guies.html' ? 'index-ca' : 'index-es').html, anchor: url.hash.slice(1) };
  const filename = path.join(root, pathname === '' ? 'index.html' : pathname.endsWith('/') ? pathname + 'index.html' : pathname);
  assert.ok(fs.existsSync(filename), 'Missing destination: ' + href);
  return { html: fs.readFileSync(filename, 'utf8'), anchor: url.hash.slice(1) };
}

for (const [key, guide] of Object.entries(guides)) {
  test(key + ': guide is discoverable, bilingual and connected to a treatment', () => {
    const { html, status } = render(guideHandler, key);
    assert.equal(status, 200);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    assert.ok(html.includes('<html lang="' + guide.lang + '">'));
    assert.ok(html.includes('rel="canonical" href="' + ORIGIN + '/' + guide.path + '"'));
    const counterpart = Object.values(guides).find(page => page.path === guide.alternatePath);
    assert.equal(counterpart?.alternatePath, guide.path);
    assert.notEqual(counterpart?.lang, guide.lang);
    assert.ok(config.rewrites.some(rule => rule.source === '/' + guide.path && rule.destination === '/api/guide?key=' + key));
    assert.ok(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8').includes(ORIGIN + '/' + guide.path + '</loc>'));
    assert.ok(guide.sources.length > 0);
    assert.ok(fs.existsSync(path.join(root, guide.image)));
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, 'Duplicate section IDs');
    const ld = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.ok(ld['@graph'].some(entity => entity['@type'] === 'WebPage' && entity.url === ORIGIN + '/' + guide.path));
    assert.ok(!ld['@graph'].some(entity => entity.reviewedBy || entity.aggregateRating));
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1].replaceAll('&amp;', '&');
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      if (/^\/assets\//.test(href)) continue;
      const target = resolveLocal(href, guide.path);
      if (target?.anchor) assert.ok(target.html.includes('id="' + target.anchor + '"'), 'Missing anchor: ' + href);
    }
    const service = resolveLocal(guide.relatedService.href, guide.path);
    assert.ok(service.html.includes('/' + guide.path), 'The service must link back to its guide');
  });
}

for (const lang of ['ca', 'es']) {
  test(lang + ': the guide index exposes every guide in its language', () => {
    const { html, status } = render(guideHandler, 'index-' + lang);
    assert.equal(status, 200);
    for (const guide of Object.values(guides).filter(page => page.lang === lang)) {
      assert.ok(html.includes('href="/' + guide.path + '"'));
    }
  });
}

test('unknown guide keys do not render content or object prototype values', () => {
  for (const key of ['missing', '__proto__', 'toString']) assert.equal(render(guideHandler, key).status, 404);
});
