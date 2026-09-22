const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { isPublished } = require('../data/blog');
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
  if (['blog.html', 'es/blog.html'].includes(pathname)) return { html: render(guideHandler, pathname === 'blog.html' ? 'index-ca' : 'index-es').html, anchor: url.hash.slice(1) };
  const filename = path.join(root, pathname === '' ? 'index.html' : pathname.endsWith('/') ? pathname + 'index.html' : pathname);
  assert.ok(fs.existsSync(filename), 'Missing destination: ' + href);
  return { html: fs.readFileSync(filename, 'utf8'), anchor: url.hash.slice(1) };
}

for (const [key, guide] of Object.entries(guides).filter(([key]) => isPublished(key))) {
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
    for (const guide of Object.values(guides).filter(page => page.lang === lang && isPublished(page.key))) {
      assert.ok(html.includes('href="/' + guide.path + '"'));
    }
  });
}

test('unknown guide keys do not render content or object prototype values', () => {
  for (const key of ['missing', '__proto__', 'toString']) assert.equal(render(guideHandler, key).status, 404);
});

function renderPhotographyFixture(lang, photography, sectionPhotography) {
  const [key, original] = Object.entries(guides).find(([key, guide]) => guide.lang === lang && isPublished(key));
  guides[key] = {
    ...original,
    photography,
    sections: original.sections.map((section, index) => ({
      ...section,
      photography: index === 0 ? sectionPhotography : undefined,
    })),
  };
  try {
    return render(guideHandler, key).html;
  } finally {
    guides[key] = original;
  }
}

for (const lang of ['ca', 'es']) {
  test(lang + ': article photographs keep their captions, responsive sources and editorial placement', () => {
    const opening = {
      src: '/assets/img/blog/consulta.webp', width: 1440, height: 960,
      srcset: '/assets/img/blog/consulta-720.webp 720w, /assets/img/blog/consulta.webp 1440w',
      alt: lang === 'ca' ? 'Valoració a la consulta' : 'Valoración en la consulta',
      caption: lang === 'ca' ? 'Expliquem les opcions a la consulta.' : 'Explicamos las opciones en la consulta.',
    };
    const detail = {
      src: '/assets/img/blog/detall.webp', width: 1200, height: 1500,
      alt: lang === 'ca' ? 'Detall de la valoració' : 'Detalle de la valoración',
      caption: lang === 'ca' ? 'Cada cas requereix una valoració.' : 'Cada caso requiere una valoración.',
    };
    const html = renderPhotographyFixture(lang, opening, detail);
    const figures = [...html.matchAll(/<figure class="guide-figure">([\s\S]*?)<\/figure>/g)];
    assert.equal(figures.length, 2);
    for (const [index, photo] of [opening, detail].entries()) {
      assert.ok(figures[index][1].includes(`src="${photo.src}" width="${photo.width}" height="${photo.height}" alt="${photo.alt}"`));
      assert.ok(figures[index][1].includes(`<figcaption>${photo.caption}</figcaption>`));
      assert.ok(figures[index][1].includes('sizes="(max-width: 900px) calc(100vw - 40px), 760px" loading="lazy" decoding="async"'));
    }
    assert.ok(figures[0][1].includes(`srcset="${opening.srcset}"`));
    assert.ok(!figures[1][1].includes('srcset='));
    assert.ok(html.indexOf('class="guide-lead"') < figures[0].index);
    assert.ok(figures[0].index < html.indexOf('class="guide-summary"'));
    const firstSection = html.match(/<section id="[^"]+" class="guide-section">([\s\S]*?)<\/section>/)[1];
    assert.ok(firstSection.includes(figures[1][0]));
    assert.ok(firstSection.lastIndexOf('</p>') < firstSection.indexOf('<figure'));
    assert.ok(firstSection.lastIndexOf('</ul>') < firstSection.indexOf('<figure'));
  });
}

test('article photography escapes all source attributes and renders captions as text', () => {
  const html = renderPhotographyFixture('ca', {
    src: '/photo.webp?label="consulta"&clinic=Carrera', width: 1440, height: 960,
    srcset: '/photo.webp?label="consulta"&size=720 720w',
    alt: 'Valoració d\'ATM <consulta> & "opcions"',
    caption: '<script>alert("caption")</script> & l\'ATM',
  });
  const figure = html.match(/<figure class="guide-figure">([\s\S]*?)<\/figure>/)[1];
  assert.ok(figure.includes('src="/photo.webp?label=&quot;consulta&quot;&amp;clinic=Carrera"'));
  assert.ok(figure.includes('srcset="/photo.webp?label=&quot;consulta&quot;&amp;size=720 720w"'));
  assert.ok(figure.includes('alt="Valoració d&#39;ATM &lt;consulta&gt; &amp; &quot;opcions&quot;"'));
  assert.ok(figure.includes('<figcaption>&lt;script&gt;alert(&quot;caption&quot;)&lt;/script&gt; &amp; l&#39;ATM</figcaption>'));
  assert.ok(!figure.includes('<script>'));
});

test('articles without selected photography do not add generic figures', () => {
  const html = renderPhotographyFixture('ca');
  assert.ok(!html.includes('class="guide-figure"'));
});
