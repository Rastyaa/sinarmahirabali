import { CheckCircle2, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen">
      {/* Header Section */}
      <section className="w-full bg-transparent pt-[160px] pb-[40px] px-[16px] md:px-[32px]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2] text-text-primary tracking-[-0.02em]">
            Tentang Kami
          </h1>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="pb-[80px] md:pb-[120px] relative">
        <div className="max-w-[1000px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center space-y-[24px] text-[16px] md:text-[18px] leading-[32px] text-text-secondary font-jakarta mb-[60px]">
            <p className="max-w-[900px] mx-auto">
              <strong className="text-text-primary font-bold">Sinar Mahira (biosmb)</strong> telah menjadi mitra terpercaya dalam pengelolaan air limbah sejak tahun <strong className="text-text-primary">2010</strong>. Dengan pengalaman melayani berbagai perusahaan dan komunitas, kami menghadirkan solusi yang efektif, efisien, dan sesuai standar lingkungan untuk mendukung kebutuhan sanitasi dan operasional yang lebih optimal.
            </p>
            <p className="max-w-[900px] mx-auto">
              Berfokus pada inovasi dan keberlanjutan, <strong className="text-text-primary font-bold">SINAR MAHIRA (biosmb)</strong> terus mengembangkan sistem pengolahan air limbah yang ramah lingkungan dan berkualitas. Kami berkomitmen membantu menciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan bagi berbagai sektor industri maupun kebutuhan masyarakat.
            </p>
          </div>

          {/* Premium Emerald Green Stats Banner */}
          <div className="relative rounded-[24px] overflow-hidden bg-[#0A2F1D]/80 backdrop-blur-md border border-emerald-500/20 shadow-raised p-[32px] md:p-[48px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] lg:gap-0 items-center justify-center divide-y sm:divide-y-0 lg:divide-x divide-emerald-500/10">
              
              <div className="text-center lg:px-4">
                <div className="text-[40px] md:text-[48px] font-poppins font-extrabold text-white mb-[8px] tracking-tight">
                  100+
                </div>
                <div className="text-[14px] md:text-[15px] font-jakarta text-emerald-100/80 font-medium">
                  Client di Indonesia
                </div>
              </div>

              <div className="text-center pt-[24px] sm:pt-0 lg:px-4">
                <div className="text-[40px] md:text-[48px] font-poppins font-extrabold text-white mb-[8px] tracking-tight">
                  4
                </div>
                <div className="text-[14px] md:text-[15px] font-jakarta text-emerald-100/80 font-medium">
                  Kerjasama Perusahaan
                </div>
              </div>

              <div className="text-center pt-[24px] sm:pt-0 lg:px-4">
                <div className="text-[40px] md:text-[48px] font-poppins font-extrabold text-white mb-[8px] tracking-tight">
                  7
                </div>
                <div className="text-[14px] md:text-[15px] font-jakarta text-emerald-100/80 font-medium">
                  Karyawan
                </div>
              </div>

              <div className="text-center pt-[24px] sm:pt-0 lg:px-4">
                <div className="text-[40px] md:text-[48px] font-poppins font-extrabold text-white mb-[8px] tracking-tight">
                  6
                </div>
                <div className="text-[14px] md:text-[15px] font-jakarta text-emerald-100/80 font-medium">
                  Team Support Instalasi
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
      <section className="py-[120px] bg-transparent text-center border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-[16px] md:px-[32px]">
            <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[24px] leading-[1.2] font-poppins tracking-[-0.02em]">
              Mulai Proyek Sanitasi Anda Bersama Kami
            </h2>
            <p className="text-[18px] text-text-secondary mb-[40px] font-jakarta leading-[32px]">
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
