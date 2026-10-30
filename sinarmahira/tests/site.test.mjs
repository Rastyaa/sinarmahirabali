import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { routes, company, products, projects, faqs, aliases } from '../src/data.js';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const pages = routes.flatMap(route => ['id', 'en'].map(lang => ({ route, lang, url: `${lang === 'en' ? '/en' : ''}${route}` })));
const htmlFor = page => readFile(path.join(dist, page.url, 'index.html'), 'utf8');

test('All 30 pages have crawlable content, a unique title, one H1, and a self-referencing canonical', async () => {
  const titles = new Set();
  for (const page of pages) {
    const html = await htmlFor(page);
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    assert.ok(title, page.url);
    assert.ok(!titles.has(title), `Duplicate title: ${title}`); titles.add(title);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, page.url);
    assert.ok(html.includes(`<html lang="${page.lang}">`), page.url);
    assert.ok(html.includes(`<link rel="canonical" href="${company.domain}${page.url}">`), page.url);
    assert.match(html, /<meta name="description" content=".{40,}"/);
    assert.ok(html.includes('<main id="main"'), page.url);
    assert.ok(html.includes('<meta name="robots" content="index, follow'), page.url);
    assert.ok(html.includes('hreflang="id"') && html.includes('hreflang="en"') && html.includes('hreflang="x-default"'));
  }
});

test('Internal links, image sources, CSS fonts, and module entry points exist in production output', async () => {
  const seen = new Set();
  for (const page of pages) {
    const html = await htmlFor(page);
    for (const match of html.matchAll(/(?:href|src)="(\/[^"\s]*)"/g)) {
      const url = new URL(match[1], 'http://localhost');
      let target = url.pathname;
      if (seen.has(target)) continue; seen.add(target);
      if (target.endsWith('/')) target += 'index.html';
      await assert.doesNotReject(access(path.join(dist, target)), `Broken local asset or link: ${target}`);
    }
  }
  const manifest = JSON.parse(await readFile(path.join(dist, '.vite/manifest.json'), 'utf8'));
  assert.ok(manifest['index.html'].file.endsWith('.js'), 'React client bundle must exist');
  const css = await readFile(path.join(dist, manifest['index.html'].css[0]), 'utf8');
  for (const m of css.matchAll(/url\(["']?(\/assets\/[^"')]+)["']?\)/g)) await assert.doesNotReject(access(path.join(dist, m[1])));
});

test('JSON-LD is valid, includes no fabricated phone or reviews, and matches visible FAQs', async () => {
  for (const page of pages) {
    const html = await htmlFor(page);
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema['@context'], 'https://schema.org');
    const organization = schema['@graph'].find(s => s['@type'] === 'Organization');
    assert.equal(organization.name, company.name);
    assert.equal(organization.address.addressLocality, 'Denpasar');
    if (!company.phone) assert.ok(!('telephone' in organization));
    assert.ok(!html.includes('aggregateRating'));
    if (page.route === '/faq/') {
      const faq = schema['@graph'].find(s => s['@type'] === 'FAQPage');
      assert.equal(faq.mainEntity.length, faqs.length);
      for (const q of faq.mainEntity) assert.ok(html.includes(q.name.replaceAll('&', '&amp;')), 'Schema question must be visible');
    }
  }
});

test('Sitemap includes both languages with valid alternates and robots advertises it', async () => {
  const xml = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.equal(locs.length, pages.length);
  assert.equal(new Set(locs).size, pages.length);
  for (const p of pages) assert.ok(locs.includes(company.domain + p.url));
  assert.equal((xml.match(/hreflang="en"/g) || []).length, pages.length);
  const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8');
  assert.ok(robots.includes(`Sitemap: ${company.domain}/sitemap.xml`));
  assert.ok(!robots.includes('Disallow: /'));
});

test('Product details are pre-rendered, gallery retains all six source project photos, and 404 is not indexed', async () => {
  for (const p of products) {
    const html = await readFile(path.join(dist, 'produk', p.slug, 'index.html'), 'utf8');
    assert.match(html, /"@type":"Service"/);
    assert.ok(html.includes(`?produk=${p.slug}`));
  }
  const gallery = await readFile(path.join(dist, 'proyek/index.html'), 'utf8');
  for (const p of projects) assert.ok(gallery.includes(`/assets/${p.image}`));
  const notFound = await readFile(path.join(dist, '404.html'), 'utf8');
  assert.ok(notFound.includes('noindex, follow'));
  const redirects = await readFile(path.join(dist, '_redirects'), 'utf8');
  for (const [from, to] of Object.entries(aliases)) assert.ok(redirects.includes(`${from} ${to} 301`));
});

test('Original brand and legacy numbers are absent; unset contact does not create misleading WhatsApp links', async () => {
  for (const page of pages) {
    const html = await htmlFor(page);
    assert.ok(!/sinar\s*mahira|biosmb|6288987288952|Astasura/i.test(html), page.url);
    if (!company.phone) assert.ok(!/https:\/\/wa\.me\//.test(html), 'No consultation links to an unconfirmed company number');
  }
});

test('Vercel uses the prerender build and preserves all Indonesian and English alias redirects', async () => {
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
  assert.equal(config.framework, 'vite');
  assert.equal(config.buildCommand, 'npm run build');
  assert.equal(config.installCommand, 'npm ci');
  assert.equal(config.outputDirectory, 'dist');
  assert.equal(config.trailingSlash, true);
  assert.ok(!config.rewrites, 'Each prerendered route must retain its own HTML');
  for (const [from, to] of Object.entries(aliases)) {
    for (const prefix of ['', '/en']) {
      assert.ok(config.redirects.some(r => r.source === prefix + from && r.destination === prefix + to && r.permanent === true), `Missing Vercel alias: ${prefix}${from}`);
    }
  }
});

test('Production HTTP server serves React pages, aliases, language URLs, assets and proper error statuses', { timeout: 15000 }, async t => {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const server = spawn(process.execPath, ['scripts/serve.mjs', '--port', '0'], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
  t.after(() => server.kill('SIGTERM'));
  const base = await new Promise((resolve, reject) => {
    let output = '';
    server.stdout.on('data', chunk => { output += chunk; const match = output.match(/Local: http:\/\/localhost:(\d+)/); if (match) resolve(`http://127.0.0.1:${match[1]}`); });
    server.once('error', reject);
    server.once('exit', code => { if (code) reject(new Error(`Preview server exited with ${code}`)); });
  });
  for (const page of pages) {
    const response = await fetch(base + page.url);
    assert.equal(response.status, 200, page.url);
    const html = await response.text();
    assert.ok(html.includes('id="root"'), `Missing React hydration root: ${page.url}`);
    assert.ok(html.includes(`lang="${page.lang}"`), page.url);
  }
  for (const [from, to] of [['/services/stp/?q=1', '/produk/stp/?q=1'], ['/en/contact/', '/en/kontak/'], ['/produk/ipal', '/produk/ipal/']]) {
    const response = await fetch(base + from, { redirect: 'manual' });
    assert.equal(response.status, 301); assert.equal(response.headers.get('location'), to);
  }
  const missing = await fetch(base + '/halaman-tidak-ada/');
  assert.equal(missing.status, 404); assert.ok((await missing.text()).includes('noindex, follow'));
  const missingAsset = await fetch(base + '/assets/no-such-photo.webp');
  assert.equal(missingAsset.status, 404); assert.match(missingAsset.headers.get('content-type'), /text\/plain/);
  const post = await fetch(base + '/', { method: 'POST' }); assert.equal(post.status, 405);
  const head = await fetch(base + '/en/produk/ipal/', { method: 'HEAD' }); assert.equal(head.status, 200); assert.equal(await head.text(), '');
  const manifest = JSON.parse(await readFile(path.join(dist, '.vite/manifest.json'), 'utf8'));
  const bundle = await fetch(base + '/' + manifest['index.html'].file); assert.equal(bundle.status, 200); assert.match(bundle.headers.get('content-type'), /javascript/);
  const exited = once(server, 'exit'); server.kill('SIGTERM'); await exited;
});
