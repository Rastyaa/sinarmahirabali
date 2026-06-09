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
    <footer className="bg-surface-light text-text-secondary border-t border-border-subtle mt-[120px]">
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[32px] py-[56px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-[16px]">
              <div className="text-brand-blue">
                <Droplets className="w-8 h-8" />
              </div>
              <span className="text-[20px] font-bold text-text-primary font-poppins">
                Sinar Mahira Bali
              </span>
            </Link>
            <p className="text-[16px] leading-[32px] font-jakarta mb-[20px]">
              Perusahaan pengolahan air limbah, sanitasi lingkungan, dan solusi penyimpanan air berbasis fiberglass terpercaya di Bali.
            </p>
            <div className="flex gap-[16px]">
              <a href="#" className="text-text-muted hover:text-brand-blue transition-colors">
                <FacebookIcon className="w-[22px] h-[22px]" />
              </a>
              <a href="#" className="text-text-muted hover:text-brand-blue transition-colors">
                <InstagramIcon className="w-[22px] h-[22px]" />
              </a>
              <a href="#" className="text-text-muted hover:text-brand-blue transition-colors">
                <LinkedinIcon className="w-[22px] h-[22px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[20px] text-text-primary font-bold font-poppins mb-[16px]">Tautan Cepat</h4>
            <ul className="space-y-[12px] font-jakarta text-[16px]">
              <li><Link to="/about" className="text-brand-blue hover:text-brand-coral transition-colors">Tentang Kami</Link></li>
              <li><Link to="/services" className="text-brand-blue hover:text-brand-coral transition-colors">Layanan</Link></li>
              <li><Link to="/projects" className="text-brand-blue hover:text-brand-coral transition-colors">Proyek Kami</Link></li>
              <li><Link to="/faq" className="text-brand-blue hover:text-brand-coral transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[20px] text-text-primary font-bold font-poppins mb-[16px]">Layanan Utama</h4>
            <ul className="space-y-[12px] font-jakarta text-[16px]">
              <li className="text-text-secondary">IPAL & STP</li>
              <li className="text-text-secondary">Bio Septic Tank</li>
              <li className="text-text-secondary">Water Treatment</li>
              <li className="text-text-secondary">Grease Trap</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[20px] text-text-primary font-bold font-poppins mb-[16px]">Hubungi Kami</h4>
            <ul className="space-y-[16px] font-jakarta text-[16px]">
              <li className="flex items-start gap-[12px]">
                <MapPin className="w-[22px] h-[22px] text-brand-coral shrink-0 mt-1" />
                <span className="text-text-secondary">Denpasar, Bali, Indonesia</span>
              </li>
              <li className="flex items-center gap-[12px]">
                <Phone className="w-[22px] h-[22px] text-brand-coral shrink-0" />
                <span className="text-text-secondary">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-[12px]">
                <Mail className="w-[22px] h-[22px] text-brand-coral shrink-0" />
                <span className="text-text-secondary">info@sinarmahirabali.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-border-subtle bg-white">
        <div className="max-w-[1440px] mx-auto px-[16px] md:px-[32px] py-[24px] text-[12px] font-jakarta text-center flex flex-col md:flex-row justify-between items-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} PT. Sinar Mahira Bali. Hak Cipta Dilindungi.</p>
          <div className="mt-4 md:mt-0 space-x-[16px]">
            <Link to="#" className="text-brand-blue hover:text-brand-coral transition-colors">Kebijakan Privasi</Link>
            <Link to="#" className="text-brand-blue hover:text-brand-coral transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
