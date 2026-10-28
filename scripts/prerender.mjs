// Runs after `vite build`.
//
// GitHub Pages can't do SPA fallback routing: any URL without a real file gets served as an
// HTTP 404, which Google treats as "page doesn't exist". This script writes a real
// dist/<route>/index.html for every route in src/router.tsx, with that page's own
// title / description / canonical / social tags baked in, so every URL answers 200.
// It also regenerates dist/sitemap.xml from the same route list.
//
// Page text still renders in the browser (Google handles that fine); what this fixes is the
// status code and the per-page <head>. All copy lives in src/seoMeta.json.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://servicetosecurity.com';

const template = readFileSync(join(dist, 'index.html'), 'utf8');
const meta = JSON.parse(readFileSync(join(root, 'src', 'seoMeta.json'), 'utf8'));
const routerSrc = readFileSync(join(root, 'src', 'router.tsx'), 'utf8');

const routes = [...routerSrc.matchAll(/path:\s*"([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => p !== '*');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const urlFor = (route) => SITE + (route === '/' ? '/' : route.replace(/\/?$/, '/'));

// Replace one tag's value; fail loudly if the template doesn't have it (so SEO can't silently break).
function swap(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender: could not find ${label} in dist/index.html`);
  return html.replace(regex, replacement);
}

function render(route) {
  const m = meta[route];
  const canonical = m.canonical ? SITE + m.canonical : urlFor(route);
  const title = esc(m.title);
  const desc = esc(m.description);
  let html = template;
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, '<title>');
  html = swap(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${desc}$2`, 'meta description');
  html = swap(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${canonical}$2`, 'canonical link');
  html = swap(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${title}$2`, 'og:title');
  html = swap(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${desc}$2`, 'og:description');
  html = swap(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${canonical}$2`, 'og:url');
  html = swap(html, /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${title}$2`, 'twitter:title');
  html = swap(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${desc}$2`, 'twitter:description');
  html = swap(html, /(<meta\s+name="twitter:url"\s+content=")[^"]*(")/, `$1${canonical}$2`, 'twitter:url');
  return html;
}

// Every route must have SEO copy, and copy must be a sane length.
const problems = [];
for (const route of routes) {
  const m = meta[route];
  if (!m) { problems.push(`no entry in seoMeta.json for route ${route}`); continue; }
  if (m.title.length > 65) problems.push(`${route}: title is ${m.title.length} chars (keep it under ~60)`);
  if (m.description.length > 160) problems.push(`${route}: description is ${m.description.length} chars (keep it under 160)`);
}
for (const key of Object.keys(meta)) {
  if (!routes.includes(key)) problems.push(`seoMeta.json has "${key}" but router.tsx has no such route`);
}
if (problems.length) {
  console.error('prerender: SEO problems found:\n - ' + problems.join('\n - '));
  process.exit(1);
}

let written = 0;
for (const route of routes) {
  const html = render(route);
  if (route === '/') {
    writeFileSync(join(dist, 'index.html'), html);
  } else {
    const dir = join(dist, route);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
  written++;
}

// Sitemap: skip pages whose canonical points somewhere else.
const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => !meta[r].canonical)
  .map((r) => `  <url>\n    <loc>${urlFor(r)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

console.log(`prerender: wrote ${written} pages and sitemap.xml (${routes.filter((r) => !meta[r].canonical).length} URLs)`);
