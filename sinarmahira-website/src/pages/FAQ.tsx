import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const faqData = [
  {
    question: "Berapa lama proses pemasangan Bio Septic Tank?",
    answer: "Proses pemasangan Bio Septic Tank kami sangat cepat dan praktis. Biasanya hanya memakan waktu 1 hingga 2 hari kerja tergantung kondisi tanah dan lokasi pemasangan."
  },
  {
    question: "Apakah produk tangki fiberglass memiliki garansi?",
    answer: "Tentu. Semua produk tangki fiberglass kami (IPAL, STP, Bio Septic Tank) dilengkapi dengan garansi kebocoran hingga 10 tahun, memastikan investasi sanitasi Anda aman jangka panjang."
  },
  {
    question: "Apakah air hasil olahan IPAL aman dibuang ke selokan?",
    answer: "Sangat aman. Sistem IPAL dan STP kami menggunakan teknologi bio-filter anaerobik & aerobik yang mengurai limbah sehingga air hasil olahannya tidak berbau dan telah memenuhi standar baku mutu lingkungan hidup dari pemerintah."
  },
  {
    question: "Apakah Bio Septic Tank perlu disedot/kuras berkala?",
    answer: "Tidak perlu. Sistem biologis di dalam tangki bekerja mengurai feses menjadi cairan secara otomatis. Anda tidak perlu lagi repot memanggil jasa sedot WC seperti pada septic tank beton konvensional."
  },
  {
    question: "Bisakah Sinar Mahira melayani pembuatan STP custom untuk Hotel?",
    answer: "Bisa. Kami memiliki tim engineer yang berpengalaman mendesain dan membangun sistem Sewage Treatment Plant (STP) dengan kapasitas custom sesuai kebutuhan operasional dan ketersediaan lahan hotel atau resort Anda."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen pb-[120px]">
      {/* Header Section */}
      <section className="w-full bg-transparent pt-[160px] pb-[80px] px-[16px] md:px-[32px] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2] text-text-primary tracking-[-0.02em]">
            {t('faq.title')}
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-text-secondary leading-[32px]">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto w-full px-[16px] md:px-[32px] mt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[48px]">
          
          {/* FAQ Accordion */}
          <div className="lg:col-span-2 space-y-[16px]">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-glass rounded-[16px] border ${openIndex === index ? 'border-brand-coral/50 shadow-floating' : 'border-white/8 shadow-raised'} overflow-hidden transition-all duration-300 hover-glow`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-[24px] text-left focus:outline-none"
                >
                  <span className={`text-[18px] font-bold font-poppins ${openIndex === index ? 'text-brand-coral' : 'text-text-primary'} pr-[16px]`}>
                    {t(`faq.list.${index}.question`, faq.question)}
                  </span>
                  <ChevronDown 
                    className={`w-[24px] h-[24px] text-text-muted shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-coral' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-[24px] overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-[24px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta border-t border-white/5 pt-[16px]">
                    {t(`faq.list.${index}.answer`, faq.answer)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="space-y-[32px]">
             <div className="bg-glass border-t-[4px] border-t-brand-blue rounded-[16px] p-[32px] shadow-modal text-center flex flex-col items-center border border-white/8 hover-glow transition-all duration-300">
               <div className="w-[64px] h-[64px] rounded-full bg-brand-blue/10 flex items-center justify-center mb-[24px] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                 <HelpCircle className="w-[32px] h-[32px] text-brand-blue" />
               </div>
               <h3 className="text-[20px] font-bold text-text-primary font-poppins mb-[16px]">
                 {t('faq.help_title')}
               </h3>
               <p className="text-[16px] text-text-secondary leading-[28px] font-jakarta mb-[32px]">
                 {t('faq.help_text')}
               </p>
               <Link 
                 to="/contact" 
                 className="flex items-center justify-center gap-[8px] w-full bg-glass border border-white/10 text-text-primary h-[48px] rounded-[12px] font-bold hover:bg-brand-blue hover:text-white hover:border-transparent transition-all duration-300 shadow-floating"
               >
                 <MessageCircle className="w-[18px] h-[18px]" />
                 {t('faq.help_btn')}
               </Link>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FAQ;