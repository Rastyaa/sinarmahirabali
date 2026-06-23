import { useState } from 'react';
import { MapPin, Phone, Clock, Send, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Review {
  name: string;
  rating: number;
  service: string;
  comment: string;
  date: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [service, setService] = useState('Bio Septic Tank');
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Ketut Astawa',
      rating: 5,
      service: 'Bio Septic Tank',
      comment: 'Sangat puas dengan pemasangan Bio Septic Tank BIOSMB. Pelayanan cepat, tangki kuat, dan air buangan bersih tidak berbau.',
      date: '15 Juni 2026'
    },
    {
      name: 'Wayan Sudarsa',
      rating: 5,
      service: 'Grease Trap',
      comment: 'Grease trap fiberglass dipasang di dapur cafe kami di Canggu. Sangat efektif menyaring minyak dapur dan tidak ada sumbatan lagi.',
      date: '2 Juni 2026'
    },
    {
      name: 'Made Ariawan',
      rating: 4,
      service: 'IPAL Medis',
      comment: 'Sistem IPAL dipasang rapi di klinik kami. Pengujian baku mutu air limbah lulus dengan hasil baik.',
      date: '20 Mei 2026'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview: Review = {
      name,
      rating,
      service,
      comment,
      date: 'Hari ini'
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setComment('');
    setRating(5);
  };

  return (
    <div className="flex flex-col w-full bg-transparent font-jakarta min-h-screen pb-[120px]">
      {/* Header Section */}
      <section className="w-full bg-transparent pt-[160px] pb-[80px] px-[16px] md:px-[32px] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2] text-text-primary tracking-[-0.02em]">
            {t('contact.title')}
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-text-secondary leading-[32px]">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto w-full px-[16px] md:px-[32px] mt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] md:gap-[64px]">
          
          {/* Contact Info (Left) */}
          <div className="space-y-[40px]">
            <div>
              <h2 className="text-[32px] font-bold text-text-primary font-poppins mb-[16px]">{t('contact.info_title')}</h2>
              <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta mb-[32px]">
                {t('contact.info_subtitle')}
              </p>
            </div>

            <div className="space-y-[24px]">
              {/* Address */}
              <div className="flex items-start gap-[16px] p-[24px] bg-glass rounded-[16px] border border-white/8 hover:border-brand-coral/20 transition-all duration-300 hover-glow">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-brand-coral/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(240,112,87,0.15)]">
                  <MapPin className="w-[24px] h-[24px] text-brand-coral" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-text-primary font-poppins mb-[8px]">{t('contact.office')}</h3>
                  <p className="text-[16px] text-text-secondary leading-[24px] font-jakarta">
                    Jl. Astasura No.27, Peguyangan Kaja,<br/>
                    Kec. Denpasar Utara, Kota Denpasar, Bali 80115
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-[16px] p-[24px] bg-glass rounded-[16px] border border-white/8 hover:border-brand-coral/20 transition-all duration-300 hover-glow">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-brand-coral/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(240,112,87,0.15)]">
                  <Phone className="w-[24px] h-[24px] text-brand-coral" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-text-primary font-poppins mb-[8px]">{t('contact.phone_title')}</h3>
                  <p className="text-[16px] text-text-secondary leading-[24px] font-jakarta">
                    +62 889-8728-8952 (Marketing)<br/>
                    +62 889-8728-8952 (Support)
                  </p>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-start gap-[16px] p-[24px] bg-glass rounded-[16px] border border-white/8 hover:border-brand-coral/20 transition-all duration-300 hover-glow">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-brand-coral/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(240,112,87,0.15)]">
                  <Clock className="w-[24px] h-[24px] text-brand-coral" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-text-primary font-poppins mb-[8px]">{t('contact.hours_title')}</h3>
                  <p className="text-[16px] text-text-secondary leading-[24px] font-jakarta">
                    {t('contact.hours_weekday')}<br/>
                    {t('contact.hours_saturday')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Review Column (Right) */}
          <div className="space-y-[32px]">
            {/* Form Review */}
            <div className="bg-glass rounded-[24px] p-[32px] md:p-[40px] shadow-modal border border-white/10 border-t-[4px] border-t-brand-blue relative hover-glow transition-all duration-500">
              <h2 className="text-[28px] font-bold text-text-primary font-poppins mb-[24px]">{t('contact.review_title')}</h2>
              
              <form className="space-y-[20px]" onSubmit={handleSubmit}>
                <div className="space-y-[8px]">
                  <label className="text-[14px] font-bold text-text-primary font-poppins">{t('contact.review_name')} *</label>
                  <input 
                    type="text" 
                    required
                    placeholder={t('contact.review_name_ph')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-[48px] px-[16px] bg-white/5 border border-white/10 rounded-[12px] text-text-primary placeholder-text-muted focus:outline-none focus:bg-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-[16px] font-jakarta"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                  <div className="space-y-[8px]">
                    <label className="text-[14px] font-bold text-text-primary font-poppins">{t('contact.review_service')}</label>
                    <div className="relative">
                      <select 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full h-[48px] px-[16px] bg-white/5 border border-white/10 rounded-[12px] text-text-primary focus:outline-none focus:bg-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-[16px] font-jakarta appearance-none"
                      >
                        <option value="Bio Septic Tank" className="bg-[#0f172a] text-text-primary">Bio Septic Tank</option>
                        <option value="IPAL / STP" className="bg-[#0f172a] text-text-primary">IPAL / STP</option>
                        <option value="Water Treatment" className="bg-[#0f172a] text-text-primary">Water Treatment</option>
                        <option value="Grease Trap" className="bg-[#0f172a] text-text-primary">Grease Trap</option>
                      </select>
                      <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-[16px] h-[16px] text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-[8px]">
                    <label className="text-[14px] font-bold text-text-primary font-poppins">{t('contact.review_rating')}</label>
                    <div className="flex items-center gap-[6px] h-[48px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`w-[24px] md:w-[28px] h-[24px] md:h-[28px] transition-colors ${
                              star <= rating ? 'text-brand-yellow fill-brand-yellow' : 'text-text-muted hover:text-brand-yellow'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-[8px]">
                  <label className="text-[14px] font-bold text-text-primary font-poppins">{t('contact.review_comment')} *</label>
                  <textarea 
                    rows={3} 
                    required
                    placeholder={t('contact.review_comment_ph')}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-[16px] bg-white/5 border border-white/10 rounded-[12px] text-text-primary placeholder-text-muted focus:outline-none focus:bg-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-[16px] font-jakarta resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full h-[50px] flex items-center justify-center gap-[12px] bg-brand-coral text-white font-bold font-jakarta text-[16px] rounded-[16px] hover:bg-brand-coral-hover shadow-floating transition-colors cursor-pointer"
                >
                  {t('contact.review_submit')}
                  <Send className="w-[18px] h-[18px]" />
                </button>
              </form>
            </div>

            {/* List Review Terbaru */}
            <div className="space-y-[16px]">
              <h3 className="text-[20px] font-bold text-text-primary font-poppins">{t('contact.review_recent')}</h3>
              <div className="space-y-[16px] max-h-[350px] overflow-y-auto pr-[8px] scrollbar-thin">
                {reviews.map((rev, index) => (
                  <div key={index} className="bg-glass rounded-[16px] p-[20px] border border-white/5 hover-glow transition-all duration-300">
                    <div className="flex justify-between items-start mb-[8px]">
                      <div>
                        <h4 className="font-bold text-[16px] text-text-primary font-poppins">{rev.name}</h4>
                        <span className="text-[12px] text-brand-blue font-semibold">{rev.service}</span>
                      </div>
                      <span className="text-[11px] text-text-muted">{rev.date}</span>
                    </div>
                    <div className="flex gap-[4px] mb-[10px]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-[14px] h-[14px] ${i < rev.rating ? 'text-brand-yellow fill-brand-yellow' : 'text-white/10'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-[14px] text-text-secondary leading-[22px] font-jakarta">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="w-full mt-[60px] md:mt-[80px]">
        <div className="w-full h-[300px] md:h-[400px] bg-glass-subtle border-y border-white/5 relative">
          <div className="absolute inset-0 flex items-center justify-center text-text-muted flex-col gap-2 z-20 pointer-events-none">
            <MapPin className="w-8 h-8" />
            <span className="font-poppins font-medium">Google Maps</span>
          </div>
          <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8872583856385!2d115.22384667591696!3d-8.606822287431264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f1e7af70419%3A0x8a6fbb2b50c53f51!2sPT%20Sinar%20Mahira%20Bali!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
             className="w-full h-full border-0 relative z-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500" 
             loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;