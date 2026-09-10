// Genera un PDF por unidad y un PDF por boletín, imprimiendo cada página
// del sitio ya construido (requiere `npm run build` antes de ejecutarlo).
import { spawn } from 'node:child_process';
import { readdirSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const ROOT = path.resolve(import.meta.dirname, '..');
const DOCS_DIR = path.join(ROOT, 'src/content/docs');
const BOLETINES_DIR = path.join(DOCS_DIR, 'boletines');
const PORT = 4322;
const BASE_URL = `http://localhost:${PORT}`;
const headerTemplate = readFileSync(path.join(ROOT, 'scripts/pdf-header.html'), 'utf8');
const footerTemplate = readFileSync(path.join(ROOT, 'scripts/pdf-footer.html'), 'utf8');

function slugsIn(dir) {
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .map((f) => f.replace(/\.md$/, ''));
}

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryFetch = () => {
      fetch(url)
        .then(() => resolve())
        .catch(() => {
          if (Date.now() - start > timeoutMs) reject(new Error('Timeout esperando al servidor de preview'));
          else setTimeout(tryFetch, 500);
        });
    };
    tryFetch();
  });
}

async function printPage(browser, url, outFile) {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  mkdirSync(path.dirname(outFile), { recursive: true });
  await page.pdf({
    path: outFile,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate,
    footerTemplate,
    margin: { top: '1.4cm', bottom: '1.4cm', left: '1cm', right: '1cm' },
  });
  await page.close();
  console.log('PDF generado:', path.relative(ROOT, outFile));
}

async function main() {
  if (!existsSync(path.join(ROOT, 'dist'))) {
    console.error('No existe dist/. Ejecuta `npm run build` antes de `npm run pdf`.');
    process.exit(1);
  }

  const unidades = slugsIn(DOCS_DIR);
  const boletines = existsSync(BOLETINES_DIR) ? slugsIn(BOLETINES_DIR) : [];

  const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
    cwd: ROOT,
    shell: true,
    stdio: 'inherit',
  });

  try {
    await waitForServer(BASE_URL);
    const browser = await puppeteer.launch();

    for (const slug of unidades) {
      await printPage(browser, `${BASE_URL}/${slug}/`, path.join(ROOT, 'public/pdf/unidades', `${slug}.pdf`));
    }
    for (const slug of boletines) {
      await printPage(browser, `${BASE_URL}/boletines/${slug}/`, path.join(ROOT, 'public/pdf/boletines', `${slug}.pdf`));
    }

    await browser.close();
  } finally {
    server.kill();
  }
}

main();
