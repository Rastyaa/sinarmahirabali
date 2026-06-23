import { ArrowRight, Droplets, Leaf, ShieldCheck, Factory, Home as HomeIcon, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import imgSanitation from '../assets/modern_sanitation.png';
import imgTreatment from '../assets/wtp_system.png';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('home.svc_ipal'),
      description: t('home.svc_ipal_desc'),
      icon: <Factory className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] text-brand-coral" />,
    },
    {
      title: t('home.svc_bio'),
      description: t('home.svc_bio_desc'),
      icon: <Leaf className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] text-brand-coral" />,
    },
    {
      title: t('home.svc_wtp'),
      description: t('home.svc_wtp_desc'),
      icon: <Droplets className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] text-brand-coral" />,
    },
    {
      title: t('home.svc_gt'),
      description: t('home.svc_gt_desc'),
      icon: <ShieldCheck className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] text-brand-coral" />,
    }
  ];

  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta">
      
      {/* Premium Hero Section */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[95vh] flex items-center pt-[140px] pb-[100px] bg-transparent overflow-hidden">
        {/* Subtle Decorative Background Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-[90px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-[16px] md:px-[32px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] items-center">
            
            {/* Left Column - Teks & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-[8px] bg-brand-blue/10 border border-brand-blue/20 px-[14px] py-[6px] rounded-[10px] mb-[20px] md:mb-[24px] shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-brand-coral animate-pulse"></div>
                <span className="text-brand-blue text-[11px] md:text-[13px] font-extrabold tracking-widest uppercase font-poppins">{t('home.badge')}</span>
              </div>
              
              <h1 className="text-[36px] sm:text-[44px] md:text-[60px] leading-[1.1] md:leading-[1.15] font-poppins font-bold mb-[20px] md:mb-[24px] text-text-primary tracking-[-0.03em] break-words hyphens-auto w-full">
                {t('home.title1')} <br className="hidden sm:block" />
                {t('home.title2')} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-[#2DD4BF] to-brand-coral">{t('home.title3')}</span>
              </h1>
              
              <p className="text-[15px] md:text-[18px] leading-[28px] md:leading-[32px] font-jakarta mb-[32px] md:mb-[40px] text-text-secondary max-w-[600px]">
                {t('home.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-[16px] w-full sm:w-auto">
                <Link to="/contact" className="inline-flex justify-center items-center bg-brand-coral text-white h-[52px] px-[36px] rounded-[16px] font-jakarta text-[15px] md:text-[16px] font-bold shadow-floating hover:bg-brand-coral-hover transition-all duration-300 border border-transparent hover:shadow-[0_0_25px_rgba(240,112,87,0.4)]">
                  {t('home.cta1')}
                  <ArrowRight className="ml-[8px] w-[18px] h-[18px]" />
                </Link>
                <Link to="/services" className="inline-flex justify-center items-center bg-glass text-text-primary h-[52px] px-[36px] rounded-[16px] font-jakarta text-[15px] md:text-[16px] font-bold border border-white/10 hover:bg-white/10 hover:border-brand-blue/30 transition-all duration-300">
                  {t('home.cta2')}
                </Link>
              </div>
            </div>

            {/* Right Column - Premium Featured Image Card */}
            <div className="lg:col-span-5 relative mt-[24px] lg:mt-0 w-full">
              <div className="absolute inset-0 bg-brand-blue/10 translate-x-[12px] translate-y-[12px] md:translate-x-[16px] md:translate-y-[16px] rounded-[24px] blur-[2px]"></div>
              <div className="relative rounded-[24px] overflow-hidden shadow-modal border border-white/10 bg-glass hover-glow transition-all duration-500">
                <img 
                  src={imgSanitation} 
                  alt="Modern Sanitation Infrastructure" 
                  className="w-full h-[280px] sm:h-[350px] lg:h-[420px] object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-[16px] left-[16px] md:bottom-[24px] md:left-[24px] bg-glass/90 backdrop-blur-md px-[16px] py-[10px] md:px-[20px] md:py-[12px] rounded-[12px] md:rounded-[16px] shadow-floating border border-white/10 flex items-center gap-[8px] md:gap-[12px]">
                  <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-brand-green shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
                  <span className="text-[12px] md:text-[14px] font-bold text-text-primary font-poppins">{t('home.badge_quality')}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section - Elevated UI */}
      <section className="py-[80px] md:py-[120px] bg-glass-subtle border-y border-white/5 relative">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] md:gap-[64px] items-center">
            
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-brand-coral/10 translate-x-[16px] translate-y-[16px] rounded-[24px] blur-[1px]"></div>
              <img 
                src={imgTreatment} 
                alt="Industrial Water Treatment" 
                className="relative w-full h-[350px] md:h-[500px] object-cover rounded-[24px] shadow-modal border border-white/10"
              />
              <div className="absolute -bottom-[24px] -right-[24px] bg-glass p-[24px] rounded-[16px] shadow-floating hidden md:flex items-center gap-[16px] border border-white/10 hover-glow transition-all duration-300">
                <div className="bg-brand-coral/10 w-[48px] h-[48px] rounded-[12px] flex items-center justify-center">
                  <ShieldCheck className="w-[24px] h-[24px] text-brand-coral" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-text-primary text-[20px] leading-none">{t('home.guarantee')}</h4>
                  <p className="font-jakarta text-text-secondary text-[14px]">{t('home.guarantee_sub')}</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-[12px] mb-[16px]">
                <div className="w-[32px] h-[2px] bg-brand-coral"></div>
                <span className="text-[14px] font-bold text-brand-coral uppercase tracking-wide font-poppins">{t('home.about_label')}</span>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[24px] leading-[1.2] font-poppins">
                {t('home.about_title')} <br/> {t('home.about_title2')}
              </h2>
              
              <div className="space-y-[16px] text-[16px] leading-[32px] text-text-secondary font-jakarta mb-[32px]">
                <p>
                  <strong className="text-text-primary font-bold">PT Sinar Mahira Bali (Biosmb)</strong> {t('home.about_p1')}
                </p>
                <p>
                  {t('home.about_p2')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mb-[40px]">
                {(t('home.features', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-[12px]">
                    <div className="w-[24px] h-[24px] rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 border border-brand-teal/20 shadow-[0_0_10px_rgba(45,212,191,0.1)]">
                      <CheckCircle2 className="w-[14px] h-[14px] text-brand-teal" />
                    </div>
                    <span className="font-jakarta text-[14px] font-bold text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex justify-center items-center bg-glass text-text-primary h-[49px] px-[32px] rounded-[16px] font-jakarta text-[16px] font-bold border border-white/10 hover:bg-white/10 transition-colors shadow-floating hover-glow">
                {t('home.about_cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Featured Cards */}
      <section className="py-[60px] md:py-[120px] bg-transparent">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-[36px] md:mb-[56px] gap-[16px] sm:gap-[24px]">
            <div className="max-w-[600px]">
              <div className="inline-flex items-center gap-[12px] mb-[12px] md:mb-[16px]">
                <div className="w-[32px] h-[2px] bg-brand-coral"></div>
                <span className="text-[13px] md:text-[14px] font-bold text-brand-coral uppercase tracking-wide font-poppins">{t('home.services_label')}</span>
              </div>
              <h2 className="text-[30px] md:text-[48px] font-bold text-text-primary leading-[1.2] font-poppins">
                {t('home.services_title')} <br className="hidden md:block" /> {t('home.services_title2')}
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-[8px] text-brand-blue font-jakarta text-[15px] md:text-[16px] font-bold hover:text-brand-coral transition-colors">
              {t('home.services_all')}
              <ArrowRight className="w-[20px] h-[20px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px]">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-glass rounded-[24px] border-l-[4px] border-l-brand-coral shadow-raised p-[20px] sm:p-[32px] md:p-[40px] hover:shadow-floating hover:border-l-brand-blue transition-all duration-300 hover-glow"
              >
                <div className="flex flex-row gap-[16px] sm:gap-[24px] items-start">
                  <div className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] rounded-[12px] sm:rounded-[16px] bg-brand-coral/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300">
                    <div className="scale-75 sm:scale-100 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[18px] sm:text-[24px] font-bold text-text-primary mb-[8px] sm:mb-[12px] leading-[1.3] font-poppins group-hover:text-brand-blue transition-colors truncate sm:whitespace-normal">
                      {service.title}
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-text-secondary leading-[24px] sm:leading-[28px] font-jakarta">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section - Distinctive Panels */}
      <section className="py-[80px] md:py-[120px] bg-glass-subtle border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
           <div className="text-center max-w-[700px] mx-auto mb-[64px]">
             <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[16px] leading-[1.2] font-poppins">
              {t('home.sectors_title')}
            </h2>
            <p className="text-[16px] md:text-[18px] text-text-secondary font-jakarta leading-[32px]">
              {t('home.sectors_subtitle')}
            </p>
           </div>
           
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {[
              { title: t('home.sector_home'), icon: <HomeIcon className="w-[32px] h-[32px]" />, desc: t('home.sector_home_desc') },
              { title: t('home.sector_commercial'), icon: <Building2 className="w-[32px] h-[32px]" />, desc: t('home.sector_commercial_desc') },
              { title: t('home.sector_industrial'), icon: <Factory className="w-[32px] h-[32px]" />, desc: t('home.sector_industrial_desc') }
            ].map((segment, i) => (
              <div key={i} className="bg-glass border border-white/8 rounded-[24px] p-[40px] shadow-raised hover:shadow-floating hover:-translate-y-1 transition-all duration-300 hover-glow">
                <div className="w-[64px] h-[64px] rounded-[16px] bg-brand-coral/10 flex items-center justify-center mb-[24px] text-brand-coral group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(240,112,87,0.1)]">
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
      <section className="py-[80px] md:py-[100px] bg-glass-subtle relative border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px] relative z-10">
          <div className="text-center mb-[48px]">
            <div className="inline-flex items-center gap-[12px] mb-[16px] justify-center w-full">
              <div className="w-[32px] h-[2px] bg-brand-coral"></div>
              <span className="text-[14px] font-bold text-brand-coral uppercase tracking-wide font-poppins">{t('home.partners_label')}</span>
              <div className="w-[32px] h-[2px] bg-brand-coral"></div>
            </div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary font-poppins">
              {t('home.partners_title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] max-w-[800px] mx-auto">
            {[
              "CV. AGAM HARMONI ALAM",
              "CV. MAJU JAYA"
            ].map((partner, index) => (
              <div key={index} className="group bg-glass rounded-[24px] p-[24px] md:p-[32px] shadow-raised hover:shadow-floating border border-white/8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 relative overflow-hidden hover-glow">
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="w-[56px] h-[56px] rounded-full bg-brand-blue/10 flex items-center justify-center mb-[16px] group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
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
          <div className="bg-glass rounded-[24px] shadow-modal p-[48px] md:p-[80px] text-center max-w-[900px] mx-auto relative overflow-hidden border border-white/10 hover-glow transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-[8px] bg-brand-coral"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[24px] leading-[1.2] font-poppins">
              {t('home.cta_title')} <br className="hidden md:block" /> {t('home.cta_title2')}
            </h2>
            <p className="text-[18px] text-text-secondary mb-[40px] font-jakarta max-w-[600px] mx-auto">
              {t('home.cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[16px]">
              <Link to="/contact" className="inline-flex justify-center items-center bg-brand-coral text-white h-[52px] w-[240px] rounded-[16px] font-jakarta text-[16px] font-bold shadow-floating hover:bg-brand-coral-hover hover:shadow-[0_0_25px_rgba(240,112,87,0.4)] transition-all duration-300">
                {t('home.cta_btn1')}
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center bg-transparent text-text-primary h-[52px] w-[240px] rounded-[16px] font-jakarta text-[16px] font-bold border-[2px] border-white/10 hover:bg-white/10 hover:border-brand-blue/30 transition-all duration-300">
                {t('home.cta_btn2')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;