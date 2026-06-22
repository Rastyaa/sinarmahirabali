import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: 'Apa itu IPAL dan mengapa penting?',
    answer: 'IPAL (Instalasi Pengolahan Air Limbah) adalah struktur khusus yang dirancang untuk memproses limbah cair agar aman dibuang ke lingkungan. Ini penting untuk mencegah pencemaran air tanah, menjaga kesehatan masyarakat, dan mematuhi regulasi lingkungan pemerintah.'
  },
  {
    question: 'Apa perbedaan IPAL dan STP?',
    answer: 'IPAL umumnya merujuk pada instalasi pengolahan limbah secara umum termasuk medis dan industri, sedangkan STP (Sewage Treatment Plant) secara spesifik dirancang untuk mengolah limbah domestik/blackwater dari bangunan seperti hotel, apartemen, atau perumahan komersial.'
  },
  {
    question: 'Apakah melayani pemasangan untuk villa dan hotel?',
    answer: 'Ya, kami menyediakan layanan lengkap mulai dari perencanaan kapasitas, produksi unit, hingga pemasangan instalasi STP dan IPAL untuk berbagai skala properti komersial termasuk villa, resort, dan hotel bintang 5 di seluruh Bali.'
  },
  {
    question: 'Apakah ukuran tangki fiberglass bisa dicustom sesuai lahan?',
    answer: 'Sangat bisa. Keunggulan kami adalah memiliki fasilitas fabrikasi fiberglass sendiri. Kami dapat memproduksi tangki dengan ukuran dan bentuk khusus menyesuaikan ketersediaan lahan (space) di lokasi proyek Anda.'
  },
  {
    question: 'Apakah tersedia layanan maintenance setelah pemasangan?',
    answer: 'Tentu. Kami memberikan garansi kebocoran untuk produk tangki fiberglass kami. Selain itu, kami juga menawarkan kontrak maintenance rutin untuk memastikan sistem pengolahan limbah Anda beroperasi secara optimal dan sesuai baku mutu.'
  },
  {
    question: 'Bagaimana alur untuk memulai konsultasi?',
    answer: 'Anda bisa menghubungi kami via WhatsApp atau mengisi form di halaman Kontak. Tim ahli kami akan menjadwalkan konsultasi awal, diikuti dengan survey lokasi secara gratis (untuk area tertentu) guna menentukan solusi dan kapasitas yang tepat.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen pb-[120px]">
      {/* Header Section */}
      <section className="w-full bg-transparent pt-[160px] pb-[80px] px-[16px] md:px-[32px] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2] text-text-primary tracking-[-0.02em]">
            Tanya Jawab (FAQ)
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-text-secondary leading-[32px]">
            Temukan jawaban atas pertanyaan yang paling sering diajukan seputar layanan, instalasi, dan produk pengolahan air limbah kami.
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
                className={`bg-glass rounded-[16px] border ${openIndex === index ? 'border-brand-coral/40' : 'border-white/8'} overflow-hidden transition-colors`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-[24px] text-left focus:outline-none"
                >
                  <span className={`text-[18px] font-bold font-poppins ${openIndex === index ? 'text-brand-coral' : 'text-text-primary'} pr-[16px]`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-[24px] h-[24px] text-text-muted shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-coral' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-[24px] overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-[24px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta border-t border-white/8 pt-[16px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="space-y-[32px]">
             <div className="bg-glass border-t-[4px] border-t-brand-blue rounded-[16px] p-[32px] shadow-raised text-center flex flex-col items-center border border-white/8">
               <div className="w-[64px] h-[64px] rounded-full bg-brand-blue/10 flex items-center justify-center mb-[24px]">
                 <HelpCircle className="w-[32px] h-[32px] text-brand-blue" />
               </div>
               <h3 className="text-[20px] font-bold text-text-primary font-poppins mb-[16px]">
                 Masih Punya Pertanyaan?
               </h3>
               <p className="text-[16px] text-text-secondary leading-[28px] font-jakarta mb-[32px]">
                 Jika Anda tidak menemukan jawaban yang dicari, jangan ragu untuk menghubungi tim support kami langsung.
               </p>
               <Link 
                 to="/contact" 
                 className="flex items-center justify-center gap-[8px] w-full bg-glass border border-white/10 text-text-primary h-[48px] rounded-[12px] font-bold hover:bg-brand-blue hover:text-white hover:border-transparent transition-all duration-200"
               >
                 <MessageCircle className="w-[18px] h-[18px]" />
                 Hubungi Support
               </Link>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FAQ;
