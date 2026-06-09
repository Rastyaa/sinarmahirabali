import { Link } from 'react-router-dom';
import { Droplets, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-teal-500 text-white p-2 rounded-lg">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Sinar Mahira Bali
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Perusahaan pengolahan air limbah, sanitasi lingkungan, dan solusi penyimpanan air berbasis fiberglass terpercaya di Bali.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-600 flex items-center justify-center hover:bg-teal-500 text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-600 flex items-center justify-center hover:bg-teal-500 text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-600 flex items-center justify-center hover:bg-teal-500 text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Layanan</Link></li>
              <li><Link to="/projects" className="hover:text-teal-400 transition-colors">Proyek Kami</Link></li>
              <li><Link to="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Layanan Utama</h4>
            <ul className="space-y-3">
              <li className="hover:text-teal-400 transition-colors cursor-pointer">IPAL & STP</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Bio Septic Tank</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Water Treatment</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Grease Trap</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                <span>Denpasar, Bali, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <span>info@sinarmahirabali.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-navy-600/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-6 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} PT. Sinar Mahira Bali. Hak Cipta Dilindungi.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link to="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
