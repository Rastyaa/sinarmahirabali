import { CheckCircle2, Target, Eye, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col w-full bg-surface-light font-jakarta min-h-screen">
      {/* Header Section */}
      <section className="w-full bg-brand-blue pt-[160px] pb-[80px] px-[16px] md:px-[32px]">
        <div className="max-w-[1200px] mx-auto text-center text-white">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2]">
            Tentang Perusahaan
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-white/80 leading-[32px]">
            Mengenal lebih dekat PT. Sinar Mahira Bali, komitmen kami, dan visi misi dalam menciptakan lingkungan yang lebih bersih dan sehat.
          </p>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="py-[80px] md:py-[120px] bg-white relative">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] md:gap-[64px] items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-brand-coral/10 translate-x-[-16px] translate-y-[16px] rounded-[24px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=1000" 
                alt="Environmental Sanitation" 
                className="relative w-full h-[400px] md:h-[600px] object-cover rounded-[24px] shadow-raised"
              />
              {/* Floating Badge */}
               <div className="absolute top-[32px] right-[-24px] bg-white p-[24px] rounded-[16px] shadow-floating hidden md:flex flex-col items-center gap-[8px] border border-border-subtle">
                  <Award className="w-[32px] h-[32px] text-brand-coral" />
                  <span className="font-poppins font-bold text-text-primary text-[18px]">Standar Nasional</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-[12px] mb-[16px]">
                <div className="w-[32px] h-[2px] bg-brand-coral"></div>
                <span className="text-[14px] font-bold text-brand-coral uppercase tracking-wide font-poppins">Profil Kami</span>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[32px] leading-[1.2] font-poppins">
                Pionir Sanitasi & <br/> Pengolahan Air Bali.
              </h2>
              
              <div className="space-y-[24px] text-[16px] leading-[32px] text-text-secondary font-jakarta">
                <p>
                  <strong className="text-text-primary font-bold">PT. Sinar Mahira Bali</strong> didirikan dengan tujuan menjadi mitra utama bagi perumahan, komersial, dan sektor industri di Indonesia, khususnya Bali, dalam mengelola dan mengolah air limbah secara bertanggung jawab.
                </p>
                <p>
                  Berbekal pengalaman dan komitmen teguh terhadap kualitas material fiberglass premium, kami memproduksi IPAL, STP, Bio Septic Tank, dan Water Treatment Plant yang tahan lama, bebas bocor, dan mudah dirawat.
                </p>
                <div className="bg-surface-light p-[24px] rounded-[16px] border-l-[4px] border-brand-coral mt-[32px]">
                   <p className="text-text-primary font-medium italic">
                     "Kami meyakini bahwa sanitasi yang baik bukan hanya tentang memenuhi standar regulasi, namun merupakan fondasi dari kesehatan masyarakat dan masa depan lingkungan yang lestari."
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-[80px] md:py-[120px] bg-surface-light">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {/* Visi */}
            <div className="bg-white rounded-[24px] p-[40px] md:p-[56px] shadow-raised border border-border-subtle hover:border-brand-blue/30 transition-colors">
              <div className="w-[64px] h-[64px] rounded-[16px] bg-brand-blue/10 flex items-center justify-center mb-[32px]">
                <Eye className="w-[32px] h-[32px] text-brand-blue" />
              </div>
              <h3 className="text-[32px] font-bold text-text-primary mb-[24px] font-poppins">Visi Kami</h3>
              <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta">
                Menjadi perusahaan penyedia solusi pengolahan air limbah dan sanitasi terdepan di Indonesia yang memprioritaskan kelestarian lingkungan dan kepuasan pelanggan melalui produk inovatif dan berkualitas tinggi.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-[24px] p-[40px] md:p-[56px] shadow-raised border border-border-subtle hover:border-brand-coral/30 transition-colors">
              <div className="w-[64px] h-[64px] rounded-[16px] bg-brand-coral/10 flex items-center justify-center mb-[32px]">
                <Target className="w-[32px] h-[32px] text-brand-coral" />
              </div>
              <h3 className="text-[32px] font-bold text-text-primary mb-[24px] font-poppins">Misi Kami</h3>
              <ul className="space-y-[16px] text-[16px] text-text-secondary leading-[32px] font-jakarta">
                {[
                  'Menyediakan produk IPAL, STP, dan Septic Tank berbahan fiberglass bermutu premium.',
                  'Memberikan layanan konsultasi, perencanaan, dan pemasangan yang profesional.',
                  'Berinovasi dalam teknologi pengolahan air untuk efisiensi jangka panjang.',
                  'Berkontribusi aktif dalam menjaga kebersihan lingkungan dan air tanah.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-[12px]">
                    <CheckCircle2 className="w-[20px] h-[20px] text-brand-coral shrink-0 mt-[6px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] bg-brand-blue text-white text-center">
        <div className="max-w-[800px] mx-auto px-[16px] md:px-[32px]">
            <h2 className="text-[36px] md:text-[48px] font-bold mb-[24px] leading-[1.2] font-poppins">
              Mulai Proyek Sanitasi Anda Bersama Kami
            </h2>
            <p className="text-[18px] text-white/80 mb-[40px] font-jakarta">
              Jangan kompromi dengan kualitas sanitasi. Dapatkan solusi terbaik dan garansi layanan penuh dari ahlinya.
            </p>
            <Link to="/contact" className="inline-flex justify-center items-center bg-brand-coral text-white h-[56px] px-[40px] rounded-[16px] font-jakarta text-[18px] font-bold shadow-floating hover:bg-brand-coral-hover transition-colors border border-transparent">
              Konsultasi Sekarang
            </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
