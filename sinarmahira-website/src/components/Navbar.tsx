import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Proyek', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B101E]/70 backdrop-blur-md shadow-modal border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[32px]">
        <div className="flex justify-between items-center h-[64px]">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-brand-blue">
              <Droplets className="w-8 h-8" />
            </div>
            <span className="text-[20px] font-bold text-text-primary tracking-normal font-poppins">
              Sinar Mahira
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-[32px]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-[14px] font-normal transition-colors font-jakarta ${
                  location.pathname === link.path 
                    ? 'text-brand-blue font-semibold border-b-[2px] border-brand-coral pb-1' 
                    : 'text-text-secondary hover:text-brand-blue hover:bg-slate-100/50 px-2 py-1 rounded'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-coral hover:bg-brand-coral-hover text-white px-[20px] h-[32px] flex items-center rounded-[16px] font-jakarta font-normal text-[16px] transition-colors shadow-floating border border-transparent"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-[80%] min-h-screen bg-white shadow-modal py-[16px] flex flex-col items-start px-[16px] gap-[8px]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-[16px] font-jakarta font-normal w-full py-[12px] px-[20px] rounded-[8px] ${
                location.pathname === link.path ? 'bg-surface-light text-text-primary' : 'text-text-secondary hover:bg-surface-light hover:text-text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-brand-coral text-white w-full text-center h-[44px] flex items-center justify-center rounded-[16px] font-jakarta font-normal text-[16px] mt-[16px] shadow-floating"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
