import { Factory, Leaf, Droplets, ShieldCheck, Settings, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSEO } from '../routes/AppRoutes';

const Services = () => {
  const { t } = useTranslation();

  useSEO({
    title: 'Layanan IPAL, STP & Water Treatment Bali | Biosmb - PT Sinar Mahira Bali',
    description: 'Daftar layanan lengkap kami: IPAL, Sewage Treatment Plant (STP), Bio Septic Tank, Water Treatment Plant (WTP), dan Grease Trap di Bali.',
    keywords: 'layanan ipal bali, jasa stp bali, water treatment bali, biosmb, tangki septik fiberglass bali'
  });

  const servicesList = [
    {
      title: t('service_detail.ipal.title'),
      slug: 'ipal',
      description: t('service_detail.ipal.description'),
      icon: <Factory className="w-[32px] h-[32px] text-brand-coral" />
    },
    {
      title: t('service_detail.stp.title'),
      slug: 'stp',
      description: t('service_detail.stp.description'),
      icon: <Settings className="w-[32px] h-[32px] text-brand-coral" />
    },
    {
      title: t('service_detail.bio_septic_tank.title'),
      slug: 'bio-septic-tank',
      description: t('service_detail.bio_septic_tank.description'),
      icon: <Leaf className="w-[32px] h-[32px] text-brand-coral" />
    },
    {
      title: t('service_detail.water_treatment.title'),
      slug: 'water-treatment',
      description: t('service_detail.water_treatment.description'),
      icon: <Droplets className="w-[32px] h-[32px] text-brand-coral" />
    },
    {
      title: t('service_detail.grease_trap.title'),
      slug: 'grease-trap',
      description: t('service_detail.grease_trap.description'),
      icon: <ShieldCheck className="w-[32px] h-[32px] text-brand-coral" />
    },
    {
      title: t('service_detail.maintenance.title'),
      slug: 'maintenance',
      description: t('service_detail.maintenance.description'),
      icon: <Wrench className="w-[32px] h-[32px] text-brand-coral" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen">
      {/* Header Section */}
      <section className="w-full bg-transparent pt-[160px] pb-[80px] px-[16px] md:px-[32px] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2] text-text-primary tracking-[-0.02em]">
            {t('services.title')}
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-text-secondary leading-[32px]">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-[80px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {servicesList.map((service, index) => (
              <div 
                key={index} 
                className="group bg-glass rounded-[24px] border-l-[4px] border-l-brand-coral shadow-raised p-[32px] md:p-[48px] hover:shadow-floating hover:border-l-brand-blue transition-all duration-300 flex flex-col h-full hover-glow"
              >
                <div className="flex flex-col md:flex-row gap-[24px] items-start flex-grow">
                  <div className="w-[64px] h-[64px] rounded-[16px] bg-brand-coral/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-[24px] md:text-[28px] font-bold text-text-primary mb-[16px] leading-[1.3] font-poppins group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta mb-[24px] flex-grow">
                      {service.description}
                    </p>
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="inline-flex items-center gap-[8px] text-brand-blue font-bold font-jakarta text-[16px] hover:text-brand-coral transition-colors mt-auto"
                    >
                      {t('services.learn_more')}
                      <ArrowRight className="w-[20px] h-[20px]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] bg-glass-subtle border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
          <div className="bg-glass border border-white/10 rounded-[24px] shadow-modal p-[48px] md:p-[80px] text-center text-text-primary relative overflow-hidden hover-glow transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-[8px] bg-brand-coral"></div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-text-primary mb-[24px] leading-[1.2] font-poppins tracking-[-0.02em]">
              {t('services.cta_title')}
            </h2>
            <p className="text-[18px] text-text-secondary mb-[40px] font-jakarta max-w-[600px] mx-auto leading-[32px]">
              {t('services.cta_subtitle')}
            </p>
            <Link to="/contact" className="inline-flex justify-center items-center bg-brand-coral text-white h-[56px] px-[40px] rounded-[16px] font-jakarta text-[18px] font-bold shadow-floating hover:bg-brand-coral-hover transition-colors">
              {t('services.cta_btn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
