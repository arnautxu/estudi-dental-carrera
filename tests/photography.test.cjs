const { test } = require('node:test');
const assert = require('node:assert/strict');
const { guides } = require('../data/guides');
const { photos, photograph, enrichGuides } = require('../data/guide-photography');

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
