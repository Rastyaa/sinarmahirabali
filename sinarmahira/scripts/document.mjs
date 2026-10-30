import { company, nav, products, faqs, text, normalizePath, routes } from '../src/data.js';
import { pageInfo, esc, linkFor } from '../src/seo.js';

export function documentHTML(path = '/', lang = 'id', { notFound = false, render, scripts = [], styles = [] } = {}) {
  path = normalizePath(path);
  const info = pageInfo(path, lang);
  const url = company.domain + linkFor(path, lang);
  const product = products.find(p => path === `/produk/${p.slug}/`);
  const organization = {
    '@type': 'Organization', '@id': `${company.domain}/#organization`, name: company.name,
    url: company.domain, logo: `${company.domain}/assets/logo.svg`, image: `${company.domain}/assets/og-cover.jpg`,
    description: pageInfo('/', lang).description,
    address: { '@type': 'PostalAddress', addressLocality: 'Denpasar', addressRegion: 'Bali', addressCountry: 'ID' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Bali, Indonesia' },
    ...(company.phone ? { telephone: `+${company.phone}` } : {}),
  };
  const graph = [organization, { '@type': 'WebSite', '@id': `${company.domain}/#website`, url: company.domain, name: company.name, inLanguage: ['id', 'en'], publisher: { '@id': organization['@id'] } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: info.title, description: info.description, inLanguage: lang, isPartOf: { '@id': `${company.domain}/#website` }, about: { '@id': organization['@id'] } },
  ];
  if (path !== '/' && !notFound) {
    const section = product ? '/produk/' : path;
    const label = nav.find(([href]) => href === section)?.[1];
    const crumbs = [{ '@type': 'ListItem', position: 1, name: lang === 'id' ? 'Beranda' : 'Home', item: company.domain + linkFor('/', lang) }];
    if (product) crumbs.push({ '@type': 'ListItem', position: 2, name: lang === 'id' ? 'Produk' : 'Products', item: company.domain + linkFor('/produk/', lang) });
    crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: product ? text(product.name, lang) : label ? text(label, lang) : info.title.split(' | ')[0], item: url });
    graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs });
  }
  if (product) graph.push({ '@type': 'Service', '@id': `${url}#service`, name: text(product.name, lang), description: text(product.detail, lang), url, image: `${company.domain}/assets/${product.image}`, provider: { '@id': organization['@id'] }, areaServed: { '@type': 'AdministrativeArea', name: 'Bali, Indonesia' } });
  if (path === '/faq/') graph.push({ '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: text(q, lang), acceptedAnswer: { '@type': 'Answer', text: text(a, lang) } })) });
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
  return `<!doctype html>
<html lang="${lang}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(info.title)}</title><meta name="description" content="${esc(info.description)}">
<meta name="robots" content="${notFound ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
<meta name="theme-color" content="#1e5945"><link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="canonical" href="${url}">
${notFound ? '' : `<link rel="alternate" hreflang="id" href="${company.domain}${path}"><link rel="alternate" hreflang="en" href="${company.domain}/en${path}"><link rel="alternate" hreflang="x-default" href="${company.domain}${path}">`}
<meta property="og:type" content="website"><meta property="og:site_name" content="${company.name}"><meta property="og:locale" content="${lang === 'id' ? 'id_ID' : 'en_GB'}"><meta property="og:locale:alternate" content="${lang === 'id' ? 'en_GB' : 'id_ID'}">
<meta property="og:title" content="${esc(info.title)}"><meta property="og:description" content="${esc(info.description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${company.domain}/assets/og-cover.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${company.name} — ${lang === 'id' ? 'Solusi pengolahan air limbah fiberglass di Bali' : 'Fiberglass wastewater treatment solutions in Bali'}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(info.title)}"><meta name="twitter:description" content="${esc(info.description)}"><meta name="twitter:image" content="${company.domain}/assets/og-cover.jpg">
<link rel="preload" href="/assets/site-sans-regular.woff" as="font" type="font/woff" crossorigin>
${path === '/' ? '<link rel="preload" href="/assets/project-1.webp" as="image" fetchpriority="high">' : ''}
${styles.map(file => `<link rel="stylesheet" href="${file}">`).join('')}
<script type="application/ld+json">${schema}</script>${scripts.map(file => `<script type="module" crossorigin src="${file}"></script>`).join('')}
</head><body id="top"><div id="root">${render(path, lang)}</div></body></html>`;
}

export function sitemapXML() {
  const xml = v => v.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${routes.flatMap(path => ['id', 'en'].map(lang => `<url><loc>${xml(company.domain + linkFor(path, lang))}</loc><xhtml:link rel="alternate" hreflang="id" href="${company.domain}${path}"/><xhtml:link rel="alternate" hreflang="en" href="${company.domain}/en${path}"/><xhtml:link rel="alternate" hreflang="x-default" href="${company.domain}${path}"/></url>`)).join('\n')}\n</urlset>`;
}
