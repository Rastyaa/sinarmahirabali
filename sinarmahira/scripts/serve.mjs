import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stat, readFile } from 'node:fs/promises';
import { routes, aliases, normalizePath } from '../src/data.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const requestedPort = process.argv.indexOf('--port');
const port = Number(requestedPort >= 0 ? process.argv[requestedPort + 1] : process.env.PORT || 5173);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.woff2': 'font/woff2' };

const server = http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Cache-Control', 'no-cache');
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  let pathname;
  let url;
  try { url = new URL(req.url, 'http://localhost'); pathname = decodeURIComponent(url.pathname); } catch { res.writeHead(400); res.end('Bad request'); return; }
  const send = (status, content, type) => { res.writeHead(status, { 'Content-Type': type }); res.end(req.method === 'HEAD' ? undefined : content); };
  const english = pathname === '/en' || pathname.startsWith('/en/');
  const raw = english ? pathname.slice(3) || '/' : pathname;
  const normalized = normalizePath(raw);
  const canonicalPath = (english ? '/en' : '') + normalized;
  const isDocument = !path.extname(pathname);
  if (isDocument && (aliases[normalizePathWithoutAliases(raw)] || (routes.includes(normalized) && pathname !== canonicalPath))) {
    res.writeHead(301, { Location: canonicalPath + url.search }); res.end(); return;
  }
  try {
    const base = path.join(root, 'dist');
    let filename = path.resolve(base, '.' + pathname);
    if (!filename.startsWith(base + path.sep) && filename !== base) { send(403, 'Forbidden', 'text/plain'); return; }
    const info = await stat(filename);
    if (info.isDirectory()) filename = path.join(filename, 'index.html');
    const content = await readFile(filename);
    send(200, content, mime[path.extname(filename)] || 'application/octet-stream');
  } catch {
    let content = 'Not found';
    if (isDocument) { try { content = await readFile(path.join(root, 'dist', english ? 'en/404.html' : '404.html')); } catch { /* Build the site first. */ } }
    send(404, content, isDocument ? mime['.html'] : 'text/plain');
  }
});
function normalizePathWithoutAliases(p) { const clean = p.replace(/\/+$/, '') || '/'; return clean === '/' ? clean : clean + '/'; }
server.listen(port, '127.0.0.1', () => console.log(`Biotank Fiberglass Bali production preview\nLocal: http://localhost:${server.address().port}`));
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
process.on('SIGTERM', () => server.close());
process.on('SIGINT', () => server.close());
