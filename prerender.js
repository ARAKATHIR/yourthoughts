// prerender.js
// Runs after `vite build`. Serves the built dist/ folder locally, opens it
// in a headless browser, waits for React to render, then overwrites
// dist/index.html with the fully-rendered HTML (content baked in).

import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import handler from 'serve-handler';
import puppeteer from 'puppeteer';

const DIST_DIR = path.resolve('dist');
const PORT = 4173;
const URL = `http://localhost:${PORT}/`;

async function main() {
  if (!existsSync(DIST_DIR)) {
    console.error('dist/ not found. Run "vite build" first.');
    process.exit(1);
  }

  const server = http.createServer((req, res) =>
    handler(req, res, { public: DIST_DIR })
  );
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Serving dist/ at ${URL}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });

  await page.waitForSelector('footer', { timeout: 15000 }).catch(() => {
    console.warn('Warning: <footer> not found in time; continuing anyway.');
  });

  const html = await page.content();

  await browser.close();
  await new Promise((resolve) => server.close(resolve));

  const outPath = path.join(DIST_DIR, 'index.html');
  await writeFile(outPath, html, 'utf-8');
  console.log(`Prerendered HTML written to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});