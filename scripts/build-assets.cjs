const { transform } = require('esbuild');
const { readFile, writeFile, mkdir, readdir, cp, rm } = require('node:fs/promises');

async function build() {
  await rm('public', { recursive: true, force: true });
  await mkdir('public/assets/css', { recursive: true });
  await mkdir('public/assets/js', { recursive: true });
  await mkdir('public/es', { recursive: true });
  for (const folder of ['assets/img', 'assets/fonts']) await cp(folder, `public/${folder}`, { recursive: true });
  for (const folder of ['.', 'es']) {
    for (const file of (await readdir(folder)).filter(file => file.endsWith('.html'))) {
      // The contact handler serves these documents and redirects legacy query URLs.
      if ((folder === '.' && file === 'seus.html') || (folder === 'es' && file === 'sedes.html')) continue;
      await cp(`${folder}/${file}`, `public/${folder}/${file}`);
    }
  }
  for (const file of ['robots.txt', 'sitemap.xml', 'llms.txt']) await cp(file, `public/${file}`);
  for (const file of ['css/main.css', 'css/landing.css', 'css/lleida.css', 'css/guides.css', 'css/appointment.css', 'js/main.js', 'js/appointment.js']) {
    const source = await readFile(`assets/${file}`, 'utf8');
    const loader = file.endsWith('.css') ? 'css' : 'js';
    const result = await transform(source, { loader, minify: true, legalComments: 'none', target: 'es2020' });
    const output = `public/assets/${file.replace(/\.(css|js)$/, '.min.$1')}`;
    await writeFile(output, result.code);
    console.log(`${file}: ${Buffer.byteLength(source)} → ${Buffer.byteLength(result.code)} bytes`);
  }
}

build().catch(error => { console.error(error); process.exitCode = 1; });
