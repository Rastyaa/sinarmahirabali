import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import imgTreatment from '../assets/wtp_system.png';

const ServiceDetail = () => {
  const { slug } = useParams();

  // Mock data for template purposes
  const service = {
    title: slug === 'ipal' ? 'IPAL (Instalasi Pengolahan Air Limbah)' : 'Detail Layanan',
    description: 'Sistem pengolahan air limbah domestik dan medis yang dirancang khusus untuk memenuhi standar baku mutu lingkungan.',
    fullContent: 'Instalasi Pengolahan Air Limbah (IPAL) adalah struktur teknik dan perangkat peralatan beserta perlengkapannya yang dirancang secara khusus untuk memproses atau mengolah cairan sisa buangan, sehingga sisa cairan tersebut menjadi layak dibuang ke lingkungan.',
    benefits: [
      'Mencegah pencemaran air tanah dan lingkungan',
      'Memenuhi standar baku mutu pemerintah',
      'Desain disesuaikan dengan kapasitas dan lahan',
      'Material fiberglass anti-korosi dan tahan lama'
    ],
    suitableFor: ['Rumah Sakit', 'Hotel', 'Kawasan Industri', 'Puskesmas'],
    imageUrl: imgTreatment
  };

  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen pb-[120px]">
      
      {/* Breadcrumb Header */}
      <div className="bg-transparent pt-[120px] pb-[40px] px-[16px] md:px-[32px] border-b border-white/10">
        <div className="max-w-[1200px] mx-auto flex items-center text-text-secondary text-[14px]">
          <Link to="/" className="hover:text-brand-blue transition-colors">Beranda</Link>
          <ChevronRight className="w-[16px] h-[16px] mx-[8px] text-text-muted" />
          <Link to="/services" className="hover:text-brand-blue transition-colors">Layanan</Link>
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

        <div className="bg-white rounded-[24px] shadow-raised overflow-hidden">
          {/* Cover Image */}
          <div className="w-full h-[300px] md:h-[500px] relative">
            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                    <li key={i} className="flex items-start gap-[12px] p-[16px] bg-surface-light rounded-[12px] border border-border-subtle">
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
                <h3 className="text-[20px] font-bold text-brand-blue font-poppins mb-[16px]">Sangat Cocok Untuk:</h3>
                <ul className="space-y-[12px]">
                  {service.suitableFor.map((item, i) => (
                    <li key={i} className="flex items-center gap-[12px] text-text-secondary text-[16px]">
                      <div className="w-[6px] h-[6px] rounded-full bg-brand-coral"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation CTA */}
              <div className="bg-brand-coral rounded-[16px] p-[32px] text-white text-center">
                <h3 className="text-[20px] font-bold font-poppins mb-[16px]">Butuh Bantuan Lebih Lanjut?</h3>
                <p className="text-[14px] text-white/90 mb-[24px] font-jakarta">
                  Tim konsultan kami siap membantu menganalisis kebutuhan spesifik untuk proyek {service.title} Anda.
                </p>
                <a href="#" className="flex items-center justify-center gap-[8px] bg-white text-brand-coral h-[48px] rounded-[12px] font-bold shadow-floating hover:bg-surface-light transition-colors">
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
