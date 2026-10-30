# Biotank Fiberglass Bali

Website perusahaan berbasis **React JS + Vite** untuk **biotankfiberglassbali.com**, dibuat terpisah dari website acuan di `../sinarmahira-website`. Desain hijau dan putih gading, responsif, dengan foto proyek asli yang sama dalam format WebP. Website acuan tidak diubah.

## Menjalankan

Memerlukan Node.js 22.12 atau lebih baru. Komponen ditulis dalam JavaScript/JSX, dengan React untuk seluruh antarmuka dan interaksi, serta Vite untuk development dan bundling. Hasil production menggunakan static prerendering React dan hydration di browser.

```sh
npm ci
npm run dev
# http://localhost:5173

npm run check
npm run build
npm test
npm run preview
```

Gunakan `npm run dev -- --port 3000` untuk port lain. `npm run build` menghasilkan folder `dist/` yang siap diunggah ke hosting statis. Folder ini berisi HTML untuk setiap URL; refresh halaman detail tidak memerlukan SPA fallback. Folder `dist/` adalah hasil build dan tidak perlu diedit.

## Halaman & fitur

- Beranda, profil perusahaan lengkap, visi dan misi.
- Katalog enam produk/layanan dan halaman detail masing-masing.
- Galeri enam foto proyek asli, filter produk, serta dialog foto dengan navigasi keyboard.
- Halaman sektor dan direktori klien dengan pencarian nama/lokasi.
- FAQ dengan accordion dan pencarian.
- Formulir konsultasi dengan validasi, pemilihan produk dari halaman detail, dan penyusunan pesan WhatsApp.
- Ulasan dengan rating, penyimpanan di browser, dan hapus ulasan. Ulasan secara jelas diberi label sebagai data lokal perangkat, bukan testimoni publik.
- Versi Indonesia dan Inggris dengan URL terpisah, misalnya `/produk/ipal/` dan `/en/produk/ipal/`.
- Menu mobile, skip link, fokus keyboard, dialog aksesibel, dan dukungan reduced motion.
- Kebijakan privasi dan syarat penggunaan yang menjelaskan perilaku formulir dan ulasan.

## Kontak dan daftar klien yang menyusul

Pengguna akan memberikan kontak perusahaan baru kemudian. **Nomor website acuan tidak digunakan.** Isi data pada `src/data.js`:

```js
export const company = {
  // ...
  phone: '62xxxxxxxxxx', // tanpa +, spasi, atau tanda baca
  phoneLabel: '+62 xxx-xxxx-xxxx',
  location: 'Alamat perusahaan Anda, Denpasar, Bali, Indonesia',
};
```

Saat `phone` terisi, formulir konsultasi secara otomatis membuka pesan yang sudah disiapkan di WhatsApp. Saat masih kosong, pengunjung dapat menyiapkan dan menyalin rincian proyek; formulir tidak mengklaim mengirim pesan. Perbarui tautan peta pada `src/Contact.jsx` ketika alamat lengkap tersedia. Tidak ada alamat email atau jam operasional yang direka.

Isi `clients` di `src/data.js` dengan klien perusahaan yang sudah dikonfirmasi. Nama pelanggan dan testimoni perusahaan acuan tidak dipindahkan sebagai klaim perusahaan baru. Galeri menggunakan foto dan label lokasi dari website acuan sesuai permintaan; pastikan konteks dokumentasinya sesuai sebelum publikasi.

## SEO

Build menghasilkan **30 halaman HTML berisi konten React lengkap**, dapat dibaca tanpa menjalankan JavaScript. React melakukan hydration untuk mengaktifkan interaksi di browser:

- Judul dan meta description unik per halaman dan bahasa.
- Satu H1, struktur heading, alt foto, breadcrumb, dan tautan internal produk terkait.
- Canonical URL domain baru dan hreflang `id`, `en`, serta `x-default`.
- `sitemap.xml` untuk seluruh halaman dua bahasa, serta `robots.txt`.
- JSON-LD Organization, WebSite, WebPage, BreadcrumbList, Service pada detail produk, dan FAQPage yang sesuai dengan pertanyaan terlihat.
- Open Graph, Twitter Card, dan gambar berbagi 1200×630.
- Foto WebP, lazy loading, preload foto hero dan font lokal. Font Noto Sans dilengkapi lisensi di `public/assets/FONT-LICENSE.txt`.
- Halaman 404 dengan `noindex` dan status HTTP 404 pada server preview.
- Redirect 301 untuk rute website acuan (`/about/`, `/services/`, `/projects/`, dan lainnya), termasuk versi Inggris. `dist/_redirects` mendukung Cloudflare Pages / Netlify; server Node lokal juga menangani redirect ini.

Jika domain akhir berubah, ganti `company.domain` sebelum build. Setelah hosting dan DNS domain tersambung, verifikasi domain di Google Search Console dan kirim URL `https://biotankfiberglassbali.com/sitemap.xml`. Build menyiapkan SEO teknis; indexing dan peringkat ditentukan mesin pencari. FAQ terstruktur tidak menjamin rich result.

## Struktur

```text
src/App.jsx           Root React, pemilihan halaman, context bahasa, galeri
src/components.jsx    Komponen React yang dipakai bersama
src/pages.jsx         Halaman beranda, profil, produk, proyek, klien, FAQ
src/Contact.jsx       Formulir konsultasi dan state ulasan di browser
src/main.jsx          React createRoot / hydrateRoot
src/entry-server.jsx  React renderToString untuk prerender saat build
src/data.js           Profil, produk, foto, FAQ, kontak, dan terjemahan
src/seo.js            Judul, deskripsi, dan helper URL
src/styles.css        Desain dan responsive breakpoints
public/assets/        Foto proyek, font lokal, logo, gambar Open Graph
vite.config.js        Konfigurasi React + Vite
scripts/document.mjs  Dokumen HTML, metadata, JSON-LD, sitemap
scripts/build.mjs     Build Vite client + React prerendering 30 halaman
scripts/serve.mjs     Server preview produksi
tests/site.test.mjs   Verifikasi HTML React, aset, SEO, dan respons HTTP
```

## Deploy ke Vercel

Buat project Vercel terpisah bernama `biotank-fiberglass-bali`, hubungkan repository `Rastyaa/sinarmahirabali`, dan pilih **Root Directory `sinarmahira`**. Pengaturan build sudah tersedia di `sinarmahira/vercel.json`: preset Vite, install `npm ci`, build `npm run build`, dan output `dist`. Gunakan Node.js 24.x. Tidak diperlukan environment variable untuk versi website saat ini.

Konfigurasi menggunakan URL dengan trailing slash agar sesuai canonical dan sitemap. Semua route halaman hasil prerender dilayani dari HTML masing-masing, tanpa rewrite global ke beranda. Alias URL dari website acuan tersedia sebagai redirect permanen Vercel, karena file `_redirects` hanya ditujukan untuk Netlify/Cloudflare Pages.

Setelah deployment berhasil, tambahkan `biotankfiberglassbali.com` pada Settings → Domains dan ikuti DNS yang ditampilkan Vercel. Kredensial Vercel tidak disimpan dalam source; folder `.vercel/` diabaikan Git.

Website belum dipublikasikan dan domain belum dikonfigurasi. Konfigurasi website Sinar Mahira serta workflow CI/CD yang sudah ada tidak diubah.
