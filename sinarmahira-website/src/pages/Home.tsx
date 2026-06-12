import { ArrowRight, Droplets, Leaf, ShieldCheck, Factory, Home as HomeIcon, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgSanitation from '../assets/modern_sanitation.png';
import imgTreatment from '../assets/wtp_system.png';

const services = [
  {
    title: 'IPAL & STP',
    description: 'Sistem Instalasi Pengolahan Air Limbah modern dengan efisiensi tinggi.',
    icon: <Factory className="w-[28px] h-[28px] text-brand-coral" />,
  },
  {
    title: 'Bio Septic Tank',
    description: 'Sanitasi ramah lingkungan berbahan fiberglass anti-bocor.',
    icon: <Leaf className="w-[28px] h-[28px] text-brand-coral" />,
  },
  {
    title: 'Water Treatment',
    description: 'Teknologi penjernihan air mutakhir untuk kebutuhan komersial.',
    icon: <Droplets className="w-[28px] h-[28px] text-brand-coral" />,
  },
  {
    title: 'Grease Trap',
    description: 'Perangkap lemak untuk mencegah penyumbatan pipa saluran pembuangan.',
    icon: <ShieldCheck className="w-[28px] h-[28px] text-brand-coral" />,
  }
];

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta">
      
      {/* Premium Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-[120px] pb-[80px] bg-transparent overflow-hidden">
        {/* Subtle Decorative Background Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-[16px] md:px-[32px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center">
            
            {/* Left Column - Teks & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-[8px] bg-brand-blue/10 border border-brand-blue/15 px-[16px] py-[6px] rounded-[8px] mb-[24px]">
                <div className="w-[8px] h-[8px] rounded-full bg-brand-coral animate-pulse"></div>
                <span className="text-brand-blue text-[14px] font-bold tracking-wide uppercase font-poppins">Solusi Sanitasi Terpercaya</span>
              </div>
              
              <h1 className="text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2] font-poppins font-bold mb-[24px] text-text-primary tracking-[-0.03em]">
                Sistem Sanitasi & <br />
                Pengolahan Air Limbah <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Terbaik di Kelasnya.</span>
              </h1>
              
              <p className="text-[16px] md:text-[18px] leading-[32px] font-jakarta mb-[40px] text-text-secondary max-w-[600px]">
                PT Sinar Mahira Bali (Biosmb) menghadirkan solusi infrastruktur sanitasi berbahan fiberglass premium untuk residensial, komersial, dan industri.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-[16px] w-full sm:w-auto">
                <Link to="/contact" className="inline-flex justify-center items-center bg-brand-coral text-white h-[49px] px-[32px] rounded-[16px] font-jakarta text-[16px] font-bold shadow-floating hover:bg-brand-coral-hover transition-colors border border-transparent">
                  Konsultasi Gratis
                  <ArrowRight className="ml-[8px] w-[18px] h-[18px]" />
                </Link>
                <Link to="/services" className="inline-flex justify-center items-center bg-white text-brand-blue h-[49px] px-[32px] rounded-[16px] font-jakarta text-[16px] font-bold border-[2px] border-brand-blue hover:bg-brand-blue/5 transition-colors">
                  Lihat Layanan
                </Link>
              </div>
            </div>

            {/* Right Column - Premium Featured Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-brand-blue/5 translate-x-[16px] translate-y-[16px] rounded-[24px]"></div>
              <div className="relative rounded-[24px] overflow-hidden shadow-floating border border-white/10 bg-white">
                <img 
                  src={imgSanitation} 
                  alt="Modern Sanitation Infrastructure" 
                  className="w-full h-[320px] md:h-[420px] object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-[24px] left-[24px] bg-white/80 backdrop-blur-md px-[20px] py-[12px] rounded-[16px] shadow-raised border border-white/40 flex items-center gap-[12px]">
                  <div className="w-[12px] h-[12px] rounded-full bg-brand-green"></div>
                  <span className="text-[14px] font-bold text-text-primary font-poppins">Premium Quality guaranteed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section - Elevated UI */}
      <section className="py-[80px] md:py-[120px] bg-white/5 backdrop-blur-md border-y border-white/10 relative">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] md:gap-[64px] items-center">
            
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-brand-coral/10 translate-x-[16px] translate-y-[16px] rounded-[24px]"></div>
              <img 
                src={imgTreatment} 
                alt="Industrial Water Treatment" 
                className="relative w-full h-[350px] md:h-[500px] object-cover rounded-[24px] shadow-raised"
              />
              <div className="absolute -bottom-[24px] -right-[24px] bg-white p-[24px] rounded-[16px] shadow-floating hidden md:flex items-center gap-[16px]">
                <div className="bg-white/10 w-[48px] h-[48px] rounded-[12px] flex items-center justify-center">
                  <ShieldCheck className="w-[24px] h-[24px] text-brand-coral" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-text-primary text-[20px] leading-none">Garansi</h4>
                  <p className="font-jakarta text-text-secondary text-[14px]">Kualitas Premium</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-[12px] mb-[16px]">
                <div className="w-[32px] h-[2px] bg-brand-coral"></div>
                <span className="text-[14px] font-bold text-brand-coral uppercase tracking-wide font-poppins">Tentang Perusahaan</span>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[24px] leading-[1.2] font-poppins">
                Komitmen Pada <br/> Kualitas Lingkungan.
              </h2>
              
              <div className="space-y-[16px] text-[16px] leading-[32px] text-text-secondary font-jakarta mb-[32px]">
                <p>
                  <strong className="text-text-primary font-bold">PT Sinar Mahira Bali (Biosmb)</strong> adalah mitra terpercaya Anda di bidang pengolahan air limbah dan solusi penyimpanan air berbahan fiberglass di Bali.
                </p>
                <p>
                  Kami menghadirkan instalasi IPAL, STP, Bio Septic Tank, dan Water Treatment Plant dengan standar rekayasa tertinggi, menjamin efisiensi jangka panjang dan kepatuhan terhadap regulasi lingkungan.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-[16px] mb-[40px]">
                {[
                  'Teknologi Mutakhir', 'Tahan Lama & Anti Bocor', 
                  'Perawatan Mudah', 'Ramah Lingkungan'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-[12px]">
                    <div className="w-[24px] h-[24px] rounded-full bg-brand-teal/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-[14px] h-[14px] text-brand-blue" />
                    </div>
                    <span className="font-jakarta text-[14px] font-bold text-text-primary">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex justify-center items-center bg-white text-brand-blue h-[49px] px-[32px] rounded-[16px] font-jakarta text-[16px] font-bold border border-border-subtle hover:border-brand-blue hover:text-brand-blue transition-colors shadow-raised">
                Profil Perusahaan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Featured Cards */}
      <section className="py-[80px] md:py-[120px] bg-transparent">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[56px] gap-[24px]">
            <div className="max-w-[600px]">
              <div className="inline-flex items-center gap-[12px] mb-[16px]">
                <div className="w-[32px] h-[2px] bg-brand-coral"></div>
                <span className="text-[14px] font-bold text-brand-coral uppercase tracking-wide font-poppins">Produk & Layanan</span>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary leading-[1.2] font-poppins">
                Sistem Sanitasi <br /> Komprehensif.
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-[8px] text-brand-blue font-jakarta text-[16px] font-bold hover:text-brand-coral transition-colors">
              Lihat Semua
              <ArrowRight className="w-[20px] h-[20px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-[16px] border-l-[4px] border-l-brand-coral shadow-raised p-[32px] md:p-[40px] hover:shadow-floating transition-shadow"
              >
                <div className="flex gap-[24px] items-start">
                  <div className="w-[64px] h-[64px] rounded-[16px] bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-coral/10 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-text-primary mb-[12px] leading-[1.2] font-poppins group-hover:text-brand-blue transition-colors">{service.title}</h3>
                    <p className="text-[16px] text-text-secondary leading-[28px] font-jakarta">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section - Distinctive Panels */}
      <section className="py-[80px] md:py-[120px] bg-white/5 border-y border-white/10">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
           <div className="text-center max-w-[700px] mx-auto mb-[64px]">
             <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[16px] leading-[1.2] font-poppins">
              Mendukung Berbagai Sektor
            </h2>
            <p className="text-[16px] md:text-[18px] text-text-secondary font-jakarta leading-[32px]">
              Kapasitas produksi dan desain rekayasa kami memungkinkan kami untuk melayani dari hunian pribadi hingga kompleks industri berskala besar.
            </p>
           </div>
           
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {[
              { title: 'Rumah Tangga', icon: <HomeIcon className="w-[32px] h-[32px]" />, desc: 'Sistem Bio Septic Tank modern yang membebaskan Anda dari masalah kuras WC rutin.' },
              { title: 'Fasilitas Komersial', icon: <Building2 className="w-[32px] h-[32px]" />, desc: 'IPAL & Grease Trap efisien untuk restoran, rumah sakit, hotel, dan pusat perbelanjaan.' },
              { title: 'Kawasan Industri', icon: <Factory className="w-[32px] h-[32px]" />, desc: 'Sewage Treatment Plant berkapasitas masif yang memenuhi baku mutu pembuangan limbah industri.' }
            ].map((segment, i) => (
              <div key={i} className="bg-white border border-white/10 rounded-[16px] p-[40px] shadow-raised hover:shadow-floating hover:-translate-y-1 transition-all duration-300">
                <div className="w-[64px] h-[64px] rounded-[16px] bg-brand-coral/10 flex items-center justify-center mb-[24px] text-brand-coral">
                  {segment.icon}
                </div>
                <h3 className="text-[24px] font-bold text-text-primary mb-[16px] leading-[1.2] font-poppins">{segment.title}</h3>
                <p className="text-[16px] text-text-secondary leading-[28px] font-jakarta">{segment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Modern Redesign */}
      <section className="py-[80px] md:py-[100px] bg-white relative border-y border-white/10">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px] relative z-10">
          <div className="text-center mb-[48px]">
            <div className="inline-flex items-center gap-[12px] mb-[16px] justify-center w-full">
              <div className="w-[32px] h-[2px] bg-brand-coral"></div>
              <span className="text-[14px] font-bold text-brand-coral uppercase tracking-wide font-poppins">Jaringan Kami</span>
              <div className="w-[32px] h-[2px] bg-brand-coral"></div>
            </div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary font-poppins">
              Mitra Kerjasama Perusahaan
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              "CV. AGAM HARMONI ALAM",
              "CV. MAJU JAYA",
              "CV. FILTERINDO PERKASA",
              "CV. BALI WASTE WATER IPAL"
            ].map((partner, index) => (
              <div key={index} className="group bg-white rounded-[16px] p-[24px] md:p-[32px] shadow-raised hover:shadow-floating border border-white/10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="w-[56px] h-[56px] rounded-full bg-brand-blue/5 flex items-center justify-center mb-[16px] group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <Building2 className="w-[28px] h-[28px] text-brand-blue" />
                </div>
                
                <span className="font-bold text-text-primary text-[15px] md:text-[16px] font-poppins tracking-wide group-hover:text-brand-blue transition-colors relative z-10">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] bg-transparent">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="bg-white rounded-[24px] shadow-floating p-[48px] md:p-[80px] text-center max-w-[900px] mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[8px] bg-brand-coral"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[24px] leading-[1.2] font-poppins">
              Siap Meningkatkan Standar <br className="hidden md:block" /> Sanitasi Proyek Anda?
            </h2>
            <p className="text-[18px] text-text-secondary mb-[40px] font-jakarta max-w-[600px] mx-auto">
              Diskusikan kebutuhan spesifik Anda dengan tim konsultan ahli kami. Dapatkan penawaran harga terbaik hari ini.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[16px]">
              <Link to="/contact" className="inline-flex justify-center items-center bg-brand-coral text-white h-[49px] w-[240px] rounded-[16px] font-jakarta text-[16px] font-bold shadow-floating hover:bg-brand-coral-hover transition-colors">
                Hubungi Ahli Kami
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center bg-transparent text-brand-blue h-[49px] w-[240px] rounded-[16px] font-jakarta text-[16px] font-bold border-[2px] border-brand-blue hover:bg-brand-blue/10 transition-colors">
                Minta Penawaran
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
