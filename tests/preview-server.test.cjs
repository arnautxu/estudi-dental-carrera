const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const http = require('node:http');
const { createPreviewServer } = require('../scripts/preview-content.cjs');

async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'carrera-preview-'));
  const put = async (name, content) => {
    const filename = path.join(root, name);
    await fs.mkdir(path.dirname(filename), { recursive: true });
    await fs.writeFile(filename, content);
  };
  await put('data/landing-pages.js', "exports.pages = { local: { path: 'lleida.html' } };");
  await put('api/landing.js', "module.exports = (req, res) => { res.setHeader('Cache-Control', 'public, max-age=999'); res.status(200).send('<h1>' + req.query.key + '</h1><link rel=canonical href=https://www.estudidentalcarrera.com/lleida.html>'); };");
  await put('api/contact.js', "throw new Error('Real contact handler must never load');");
  const server = createPreviewServer({ root });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    await new Promise(resolve => server.close(resolve));
    await fs.rm(root, { recursive: true, force: true });
  });
  const request = (url, method = 'GET') => new Promise((resolve, reject) => {
    const req = http.request({ hostname: '127.0.0.1', port: server.address().port, path: url, method }, res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks).toString() }));
    });
    req.on('error', reject);
    req.end(method === 'POST' ? '{"name":"synthetic"}' : undefined);
  });
  return { root, put, request };
}

test('dynamic routes use their mapped key and preview headers without changing canonical', async t => {
  const { request } = await fixture(t);
  const res = await request('/lleida.html?key=untrusted&v=cache');
  assert.equal(res.status, 200);
  assert.match(res.body, /<h1>local<\/h1>/);
  assert.match(res.body, /https:\/\/www.estudidentalcarrera.com\/lleida.html/);
  assert.equal(res.headers['cache-control'], 'no-store');
  assert.match(res.headers['x-robots-tag'], /noindex/);
  assert.match(res.headers['content-security-policy'], /connect-src 'self'/);
  assert.match(res.headers['content-security-policy'], /(?:^|; )frame-src https:\/\/www\.google\.com https:\/\/maps\.google\.com;/);
  assert.doesNotMatch(res.headers['content-security-policy'], /googletagmanager|google-analytics/);
});

test('guides and both indexes appear after server startup and reload without restart', async t => {
  const { put, request } = await fixture(t);
  assert.equal((await request('/guies.html')).status, 404);
  await put('data/guides.js', "exports.guides = { ca: { path: 'guies/primera-visita.html' }, es: { path: 'es/guias/primera-visita.html' } };");
  await put('api/guide.js', "module.exports = (req, res) => res.status(200).send(req.query.key);");
  for (const [url, key] of [['/guies.html', 'index-ca'], ['/es/guias.html', 'index-es'], ['/guies/primera-visita.html', 'ca'], ['/es/guias/primera-visita.html', 'es']]) {
    const res = await request(url);
    assert.equal(res.status, 200);
    assert.equal(res.body, key);
  }
  await put('api/guide.js', "module.exports = (req, res) => res.status(200).send('updated:' + req.query.key);");
  assert.equal((await request('/guies.html')).body, 'updated:index-ca');
});

test('public files, source contacts, safe encoded paths and source assets have correct MIME', async t => {
  const { put, request } = await fixture(t);
  await put('public/assets/css/main.min.css', 'body{}');
  await put('assets/fonts/local.woff2', 'font');
  await put('public/assets/img/espai clínica.svg', '<svg/>');
  await put('seus.html', '<html lang="ca">contacte</html>');
  await put('es/sedes.html', '<html lang="es">contacto</html>');
  await put('public/seus.html', 'stale contact');
  assert.equal((await request('/seus.html')).body, '<html lang="ca">contacte</html>');
  assert.match((await request('/es/sedes.html')).body, /contacto/);
  const css = await request('/assets/css/main.min.css?v=1');
  assert.equal(css.body, 'body{}');
  assert.match(css.headers['content-type'], /^text\/css/);
  assert.equal((await request('/assets/fonts/local.woff2')).headers['content-type'], 'font/woff2');
  assert.equal((await request('/assets/img/espai%20cl%C3%ADnica.svg')).headers['content-type'], 'image/svg+xml');
  const head = await request('/assets/css/main.min.css?v=1', 'HEAD');
  assert.equal(head.body, '');
  assert.equal(head.headers['content-length'], '6');
});

test('contact and stats stay local, fixtures contain no reviews or tracking IDs', async t => {
  const { request } = await fixture(t);
  const contact = await request('/api/contact', 'POST');
  assert.equal(contact.status, 409);
  assert.equal(JSON.parse(contact.body).error, 'preview_mode');
  assert.equal(JSON.parse(contact.body).ok, false);
  assert.equal((await request('/stats/api/send', 'POST')).status, 405);
  assert.deepEqual(JSON.parse((await request('/api/public-config')).body), { ga4Id: null, umamiWebsiteId: null });
  assert.deepEqual(JSON.parse((await request('/api/reviews?lang=es')).body), { reviews: [], rating: null, total: null, configured: false });
  assert.equal((await request('/robots.txt')).body, 'User-agent: *\nDisallow: /\n');
});

test('invalid, traversal and private-source paths cannot expose files; unknown routes are 404', async t => {
  const { root, put, request } = await fixture(t);
  await put('private.txt', 'private');
  await put('public/assets/placeholder.txt', 'public');
  await fs.symlink(path.join(root, 'private.txt'), path.join(root, 'public/assets/link.txt'));
  for (const url of ['/../private.txt', '/%2e%2e/private.txt', '/assets/%2e%2e/%2e%2e/private.txt', '/assets%5c..%5cprivate.txt', '/assets/%00.txt', '/assets/%zz']) {
    assert.equal((await request(url)).status, 400, url);
  }
  for (const url of ['/private.txt', '/package.json', '/api/contact.js', '/assets/link.txt', '/missing-page.html']) {
    assert.equal((await request(url)).status, 404, url);
  }
});
