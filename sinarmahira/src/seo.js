import { company, products, text, normalizePath } from './data.js';

export const esc = value => String(value ?? '').replace(/[&<>"\']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const T = lang => (id, en) => lang === 'en' ? en : id;
export const linkFor = (path, lang) => lang === 'en' ? `/en${path}` : path;

export function pageInfo(path, lang = 'id') {
  path = normalizePath(path);
  const tr = T(lang);
  const p = products.find(p => path === `/produk/${p.slug}/`);
  const titles = {
    '/': tr('Biotank Fiberglass Bali | Bio Septictank, IPAL & STP di Bali', 'Biotank Fiberglass Bali | Septic Tanks, STP & Wastewater Treatment'),
    '/tentang/': tr('Profil Perusahaan di Denpasar', 'About Our Denpasar Company'),
    '/produk/': tr('Produk Septictank, STP & IPAL Bali', 'Septic Tanks, STP & IPAL Products'),
    '/proyek/': tr('Galeri Proyek Pengolahan Air Limbah', 'Wastewater Treatment Projects'),
    '/klien/': tr('Sektor Layanan & Klien', 'Sectors & Clients'),
    '/faq/': tr('FAQ Septictank & IPAL Bali', 'Wastewater Treatment FAQ'),
    '/kontak/': tr('Konsultasi & Penawaran IPAL Bali', 'Consultation & Quotations'),
    '/privasi/': tr('Kebijakan Privasi', 'Privacy Policy'), '/ketentuan/': tr('Syarat & Ketentuan', 'Terms & Conditions'),
  };
  const descriptions = {
    '/': tr('Biotank Fiberglass Bali menyediakan BIO Septictank, Grease Trap, STP dan IPAL fiberglass di Denpasar, Bali untuk hunian, villa, hotel dan kebutuhan komersial.', 'Denpasar-based Biotank Fiberglass Bali supplies BIO Septictanks, Grease Traps, STP and fiberglass wastewater treatment for homes, villas, hotels and businesses.'),
    '/tentang/': tr('Kenali Biotank Fiberglass Bali, penyedia solusi pengolahan air limbah berbahan FRP di Denpasar. Profil perusahaan, visi, dan misi sanitasi berkelanjutan.', 'Meet Biotank Fiberglass Bali, a Denpasar-based FRP wastewater treatment provider. Explore our company profile and commitment to sustainable sanitation.'),
    '/produk/': tr('Temukan BIO Septictank, Grease Trap, STP, IPAL, Water Treatment dan layanan custom fiberglass untuk kebutuhan sanitasi proyek Anda di Bali.', 'Explore BIO Septictanks, Grease Traps, STP, IPAL, Water Treatment and custom fiberglass services for sanitation projects in Bali.'),
    '/proyek/': tr('Lihat dokumentasi pemasangan tangki fiberglass, BIO Septictank, STP, dan unit IPAL untuk kebutuhan hunian dan komersial di Bali.', 'Explore installation photographs of fiberglass tanks, BIO Septictanks, STPs and wastewater treatment units for residential and commercial needs in Bali.'),
    '/klien/': tr('Solusi sanitasi dan pengolahan air limbah untuk villa, hotel, restoran, rumah sakit, perumahan, perkantoran, dan fasilitas industri di Bali.', 'Sanitation and wastewater treatment for villas, hotels, restaurants, hospitals, housing, offices and industrial facilities in Bali.'),
    '/faq/': tr('Jawaban pertanyaan seputar pemilihan BIO Septictank, material fiberglass, kapasitas STP, pemasangan IPAL, perawatan dan permintaan penawaran di Bali.', 'Answers about BIO Septictank selection, fiberglass materials, STP capacity, wastewater system installation, maintenance and quotations in Bali.'),
    '/kontak/': tr('Diskusikan kebutuhan pengolahan air limbah bersama Biotank Fiberglass Bali di Denpasar. Siapkan lokasi, kapasitas, dan kebutuhan produk untuk konsultasi.', 'Discuss your wastewater treatment needs with Biotank Fiberglass Bali in Denpasar. Prepare your location, capacity and product requirements for a consultation.'),
    '/privasi/': tr('Kebijakan privasi Biotank Fiberglass Bali tentang data formulir konsultasi, penyimpanan ulasan di perangkat, dan tautan layanan pihak ketiga.', 'How Biotank Fiberglass Bali handles consultation form information, device-local review storage, and links to third-party services.'),
    '/ketentuan/': tr('Syarat penggunaan website Biotank Fiberglass Bali, informasi produk, permintaan konsultasi, penawaran proyek, dan dokumentasi galeri.', 'Terms for using the Biotank Fiberglass Bali website, product information, consultation requests, project quotations, and gallery documentation.'),
  };
  const base = titles[path] || tr('Halaman tidak ditemukan', 'Page not found');
  return {
    title: p ? `${text(p.name, lang)} ${tr('di Bali', 'in Bali')} | ${company.name}` : (path === '/' ? base : `${base} | ${company.name}`),
    description: p ? text(p.description, lang) + ' ' + tr('Konsultasi proyek di Denpasar, Bali.', 'Project consultation in Denpasar, Bali.') : descriptions[path] || base,
  };
}
