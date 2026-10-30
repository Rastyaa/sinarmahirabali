import { mkdir, writeFile, rm, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { routes, aliases, company } from '../src/data.js';
import { documentHTML, sitemapXML } from './document.mjs';
import { build } from 'vite';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
// This directory is generated output owned exclusively by this build script.
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await build({ root, build: { outDir: out, emptyOutDir: false, manifest: true } });
const serverOut = path.join(root, '.build-ssr');
try {
await build({ root, build: { ssr: 'src/entry-server.jsx', outDir: serverOut, emptyOutDir: true, manifest: false }, publicDir: false });
const { render } = await import(new URL('../.build-ssr/entry-server.js', import.meta.url));
const manifest = JSON.parse(await readFile(path.join(out, '.vite/manifest.json'), 'utf8'));
const entry = manifest['index.html'];
const renderOptions = { render, scripts: ['/' + entry.file], styles: (entry.css || []).map(file => '/' + file) };
for (const lang of ['id', 'en']) {
  for (const route of routes) {
    const directory = path.join(out, lang === 'en' ? 'en' : '', route);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), documentHTML(route, lang, renderOptions));
  }
}
await writeFile(path.join(out, '404.html'), documentHTML('/404/', 'id', { ...renderOptions, notFound: true }));
await writeFile(path.join(out, 'en/404.html'), documentHTML('/404/', 'en', { ...renderOptions, notFound: true }));
await writeFile(path.join(out, 'sitemap.xml'), sitemapXML());
await writeFile(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${company.domain}/sitemap.xml\n`);
// Netlify/Cloudflare Pages redirects for the reference site's route names.
await writeFile(path.join(out, '_redirects'), Object.entries(aliases).flatMap(([from, to]) => [`${from} ${to} 301`, `/en${from} /en${to} 301`]).join('\n') + '\n');
console.log(`Built ${routes.length * 2} pre-rendered React pages in dist/ with sitemap, structured data, and bundled assets.`);
} finally { await rm(serverOut, { recursive: true, force: true }); }
