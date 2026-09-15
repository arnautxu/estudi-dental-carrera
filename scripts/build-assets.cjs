const { transform } = require('esbuild');
const { readFile, writeFile } = require('node:fs/promises');

async function build() {
  for (const file of ['css/main.css', 'css/landing.css', 'css/appointment.css', 'js/main.js', 'js/appointment.js']) {
    const source = await readFile(`assets/${file}`, 'utf8');
    const loader = file.endsWith('.css') ? 'css' : 'js';
    const result = await transform(source, { loader, minify: true, legalComments: 'none', target: 'es2020' });
    const output = `assets/${file.replace(/\.(css|js)$/, '.min.$1')}`;
    await writeFile(output, result.code);
    console.log(`${file}: ${Buffer.byteLength(source)} → ${Buffer.byteLength(result.code)} bytes`);
  }
}

build().catch(error => { console.error(error); process.exitCode = 1; });
