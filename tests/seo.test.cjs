const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pages } = require('../data/landing-pages');
const { guides } = require('../data/guides');
const landing = require('../api/landing');
const origin = 'https://www.estudidentalcarrera.com';
const sitemap = fs.readFileSync(path.join(__dirname, '../sitemap.xml'), 'utf8');

for (const [key, page] of Object.entries(pages)) {
  test(`${key}: canonical, language pair, schema and internal links remain valid`, () => {
    let html;
    landing({ query: { key } }, { setHeader() {}, status(code) { assert.equal(code, 200); return this; }, send(value) { html = value; } });
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    assert.ok(html.includes(`<link rel="canonical" href="${origin}/${page.path}"`));
    assert.ok(sitemap.includes(`${origin}/${page.path}</loc>`));
    const alternate = Object.values(pages).find(p => p.path === page.alternatePath);
    assert.equal(alternate.alternatePath, page.path);
    assert.notEqual(alternate.lang, page.lang);
    assert.ok(!/<meta[^>]+noindex/i.test(html));
    const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.ok(graph['@graph'].some(item => item['@type'] === 'WebPage' && item.url === `${origin}/${page.path}`));
    for (const link of page.related) {
      const [target, anchor] = link.href.slice(1).split('#');
      const generated = [...Object.values(pages), ...Object.values(guides)].some(p => p.path === target)
        || ['guies.html', 'es/guias.html'].includes(target);
      const localFile = path.join(__dirname, '..', target);
      assert.ok(generated || fs.existsSync(localFile), link.href);
      if (anchor) assert.ok(fs.readFileSync(localFile, 'utf8').includes(`id="${anchor}"`), link.href);
    }
    for (const asset of html.matchAll(/(?:src|href)="\/(assets\/[^"?]+\.min\.(?:js|css))/g)) {
      assert.ok(fs.existsSync(path.join(__dirname, '../public', asset[1])), `Run npm run build: ${asset[1]}`);
    }
    const expectedClinic = page.location?.id === 'tremp' ? 'tremp' : page.type === 'location' ? 'carrera' : null;
    if (expectedClinic) assert.ok(html.includes(`#${page.lang === 'es' ? 'contacto' : 'contacte'}-${expectedClinic}`));
  });
}

test('only the public Vercel alias redirects, leaving preview hosts available', () => {
  const config = require('../vercel.json');
  const rule = config.redirects.find(r => r.has?.some(h => h.value === 'estudi-dental-carrera.vercel.app'));
  assert.equal(rule.destination, `${origin}/:path*`);
  assert.equal(rule.permanent, true);
  assert.equal(rule.has.length, 1);
  assert.equal(config.redirects.some(r => r.has?.some(h => h.value.includes('.*'))), false);
});
