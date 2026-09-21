const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { articles, categories } = require('../data/blog');
const { guides } = require('../data/guides');
const { renderBlogHome, entries } = require('../lib/blog');
const handler = require('../api/guide');
const config = require('../vercel.json');
function render(key) {
  const result = {};
  handler({ query: { key } }, { setHeader() {}, status(code) { result.status = code; return this; }, send(html) { result.html = html; } });
  return result;
}
for (const lang of ['ca', 'es']) {
  const url = lang === 'ca' ? '/blog.html' : '/es/blog.html';
  test(`${lang}: blog routes, canonical, sitemap and collection agree`, () => {
    const { html } = render('index-' + lang);
    assert.ok(html.includes(`rel="canonical" href="https://www.estudidentalcarrera.com${url}"`));
    assert.ok(config.rewrites.some(r => r.source === url && r.destination.endsWith('index-' + lang)));
    assert.ok(config.redirects.some(r => r.source === (lang === 'ca' ? '/guies.html' : '/es/guias.html') && r.destination === url && r.permanent));
    assert.ok(fs.readFileSync('sitemap.xml','utf8').includes(url + '</loc>'));
    const graph = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])['@graph'];
    assert.equal(graph[0].mainEntity.itemListElement.length, entries(lang).length);
    assert.equal((html.match(/data-blog-category=/g) || []).length, 7);
    for (const category of Object.keys(categories)) assert.ok(html.includes(`data-category="${category}"`));
    assert.equal((renderBlogHome(lang).match(/data-blog-category=/g) || []).length, 3);
    const home = renderBlogHome(lang);
    for (const guide of entries(lang)) {
      assert.equal(home.split(`href="/${guide.path}"`).length - 1, 1, `${guide.path}: one direct homepage link`);
      assert.ok(!home.includes(`href="/${guide.alternatePath}"`), 'homepage reading links stay in the selected language');
    }
  });
  test(`${lang}: every static desktop, mobile and footer navigation includes Blog`, () => {
    const folder = lang === 'ca' ? '.' : 'es';
    for (const name of fs.readdirSync(folder).filter(file => file.endsWith('.html'))) {
      const html = fs.readFileSync(`${folder}/${name}`, 'utf8');
      for (const cls of ['nav__links','mobile-menu__nav']) {
        const nav = html.match(new RegExp(`<nav class="${cls}"[\\s\\S]*?<\\/nav>`));
        if (nav) assert.ok(nav[0].includes(`href="${url}"`), name + ' ' + cls);
      }
      const footer = html.match(/<footer class="footer">[\s\S]*?<\/footer>/);
      if (footer) assert.ok(footer[0].includes(`href="${url}"`), name + ' footer');
    }
  });
}
test('drafts cannot be discovered in the index, home or served at their direct article URLs', () => {
  const article = articles.find(item => item.status === 'published');
  try {
    article.status = 'draft';
    for (const lang of ['ca', 'es']) {
      assert.equal(render(article[lang]).status, 404);
      assert.ok(!render('index-' + lang).html.includes('/' + guides[article[lang]].path));
      assert.ok(!renderBlogHome(lang).includes('/' + guides[article[lang]].path));
    }
  } finally { article.status = 'published'; }
});
test('all existing guides belong to one category and have a reciprocal translation', () => {
  assert.equal(new Set(articles.flatMap(a => [a.ca,a.es])).size, Object.keys(guides).length);
  for (const a of articles) {
    assert.ok(categories[a.category]);
    assert.equal(guides[a.ca].alternatePath, guides[a.es].path);
  }
});

test('the jaw pain article is publicly accessible and discoverable in both languages', () => {
  const previous = process.env.VERCEL_ENV;
  try {
    process.env.VERCEL_ENV = 'production';
    for (const key of ['dolor-mandibula-despertar', 'dolor-mandibula-despertar-es']) {
      const guide = guides[key];
      const response = render(key);
      assert.equal(response.status, 200);
      assert.ok(render('index-' + guide.lang).html.includes('/' + guide.path));
      assert.ok(fs.readFileSync('sitemap.xml', 'utf8').includes('<loc>https://www.estudidentalcarrera.com/' + guide.path + '</loc>'));
      assert.ok(response.html.includes('atencio-mandibula-carme.webp'));
      assert.doesNotMatch(response.html, /name="robots" content="noindex/);
    }
  } finally {
    if (previous === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = previous;
  }
});

test('unpublished review articles remain available only in preview', () => {
  const oldVercel = process.env.VERCEL_ENV;
  const oldLocal = process.env.CONTENT_PREVIEW;
  const pending = articles.find(item => item.ca === 'dolor-mandibula-despertar');
  const oldStatus = pending.status;
  pending.status = 'review';
  try {
    process.env.CONTENT_PREVIEW = '1';
    process.env.VERCEL_ENV = 'production';
    for (const lang of ['ca', 'es']) {
      assert.equal(render(pending[lang]).status, 404);
      assert.ok(!render('index-' + lang).html.includes('/' + guides[pending[lang]].path));
      assert.ok(!renderBlogHome(lang).includes('/' + guides[pending[lang]].path));
    }
    process.env.VERCEL_ENV = 'preview';
    for (const lang of ['ca', 'es']) {
      const guide = guides[pending[lang]];
      const response = { headers: {} };
      handler({ query: { key: pending[lang] } }, {
        setHeader(k,v) { response.headers[k] = v; },
        status(code) { response.status = code; return this; }, send(html) { response.html = html; },
      });
      assert.equal(response.status, 200);
      assert.equal(response.headers['X-Robots-Tag'], 'noindex, nofollow');
      assert.equal(response.headers['Cache-Control'], 'no-store');
      assert.doesNotMatch(response.html, /guide-review-note|Esborrany editorial|Borrador editorial|pendent de revisió clínica|pendiente de revisión clínica/);
      assert.equal((response.html.match(/<h1[ >]/g) || []).length, 1);
      assert.ok(response.html.includes('href="https://www.estudidentalcarrera.com/' + guide.alternatePath + '"'));
      assert.ok(render('index-' + lang).html.includes('/' + guide.path));
      assert.ok(config.rewrites.some(rule => rule.source === '/' + guide.path && rule.destination.endsWith(pending[lang])));
      const ld = JSON.parse(response.html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
      assert.ok(!ld['@graph'].some(item => item.author || item.reviewedBy || item.datePublished));
      const ids = [...response.html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
      assert.equal(new Set(ids).size, ids.length);
      for (const section of guide.sections) assert.ok(response.html.includes(`href="#${section.id}"`));
      assert.ok(guide.sources.length >= 2);
      assert.ok(fs.existsSync(guide.image));
    }
  } finally {
    pending.status = oldStatus;
    if (oldVercel === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = oldVercel;
    if (oldLocal === undefined) delete process.env.CONTENT_PREVIEW; else process.env.CONTENT_PREVIEW = oldLocal;
  }
});
