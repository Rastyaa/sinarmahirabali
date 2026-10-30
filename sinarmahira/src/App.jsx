import React, { useEffect, useState } from 'react';
import { normalizePath, products, routes } from './data.js';
import { pageInfo, linkFor } from './seo.js';
import { SiteContext, Header, Footer, GalleryDialog, Icon } from './components.jsx';
import { Home, About, Products, ProductDetail, Projects, Clients, FAQ, Legal, NotFound } from './pages.jsx';
import Contact from './Contact.jsx';

export function routeFromLocation(pathname) {
  const english = pathname === '/en' || pathname.startsWith('/en/');
  return { lang: english ? 'en' : 'id', path: normalizePath(english ? pathname.slice(3) || '/' : pathname) };
}

export default function App({ path = '/', lang = 'id' }) {
  const [project, setProject] = useState(null);
  path = normalizePath(path);
  useEffect(() => {
    const info = pageInfo(path, lang);
    document.title = info.title; document.documentElement.lang = lang;
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.append(description); }
    description.content = info.description;
    if (!routes.includes(path)) document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, follow');
  }, [path, lang]);
  const product = products.find(p => path === `/produk/${p.slug}/`);
  let page = <NotFound />;
  if (path === '/') page = <Home />;
  else if (path === '/tentang/') page = <About />;
  else if (path === '/produk/') page = <Products />;
  else if (product) page = <ProductDetail product={product} />;
  else if (path === '/proyek/') page = <Projects />;
  else if (path === '/klien/') page = <Clients />;
  else if (path === '/faq/') page = <FAQ />;
  else if (path === '/kontak/') page = <Contact />;
  else if (path === '/privasi/') page = <Legal privacy />;
  else if (path === '/ketentuan/') page = <Legal privacy={false} />;
  return <SiteContext.Provider value={{ lang, openProject: setProject }}><Header path={path} /><main id="main" tabIndex={-1}>{page}</main><Footer /><a className="floating-contact" href={linkFor('/kontak/', lang)} aria-label={lang === 'id' ? 'Konsultasikan kebutuhan Anda' : 'Discuss your needs'}><Icon name="chat" /><span>{lang === 'id' ? 'Mari konsultasi' : 'Let’s talk'}</span></a><GalleryDialog selected={project} onSelect={setProject} onClose={() => setProject(null)} /></SiteContext.Provider>;
}
