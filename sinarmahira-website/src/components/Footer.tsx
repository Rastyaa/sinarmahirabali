import { Link } from 'react-router-dom';
import { Droplets, MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-glass-subtle text-text-secondary border-t border-white/5 mt-[120px]">
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[32px] py-[56px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-[10px] mb-[20px]">
              <div className="text-brand-blue">
                <Droplets className="w-[28px] h-[28px]" />
              </div>
              <span className="text-[20px] font-bold text-text-primary font-poppins">
                Sinar Mahira
              </span>
            </Link>
            <p className="text-[15px] leading-[28px] font-jakarta mb-[24px] text-text-secondary">
              Perusahaan pengolahan air limbah, sanitasi lingkungan, dan solusi penyimpanan air berbasis fiberglass terpercaya di Bali.
            </p>
            <div className="flex gap-[12px]">
              <a href="#" className="w-[40px] h-[40px] rounded-[10px] bg-white/5 border border-white/8 flex items-center justify-center text-text-muted hover:text-brand-blue hover:bg-brand-blue/10 hover:border-brand-blue/20 transition-all duration-200">
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-[40px] h-[40px] rounded-[10px] bg-white/5 border border-white/8 flex items-center justify-center text-text-muted hover:text-brand-coral hover:bg-brand-coral/10 hover:border-brand-coral/20 transition-all duration-200">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-[40px] h-[40px] rounded-[10px] bg-white/5 border border-white/8 flex items-center justify-center text-text-muted hover:text-brand-blue hover:bg-brand-blue/10 hover:border-brand-blue/20 transition-all duration-200">
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[18px] text-text-primary font-bold font-poppins mb-[20px]">Tautan Cepat</h4>
            <ul className="space-y-[12px] font-jakarta text-[15px]">
              <li><Link to="/about" className="text-text-secondary hover:text-brand-coral transition-colors">Tentang Kami</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-brand-coral transition-colors">Layanan</Link></li>
              <li><Link to="/projects" className="text-text-secondary hover:text-brand-coral transition-colors">Proyek Kami</Link></li>
              <li><Link to="/clients" className="text-text-secondary hover:text-brand-coral transition-colors">Client Kami</Link></li>
              <li><Link to="/faq" className="text-text-secondary hover:text-brand-coral transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[18px] text-text-primary font-bold font-poppins mb-[20px]">Layanan Utama</h4>
            <ul className="space-y-[12px] font-jakarta text-[15px]">
              <li className="text-text-secondary hover:text-text-primary transition-colors cursor-default">IPAL & STP</li>
              <li className="text-text-secondary hover:text-text-primary transition-colors cursor-default">Bio Septic Tank</li>
              <li className="text-text-secondary hover:text-text-primary transition-colors cursor-default">Water Treatment</li>
              <li className="text-text-secondary hover:text-text-primary transition-colors cursor-default">Grease Trap</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[18px] text-text-primary font-bold font-poppins mb-[20px]">Hubungi Kami</h4>
            <ul className="space-y-[16px] font-jakarta text-[15px]">
              <li className="flex items-start gap-[12px]">
                <MapPin className="w-[20px] h-[20px] text-brand-coral shrink-0 mt-[2px]" />
                <span className="text-text-secondary">Denpasar, Bali, Indonesia</span>
              </li>
              <li className="flex items-center gap-[12px]">
                <Phone className="w-[20px] h-[20px] text-brand-coral shrink-0" />
                <span className="text-text-secondary">+62 889-8728-8952</span>
              </li>
              <li className="flex items-center gap-[12px]">
                <Mail className="w-[20px] h-[20px] text-brand-coral shrink-0" />
                <span className="text-text-secondary">info@sinarmahirabali.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-[16px] md:px-[32px] py-[24px] text-[13px] font-jakarta text-center flex flex-col md:flex-row justify-between items-center text-text-muted">
          <p>&copy; {new Date().getFullYear()} PT Sinar Mahira Bali (Biosmb). Hak Cipta Dilindungi.</p>
          <div className="mt-4 md:mt-0 space-x-[20px]">
            <Link to="#" className="text-text-secondary hover:text-brand-coral transition-colors">Kebijakan Privasi</Link>
            <Link to="#" className="text-text-secondary hover:text-brand-coral transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
