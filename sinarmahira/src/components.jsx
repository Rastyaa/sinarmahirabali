import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { company, nav, products, projects, text } from './data.js';
import { linkFor } from './seo.js';
import { shapes } from './icon-paths.js';

export const SiteContext = createContext({ lang: 'id', openProject: () => {} });
export function useSite() {
  const context = useContext(SiteContext);
  return { ...context, tr: (id, en) => context.lang === 'en' ? en : id, t: value => text(value, context.lang), href: path => linkFor(path, context.lang) };
}

// These SVG paths are fixed application assets, never user-provided HTML.
export function Icon({ name, className = '' }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: shapes[name] || shapes.drop }} />;
}
export function Logo() {
  return <svg className="brand-mark" viewBox="0 0 48 52" fill="none" aria-hidden="true"><path d="M24 1C18 10 5 23 5 33a19 19 0 0 0 38 0C43 23 30 10 24 1Z" fill="currentColor" /><path d="M12 31c7-6 17 7 25 0M12 38c7-6 17 7 25 0" stroke="#f9f8f3" strokeWidth="2.5" strokeLinecap="round" /></svg>;
}
export function Brand() {
  const { href, tr } = useSite();
  return <a className="brand" href={href('/')} aria-label={`${company.name} — ${tr('Beranda', 'Home')}`}><Logo /><span>BIOTANK<span className="brand-sub">FIBERGLASS BALI</span></span></a>;
}
export function Image({ file, alt, className = '', eager = false }) {
  return <img src={`/assets/${file}`} alt={alt} width="960" height="1280" loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" className={className} />;
}
export function TextLink({ to, children, light = false }) {
  const { href } = useSite();
  return <a href={href(to)} className={`text-link${light ? ' light' : ''}`}>{children}<Icon name="arrow" /></a>;
}
export function Button({ to = '/kontak/', children, className = '', icon = 'northeast' }) {
  const { href } = useSite();
  return <a className={`button ${className}`} href={href(to)}>{children}<Icon name={icon} /></a>;
}
export function Eyebrow({ children, light = false }) { return <span className={`eyebrow${light ? ' light' : ''}`}>{children}</span>; }

export function Header({ path }) {
  const { tr, t, href, lang } = useSite();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    const onOutside = e => { if (!e.target.closest('.header')) setOpen(false); };
    const media = matchMedia('(min-width: 801px)');
    const onResize = e => { if (e.matches) setOpen(false); };
    document.addEventListener('keydown', onKey); document.addEventListener('click', onOutside); media.addEventListener('change', onResize);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onOutside); media.removeEventListener('change', onResize); };
  }, []);
  const otherLang = lang === 'id' ? 'en' : 'id';
  function rememberLanguage(e) {
    try { localStorage.setItem('biotank-language', otherLang); } catch { /* Optional preference. */ }
    e.currentTarget.href = linkFor(path, otherLang) + window.location.search;
  }
  return <>
    <a href="#main" className="skip-link">{tr('Lewati ke konten', 'Skip to content')}</a>
    <div className="topbar"><div className="container"><span><Icon name="pin" />Denpasar, Bali<span className="topbar-divider">/</span>{tr('Solusi air limbah. Untuk masa depan yang lebih baik.', 'Better wastewater solutions. A better tomorrow.')}</span><a href={href('/kontak/')}>{tr('Mari diskusikan proyek Anda', 'Let’s discuss your project')}<Icon name="northeast" /></a></div></div>
    <header className="header"><div className="container header-inner"><Brand /><nav id="main-nav" className={open ? 'open' : ''} aria-label={tr('Navigasi utama', 'Main navigation')}>{nav.map(([to, label]) => <a key={to} href={href(to)} aria-current={path === to || (to === '/produk/' && path.startsWith(to)) ? 'page' : undefined}>{t(label)}</a>)}<a className="mobile-contact" href={href('/kontak/')}>{tr('Hubungi Kami', 'Contact Us')}</a></nav><div className="header-actions"><a className="language" href={linkFor(path, otherLang)} onClick={rememberLanguage} aria-label={tr('Switch to English', 'Ganti ke Bahasa Indonesia')}><Icon name="globe" />{lang.toUpperCase()}</a><Button className="small header-cta">{tr('Konsultasi', 'Let’s Talk')}</Button><button type="button" className="menu-toggle icon-button" aria-expanded={open} aria-controls="main-nav" aria-label={open ? tr('Tutup menu', 'Close menu') : tr('Buka menu', 'Open menu')} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button></div></div></header>
  </>;
}

export function Footer() {
  const { tr, t, href } = useSite();
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Brand /><p>{tr('Solusi pengolahan air limbah dan sistem sanitasi berbahan fiberglass. Dari Bali, untuk lingkungan yang lebih baik.', 'Fiberglass wastewater treatment and sanitation solutions. From Bali, for a better environment.')}</p><span className="footer-location"><Icon name="pin" />Denpasar, Bali, Indonesia</span></div><div><h3>{tr('Jelajahi', 'Explore')}</h3>{nav.slice(1).map(([to, label]) => <a key={to} href={href(to)}>{t(label)}</a>)}</div><div><h3>{tr('Solusi Kami', 'Our Solutions')}</h3>{products.slice(0, 4).map(p => <a key={p.slug} href={href(`/produk/${p.slug}/`)}>{t(p.name)}</a>)}</div><div className="footer-talk"><h3>{tr('Mulai percakapan.', 'Start a conversation.')}</h3><p>{tr('Setiap proyek punya kebutuhan berbeda. Mari temukan solusi Anda.', 'Every project has different needs. Let’s find your solution.')}</p><a className="footer-contact" href={href('/kontak/')}>{tr('Hubungi Kami', 'Get in Touch')}<Icon name="northeast" /></a>{company.phone && <a href={`tel:+${company.phone}`}>{company.phoneLabel}</a>}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {company.name}. {tr('Hak cipta dilindungi.', 'All rights reserved.')}</span><div><a href={href('/privasi/')}>{tr('Kebijakan Privasi', 'Privacy Policy')}</a><a href={href('/ketentuan/')}>{tr('Syarat & Ketentuan', 'Terms & Conditions')}</a></div><a href="#top" className="back-top">{tr('Kembali ke atas', 'Back to top')} ↑</a></div></footer>;
}

export function CTA() {
  const { tr } = useSite();
  return <section className="cta-section"><div className="container cta-inner"><div className="cta-copy"><Eyebrow light>{tr('LANGKAH BAIK DIMULAI DI SINI', 'BETTER STARTS HERE')}</Eyebrow><h2>{tr('Proyek Anda.', 'Your project.')}<br />{tr('Solusi yang tepat.', 'The right solution.')}</h2><p>{tr('Ceritakan kebutuhan Anda. Kami bantu merencanakan sistem pengolahan air limbah yang sesuai.', 'Tell us what you need. We’ll help plan a wastewater treatment system that fits.')}</p></div><Button className="cream">{tr('Diskusikan Proyek Anda', 'Discuss Your Project')}</Button><div className="cta-water" aria-hidden="true"><Logo /></div></div></section>;
}
export function PageHeading({ label, children, description }) {
  const { tr, href } = useSite();
  return <section className="page-heading"><div className="container"><div className="breadcrumb"><a href={href('/')}>{tr('Beranda', 'Home')}</a><Icon name="chevron" /><span>{label}</span></div><Eyebrow>{label}</Eyebrow><h1>{children}</h1><p>{description}</p></div></section>;
}
export function SectionHeading({ label, children, to, link, description }) {
  return <div className="section-heading"><div><Eyebrow>{label}</Eyebrow><h2>{children}</h2></div>{to && <TextLink to={to}>{link}</TextLink>}{description && <p>{description}</p>}</div>;
}
export function ProductCard({ product: p, index }) {
  const { t, tr, href } = useSite();
  return <a className="product-card" href={href(`/produk/${p.slug}/`)}><div className="product-image"><Image file={p.image} alt={t(p.name)} /><span className="image-index">0{index + 1}</span><span className="circle-arrow"><Icon name="northeast" /></span></div><div className="product-copy"><span className="overline">{t(p.category)}</span><h3>{t(p.name)}</h3><p>{t(p.description)}</p><span className="text-link">{tr('Kenali produknya', 'Explore product')}<Icon name="arrow" /></span></div></a>;
}
export function ProjectCard({ project: p, index }) {
  const { t, tr, openProject } = useSite();
  return <button className="project-card" type="button" onClick={() => openProject(index)} aria-label={`${tr('Lihat foto:', 'View photo:')} ${t(p.title)}`}><div className="project-image"><Image file={p.image} alt={t(p.title)} /><span className="project-tag">{p.label}</span><span className="circle-arrow"><Icon name="expand" /></span></div><div className="project-copy"><span><Icon name="pin" />{p.location}</span><h3>{t(p.title)}</h3></div></button>;
}
export function FAQList({ items }) {
  const { t } = useSite();
  return items.map(([q, a]) => <details className="faq-item" key={q.id}><summary>{t(q)}<Icon name="plus" /></summary><div><p>{t(a)}</p></div></details>);
}
export function GalleryDialog({ selected, onSelect, onClose }) {
  const { tr, t } = useSite();
  const ref = useRef(null);
  const isOpen = selected !== null;
  useEffect(() => {
    if (isOpen && !ref.current.open) ref.current.showModal();
    if (!isOpen && ref.current.open) ref.current.close();
  }, [isOpen]);
  const move = delta => onSelect((selected + delta + projects.length) % projects.length);
  const p = selected === null ? null : projects[selected];
  return <dialog ref={ref} id="project-dialog" className="project-dialog" aria-label={tr('Detail foto proyek', 'Project photo details')} onClose={onClose} onClick={e => { if (e.target === ref.current) ref.current.close(); }} onKeyDown={e => { if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); } if (e.key === 'ArrowRight') { e.preventDefault(); move(1); } }}><div className="dialog-inner"><button className="dialog-close icon-button" aria-label={tr('Tutup galeri', 'Close gallery')} onClick={() => ref.current.close()}><Icon name="close" /></button>{p && <><img className="dialog-photo" src={`/assets/${p.image}`} alt={t(p.title)} width="960" height="1280" /><div className="dialog-description"><Eyebrow>{p.label} / {p.location}</Eyebrow><h2>{t(p.title)}</h2><p>{t(p.description)}</p></div><div className="dialog-controls"><button className="button outline" onClick={() => move(-1)}>← {tr('Sebelumnya', 'Previous')}</button><span aria-live="polite">{selected + 1} / {projects.length}</span><button className="button outline" onClick={() => move(1)}>{tr('Berikutnya', 'Next')} →</button></div></>}</div></dialog>;
}
