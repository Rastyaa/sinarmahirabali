# PRD – Website PT. Sinar Mahira Bali

**Versi:** 1.0
**Tanggal:** 9 Juni 2026
**Author:** Tim Dev / CTO
**Project Type:** Company Profile Website with Simple CMS
**Client:** PT. Sinar Mahira Bali

---

## 1. Ringkasan Produk

Website ini dibuat untuk PT. Sinar Mahira Bali, perusahaan yang bergerak di bidang pengolahan air limbah, sanitasi lingkungan, dan solusi penyimpanan air berbasis fiberglass.

Website akan berfungsi sebagai company profile digital yang menampilkan profil perusahaan, layanan utama, proyek/portfolio, keunggulan perusahaan, FAQ, serta informasi kontak. Selain itu, website juga harus memiliki CMS sederhana agar pihak client dapat mengubah isi website sendiri tanpa perlu meminta developer setiap kali ada perubahan konten.

Website akan dibangun menggunakan React JS dengan TypeScript, Tailwind CSS, Sanity CMS, Vercel untuk hosting, dan domain dari Hostinger.

---

## 2. Latar Belakang

PT. Sinar Mahira Bali membutuhkan website profesional untuk memperkuat kredibilitas perusahaan, menampilkan layanan secara jelas, dan memudahkan calon customer menghubungi perusahaan.

Perusahaan menyediakan layanan:

* IPAL
* STP
* Bio Septic Tank
* Water Treatment
* Grease Trap
* Fiberglass Water Tank
* Solusi sanitasi dan pengolahan air limbah lainnya
* Perencanaan, produksi, pemasangan, dan pemeliharaan sistem

Karena client ingin dapat mengubah isi website sendiri, maka website tidak hanya berupa static hardcoded content, tetapi akan menggunakan CMS sederhana berbasis Sanity.

---

## 3. Tujuan Produk

Tujuan utama website ini adalah:

1. Menampilkan profil PT. Sinar Mahira Bali secara profesional.
2. Menjelaskan layanan perusahaan dengan jelas dan mudah dipahami.
3. Menampilkan proyek atau portfolio pekerjaan perusahaan.
4. Memudahkan calon customer menghubungi perusahaan melalui WhatsApp, email, form kontak, dan Google Maps.
5. Memungkinkan client mengubah konten website sendiri melalui CMS.
6. Membuat website yang responsive untuk desktop, tablet, dan mobile.
7. Membuat website yang SEO-friendly agar mudah ditemukan di Google.
8. Menyediakan website yang ringan, cepat, mudah di-maintain, dan siap deploy ke Vercel.

---

## 4. Target Pengguna

### 4.1 Visitor / Calon Customer

Visitor adalah pengguna umum yang membuka website untuk mencari informasi tentang layanan pengolahan air limbah, sanitasi, septic tank, grease trap, water treatment, atau tangki fiberglass.

Contoh visitor:

* Pemilik rumah
* Villa owner
* Hotel
* Restaurant
* Cafe
* Kontraktor
* Developer property
* Industri kecil/menengah
* Perusahaan yang membutuhkan solusi sanitasi dan pengolahan air limbah

### 4.2 Admin / Client

Admin adalah pihak internal PT. Sinar Mahira Bali yang dapat mengubah konten website melalui CMS.

Admin dapat mengelola:

* Konten halaman utama
* Profil perusahaan
* Daftar layanan
* Portfolio proyek
* FAQ
* Informasi kontak
* Gambar website
* SEO basic content

---

## 5. Scope Project

Website ini adalah company profile website dengan CMS sederhana.

### 5.1 In Scope

Fitur yang termasuk dalam project:

1. Website React JS + TypeScript.
2. Styling menggunakan Tailwind CSS.
3. Routing menggunakan React Router.
4. CMS menggunakan Sanity.
5. Website dapat mengambil data dari CMS.
6. Client dapat mengubah konten website melalui Sanity Studio.
7. Website responsive untuk mobile, tablet, dan desktop.
8. CTA WhatsApp.
9. Form kontak sederhana.
10. Google Maps embed.
11. SEO basic.
12. Deployment ke Vercel.
13. Setup custom domain dari Hostinger ke Vercel.
14. Dokumentasi singkat penggunaan CMS untuk client.

### 5.2 Out of Scope

Fitur yang tidak termasuk dalam versi awal:

1. Login user untuk customer.
2. Admin panel custom buatan sendiri.
3. Database custom seperti PostgreSQL/MySQL.
4. Payment gateway.
5. Booking system.
6. Multi-language.
7. Blog complex.
8. Live chat custom.
9. CRM.
10. Dashboard analytics custom.
11. Backend custom menggunakan Node.js/Go/PHP.
12. Inventory management.
13. Sistem quotation otomatis.
14. Upload file dokumen dari visitor.

Fitur-fitur tersebut dapat dipertimbangkan untuk pengembangan tahap berikutnya.

---

## 6. Tech Stack

| Layer              | Teknologi                             |
| ------------------ | ------------------------------------- |
| Frontend           | React JS + TypeScript                 |
| Build Tool         | Vite                                  |
| Styling            | Tailwind CSS                          |
| Routing            | React Router                          |
| CMS                | Sanity CMS                            |
| CMS Dashboard      | Sanity Studio                         |
| Hosting            | Vercel                                |
| Domain             | Hostinger                             |
| Image Hosting      | Sanity CDN                            |
| Deployment         | GitHub → Vercel                       |
| Contact CTA        | WhatsApp                              |
| Optional Analytics | Google Analytics / Google Tag Manager |

---

## 7. Alasan Pemilihan Tech Stack

### 7.1 React JS + TypeScript

React JS digunakan karena ringan, fleksibel, dan cocok untuk company profile modern. TypeScript digunakan agar struktur data dari CMS lebih aman dan mudah di-maintain.

Keuntungan TypeScript:

* Mengurangi error saat development.
* Membuat struktur data lebih jelas.
* Memudahkan maintenance.
* Lebih aman saat data dari CMS berubah.
* Lebih mudah dikembangkan oleh developer lain.

### 7.2 Vite

Vite digunakan sebagai build tool karena cepat, sederhana, dan cocok untuk project React modern.

### 7.3 Tailwind CSS

Tailwind CSS digunakan untuk mempercepat styling dan menjaga konsistensi UI.

### 7.4 Sanity CMS

Sanity digunakan agar client dapat mengubah isi website sendiri tanpa akses ke source code atau GitHub.

Keuntungan Sanity:

* Client bisa login ke dashboard.
* Bisa edit teks dan gambar.
* Tidak perlu backend custom.
* Cocok untuk company profile.
* Bisa diintegrasikan dengan React.
* Data dapat diambil melalui API.
* Gambar dapat dikelola melalui Sanity CDN.

### 7.5 Vercel

Vercel digunakan untuk hosting karena mudah dihubungkan dengan GitHub, mendukung CI/CD otomatis, dan cocok untuk website React static.

### 7.6 Hostinger

Hostinger digunakan untuk pembelian dan pengelolaan domain. Hosting utama tetap menggunakan Vercel, sehingga tidak perlu membeli shared hosting Hostinger.

---

## 8. Struktur Halaman Website

### 8.1 Home Page

Halaman utama yang menjadi entry point website.

Konten:

* Hero section
* Headline utama
* Subheadline
* Gambar utama / ilustrasi proyek
* CTA WhatsApp
* Ringkasan perusahaan
* Highlight layanan utama
* Section keunggulan
* Preview portfolio
* CTA kontak
* FAQ singkat

Editable via CMS:

* Hero title
* Hero subtitle
* Hero image
* CTA label
* CTA WhatsApp URL
* Company summary
* Featured services
* Featured projects

---

### 8.2 About Page

Halaman profil perusahaan.

Konten:

* Tentang PT. Sinar Mahira Bali
* Deskripsi perusahaan
* Visi
* Misi
* Komitmen kualitas
* Komitmen terhadap lingkungan
* Foto perusahaan/proyek
* Pengalaman perusahaan

Editable via CMS:

* About title
* About description
* Vision
* Mission
* Company image
* Experience description

---

### 8.3 Services Page

Halaman daftar layanan perusahaan.

Layanan utama:

1. IPAL
2. STP
3. Bio Septic Tank
4. Water Treatment
5. Grease Trap
6. Fiberglass Water Tank
7. Maintenance Service
8. Custom Fiberglass Solution

Setiap layanan memiliki:

* Nama layanan
* Slug
* Deskripsi singkat
* Deskripsi detail
* Gambar layanan
* Benefit layanan
* CTA konsultasi

Editable via CMS:

* Service title
* Service slug
* Short description
* Detail description
* Image
* Service benefits
* Display order
* Featured status

---

### 8.4 Service Detail Page

Halaman detail untuk masing-masing layanan.

Contoh URL:

* `/services/ipal`
* `/services/stp`
* `/services/bio-septic-tank`
* `/services/water-treatment`
* `/services/grease-trap`

Konten:

* Nama layanan
* Gambar layanan
* Deskripsi lengkap
* Manfaat
* Cocok untuk siapa
* Proses pengerjaan
* CTA WhatsApp

Editable via CMS:

* Semua konten service detail.

---

### 8.5 Projects / Portfolio Page

Halaman portfolio proyek perusahaan.

Konten:

* Daftar proyek
* Foto proyek
* Nama proyek
* Lokasi proyek
* Jenis layanan
* Deskripsi proyek
* Tahun pengerjaan
* Before-after image jika tersedia

Editable via CMS:

* Project title
* Location
* Service category
* Description
* Project images
* Year
* Before-after images
* Featured status

---

### 8.6 Why Choose Us Section / Page

Section untuk menjelaskan keunggulan perusahaan.

Contoh keunggulan:

* Berpengalaman dalam solusi pengolahan air limbah.
* Melayani kebutuhan rumah tangga, komersial, dan industri.
* Menyediakan layanan dari perencanaan sampai pemeliharaan.
* Menggunakan material berkualitas.
* Solusi dapat disesuaikan dengan kebutuhan client.
* Ramah lingkungan.
* Tim profesional.

Editable via CMS:

* Title
* Description
* List of advantages
* Icon/image

---

### 8.7 Contact Page

Halaman kontak perusahaan.

Konten:

* Nomor WhatsApp
* Email
* Alamat
* Jam operasional
* Google Maps embed
* Form kontak
* CTA konsultasi

Editable via CMS:

* Phone number
* WhatsApp number
* Email
* Address
* Operational hours
* Google Maps URL
* Contact form recipient email

---

### 8.8 FAQ Page

Halaman pertanyaan umum.

Contoh FAQ:

* Apa itu IPAL?
* Apa perbedaan IPAL dan STP?
* Apakah melayani pemasangan untuk villa/hotel?
* Apakah bisa custom ukuran tangki fiberglass?
* Apakah tersedia layanan maintenance?
* Bagaimana cara konsultasi?
* Apakah survey lokasi tersedia?

Editable via CMS:

* Question
* Answer
* Display order
* Active/inactive status

---

## 9. CMS Requirements

CMS menggunakan Sanity Studio.

### 9.1 Tujuan CMS

CMS digunakan agar client dapat mengubah konten website tanpa menyentuh source code.

### 9.2 Role CMS

Minimal role:

1. Developer/Admin

   * Mengatur schema
   * Mengatur struktur CMS
   * Deploy website
   * Maintenance teknis

2. Client Editor

   * Mengedit konten
   * Upload gambar
   * Publish perubahan
   * Tidak perlu akses GitHub/source code

### 9.3 Collection / Document Type CMS

CMS perlu memiliki beberapa document type:

```txt
siteSettings
heroSection
aboutSection
service
project
whyChooseUs
faq
contactInfo
seoSettings
```

---

## 10. Detail CMS Schema

### 10.1 siteSettings

Digunakan untuk data umum website.

Field:

| Field             | Type   | Required | Description       |
| ----------------- | ------ | -------- | ----------------- |
| siteName          | string | Yes      | Nama website      |
| logo              | image  | Yes      | Logo perusahaan   |
| favicon           | image  | No       | Favicon website   |
| mainPhone         | string | Yes      | Nomor utama       |
| mainWhatsapp      | string | Yes      | Nomor WhatsApp    |
| mainEmail         | string | Yes      | Email utama       |
| address           | text   | Yes      | Alamat perusahaan |
| googleMapsUrl     | url    | No       | Link Google Maps  |
| footerDescription | text   | No       | Deskripsi footer  |

---

### 10.2 heroSection

Digunakan untuk konten hero di halaman utama.

Field:

| Field             | Type   | Required | Description        |
| ----------------- | ------ | -------- | ------------------ |
| title             | string | Yes      | Judul utama        |
| subtitle          | text   | Yes      | Subjudul           |
| image             | image  | Yes      | Gambar hero        |
| primaryCtaLabel   | string | Yes      | Label tombol utama |
| primaryCtaUrl     | string | Yes      | URL tombol utama   |
| secondaryCtaLabel | string | No       | Label tombol kedua |
| secondaryCtaUrl   | string | No       | URL tombol kedua   |

---

### 10.3 aboutSection

Digunakan untuk profil perusahaan.

Field:

| Field          | Type         | Required | Description          |
| -------------- | ------------ | -------- | -------------------- |
| title          | string       | Yes      | Judul section        |
| description    | text         | Yes      | Deskripsi perusahaan |
| vision         | text         | No       | Visi                 |
| mission        | array/string | No       | Misi                 |
| image          | image        | No       | Gambar pendukung     |
| experienceText | string       | No       | Teks pengalaman      |

---

### 10.4 service

Digunakan untuk daftar layanan.

Field:

| Field             | Type         | Required | Description       |
| ----------------- | ------------ | -------- | ----------------- |
| title             | string       | Yes      | Nama layanan      |
| slug              | slug         | Yes      | URL slug          |
| shortDescription  | text         | Yes      | Deskripsi singkat |
| detailDescription | text         | Yes      | Deskripsi detail  |
| image             | image        | Yes      | Gambar layanan    |
| benefits          | array/string | No       | Manfaat layanan   |
| suitableFor       | array/string | No       | Cocok untuk siapa |
| process           | array/string | No       | Proses pengerjaan |
| isFeatured        | boolean      | No       | Tampil di Home    |
| order             | number       | No       | Urutan tampil     |

---

### 10.5 project

Digunakan untuk portfolio proyek.

Field:

| Field       | Type              | Required | Description           |
| ----------- | ----------------- | -------- | --------------------- |
| title       | string            | Yes      | Nama proyek           |
| slug        | slug              | Yes      | URL slug              |
| location    | string            | Yes      | Lokasi proyek         |
| serviceType | reference/service | No       | Jenis layanan terkait |
| description | text              | Yes      | Deskripsi proyek      |
| images      | array/image       | Yes      | Foto proyek           |
| year        | number            | No       | Tahun pengerjaan      |
| beforeImage | image             | No       | Foto sebelum          |
| afterImage  | image             | No       | Foto sesudah          |
| isFeatured  | boolean           | No       | Tampil di Home        |
| order       | number            | No       | Urutan tampil         |

---

### 10.6 whyChooseUs

Digunakan untuk daftar keunggulan perusahaan.

Field:

| Field       | Type    | Required | Description      |
| ----------- | ------- | -------- | ---------------- |
| title       | string  | Yes      | Judul keunggulan |
| description | text    | Yes      | Deskripsi        |
| icon        | image   | No       | Icon             |
| order       | number  | No       | Urutan tampil    |
| isActive    | boolean | No       | Status aktif     |

---

### 10.7 faq

Digunakan untuk pertanyaan umum.

Field:

| Field    | Type    | Required | Description   |
| -------- | ------- | -------- | ------------- |
| question | string  | Yes      | Pertanyaan    |
| answer   | text    | Yes      | Jawaban       |
| order    | number  | No       | Urutan tampil |
| isActive | boolean | No       | Status aktif  |

---

### 10.8 contactInfo

Digunakan untuk informasi kontak.

Field:

| Field              | Type   | Required | Description       |
| ------------------ | ------ | -------- | ----------------- |
| whatsappNumber     | string | Yes      | Nomor WhatsApp    |
| phoneNumber        | string | No       | Nomor telepon     |
| email              | string | Yes      | Email             |
| address            | text   | Yes      | Alamat            |
| operationalHours   | string | No       | Jam operasional   |
| googleMapsUrl      | url    | No       | Link Google Maps  |
| googleMapsEmbedUrl | url    | No       | Embed Google Maps |

---

### 10.9 seoSettings

Digunakan untuk SEO basic.

Field:

| Field           | Type         | Required | Description      |
| --------------- | ------------ | -------- | ---------------- |
| pageName        | string       | Yes      | Nama halaman     |
| metaTitle       | string       | Yes      | Meta title       |
| metaDescription | text         | Yes      | Meta description |
| ogImage         | image        | No       | Open Graph image |
| keywords        | array/string | No       | Keywords         |

---

## 11. Frontend Requirements

### 11.1 Struktur Folder Frontend

```txt
sinirmahira-website/
├─ public/
│  ├─ favicon.ico
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Footer.tsx
│  │  ├─ HeroSection.tsx
│  │  ├─ CTASection.tsx
│  │  ├─ ServiceCard.tsx
│  │  ├─ ProjectCard.tsx
│  │  ├─ FAQAccordion.tsx
│  │  └─ ContactForm.tsx
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  ├─ About.tsx
│  │  ├─ Services.tsx
│  │  ├─ ServiceDetail.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Contact.tsx
│  │  └─ FAQ.tsx
│  ├─ lib/
│  │  ├─ sanityClient.ts
│  │  └─ sanityQueries.ts
│  ├─ types/
│  │  └─ cms.ts
│  ├─ routes/
│  │  └─ AppRoutes.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ sanity/
│  ├─ schemas/
│  │  ├─ siteSettings.ts
│  │  ├─ heroSection.ts
│  │  ├─ aboutSection.ts
│  │  ├─ service.ts
│  │  ├─ project.ts
│  │  ├─ whyChooseUs.ts
│  │  ├─ faq.ts
│  │  ├─ contactInfo.ts
│  │  └─ seoSettings.ts
│  └─ sanity.config.ts
├─ package.json
├─ vite.config.ts
├─ tailwind.config.js
└─ tsconfig.json
```

---

## 12. TypeScript Data Types

Contoh TypeScript types:

```ts
export type SiteSettings = {
  siteName: string;
  logoUrl: string;
  mainPhone: string;
  mainWhatsapp: string;
  mainEmail: string;
  address: string;
  googleMapsUrl?: string;
  footerDescription?: string;
};

export type HeroSection = {
  title: string;
  subtitle: string;
  imageUrl: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
};

export type Service = {
  title: string;
  slug: string;
  shortDescription: string;
  detailDescription: string;
  imageUrl: string;
  benefits?: string[];
  suitableFor?: string[];
  process?: string[];
  isFeatured?: boolean;
  order?: number;
};

export type Project = {
  title: string;
  slug: string;
  location: string;
  serviceType?: string;
  description: string;
  imageUrls: string[];
  year?: number;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  isFeatured?: boolean;
  order?: number;
};

export type WhyChooseUs = {
  title: string;
  description: string;
  iconUrl?: string;
  order?: number;
  isActive?: boolean;
};

export type FAQ = {
  question: string;
  answer: string;
  order?: number;
  isActive?: boolean;
};

export type ContactInfo = {
  whatsappNumber: string;
  phoneNumber?: string;
  email: string;
  address: string;
  operationalHours?: string;
  googleMapsUrl?: string;
  googleMapsEmbedUrl?: string;
};

export type SEOSettings = {
  pageName: string;
  metaTitle: string;
  metaDescription: string;
  ogImageUrl?: string;
  keywords?: string[];
};
```

---

## 13. Data Fetching dari Sanity

Website React akan mengambil data dari Sanity menggunakan `@sanity/client`.

Contoh client setup:

```ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2026-06-09",
  useCdn: true,
});
```

Environment variables:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

Contoh query service:

```ts
export const servicesQuery = `
*[_type == "service"] | order(order asc) {
  title,
  "slug": slug.current,
  shortDescription,
  detailDescription,
  "imageUrl": image.asset->url,
  benefits,
  suitableFor,
  process,
  isFeatured,
  order
}
`;
```

---

## 14. UI/UX Requirements

### 14.1 Visual Style

Website harus memiliki visual style yang:

* Profesional
* Clean
* Corporate
* Modern
* Mudah dibaca
* Terlihat terpercaya
* Tidak terlalu ramai
* Cocok untuk industri lingkungan, sanitasi, dan pengolahan air

### 14.2 Rekomendasi Warna

Warna utama dapat menggunakan kombinasi:

* Navy blue
* Teal
* Green
* White
* Light gray

Kesan yang ingin dibangun:

* Bersih
* Aman
* Profesional
* Lingkungan
* Teknologi
* Engineering

### 14.3 Layout

Website harus menggunakan layout:

* Navbar sticky atau fixed
* Hero section yang kuat
* Section spacing rapi
* Card untuk layanan
* Grid untuk portfolio
* CTA WhatsApp jelas
* Footer lengkap
* Mobile navigation

### 14.4 Responsive Design

Website wajib responsive untuk:

* Mobile kecil
* Mobile besar
* Tablet
* Laptop
* Desktop

---

## 15. Functional Requirements

### FR-001 – Visitor dapat melihat halaman Home

Website harus menampilkan halaman utama dengan hero, ringkasan perusahaan, layanan unggulan, portfolio unggulan, dan CTA kontak.

### FR-002 – Visitor dapat melihat daftar layanan

Website harus menampilkan semua layanan yang tersedia dari CMS.

### FR-003 – Visitor dapat melihat detail layanan

Visitor dapat membuka halaman detail layanan untuk membaca informasi lebih lengkap.

### FR-004 – Visitor dapat melihat portfolio proyek

Website harus menampilkan daftar proyek yang dikelola dari CMS.

### FR-005 – Visitor dapat menghubungi perusahaan melalui WhatsApp

Website harus menyediakan tombol WhatsApp yang mudah diakses.

### FR-006 – Visitor dapat melihat informasi kontak

Website harus menampilkan alamat, email, nomor telepon, jam operasional, dan Google Maps.

### FR-007 – Visitor dapat mengirim form kontak

Website menyediakan form kontak sederhana dengan field:

* Nama
* Email
* Nomor WhatsApp
* Pesan

### FR-008 – Admin dapat mengubah konten layanan

Client dapat menambah, mengubah, menghapus, dan publish data layanan melalui Sanity CMS.

### FR-009 – Admin dapat mengubah portfolio proyek

Client dapat mengelola data portfolio proyek melalui Sanity CMS.

### FR-010 – Admin dapat mengubah FAQ

Client dapat mengelola daftar FAQ melalui Sanity CMS.

### FR-011 – Admin dapat mengubah informasi kontak

Client dapat mengubah nomor WhatsApp, email, alamat, dan Google Maps melalui CMS.

### FR-012 – Website mengambil data dari CMS

Website harus menampilkan data terbaru dari CMS setelah data dipublish.

---

## 16. Non-Functional Requirements

### NFR-001 – Performance

Website harus ringan dan cepat diakses.

Target:

* First load cepat
* Gambar dikompres
* Lazy loading image
* Bundle tidak terlalu besar

### NFR-002 – SEO

Website harus memiliki SEO basic:

* Meta title
* Meta description
* Open Graph image
* Heading structure rapi
* Alt text pada gambar
* Sitemap.xml
* Robots.txt

### NFR-003 – Accessibility

Website harus mudah digunakan:

* Warna teks kontras
* Button jelas
* Alt text gambar
* Navigasi keyboard basic
* Font mudah dibaca

### NFR-004 – Security

Website harus aman secara basic:

* HTTPS dari Vercel
* Tidak expose token private
* Menggunakan public read token Sanity jika dibutuhkan
* Client tidak diberi akses GitHub jika tidak diperlukan

### NFR-005 – Maintainability

Kode harus mudah dirawat:

* Komponen reusable
* TypeScript types jelas
* Query Sanity dipisah
* Struktur folder rapi
* Tidak hardcode data utama yang harusnya editable

### NFR-006 – Scalability

Website dapat dikembangkan ke depan:

* Blog
* Multi-language
* More service pages
* Quotation form
* CMS role management
* Lead tracking

---

## 17. SEO Requirements

Keyword utama yang perlu dipertimbangkan:

* IPAL Bali
* STP Bali
* Bio Septic Tank Bali
* Water Treatment Bali
* Grease Trap Bali
* Tangki Fiberglass Bali
* Pengolahan Air Limbah Bali
* Sanitasi Lingkungan Bali
* Jasa IPAL Bali
* Jasa STP Bali
* Septic Tank Fiberglass Bali

Contoh meta title:

```txt
PT. Sinar Mahira Bali | IPAL, STP, Bio Septic Tank & Water Treatment Bali
```

Contoh meta description:

```txt
PT. Sinar Mahira Bali menyediakan solusi IPAL, STP, Bio Septic Tank, Water Treatment, Grease Trap, dan tangki fiberglass untuk kebutuhan rumah tangga, komersial, dan industri di Bali.
```

---

## 18. Contact & Lead Flow

### 18.1 WhatsApp Flow

Flow:

```txt
Visitor buka website
↓
Visitor klik tombol WhatsApp
↓
WhatsApp terbuka dengan template pesan
↓
Visitor mengirim pesan ke admin PT. Sinar Mahira Bali
```

Contoh template pesan WhatsApp:

```txt
Halo PT. Sinar Mahira Bali, saya ingin konsultasi terkait layanan pengolahan air limbah / sanitasi.
Nama:
Kebutuhan:
Lokasi:
```

### 18.2 Contact Form Flow

Flow:

```txt
Visitor isi form kontak
↓
Visitor klik submit
↓
Data dikirim ke email / form endpoint
↓
Admin menerima inquiry
↓
Admin follow up via WhatsApp/email
```

Untuk versi awal, form dapat menggunakan layanan seperti:

* Formspree
* Getform
* Netlify Forms alternatif
* EmailJS
* Webhook automation jika dibutuhkan

---

## 19. Deployment Requirements

### 19.1 GitHub

Source code disimpan di GitHub repository.

Branch recommendation:

```txt
main        -> production
development -> development/staging
```

### 19.2 Vercel

Vercel digunakan untuk hosting frontend.

Build setting:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Environment variables di Vercel:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### 19.3 Domain Hostinger

Domain dibeli di Hostinger dan diarahkan ke Vercel melalui DNS.

Flow:

```txt
Beli domain di Hostinger
↓
Tambahkan domain di Vercel Project Settings
↓
Vercel memberikan DNS record
↓
Masukkan DNS record di Hostinger
↓
Tunggu propagasi DNS
↓
Website aktif dengan custom domain
```

---

## 20. Architecture Diagram

```txt
+-------------------------+
|                         |
|       Visitor/User      |
|                         |
+-----------+-------------+
            |
            | Access Website
            v
+-------------------------+
|                         |
| React + TypeScript Web  |
| Hosted on Vercel        |
|                         |
+-----------+-------------+
            |
            | Fetch Content API
            v
+-------------------------+
|                         |
|       Sanity CMS        |
|   Content Lake + CDN    |
|                         |
+-----------+-------------+
            ^
            |
            | Edit / Publish Content
            |
+-------------------------+
|                         |
|    Client / CMS Admin   |
|    Sanity Studio        |
|                         |
+-------------------------+
```

---

## 21. CMS → Website Flow

```txt
1. Client login ke Sanity Studio
2. Client memilih konten yang ingin diedit
3. Client mengubah teks/gambar/data
4. Client klik Publish
5. Data tersimpan di Sanity Content Lake
6. Website React mengambil data dari Sanity API
7. Konten terbaru tampil di website
```

---

## 22. Visitor Flow

```txt
1. Visitor membuka website
2. Visitor membaca profil perusahaan
3. Visitor melihat layanan
4. Visitor membuka detail layanan
5. Visitor melihat portfolio proyek
6. Visitor membaca FAQ
7. Visitor klik WhatsApp atau isi form kontak
8. Admin perusahaan melakukan follow up
```

---

## 23. Admin CMS Flow

```txt
1. Admin/client login ke Sanity Studio
2. Admin membuka menu layanan/proyek/FAQ/kontak
3. Admin menambah atau mengubah konten
4. Admin upload gambar jika diperlukan
5. Admin klik Publish
6. Website menampilkan data terbaru
```

---

## 24. Milestones

| Tahap                           | Estimasi Durasi | Output                     |
| ------------------------------- | --------------: | -------------------------- |
| Requirement finalization        |          1 hari | PRD final                  |
| Setup React + TypeScript + Vite |          1 hari | Project frontend siap      |
| Setup Tailwind CSS              |        0.5 hari | Styling system siap        |
| Setup Sanity CMS                |          1 hari | CMS dashboard siap         |
| Create CMS schema               |          1 hari | Schema content siap        |
| Build layout Home               |          1 hari | Home page selesai          |
| Build About & Services          |          2 hari | About dan Services selesai |
| Build Service Detail            |          1 hari | Detail layanan selesai     |
| Build Projects page             |          1 hari | Portfolio selesai          |
| Build Contact & FAQ             |          1 hari | Contact dan FAQ selesai    |
| Integrasi CMS ke semua halaman  |        1–2 hari | Dynamic content berjalan   |
| Responsive polish               |          1 hari | Mobile/tablet/desktop rapi |
| SEO basic setup                 |        0.5 hari | Meta, sitemap, robots      |
| Deployment Vercel               |        0.5 hari | Website live di Vercel     |
| Domain setup Hostinger          |        0.5 hari | Custom domain aktif        |
| QA & bug fixing                 |        1–2 hari | Website siap release       |
| CMS documentation               |        0.5 hari | Panduan client selesai     |

Estimasi total: 10–15 hari kerja tergantung revisi desain dan kelengkapan asset dari client.

---

## 25. Deliverables

Deliverables untuk project ini:

1. Source code React + TypeScript.
2. Setup Tailwind CSS.
3. Setup Sanity CMS.
4. CMS schema.
5. Website company profile responsive.
6. Halaman Home.
7. Halaman About.
8. Halaman Services.
9. Halaman Service Detail.
10. Halaman Projects/Portfolio.
11. Halaman Contact.
12. Halaman FAQ.
13. CTA WhatsApp.
14. Contact form sederhana.
15. Google Maps embed.
16. SEO basic.
17. Deployment ke Vercel.
18. Custom domain dari Hostinger.
19. Dokumentasi singkat penggunaan CMS.
20. Handover akses CMS ke client.

---

## 26. Content yang Perlu Disiapkan Client

Client perlu menyiapkan:

1. Logo perusahaan.
2. Warna brand jika ada.
3. Nomor WhatsApp bisnis.
4. Email bisnis.
5. Alamat kantor/workshop.
6. Link Google Maps.
7. Foto produk.
8. Foto proyek.
9. Foto proses produksi/pemasangan.
10. Daftar layanan final.
11. Deskripsi setiap layanan.
12. Portfolio proyek jika ada.
13. Legalitas perusahaan jika ingin ditampilkan.
14. Testimoni jika ada.
15. Client logo jika ada.
16. Jam operasional.
17. Social media jika ada.

---

## 27. Acceptance Criteria

Website dianggap selesai jika:

1. Website dapat diakses melalui domain custom.
2. Website responsive di mobile, tablet, dan desktop.
3. Semua halaman utama dapat dibuka tanpa error.
4. Konten utama dapat diubah melalui Sanity CMS.
5. Data dari CMS tampil di website.
6. Tombol WhatsApp berfungsi.
7. Form kontak berfungsi atau minimal siap diarahkan ke endpoint.
8. Google Maps tampil dengan benar.
9. Gambar tampil dengan baik dan tidak pecah.
10. Meta title dan meta description sudah terpasang.
11. Sitemap.xml dan robots.txt tersedia.
12. Website berhasil build di Vercel.
13. Client dapat login ke CMS.
14. Client dapat melakukan edit dan publish konten.
15. Developer menyerahkan dokumentasi penggunaan CMS.

---

## 28. Risiko dan Mitigasi

| Risiko                               | Dampak                              | Mitigasi                                                             |
| ------------------------------------ | ----------------------------------- | -------------------------------------------------------------------- |
| Client belum punya konten lengkap    | Development terhambat               | Gunakan placeholder content sementara                                |
| Foto proyek kualitas rendah          | Website terlihat kurang profesional | Kompres dan optimasi gambar, gunakan layout yang aman                |
| Client bingung menggunakan CMS       | Konten tidak terupdate              | Buat dokumentasi singkat dan training                                |
| DNS propagation lama                 | Domain belum langsung aktif         | Informasikan estimasi propagasi                                      |
| Struktur CMS terlalu kompleks        | Client sulit edit                   | Buat field yang sederhana dan jelas                                  |
| SEO kurang maksimal karena SPA React | Ranking kurang optimal              | Setup meta basic, sitemap, dan pertimbangkan Next.js di future phase |

---

## 29. Future Enhancements

Fitur yang bisa ditambahkan di tahap berikutnya:

1. Blog/artikel edukasi.
2. Multi-language Indonesia-English.
3. Quotation request form.
4. Download company profile PDF.
5. Gallery proyek lebih detail.
6. Testimonial client.
7. Client logo section.
8. Google Search Console setup.
9. Advanced SEO.
10. Lead tracking.
11. WhatsApp automation.
12. CRM integration.
13. Admin dashboard custom.
14. Next.js migration untuk SEO lebih kuat.

---

## 30. Kesimpulan

Website PT. Sinar Mahira Bali akan dibuat sebagai company profile modern, responsive, dan mudah dikelola oleh client melalui Sanity CMS.

Stack utama yang digunakan adalah React JS, TypeScript, Tailwind CSS, Sanity CMS, Vercel, dan domain Hostinger. Website ini difokuskan untuk menampilkan kredibilitas perusahaan, menjelaskan layanan, menampilkan portfolio, dan memudahkan calon customer menghubungi perusahaan.

Dengan CMS sederhana, client dapat mengubah konten seperti layanan, portfolio, FAQ, kontak, dan gambar secara mandiri tanpa perlu mengubah source code.
