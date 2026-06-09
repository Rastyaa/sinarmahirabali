import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col w-full bg-surface-light font-jakarta min-h-screen pb-[120px]">
      {/* Header Section */}
      <section className="w-full bg-brand-blue pt-[160px] pb-[80px] px-[16px] md:px-[32px]">
        <div className="max-w-[1200px] mx-auto text-center text-white">
          <h1 className="text-[40px] md:text-[56px] font-poppins font-bold mb-[24px] leading-[1.2]">
            Hubungi Kami
          </h1>
          <p className="text-[18px] md:text-[20px] font-jakarta max-w-[800px] mx-auto text-white/80 leading-[32px]">
            Punya pertanyaan atau butuh penawaran untuk proyek sanitasi Anda? Tim ahli kami siap membantu Anda kapan saja.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto w-full px-[16px] md:px-[32px] mt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] md:gap-[64px]">
          
          {/* Contact Info (Left) */}
          <div className="space-y-[40px]">
            <div>
              <h2 className="text-[32px] font-bold text-text-primary font-poppins mb-[16px]">Informasi Kontak</h2>
              <p className="text-[16px] text-text-secondary leading-[32px] font-jakarta mb-[32px]">
                Silakan hubungi kami melalui salah satu kontak di bawah ini, atau kunjungi kantor kami langsung untuk berkonsultasi mengenai kebutuhan pengolahan air limbah Anda.
              </p>
            </div>

            <div className="space-y-[24px]">
              {/* Address */}
              <div className="flex items-start gap-[16px] p-[24px] bg-white rounded-[16px] border border-border-subtle shadow-sm hover:border-brand-coral transition-colors">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-brand-coral/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-[24px] h-[24px] text-brand-coral" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-text-primary font-poppins mb-[8px]">Kantor Pusat</h3>
                  <p className="text-[16px] text-text-secondary leading-[24px] font-jakarta">
                    Jl. Gatot Subroto Timur No. 123<br/>
                    Denpasar, Bali, Indonesia 80237
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-[16px] p-[24px] bg-white rounded-[16px] border border-border-subtle shadow-sm hover:border-brand-coral transition-colors">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-brand-coral/10 flex items-center justify-center shrink-0">
                  <Phone className="w-[24px] h-[24px] text-brand-coral" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-text-primary font-poppins mb-[8px]">Telepon & WhatsApp</h3>
                  <p className="text-[16px] text-text-secondary leading-[24px] font-jakarta">
                    +62 812 3456 7890 (Marketing)<br/>
                    +62 811 9876 5432 (Support)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-[16px] p-[24px] bg-white rounded-[16px] border border-border-subtle shadow-sm hover:border-brand-coral transition-colors">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-brand-coral/10 flex items-center justify-center shrink-0">
                  <Mail className="w-[24px] h-[24px] text-brand-coral" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-text-primary font-poppins mb-[8px]">Email</h3>
                  <p className="text-[16px] text-text-secondary leading-[24px] font-jakarta">
                    info@sinarmahirabali.com<br/>
                    sales@sinarmahirabali.com
                  </p>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-start gap-[16px] p-[24px] bg-white rounded-[16px] border border-border-subtle shadow-sm hover:border-brand-coral transition-colors">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-brand-coral/10 flex items-center justify-center shrink-0">
                  <Clock className="w-[24px] h-[24px] text-brand-coral" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-text-primary font-poppins mb-[8px]">Jam Operasional</h3>
                  <p className="text-[16px] text-text-secondary leading-[24px] font-jakarta">
                    Senin - Jumat: 08:00 - 17:00 WITA<br/>
                    Sabtu: 08:00 - 13:00 WITA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="bg-white rounded-[24px] p-[32px] md:p-[48px] shadow-raised border-t-[4px] border-t-brand-blue relative">
            <h2 className="text-[28px] font-bold text-text-primary font-poppins mb-[32px]">Kirim Pesan</h2>
            
            <form className="space-y-[24px]" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <div className="space-y-[8px]">
                  <label className="text-[14px] font-bold text-text-primary font-poppins">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama Anda" 
                    className="w-full h-[48px] px-[16px] bg-surface-light border border-border-subtle rounded-[12px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-[16px] font-jakarta"
                  />
                </div>
                <div className="space-y-[8px]">
                  <label className="text-[14px] font-bold text-text-primary font-poppins">Nomor Telepon/WA *</label>
                  <input 
                    type="tel" 
                    placeholder="Contoh: 08123456789" 
                    className="w-full h-[48px] px-[16px] bg-surface-light border border-border-subtle rounded-[12px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-[16px] font-jakarta"
                  />
                </div>
              </div>
              
              <div className="space-y-[8px]">
                <label className="text-[14px] font-bold text-text-primary font-poppins">Email</label>
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda (opsional)" 
                  className="w-full h-[48px] px-[16px] bg-surface-light border border-border-subtle rounded-[12px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-[16px] font-jakarta"
                />
              </div>

              <div className="space-y-[8px]">
                <label className="text-[14px] font-bold text-text-primary font-poppins">Jenis Layanan</label>
                <select className="w-full h-[48px] px-[16px] bg-surface-light border border-border-subtle rounded-[12px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-[16px] font-jakarta appearance-none">
                  <option value="">Pilih layanan yang diminati</option>
                  <option value="ipal">IPAL / STP</option>
                  <option value="septic">Bio Septic Tank</option>
                  <option value="wtp">Water Treatment</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div className="space-y-[8px]">
                <label className="text-[14px] font-bold text-text-primary font-poppins">Pesan/Kebutuhan *</label>
                <textarea 
                  rows={4} 
                  placeholder="Jelaskan kebutuhan proyek atau pertanyaan Anda..." 
                  className="w-full p-[16px] bg-surface-light border border-border-subtle rounded-[12px] focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-[16px] font-jakarta resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full h-[56px] flex items-center justify-center gap-[12px] bg-brand-coral text-white font-bold font-jakarta text-[18px] rounded-[16px] hover:bg-brand-coral-hover shadow-floating transition-colors"
              >
                Kirim Pesan
                <Send className="w-[20px] h-[20px]" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="w-full mt-[80px]">
        <div className="w-full h-[400px] bg-surface-light border-y border-border-subtle relative">
          <div className="absolute inset-0 flex items-center justify-center text-text-muted flex-col gap-2">
            <MapPin className="w-8 h-8" />
            <span className="font-poppins font-medium">Google Maps Embed Placeholder</span>
          </div>
          {/* Implement actual map iframe here */}
          <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4093959828555!2d115.2228!3d-8.6525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzknMDkuMCJTIDExNcKwMTMnMjIuMSJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
             className="w-full h-full border-0 relative z-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" 
             loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
