import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import imgStp from '../assets/IMG_0353.JPG.jpeg';
import imgGreaseTrap from '../assets/IMG_0354.JPG.jpeg';
import imgBioSeptic from '../assets/IMG_0355.JPG.jpeg';
import imgIpalMedis from '../assets/IMG_0356.JPG.jpeg';
import imgWtp from '../assets/IMG_0357.JPG.jpeg';
import imgExtra from '../assets/IMG_0358.JPG.jpeg';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const getServiceData = (slug: string | undefined) => {
    switch (slug) {
      case 'ipal':
        return {
          title: 'IPAL (Instalasi Pengolahan Air Limbah)',
          description: 'Sistem pengolahan air limbah domestik dan klinis skala kecil hingga menengah yang dirancang khusus untuk memenuhi standar baku mutu lingkungan.',
          fullContent: 'Instalasi Pengolahan Air Limbah (IPAL) kami dirancang dengan tangki fiberglass praktis untuk memproses air sisa buangan secara higienis, menjamin air hasil olahan aman dibuang ke saluran umum atau meresap ke tanah tanpa mencemari lingkungan sekitar.',
          benefits: [
            'Mencegah pencemaran air tanah lingkungan sekitar',
            'Memenuhi baku mutu standar dinas lingkungan hidup',
            'Sistem praktis, hemat tempat, dan bebas bau',
            'Material fiberglass tahan korosi dan tahan lama'
          ],
          suitableFor: ['Klinik & Puskesmas', 'Villa', 'Kost-Kosan', 'Restoran & Cafe'],
          imageUrl: imgIpalMedis
        };
      case 'stp':
        return {
          title: 'STP (Sewage Treatment Plant)',
          description: 'Solusi pengolahan limbah cair domestik terpadu untuk hotel, komplek villa, apartemen, dan bangunan komersial.',
          fullContent: 'Sewage Treatment Plant (STP) modular kami menggunakan sistem aerasi biologi dengan media filter untuk mengolah air limbah domestik (black water & grey water) menjadi air bersih layak buang yang bebas pencemaran.',
          benefits: [
            'Menggunakan tangki fiberglass modular berkekuatan tinggi',
            'Proses biologis efektif menghilangkan bau tidak sedap',
            'Perawatan sistem sederhana tanpa perlu staf khusus',
            'Teknologi ramah lingkungan dengan konsumsi listrik rendah'
          ],
          suitableFor: ['Villa & Guest House', 'Hotel & Resort', 'Restoran', 'Gedung Kantor'],
          imageUrl: imgStp
        };
      case 'bio-septic-tank':
        return {
          title: 'Bio Septic Tank',
          description: 'Tangki septik ramah lingkungan berbahan fiberglass dengan sistem filtrasi biologis untuk rumah tinggal dan villa.',
          fullContent: 'Bio Septic Tank BIOSMB dilengkapi media bio-filter sebagai rumah bakteri pengurai untuk memproses kotoran secara alami. Hasil buangan berupa cairan jernih ramah lingkungan yang aman langsung dialirkan ke selokan umum.',
          benefits: [
            'Bebas kuras selamanya karena penguraian optimal',
            'Bahan fiberglass kuat, anti bocor, dan anti korosi',
            'Pemasangan sangat cepat dan langsung bisa digunakan',
            'Dilengkapi pipa disinfektan untuk sterilisasi bakteri'
          ],
          suitableFor: ['Rumah Tinggal', 'Villa Mandiri', 'Ruko', 'Kost-Kosan'],
          imageUrl: imgBioSeptic
        };
      case 'water-treatment':
        return {
          title: 'Water Treatment Plant',
          description: 'Sistem filtrasi dan penjernihan air tanah untuk mengatasi masalah air keruh, berbau, atau mengandung zat besi tinggi.',
          fullContent: 'Sistem Water Treatment Plant kami menggunakan tabung filter praktis dengan media penyaring berkualitas tinggi untuk menyaring zat besi, kapur, lumpur, dan bau, sehingga menghasilkan air bersih higienis siap pakai.',
          benefits: [
            'Menghilangkan air kuning, keruh, dan berbau karat',
            'Menggunakan media filter berkualitas tinggi tahan lama',
            'Desain kompak tidak memakan banyak ruang halaman',
            'Perawatan backwash sangat mudah dilakukan sendiri'
          ],
          suitableFor: ['Rumah Tinggal', 'Villa & Homestay', 'Laundry', 'Usaha Depot Air'],
          imageUrl: imgWtp
        };
      case 'grease-trap':
        return {
          title: 'Grease Trap (Penyaring Lemak)',
          description: 'Perangkap lemak dan minyak praktis untuk dapur restoran, cafe, villa, dan rumah tangga guna menghindari pipa mampet.',
          fullContent: 'Grease Trap fiberglass kami ditempatkan di bawah bak cuci piring untuk menangkap lemak, minyak, dan sisa makanan sebelum masuk ke saluran pipa utama, mencegah sumbatan lemak yang membeku di dalam pipa.',
          benefits: [
            'Mencegah pipa saluran pembuangan tersumbat lemak',
            'Desain sekat efektif memisahkan air dan minyak',
            'Mudah dibersihkan secara berkala',
            'Material fiberglass higienis dan tahan air panas'
          ],
          suitableFor: ['Dapur Restoran & Cafe', 'Dapur Villa', 'Katering', 'Dapur Rumah Tangga'],
          imageUrl: imgGreaseTrap
        };
      default:
        return {
          title: 'Detail Layanan',
          description: 'Detail informasi mengenai solusi pengolahan limbah dan sanitasi kami.',
          fullContent: 'Silakan hubungi tim kami untuk konsultasi detail mengenai kebutuhan proyek sanitasi dan pengolahan limbah Anda.',
          benefits: ['Solusi Profesional', 'Tenaga Ahli Berpengalaman'],
          suitableFor: ['Rumah Tinggal', 'Villa', 'Usaha Komersial'],
          imageUrl: imgExtra
        };
    }
  };

  const service = getServiceData(slug);

  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen pb-[120px]">
      
      {/* Breadcrumb Header */}
      <div className="bg-transparent pt-[120px] pb-[40px] px-[16px] md:px-[32px] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto flex items-center text-text-secondary text-[14px]">
          <Link to="/" className="hover:text-brand-blue transition-colors">{t('nav.home')}</Link>
          <ChevronRight className="w-[16px] h-[16px] mx-[8px] text-text-muted" />
          <Link to="/services" className="hover:text-brand-blue transition-colors">{t('nav.services')}</Link>
          <ChevronRight className="w-[16px] h-[16px] mx-[8px] text-text-muted" />
          <span className="text-text-primary font-bold">{service.title}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto w-full px-[16px] md:px-[32px] mt-[40px]">
        <Link to="/services" className="inline-flex items-center gap-[8px] text-brand-blue font-bold hover:text-brand-coral transition-colors mb-[32px]">
          <ArrowLeft className="w-[20px] h-[20px]" />
          Kembali ke Layanan
        </Link>

        <div className="bg-glass rounded-[24px] shadow-modal overflow-hidden border border-white/8 hover-glow transition-all duration-500">
          {/* Cover Image */}
          <div className="w-full h-[300px] md:h-[500px] relative">
            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover animate-pulse-subtle" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-[32px] left-[32px] right-[32px]">
              <h1 className="text-[32px] md:text-[48px] font-bold text-white font-poppins leading-[1.2]">
                {service.title}
              </h1>
            </div>
          </div>

          <div className="p-[32px] md:p-[64px] grid grid-cols-1 lg:grid-cols-3 gap-[48px]">
            
            {/* Left Content (2/3) */}
            <div className="lg:col-span-2 space-y-[40px]">
              <section>
                <h2 className="text-[24px] font-bold text-text-primary font-poppins mb-[16px]">Ringkasan Layanan</h2>
                <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta">
                  {service.description}
                </p>
                <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta mt-[16px]">
                  {service.fullContent}
                </p>
              </section>

              <section>
                <h2 className="text-[24px] font-bold text-text-primary font-poppins mb-[16px]">Manfaat & Keunggulan</h2>
                <ul className="space-y-[16px]">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-[12px] p-[16px] bg-white/5 rounded-[12px] border border-white/8 hover-glow transition-all duration-300">
                      <CheckCircle2 className="w-[24px] h-[24px] text-brand-coral shrink-0" />
                      <span className="text-[16px] text-text-primary font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Sidebar (1/3) */}
            <div className="space-y-[32px]">
              {/* Target Audience Box */}
              <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-[16px] p-[32px]">
                <h3 className="text-[20px] font-bold text-brand-blue font-poppins mb-[16px] drop-shadow-[0_0_10px_rgba(56,189,248,0.2)]">Sangat Cocok Untuk:</h3>
                <ul className="space-y-[12px]">
                  {service.suitableFor.map((item, i) => (
                    <li key={i} className="flex items-center gap-[12px] text-text-secondary text-[16px] font-medium">
                      <div className="w-[6px] h-[6px] rounded-full bg-brand-coral"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation CTA */}
              <div className="bg-brand-coral rounded-[16px] p-[32px] text-white text-center shadow-floating hover:shadow-[0_0_25px_rgba(240,112,87,0.3)] transition-all duration-300">
                <h3 className="text-[20px] font-bold font-poppins mb-[16px]">Butuh Bantuan Lebih Lanjut?</h3>
                <p className="text-[14px] text-white/90 mb-[24px] font-jakarta">
                  Tim konsultan kami siap membantu menganalisis kebutuhan spesifik untuk proyek {service.title} Anda.
                </p>
                <a href="https://wa.me/6288987288952" className="flex items-center justify-center gap-[8px] bg-white text-brand-coral h-[48px] rounded-[12px] font-bold shadow-floating hover:bg-slate-50 transition-colors">
                  <Phone className="w-[18px] h-[18px]" />
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;