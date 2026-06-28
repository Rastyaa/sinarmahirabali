import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import imgStp from '../assets/IMG_0353.JPG.jpeg';
import imgGreaseTrap from '../assets/IMG_0354.JPG.jpeg';
import imgBioSeptic from '../assets/IMG_0355.JPG.jpeg';
import imgIpalMedis from '../assets/IMG_0356.JPG.jpeg';
import imgWtp from '../assets/IMG_0435.JPG.jpeg';
import imgExtra from '../assets/IMG_0358.JPG.jpeg';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const getServiceData = (slug: string | undefined) => {
    switch (slug) {
      case 'ipal':
        return {
          title: t('service_detail.ipal.title'),
          description: t('service_detail.ipal.description'),
          fullContent: t('service_detail.ipal.fullContent'),
          benefits: t('service_detail.ipal.benefits', { returnObjects: true }) as string[],
          suitableFor: t('service_detail.ipal.suitableFor', { returnObjects: true }) as string[],
          imageUrl: imgIpalMedis
        };
      case 'stp':
        return {
          title: t('service_detail.stp.title'),
          description: t('service_detail.stp.description'),
          fullContent: t('service_detail.stp.fullContent'),
          benefits: t('service_detail.stp.benefits', { returnObjects: true }) as string[],
          suitableFor: t('service_detail.stp.suitableFor', { returnObjects: true }) as string[],
          imageUrl: imgStp
        };
      case 'bio-septic-tank':
        return {
          title: t('service_detail.bio_septic_tank.title'),
          description: t('service_detail.bio_septic_tank.description'),
          fullContent: t('service_detail.bio_septic_tank.fullContent'),
          benefits: t('service_detail.bio_septic_tank.benefits', { returnObjects: true }) as string[],
          suitableFor: t('service_detail.bio_septic_tank.suitableFor', { returnObjects: true }) as string[],
          imageUrl: imgBioSeptic
        };
      case 'water-treatment':
        return {
          title: t('service_detail.water_treatment.title'),
          description: t('service_detail.water_treatment.description'),
          fullContent: t('service_detail.water_treatment.fullContent'),
          benefits: t('service_detail.water_treatment.benefits', { returnObjects: true }) as string[],
          suitableFor: t('service_detail.water_treatment.suitableFor', { returnObjects: true }) as string[],
          imageUrl: imgWtp
        };
      case 'grease-trap':
        return {
          title: t('service_detail.grease_trap.title'),
          description: t('service_detail.grease_trap.description'),
          fullContent: t('service_detail.grease_trap.fullContent'),
          benefits: t('service_detail.grease_trap.benefits', { returnObjects: true }) as string[],
          suitableFor: t('service_detail.grease_trap.suitableFor', { returnObjects: true }) as string[],
          imageUrl: imgGreaseTrap
        };
      default:
        return {
          title: t('service_detail.maintenance.title'),
          description: t('service_detail.maintenance.description'),
          fullContent: t('service_detail.maintenance.fullContent'),
          benefits: t('service_detail.maintenance.benefits', { returnObjects: true }) as string[],
          suitableFor: t('service_detail.maintenance.suitableFor', { returnObjects: true }) as string[],
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
          {t('service_detail.back')}
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
                <h2 className="text-[24px] font-bold text-text-primary font-poppins mb-[16px]">{t('service_detail.summary_title')}</h2>
                <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta">
                  {service.description}
                </p>
                <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta mt-[16px]">
                  {service.fullContent}
                </p>
              </section>

              <section>
                <h2 className="text-[24px] font-bold text-text-primary font-poppins mb-[16px]">{t('service_detail.benefits_title')}</h2>
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
                <h3 className="text-[20px] font-bold text-brand-blue font-poppins mb-[16px] drop-shadow-[0_0_10px_rgba(56,189,248,0.2)]">{t('service_detail.suitable_title')}</h3>
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
                <h3 className="text-[20px] font-bold font-poppins mb-[16px]">{t('service_detail.cta_title')}</h3>
                <p className="text-[14px] text-white/90 mb-[24px] font-jakarta">
                  {t('service_detail.cta_text', { service: service.title })}
                </p>
                <a href="https://wa.me/6288987288952" className="flex items-center justify-center gap-[8px] bg-white text-brand-coral h-[48px] rounded-[12px] font-bold shadow-floating hover:bg-slate-50 transition-colors">
                  <Phone className="w-[18px] h-[18px]" />
                  {t('service_detail.cta_btn')}
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
