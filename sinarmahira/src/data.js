// The owner will supply the new contact details later. Do not use the reference company's number.
export const company = {
  name: 'Biotank Fiberglass Bali',
  domain: 'https://biotankfiberglassbali.com',
  phone: '',
  phoneLabel: '',
  location: 'Denpasar, Bali, Indonesia',
};

// Only add confirmed customers of this company: { name: '...', location: '...' }.
// The reference company's customer list is deliberately not attributed to the new company.
export const clients = [];

export const pair = (id, en) => ({ id, en });
export const text = (value, lang = 'id') => typeof value === 'object' ? (value[lang] ?? value.id ?? '') : value;
export const nav = [
  ['/', pair('Beranda', 'Home')],
  ['/tentang/', pair('Tentang Kami', 'About Us')],
  ['/produk/', pair('Produk & Layanan', 'Products & Services')],
  ['/proyek/', pair('Proyek', 'Projects')],
  ['/klien/', pair('Klien', 'Clients')],
  ['/faq/', pair('FAQ', 'FAQ')],
];

export const products = [
  {
    slug: 'bio-septic-tank', name: 'BIO Septictank', category: pair('Sanitasi domestik', 'Domestic sanitation'), image: 'project-6.webp',
    description: pair('Sistem pengolahan limbah toilet berbahan fiberglass untuk hunian, villa, dan bangunan komersial.', 'Fiberglass toilet wastewater treatment for homes, villas, and commercial buildings.'),
    detail: pair('BIO Septictank merupakan unit pengolahan limbah domestik dengan proses biologis. Pemilihan bentuk dan kapasitas disesuaikan dengan jumlah pengguna, debit limbah, kondisi tanah, serta ruang pemasangan yang tersedia.', 'A BIO Septictank treats domestic wastewater through biological processes. Its shape and capacity are selected according to occupancy, wastewater flow, ground conditions, and the space available.'),
    benefits: [pair('Material FRP ringan dan tahan korosi', 'Lightweight, corrosion-resistant FRP'), pair('Pilihan model horizontal dan vertikal', 'Horizontal and vertical options'), pair('Kapasitas disesuaikan dengan kebutuhan', 'Capacity matched to your needs'), pair('Akses untuk inspeksi dan perawatan berkala', 'Access for inspection and routine maintenance')],
    sectors: [pair('Rumah tinggal', 'Homes'), 'Villa', pair('Perumahan', 'Residential developments'), pair('Ruko & kos', 'Shophouses & boarding houses')],
  },
  {
    slug: 'grease-trap', name: 'Grease Trap', category: pair('Pengolahan limbah dapur', 'Kitchen wastewater'), image: 'project-2.webp',
    description: pair('Unit pemisah minyak dan lemak untuk membantu menjaga saluran air limbah dapur tetap berfungsi.', 'Oil and grease separation to help keep kitchen wastewater drains working properly.'),
    detail: pair('Grease Trap memisahkan lemak dan minyak dari air limbah dapur sebelum diteruskan ke sistem pengolahan berikutnya. Ukuran unit dipilih berdasarkan kegiatan dapur dan debit pembuangan. Pengangkatan lemak dan pembersihan berkala tetap diperlukan.', 'A Grease Trap separates oils and fats from kitchen wastewater before downstream treatment. Unit sizing depends on kitchen activity and discharge flow. Regular grease removal and cleaning are necessary.'),
    benefits: [pair('Membantu mengurangi penumpukan lemak di pipa', 'Helps reduce grease buildup in pipes'), pair('Material fiberglass tahan korosi', 'Corrosion-resistant fiberglass'), pair('Mudah diakses untuk pembersihan', 'Accessible for cleaning'), pair('Dapat dipadukan dengan sistem IPAL', 'Can be integrated with wastewater treatment')],
    sectors: [pair('Restoran', 'Restaurants'), pair('Kafe', 'Cafés'), 'Hotel', pair('Dapur komersial', 'Commercial kitchens')],
  },
  {
    slug: 'stp', name: 'Sewage Treatment Plant', category: pair('Pengolahan terpadu', 'Integrated treatment'), image: 'project-1.webp',
    description: pair('Sistem pengolahan air limbah domestik terintegrasi untuk hotel, villa, apartemen, dan perkantoran.', 'Integrated domestic wastewater treatment for hotels, villas, apartments, and offices.'),
    detail: pair('STP menangani air limbah domestik dari aktivitas sehari-hari bangunan. Sistem direncanakan dengan mempertimbangkan kapasitas, karakteristik limbah, ketersediaan lahan, dan kebutuhan operasional. Kualitas air hasil pengolahan perlu diperiksa melalui pengujian berkala.', 'An STP treats domestic wastewater from daily building activities. Planning considers capacity, wastewater characteristics, available space, and operating needs. Treated water quality should be monitored through periodic testing.'),
    benefits: [pair('Perencanaan kapasitas sesuai operasional bangunan', 'Capacity planning for building operations'), pair('Unit fiberglass yang fleksibel dalam penerapan', 'Flexible fiberglass unit configurations'), pair('Pengolahan limbah domestik secara terpusat', 'Centralized domestic wastewater treatment'), pair('Sistem dapat disesuaikan dengan kondisi lokasi', 'System adapted to site conditions')],
    sectors: ['Hotel & resort', pair('Kawasan villa', 'Villa developments'), pair('Apartemen', 'Apartments'), pair('Perkantoran', 'Offices')],
  },
  {
    slug: 'ipal', name: 'IPAL', category: pair('Sistem air limbah', 'Wastewater systems'), image: 'project-4.webp',
    description: pair('Instalasi Pengolahan Air Limbah yang dirancang sesuai jenis limbah dan kebutuhan proyek Anda.', 'Wastewater treatment installations designed around your waste stream and project needs.'),
    detail: pair('Kami menyediakan solusi IPAL untuk air limbah dari kegiatan operasional bangunan. Pemilihan proses memerlukan evaluasi jenis dan karakteristik limbah, termasuk kebutuhan khusus fasilitas kesehatan atau industri. Desain, operasional, dan pengujian harus disesuaikan dengan persyaratan proyek.', 'We provide wastewater treatment solutions for building operations. Process selection requires an assessment of wastewater characteristics, including the special needs of healthcare or industrial facilities. Design, operation, and testing must match project requirements.'),
    benefits: [pair('Pendekatan sesuai karakteristik air limbah', 'Approach based on wastewater characteristics'), pair('Kapasitas dan dimensi sesuai proyek', 'Project-specific capacity and dimensions'), pair('Material FRP kuat dan tahan korosi', 'Strong, corrosion-resistant FRP'), pair('Terintegrasi dengan unit pendukung', 'Integrated with supporting units')],
    sectors: [pair('Rumah sakit & klinik', 'Hospitals & clinics'), pair('Bangunan komersial', 'Commercial buildings'), pair('Fasilitas industri', 'Industrial facilities'), pair('Perumahan', 'Residential developments')],
  },
  {
    slug: 'water-treatment', name: 'Water Treatment', category: pair('Sistem pendukung', 'Supporting systems'), image: 'water-treatment.webp',
    description: pair('Unit filtrasi pendukung yang disesuaikan dengan kondisi sumber air dan kebutuhan penggunaan.', 'Supporting filtration units selected for source water conditions and intended use.'),
    detail: pair('Unit Water Treatment membantu menangani kebutuhan filtrasi air pada bangunan. Pemilihan media dan konfigurasi filter perlu didasarkan pada hasil pemeriksaan kualitas air dan tujuan penggunaan. Konsultasikan kondisi air Anda untuk menentukan sistem yang sesuai.', 'Water Treatment units address building filtration needs. Filter media and configurations should be selected based on water quality testing and intended use. Share your source water conditions to determine a suitable system.'),
    benefits: [pair('Konfigurasi sesuai kondisi sumber air', 'Configuration based on source water'), pair('Pilihan media filtrasi sesuai kebutuhan', 'Filtration media selected for your needs'), pair('Dapat terintegrasi dengan sistem bangunan', 'Integration with building systems'), pair('Akses pemeliharaan berkala', 'Routine maintenance access')],
    sectors: [pair('Hunian', 'Homes'), 'Villa', 'Hotel', pair('Usaha komersial', 'Commercial businesses')],
  },
  {
    slug: 'custom-maintenance', name: pair('Custom & Perawatan', 'Custom & Maintenance'), category: pair('Layanan proyek', 'Project services'), image: 'project-5.webp',
    description: pair('Penyesuaian unit fiberglass dan kebutuhan perawatan sistem pengolahan air limbah Anda.', 'Fiberglass unit customization and maintenance support for your wastewater system.'),
    detail: pair('Setiap proyek memiliki kondisi dan kebutuhan berbeda. Diskusikan kapasitas pengolahan, keterbatasan lahan, akses pemasangan, serta kondisi sistem yang sudah ada untuk merencanakan unit atau perawatan yang sesuai.', 'Every project has different requirements. Discuss treatment capacity, space constraints, installation access, and the condition of existing systems to plan suitable units or maintenance.'),
    benefits: [pair('Konsultasi kebutuhan proyek', 'Project requirements consultation'), pair('Dimensi dan konfigurasi dapat disesuaikan', 'Adaptable dimensions and configuration'), pair('Evaluasi kondisi sistem yang ada', 'Assessment of existing systems'), pair('Rencana perawatan sesuai operasional', 'Maintenance planning for your operations')],
    sectors: [pair('Hunian', 'Homes'), 'Villa & hotel', pair('Komersial', 'Commercial'), pair('Industri', 'Industrial')],
  },
];

// Project photographs and descriptive labels retained from the reference, as requested.
export const projects = [
  { image: 'project-1.webp', type: 'stp', label: 'STP', title: pair('Instalasi STP kawasan hotel', 'Hotel STP installation'), location: 'Nusa Dua, Bali', description: pair('Dokumentasi pemasangan tangki fiberglass horizontal untuk sistem pengolahan air limbah domestik.', 'Installation of horizontal fiberglass tanks for domestic wastewater treatment.') },
  { image: 'project-2.webp', type: 'grease-trap', label: 'Grease Trap & IPAL', title: pair('Pengolahan limbah dapur komersial', 'Commercial kitchen wastewater'), location: 'Seminyak, Bali', description: pair('Dokumentasi unit pengolahan limbah untuk kebutuhan restoran dan bangunan komersial.', 'Wastewater treatment units for restaurant and commercial building needs.') },
  { image: 'project-3.webp', type: 'bio-septic-tank', label: 'BIO Septictank', title: pair('Sistem sanitasi perumahan', 'Residential sanitation system'), location: 'Canggu, Bali', description: pair('Dokumentasi pemasangan unit sanitasi fiberglass dan sistem perpipaan pada area hunian.', 'Fiberglass sanitation units and pipework in a residential setting.') },
  { image: 'project-4.webp', type: 'ipal', label: 'IPAL', title: pair('Instalasi unit pengolahan air limbah', 'Wastewater treatment installation'), location: 'Denpasar, Bali', description: pair('Dokumentasi penempatan unit IPAL fiberglass pada lokasi pemasangan.', 'Placement of a fiberglass wastewater treatment unit on site.') },
  { image: 'project-5.webp', type: 'stp', label: 'STP', title: pair('Pengolahan air limbah kawasan villa', 'Villa wastewater treatment'), location: 'Ubud, Bali', description: pair('Dokumentasi konstruksi dan integrasi tangki pengolahan di kawasan villa.', 'Construction and integration of treatment tanks at a villa development.') },
  { image: 'project-6.webp', type: 'bio-septic-tank', label: 'BIO Septictank', title: pair('Pemasangan bio septictank vertikal', 'Vertical bio septictank installation'), location: 'Sanur, Bali', description: pair('Dokumentasi pemasangan tangki vertikal fiberglass pada lahan dengan ruang terbatas.', 'Installation of a vertical fiberglass tank in a compact space.') },
];

export const sectors = [
  ['home', pair('Hunian & perumahan', 'Homes & housing'), pair('Sanitasi praktis untuk kehidupan sehari-hari.', 'Practical sanitation for everyday life.')],
  ['hotel', 'Villa & hotel', pair('Sistem yang mengikuti kebutuhan operasional Anda.', 'Systems that suit your operational needs.')],
  ['utensils', pair('Restoran & kafe', 'Restaurants & cafés'), pair('Pengolahan air limbah dapur dan pemisahan lemak.', 'Kitchen wastewater treatment and grease separation.')],
  ['hospital', pair('Rumah sakit & klinik', 'Hospitals & clinics'), pair('Perencanaan sesuai karakteristik limbah fasilitas.', 'Planning around facility wastewater characteristics.')],
  ['building', pair('Apartemen & perkantoran', 'Apartments & offices'), pair('Pengolahan limbah domestik secara terintegrasi.', 'Integrated domestic wastewater treatment.')],
  ['factory', pair('Komersial & industri', 'Commercial & industrial'), pair('Solusi sesuai kapasitas dan kondisi lokasi.', 'Solutions for your capacity and site conditions.')],
];

export const faqs = [
  [pair('Apa perbedaan BIO Septictank, STP, dan IPAL?', 'How do BIO Septictanks, STPs, and IPAL systems differ?'), pair('BIO Septictank difokuskan pada limbah toilet. STP mengolah air limbah domestik bangunan secara terintegrasi, sedangkan IPAL merupakan istilah umum untuk instalasi pengolahan air limbah yang dirancang berdasarkan jenis limbah. Tim kami dapat membantu memilih sistem sesuai kebutuhan Anda.', 'BIO Septictanks focus on toilet wastewater. STPs integrate domestic wastewater treatment for a building, while IPAL is the general term for a wastewater treatment installation designed for its specific waste stream. Our team can help select a suitable system.')],
  [pair('Mengapa menggunakan material fiberglass (FRP)?', 'Why use fiberglass (FRP)?'), pair('Fiberglass memiliki karakteristik ringan, kuat, tahan korosi, dan fleksibel dalam bentuk maupun penerapan. Pemilihan spesifikasi dan pemasangan yang tepat tetap penting agar unit sesuai dengan kondisi proyek.', 'Fiberglass is lightweight, strong, corrosion resistant, and flexible in shape and application. Correct specifications and installation remain essential for the conditions of each project.')],
  [pair('Apakah kapasitas unit dapat disesuaikan?', 'Can unit capacity be customized?'), pair('Ya. Kapasitas dan konfigurasi unit dapat disesuaikan berdasarkan jumlah pengguna, debit air limbah, jenis limbah, ketersediaan lahan, dan akses pemasangan. Kirimkan informasi proyek Anda untuk didiskusikan bersama tim.', 'Yes. Capacity and configuration can be tailored to occupancy, wastewater flow and type, available space, and installation access. Send your project details to discuss them with our team.')],
  [pair('Berapa lama proses pemasangan?', 'How long does installation take?'), pair('Waktu pemasangan bergantung pada jenis unit, ukuran, kesiapan lahan, pekerjaan sipil, dan akses lokasi. Jadwal akan dikonfirmasi setelah kebutuhan dan kondisi proyek dievaluasi.', 'Installation time depends on the unit, dimensions, site preparation, civil works, and access. A schedule is confirmed after evaluating project needs and site conditions.')],
  [pair('Apakah sistem memerlukan perawatan?', 'Does the system need maintenance?'), pair('Ya. Seluruh sistem membutuhkan inspeksi dan perawatan berkala. Grease Trap perlu dibersihkan dari minyak dan lemak, sedangkan tangki biologis memerlukan pemeriksaan serta pengelolaan lumpur sesuai kondisi operasional dan rekomendasi teknis.', 'Yes. All systems require regular inspection and maintenance. Grease traps need oil and grease removal, while biological tanks need inspection and sludge management according to operating conditions and technical recommendations.')],
  [pair('Bagaimana memastikan kualitas air hasil pengolahan?', 'How is treated water quality verified?'), pair('Kualitas hasil olahan bergantung pada desain, karakteristik limbah masuk, dan pengoperasian sistem. Pemeriksaan laboratorium serta pemantauan berkala diperlukan untuk menilai kesesuaian hasil dengan persyaratan yang berlaku pada proyek.', 'Treatment quality depends on design, incoming wastewater characteristics, and operation. Laboratory testing and regular monitoring are needed to assess results against the requirements that apply to the project.')],
  [pair('Apakah tersedia garansi produk?', 'Is a product warranty available?'), pair('Ketentuan garansi mengikuti spesifikasi produk dan penawaran proyek. Silakan tanyakan cakupan, masa berlaku, serta syarat pemasangan dan penggunaan kepada tim sebelum pemesanan.', 'Warranty terms depend on product specifications and the project quotation. Please ask the team about coverage, duration, and installation and operating conditions before ordering.')],
  [pair('Bagaimana cara meminta penawaran?', 'How do I request a quotation?'), pair('Gunakan formulir konsultasi atau tombol WhatsApp. Sertakan lokasi, jenis bangunan, jumlah pengguna atau perkiraan debit, dan produk yang dibutuhkan. Tim kami akan mendiskusikan solusi yang sesuai.', 'Use the consultation form or WhatsApp button. Include the location, building type, occupancy or estimated flow, and the product you need. Our team will discuss a suitable solution.')],
];

export const profile = [
  pair('Kami adalah perusahaan yang bergerak di bidang penyediaan solusi pengolahan air limbah dan sistem sanitasi, berlokasi di Denpasar, Bali. Kami menyediakan berbagai unit pengolahan air limbah berbahan fiberglass (FRP) yang dirancang untuk memenuhi kebutuhan sanitasi dan pengelolaan limbah pada berbagai sektor, mulai dari hunian pribadi hingga bangunan komersial dan fasilitas industri.', 'Based in Denpasar, Bali, we provide wastewater treatment and sanitation solutions. Our fiberglass (FRP) treatment units are designed for sanitation and wastewater management needs across private homes, commercial buildings, and industrial facilities.'),
  pair('Produk kami meliputi BIO Septictank, Grease Trap, Sewage Treatment Plant (STP), Instalasi Pengolahan Air Limbah (IPAL), serta berbagai unit pendukung pengolahan air limbah lainnya. Solusi yang kami sediakan ditujukan untuk menangani berbagai jenis limbah, seperti limbah domestik dari toilet dan septic tank, limbah dapur yang mengandung minyak dan lemak, serta air limbah dari aktivitas operasional bangunan.', 'Our products include BIO Septictanks, Grease Traps, Sewage Treatment Plants (STP), wastewater treatment installations (IPAL), and supporting treatment units. Our solutions address domestic toilet wastewater, kitchen wastewater containing oils and fats, and wastewater from building operations.'),
  pair('Kami melayani kebutuhan pengolahan air limbah untuk berbagai sektor, termasuk villa, hotel, restoran, rumah sakit, apartemen, perumahan, perkantoran, dan bangunan komersial lainnya. Dengan menggunakan material fiberglass yang ringan, kuat, tahan korosi, dan fleksibel dalam penerapan, produk kami menjadi salah satu pilihan untuk mendukung sistem pengolahan limbah yang praktis dan efisien.', 'We serve villas, hotels, restaurants, hospitals, apartments, residential developments, offices, and other commercial buildings. Lightweight, strong, corrosion-resistant, and versatile fiberglass makes our products a practical option for efficient wastewater treatment systems.'),
  pair('Kami berkomitmen untuk menyediakan produk berkualitas serta solusi yang dapat disesuaikan dengan kebutuhan proyek, kapasitas pengolahan, dan kondisi lokasi pemasangan. Melalui pendekatan yang mengutamakan kualitas produk, efisiensi sistem, dan kebutuhan pelanggan, kami ingin menjadi mitra terpercaya dalam mendukung pengelolaan air limbah yang lebih baik dan berkelanjutan.', 'We are committed to quality products and solutions tailored to project requirements, treatment capacity, and installation conditions. With a focus on product quality, system efficiency, and customer needs, we aim to be a trusted partner for better, more sustainable wastewater management.'),
];
export const vision = pair('Menjadi penyedia solusi pengolahan air limbah yang terpercaya dan berkontribusi terhadap terciptanya lingkungan yang bersih, sehat, serta berkelanjutan, khususnya di Bali dan Indonesia.', 'To be a trusted wastewater treatment solutions provider contributing to a clean, healthy, and sustainable environment, particularly in Bali and Indonesia.');
export const missions = [pair('Menyediakan unit pengolahan air limbah yang berkualitas.', 'Provide quality wastewater treatment units.'), pair('Menghadirkan solusi sesuai kebutuhan pelanggan.', 'Deliver solutions that meet customer needs.'), pair('Mendukung penerapan sistem sanitasi dan pengelolaan limbah yang bertanggung jawab terhadap lingkungan.', 'Support environmentally responsible sanitation and wastewater management.')];

export const routes = ['/', '/tentang/', '/produk/', ...products.map(p => `/produk/${p.slug}/`), '/proyek/', '/klien/', '/faq/', '/kontak/', '/privasi/', '/ketentuan/'];
export const aliases = { '/about/': '/tentang/', '/services/': '/produk/', '/projects/': '/proyek/', '/clients/': '/klien/', '/contact/': '/kontak/', '/services/bio-septic-tank/': '/produk/bio-septic-tank/', '/services/grease-trap/': '/produk/grease-trap/', '/services/stp/': '/produk/stp/', '/services/ipal/': '/produk/ipal/', '/services/water-treatment/': '/produk/water-treatment/', '/services/maintenance/': '/produk/custom-maintenance/' };
export function normalizePath(path) { const clean = path.replace(/\/+$/, '') || '/'; const normalized = clean === '/' ? clean : `${clean}/`; return aliases[normalized] || normalized; }
export function whatsapp(message = 'Halo Biotank Fiberglass Bali, saya ingin berkonsultasi mengenai kebutuhan pengolahan air limbah.') { return company.phone ? `https://wa.me/${company.phone}?text=${encodeURIComponent(message)}` : '/kontak/'; }
