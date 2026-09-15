const { test } = require('node:test');
const assert = require('node:assert/strict');
const handler = require('../api/contact-route');
function redirect(query) {
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(code) { this.code = code; return this; }, end() {}, send(html) { this.html = html; } };
  handler({ query }, res);
  return res;
}
for (const lang of ['ca', 'es']) {
  test(`canonical contact ${lang} serves its complete form and matching language metadata`, () => {
    const res = redirect({ lang });
    assert.equal(res.code, 200);
    assert.match(res.html, /data-appointment/);
    assert.ok(res.html.includes(`<html lang="${lang}"`));
    assert.ok(res.html.includes(`id="${lang === 'es' ? 'contacto' : 'contacte'}-tremp"`));
  });
  for (const [key, state] of [['seu', 'carrera'], ['seu', 'tremp'], ['canal', 'whatsapp'], ['canal', 'directe']]) {
    test(`legacy contact ${lang}/${state} keeps the selected clinic or channel without a duplicate query`, () => {
      const res = redirect({ lang, [key]: state });
      assert.equal(res.code, 308);
      assert.equal(res.headers.Location, `${lang === 'es' ? '/es/sedes.html#contacto' : '/seus.html#contacte'}-${state}`);
    });
  }
}
test('contact redirects retain attribution, reject arbitrary destinations and keep clinic and channel', () => {
  const res = redirect({ lang: 'es', seu: 'tremp', canal: 'whatsapp', utm_source: 'google', next: 'https://example.invalid', secret: 'private' });
  assert.equal(res.headers.Location, '/es/sedes.html?utm_source=google#contacto-tremp-whatsapp');
  assert.equal(redirect({ lang: 'other', seu: 'https://example.invalid' }).headers.Location, '/seus.html#contacte');
});
