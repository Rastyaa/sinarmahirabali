import React, { useEffect, useRef, useState } from 'react';
import { company, products, whatsapp } from './data.js';
import { useSite, Icon, Eyebrow, PageHeading } from './components.jsx';

const reviewKey = 'biotank-review-drafts-v1';
export function readReviews() {
  try {
    const saved = JSON.parse(localStorage.getItem(reviewKey) || '[]');
    return Array.isArray(saved) ? saved.filter(r => typeof r.name === 'string' && typeof r.comment === 'string' && typeof r.service === 'string' && Number.isInteger(r.rating) && r.rating >= 1 && r.rating <= 5 && typeof r.id === 'string' && typeof r.date === 'string' && Number.isFinite(Date.parse(r.date))).slice(0, 50) : [];
  } catch { return []; }
}

function ConsultationForm() {
  const { tr, t, href } = useSite();
  const formRef = useRef(null);
  const requestRef = useRef(null);
  const [request, setRequest] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get('produk');
    if (products.some(p => p.slug === selected)) formRef.current.elements.product.value = selected;
  }, []);
  useEffect(() => { if (request) requestRef.current?.focus(); }, [request]);
  function submit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const form = new FormData(event.currentTarget);
    const product = products.find(p => p.slug === form.get('product'));
    const message = [tr('Halo Biotank Fiberglass Bali, saya ingin berkonsultasi.', 'Hello Biotank Fiberglass Bali, I would like a consultation.'), '', `${tr('Nama', 'Name')}: ${form.get('name').trim()}`, `WhatsApp: ${form.get('phone').trim()}`, `${tr('Produk', 'Product')}: ${product ? t(product.name) : tr('Butuh rekomendasi', 'Recommendation needed')}`, `${tr('Lokasi proyek', 'Project location')}: ${form.get('location').trim()}`, '', `${tr('Kebutuhan', 'Requirements')}:`, form.get('message').trim()].join('\n');
    if (company.phone) { window.location.assign(whatsapp(message)); return; }
    setRequest(message); setCopyStatus('');
  }
  async function copy() {
    try { await navigator.clipboard.writeText(request); setCopyStatus(tr('Permintaan berhasil disalin.', 'Your request has been copied.')); }
    catch { requestRef.current.focus(); requestRef.current.select(); setCopyStatus(tr('Teks sudah dipilih. Tekan Ctrl+C atau gunakan menu Salin pada perangkat Anda.', 'Text selected. Press Ctrl+C or use your device’s Copy menu.')); }
  }
  return <div className="form-card"><Eyebrow>{tr('FORMULIR KONSULTASI', 'CONSULTATION FORM')}</Eyebrow><h2>{tr('Rencanakan ', 'Plan ')}<em>{tr('solusi Anda.', 'your solution.')}</em></h2><form ref={formRef} onSubmit={submit}><div className="form-row"><label>{tr('Nama lengkap', 'Full name')} *<input name="name" required maxLength={100} autoComplete="name" placeholder={tr('Nama Anda', 'Your name')} /></label><label>{tr('No. WhatsApp Anda', 'Your WhatsApp number')} *<input name="phone" type="tel" required minLength={8} maxLength={25} pattern={'[+0-9\\s\\(\\)\\-]{8,25}'} autoComplete="tel" placeholder="08xx xxxx xxxx" /></label></div><div className="form-row"><label>{tr('Produk yang dibutuhkan', 'Product needed')} *<select name="product" required defaultValue=""><option value="">{tr('Pilih produk', 'Select a product')}</option>{products.map(p => <option key={p.slug} value={p.slug}>{t(p.name)}</option>)}<option value="consult">{tr('Butuh rekomendasi', 'I need a recommendation')}</option></select></label><label>{tr('Lokasi proyek', 'Project location')} *<input name="location" required maxLength={200} autoComplete="address-level2" placeholder={tr('Kota / kabupaten', 'City / district')} /></label></div><label>{tr('Ceritakan kebutuhan Anda', 'Tell us what you need')} *<textarea name="message" required minLength={10} maxLength={3000} rows={4} placeholder={tr('Jenis bangunan, jumlah pengguna, perkiraan kapasitas, atau pertanyaan Anda…', 'Building type, occupancy, estimated capacity, or your questions…')} /></label><label className="checkbox-label"><input type="checkbox" name="consent" required /><span>{tr('Saya menyetujui', 'I agree to the')} <a href={href('/privasi/')}>{tr('kebijakan privasi', 'privacy policy')}</a> {tr('untuk penggunaan informasi konsultasi ini.', 'for the use of this consultation information.')} *</span></label><button type="submit" className="button full-width">{company.phone ? tr('Lanjutkan ke WhatsApp', 'Continue to WhatsApp') : tr('Siapkan Permintaan Konsultasi', 'Prepare Consultation Request')}<Icon name={company.phone ? 'chat' : 'arrow'} /></button><p className="form-note">{company.phone ? tr('Pesan akan dibuka di WhatsApp. Anda dapat meninjaunya sebelum mengirim.', 'Your message opens in WhatsApp for you to review before sending.') : tr('Kontak perusahaan sedang disiapkan. Anda dapat menyiapkan dan menyalin rincian kebutuhan terlebih dahulu.', 'Company contact details are being prepared. You can prepare and copy your requirements in the meantime.')}</p>{request && <div id="request-result"><label>{tr('Rincian permintaan Anda', 'Your request details')}<textarea ref={requestRef} value={request} readOnly rows={8} /></label><button type="button" onClick={copy} className="button outline"><Icon name="copy" />{tr('Salin Permintaan', 'Copy Request')}</button><p role="status" id="copy-status">{copyStatus}</p></div>}</form></div>;
}

function Reviews() {
  const { tr, t, lang } = useSite();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('');
  useEffect(() => { setReviews(readReviews()); }, []);
  function save(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = fields.get('name').trim();
    const comment = fields.get('comment').trim();
    if (!name || comment.length < 10) { setStatus(tr('Isi nama dan ulasan minimal 10 karakter.', 'Enter a name and a review of at least 10 characters.')); return; }
    const review = { id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`, name, comment, service: fields.get('service'), rating: Number(fields.get('rating')), date: new Date().toISOString() };
    const updated = [review, ...reviews].slice(0, 50);
    try { localStorage.setItem(reviewKey, JSON.stringify(updated)); setReviews(updated); form.reset(); setStatus(tr('Ulasan tersimpan di perangkat ini. Ulasan belum dikirim atau dipublikasikan.', 'Review saved on this device. It has not been sent or published.')); }
    catch { setStatus(tr('Browser tidak dapat menyimpan ulasan. Periksa izin penyimpanan atau kapasitas perangkat.', 'The browser could not save the review. Check storage permissions or device capacity.')); }
  }
  function remove(id) {
    const updated = reviews.filter(r => r.id !== id);
    try { localStorage.setItem(reviewKey, JSON.stringify(updated)); setReviews(updated); setStatus(tr('Ulasan dihapus dari perangkat ini.', 'Review removed from this device.')); }
    catch { setStatus(tr('Ulasan belum dapat dihapus dari penyimpanan browser.', 'Unable to remove the review from browser storage.')); }
  }
  return <section className="section reviews-section"><div className="container reviews-layout"><div><Eyebrow>{tr('PENGALAMAN ANDA BERARTI', 'YOUR EXPERIENCE MATTERS')}</Eyebrow><h2>{tr('Bagikan', 'Share your')}<br /><em>{tr('pengalaman Anda.', 'experience.')}</em></h2><p>{tr('Masukan Anda membantu kami memahami kebutuhan pelanggan dengan lebih baik.', 'Your feedback helps us better understand customer needs.')}</p><p className="review-notice">{tr('Ulasan disimpan di browser perangkat ini dan belum dipublikasikan atau dikirim ke perusahaan.', 'Reviews are saved in this device’s browser and are not published or sent to the company.')}</p><div aria-live="polite">{reviews.map(r => <article key={r.id} className="review-entry"><div className="review-entry-head"><h3>{r.name}</h3><span className="review-stars" aria-label={`${r.rating} ${tr('dari 5 bintang', 'out of 5 stars')}`}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span></div><small>{r.service} · {new Date(r.date).toLocaleDateString(lang === 'en' ? 'en-GB' : 'id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</small><p>{r.comment}</p><button type="button" className="review-delete" onClick={() => remove(r.id)}>{tr('Hapus ulasan di perangkat', 'Delete review from device')}</button></article>)}</div></div><form onSubmit={save} className="form-card"><h3>{tr('Tulis ulasan', 'Write a review')}</h3><label>{tr('Nama', 'Name')} *<input name="name" required maxLength={100} autoComplete="name" /></label><label>{tr('Layanan', 'Service')}<select name="service">{products.map(p => <option key={p.slug}>{t(p.name)}</option>)}</select></label><fieldset className="rating"><legend>{tr('Penilaian', 'Rating')}</legend>{[1, 2, 3, 4, 5].map(n => <label key={n}><input type="radio" name="rating" value={n} defaultChecked={n === 5} required /><span><Icon name="star" /><span>{n}</span></span></label>)}</fieldset><label>{tr('Ulasan Anda', 'Your review')} *<textarea name="comment" required minLength={10} maxLength={2000} rows={4} placeholder={tr('Ceritakan pengalaman Anda…', 'Tell us about your experience…')} /></label><button className="button" type="submit">{tr('Simpan Ulasan di Perangkat', 'Save Review on Device')}<Icon name="arrow" /></button><p id="review-status" role="status">{status}</p></form></div></section>;
}

export default function Contact() {
  const { tr } = useSite();
  return <><PageHeading label={tr('Hubungi Kami', 'Contact Us')} description={tr('Kami siap membantu Anda merencanakan solusi pengolahan air limbah yang sesuai dengan kebutuhan.', 'We’re here to help plan wastewater treatment solutions that fit your needs.')}>{tr('Ceritakan proyek Anda.', 'Tell us about your project.')}<br /><em>{tr('Mari mulai bersama.', 'Let’s get started.')}</em></PageHeading><section className="section container contact-layout"><div className="contact-info"><Eyebrow>{tr('MULAI DENGAN PERCAKAPAN', 'START WITH A CONVERSATION')}</Eyebrow><h2>{tr('Kebutuhan Anda,', 'Your needs,')}<br /><em>{tr('perhatian kami.', 'our attention.')}</em></h2><p>{tr('Siapkan informasi lokasi, jenis bangunan, dan perkiraan kapasitas. Semakin lengkap informasinya, semakin tepat solusi yang dapat direncanakan.', 'Have your location, building type, and estimated capacity ready. More complete information helps us plan a better solution.')}</p><div className="contact-item"><Icon name="pin" /><div><h3>{tr('Lokasi', 'Location')}</h3><p>{company.location}</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Denpasar%2C%20Bali" target="_blank" rel="noopener noreferrer">{tr('Lihat area di peta', 'View area on map')}<Icon name="northeast" /></a></div></div><div className="contact-item"><Icon name="chat" /><div><h3>WhatsApp</h3>{company.phone ? <a href={whatsapp()} target="_blank" rel="noopener noreferrer">{company.phoneLabel}<Icon name="northeast" /></a> : <p>{tr('Nomor kontak akan segera tersedia.', 'Contact number coming soon.')}</p>}</div></div><div className="contact-tip"><Icon name="leaf" /><p>{tr('Solusi yang tepat dimulai dari memahami kondisi proyek Anda.', 'The right solution starts with understanding your project.')}</p></div></div><ConsultationForm /></section><Reviews /></>;
}
