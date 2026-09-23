const { test } = require('node:test');
const assert = require('node:assert/strict');
const { guides } = require('../data/guides');
const { articles } = require('../data/blog');
const { photos, photograph, enrichGuides } = require('../data/guide-photography');
const sourceManifest = require('../docs/photography-2026-09-23/sources.json');

test('the excluded smiling patient photos have no editorial derivative', () => {
  const forbiddenHash = '17fd787de17b15de8ad79b93ca7e89829d7103f5b25de64b878ce0043925690b';
  assert.ok(sourceManifest.excluded_sources.some(source => source.source_sha256 === forbiddenHash));
  const excluded = new Set(sourceManifest.excluded_sources.map(source => source.source_sha256));
  for (const photo of sourceManifest.photos) {
    assert.ok(!excluded.has(photo.source_sha256), `Excluded photo used by ${photo.asset_id}`);
  }
});

test('each of the 35 article topics uses distinct visible photographs across cover and section', () => {
  assert.equal(articles.length, 35);
  const usedPaths = new Map();

  for (const article of articles) {
    const ca = guides[article.ca];
    const es = guides[article.es];
    assert.ok(ca && es, `Missing bilingual article pair: ${article.ca}`);
    assert.equal(ca.lang, 'ca');
    assert.equal(es.lang, 'es');

    const visiblePaths = guide => [
      guide.photography?.src,
      ...guide.sections.filter(section => section.photography).map(section => section.photography.src),
    ];
    const caPaths = visiblePaths(ca);
    assert.ok(caPaths.every(path => typeof path === 'string' && path.length > 0),
      `Missing visible photograph path: ${article.ca}`);
    assert.deepEqual(visiblePaths(es), caPaths, `Bilingual photographs differ: ${article.ca}`);

    for (const [index, path] of caPaths.entries()) {
      const use = `${article.ca} (${index === 0 ? 'cover' : 'section figure'})`;
      assert.ok(!usedPaths.has(path), `Photograph ${path} is reused by ${use} and ${usedPaths.get(path)}`);
      usedPaths.set(path, use);
    }
  }
});

test('all bilingual guide pairs share curated photos and localized descriptions', () => {
  const catalan = Object.values(guides).filter(guide => guide.lang === 'ca');
  assert.ok(catalan.length > 0);
  for (const ca of catalan) {
    const es = Object.values(guides).find(guide => guide.path === ca.alternatePath);
    assert.ok(ca.photography, `Missing photograph: ${ca.key}`);
    assert.equal(ca.photography.src, es.photography.src);
    assert.notEqual(ca.photography.alt, es.photography.alt);
    assert.notEqual(ca.photography.caption, es.photography.caption);
    for (const guide of [ca, es]) {
      assert.equal(guide.image, guide.photography.src.slice(1));
      assert.equal(guide.imageAlt, guide.photography.alt);
      assert.equal(guide.imageWidth, guide.photography.width);
      assert.equal(guide.imageHeight, guide.photography.height);
      assert.ok(guide.sections.filter(section => section.photography).length <= 1);
    }
    assert.deepEqual(ca.sections.filter(section => section.photography).map(section => section.photography.src),
      es.sections.filter(section => section.photography).map(section => section.photography.src));
  }
});

test('photograph metadata supplies responsive files and preserves the selected aspect ratios', () => {
  for (const [id, metadata] of Object.entries(photos)) {
    for (const lang of ['ca', 'es']) {
      const photo = photograph(id, lang);
      assert.equal(photo.width, 1440);
      assert.ok([960, 1080].includes(photo.height));
      assert.equal(photo.src, `/assets/img/editorial/${id}.webp`);
      assert.equal(photo.srcset, `/assets/img/editorial/${id}-640.webp 640w, /assets/img/editorial/${id}-960.webp 960w, /assets/img/editorial/${id}.webp 1440w`);
      assert.equal(photo.alt, metadata[lang].alt);
      assert.ok(photo.caption.includes(id.endsWith('tremp') ? 'Tremp' : 'Lleida'));
    }
  }
});

test('invalid photograph selections and missing guide sections fail loudly', () => {
  for (const id of ['missing', '__proto__']) assert.throws(() => photograph(id, 'ca'), /Unknown editorial photograph/);
  assert.throws(() => photograph('recepcio-tremp', 'en'), /Unsupported photograph language/);
  assert.throws(() => enrichGuides({}), /Missing Catalan guide/);
  const missingCounterpart = structuredClone(guides);
  delete missingCounterpart['endodoncia-dudas'];
  assert.throws(() => enrichGuides(missingCounterpart), /Missing Spanish counterpart/);
  const missingSection = structuredClone(guides);
  missingSection['endodoncia-dubtes'].sections = [];
  assert.throws(() => enrichGuides(missingSection), /Missing photography section despres/);
});
