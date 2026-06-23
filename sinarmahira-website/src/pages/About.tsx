import { CheckCircle2, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen">
      {/* Header Section */}
      <section className="w-full bg-transparent pt-[160px] pb-[40px] px-[16px] md:px-[32px]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2] text-text-primary tracking-[-0.02em]">
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="pb-[80px] md:pb-[120px] relative">
        <div className="max-w-[1000px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center space-y-[24px] text-[16px] md:text-[18px] leading-[32px] text-text-secondary font-jakarta mb-[60px]">
            <p className="max-w-[900px] mx-auto">
              <strong className="text-text-primary font-bold">Sinar Mahira (biosmb)</strong> {t('about.p1')} <strong className="text-text-primary">2010</strong>{t('about.p1b')}
            </p>
            <p className="max-w-[900px] mx-auto">
              {t('about.p2_prefix')} <strong className="text-text-primary font-bold">SINAR MAHIRA (biosmb)</strong> {t('about.p2')}
            </p>
          </div>

          {/* Premium Stats Banner */}
          <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-brand-blue/10 via-[#0A2F1D]/30 to-brand-teal/5 backdrop-blur-md border border-white/10 shadow-modal p-[32px] md:p-[48px] hover-glow transition-all duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] lg:gap-0 items-center justify-center divide-y sm:divide-y-0 lg:divide-x divide-white/10">
              
              <div className="text-center lg:px-4">
                <div className="text-[40px] md:text-[48px] font-poppins font-extrabold text-brand-blue mb-[8px] tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  100+
                </div>
                <div className="text-[14px] md:text-[15px] font-jakarta text-text-secondary font-semibold uppercase tracking-wider">
                  {t('about.stats_clients')}
                </div>
              </div>

              <div className="text-center pt-[24px] sm:pt-0 lg:px-4">
                <div className="text-[40px] md:text-[48px] font-poppins font-extrabold text-brand-blue mb-[8px] tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  4
                </div>
                <div className="text-[14px] md:text-[15px] font-jakarta text-text-secondary font-semibold uppercase tracking-wider">
                  {t('about.stats_partners')}
                </div>
              </div>

              <div className="text-center pt-[24px] sm:pt-0 lg:px-4">
                <div className="text-[40px] md:text-[48px] font-poppins font-extrabold text-brand-blue mb-[8px] tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  7
                </div>
                <div className="text-[14px] md:text-[15px] font-jakarta text-text-secondary font-semibold uppercase tracking-wider">
                  {t('about.stats_employees')}
                </div>
              </div>

              <div className="text-center pt-[24px] sm:pt-0 lg:px-4">
                <div className="text-[40px] md:text-[48px] font-poppins font-extrabold text-brand-blue mb-[8px] tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  6
                </div>
                <div className="text-[14px] md:text-[15px] font-jakarta text-text-secondary font-semibold uppercase tracking-wider">
                  {t('about.stats_support')}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-[80px] md:py-[120px] bg-glass-subtle border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {/* Visi */}
            <div className="bg-glass rounded-[24px] p-[40px] md:p-[56px] shadow-raised border border-white/8 hover:border-brand-blue/20 transition-all duration-300 hover-glow">
              <div className="w-[64px] h-[64px] rounded-[16px] bg-brand-blue/10 flex items-center justify-center mb-[32px] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                <Eye className="w-[32px] h-[32px] text-brand-blue" />
              </div>
              <h3 className="text-[32px] font-bold text-text-primary mb-[24px] font-poppins">{t('about.vision_title')}</h3>
              <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta">
                {t('about.vision_text')}
              </p>
            </div>

            {/* Misi */}
            <div className="bg-glass rounded-[24px] p-[40px] md:p-[56px] shadow-raised border border-white/8 hover:border-brand-coral/20 transition-all duration-300 hover-glow">
              <div className="w-[64px] h-[64px] rounded-[16px] bg-brand-coral/10 flex items-center justify-center mb-[32px] shadow-[0_0_15px_rgba(240,112,87,0.15)]">
                <Target className="w-[32px] h-[32px] text-brand-coral" />
              </div>
              <h3 className="text-[32px] font-bold text-text-primary mb-[24px] font-poppins">{t('about.mission_title')}</h3>
              <ul className="space-y-[16px] text-[16px] text-text-secondary leading-[32px] font-jakarta">
                {(t('about.missions', { returnObjects: true }) as string[]).map((item: string, index: number) => (
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
      <section className="py-[120px] bg-transparent text-center border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-[16px] md:px-[32px]">
            <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[24px] leading-[1.2] font-poppins tracking-[-0.02em]">
              {t('about.cta_title')}
            </h2>
            <p className="text-[18px] text-text-secondary mb-[40px] font-jakarta leading-[32px]">
              {t('about.cta_subtitle')}
            </p>
            <Link to="/contact" className="inline-flex justify-center items-center bg-brand-coral text-white h-[56px] px-[40px] rounded-[16px] font-jakarta text-[18px] font-bold shadow-floating hover:bg-brand-coral-hover transition-colors border border-transparent">
              {t('about.cta_btn')}
            </Link>
        </div>
      </section>
    </div>
  );
};

export default About;