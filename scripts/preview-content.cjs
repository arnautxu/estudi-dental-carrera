const http = require('node:http');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.gif': 'image/gif', '.ico': 'image/x-icon', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
};

// Preview-only policy: maps retain the site's existing consent gate. Ad tags,
// external API submissions and live reviews remain blocked.
const CSP = "default-src 'self'; base-uri 'self'; object-src 'none'; frame-src https://www.google.com https://maps.google.com; frame-ancestors 'self'; form-action 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self'";

function requestPath(url) {
  // Check before URL normalization, which otherwise removes traversal segments.
  const raw = String(url || '/').split(/[?#]/, 1)[0];
  const decoded = decodeURIComponent(raw);
  if (!decoded.startsWith('/') || decoded.startsWith('//') || /[\\\0]/.test(decoded)
      || decoded.split('/').some(part => part.startsWith('.'))) {
    throw new Error('Invalid path');
  }
  return decoded;
}

function reload(root, relative, optional = false) {
  const filename = path.join(root, relative);
  if (optional && !fs.existsSync(filename)) return null;
  delete require.cache[require.resolve(filename)];
  return require(filename);
}

async function staticFile(base, relative) {
  try {
    const baseReal = await fsp.realpath(base);
    const filename = await fsp.realpath(path.join(base, relative));
    // Do not follow a public/assets symlink outside its allowed directory.
    if (!filename.startsWith(baseReal + path.sep)) return null;
    if (!(await fsp.stat(filename)).isFile()) return null;
    return { body: await fsp.readFile(filename), type: MIME[path.extname(filename).toLowerCase()] || 'application/octet-stream' };
  } catch (error) {
    if (['ENOENT', 'ENOTDIR', 'EACCES'].includes(error.code)) return null;
    throw error;
  }
}

function createPreviewServer({ root = ROOT } = {}) {
  root = path.resolve(root);
  return http.createServer(async (req, res) => {
    const send = (status, body = '', type = MIME['.txt'], headers = {}) => {
      // Apply these last so production renderer cache headers cannot override them.
      const normalized = Object.fromEntries(Object.entries(headers).map(([key, value]) => [key.toLowerCase(), value]));
      const buffer = Buffer.isBuffer(body) ? body : Buffer.from(String(body));
      res.writeHead(status, {
        ...normalized, 'content-type': type, 'content-length': buffer.length,
        'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow, noarchive',
        'x-content-type-options': 'nosniff', 'content-security-policy': CSP,
        'referrer-policy': 'no-referrer',
      });
      res.end(req.method === 'HEAD' ? undefined : buffer);
    };
    const json = (status, value, headers) => send(status, JSON.stringify(value), MIME['.json'], headers);
    try {
      let pathname;
      try { pathname = requestPath(req.url); }
      catch (_) { return json(400, { ok: false, error: 'invalid_path' }); }

      // Never invoke api/contact.js, even when local environment credentials exist.
      if (pathname === '/api/contact') {
        return json(409, { ok: false, error: 'preview_mode', message: 'Mode de previsualització: la sol·licitud no s’ha enviat.' });
      }
      if (!['GET', 'HEAD'].includes(req.method)) {
        return json(405, { ok: false, error: 'method_not_allowed' }, { Allow: 'GET, HEAD' });
      }
      if (pathname === '/robots.txt') return send(200, 'User-agent: *\nDisallow: /\n');
      if (pathname === '/api/public-config') return json(200, { ga4Id: null, umamiWebsiteId: null });
      if (pathname === '/api/reviews') return json(200, { reviews: [], rating: null, total: null, configured: false });
      if (pathname.startsWith('/stats/')) return json(409, { ok: false, error: 'preview_mode' });
      if (pathname.startsWith('/api/')) return send(404, 'Not found');

      const shell = path.join(root, 'lib/site-shell.js');
      if (fs.existsSync(shell)) delete require.cache[require.resolve(shell)];
      const enrichment = path.join(root, 'data/service-enrichment.js');
      if (fs.existsSync(enrichment)) delete require.cache[require.resolve(enrichment)];
      const { pages } = reload(root, 'data/landing-pages.js');
      for (const module of ['guides-implants.js', 'guides-ortho.js', 'guides-stains.js']) {
        const filename = path.join(root, 'data', module);
        if (fs.existsSync(filename)) delete require.cache[require.resolve(filename)];
      }
      const guideData = reload(root, 'data/guides.js', true);
      const landingEntry = Object.entries(pages).find(([, page]) => '/' + page.path.replace(/^\//, '') === pathname);
      const guideEntry = Object.entries(guideData?.guides || {}).find(([, guide]) => '/' + guide.path.replace(/^\//, '') === pathname);
      const guideIndex = { '/guies.html': 'index-ca', '/es/guias.html': 'index-es' }[pathname];
      const key = landingEntry?.[0] || guideEntry?.[0] || guideIndex;
      if (key) {
        const handler = reload(root, landingEntry ? 'api/landing.js' : 'api/guide.js', true);
        if (!handler) return send(404, 'Preview page is not ready yet');
        const output = { code: 200, headers: {}, body: '' };
        const adapter = {
          setHeader(name, value) { output.headers[name.toLowerCase()] = value; },
          status(code) { output.code = code; return this; },
          send(body) { output.body = body; return this; },
          json(body) { output.headers['content-type'] = MIME['.json']; return this.send(JSON.stringify(body)); },
          end(body = '') { return this.send(body); },
        };
        const query = Object.fromEntries(new URL(req.url, 'http://localhost').searchParams);
        await handler({ method: req.method, url: req.url, headers: req.headers, query: { ...query, key } }, adapter);
        return send(output.code, output.body, output.headers['content-type'] || MIME['.html'], output.headers);
      }

      let relative = pathname.slice(1);
      if (pathname === '/') relative = 'index.html';
      if (pathname === '/es' || pathname === '/es/') relative = 'es/index.html';
      const contact = ['seus.html', 'es/sedes.html'].includes(relative);
      let file = contact ? await staticFile(root, relative) : await staticFile(path.join(root, 'public'), relative);
      // A build is preferred; these limited fallbacks keep source assets and
      // contact documents usable while another agent rebuilds public/.
      if (!file && relative.startsWith('assets/')) file = await staticFile(path.join(root, 'assets'), relative.slice(7));
      if (!file && /^(?:es\/)?[^/]+\.html$/.test(relative)) file = await staticFile(root, relative);
      if (!file && ['sitemap.xml', 'llms.txt'].includes(relative)) file = await staticFile(root, relative);
      return file ? send(200, file.body, file.type) : send(404, 'Not found');
    } catch (error) {
      console.error('Preview request failed:', error.message);
      if (!res.headersSent) json(500, { ok: false, error: 'preview_render_failed' });
      else res.destroy();
    }
  });
}

if (require.main === module) {
  const port = Number(process.env.PREVIEW_PORT || 4176);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error('PREVIEW_PORT must be an integer between 1 and 65535.');
    process.exitCode = 1;
  } else {
    const server = createPreviewServer();
    server.on('error', error => { console.error(`Preview server: ${error.message}`); process.exitCode = 1; });
    server.listen(port, '127.0.0.1', () => console.log(`Content preview: http://127.0.0.1:${port} (contact sending disabled)`));
  }
}

module.exports = { createPreviewServer };
