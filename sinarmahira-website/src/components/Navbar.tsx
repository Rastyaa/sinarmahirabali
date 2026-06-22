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
    { name: 'Client Kami', path: '/clients' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B101E]/80 backdrop-blur-xl shadow-modal border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-[16px] md:px-[32px]">
          <div className="flex justify-between items-center h-[64px]">
            <Link to="/" className="flex items-center gap-[10px]">
              <div className="text-brand-blue">
                <Droplets className="w-[32px] h-[32px]" />
              </div>
              <span className="text-[20px] font-bold text-text-primary tracking-normal font-poppins">
                Sinar Mahira
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-[8px]">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-[14px] font-normal transition-all duration-200 font-jakarta px-[14px] py-[6px] rounded-[8px] ${
                    location.pathname === link.path 
                      ? 'text-brand-coral font-semibold bg-brand-coral/10' 
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-[1px] h-[24px] bg-white/10 mx-[8px]"></div>
              <Link 
                to="/contact" 
                className="bg-brand-coral hover:bg-brand-coral-hover text-white px-[20px] h-[36px] flex items-center rounded-[16px] font-jakarta font-normal text-[15px] transition-colors shadow-floating border border-transparent"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-text-primary p-[8px] rounded-[8px] hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 z-50 h-full w-[280px] bg-[#0B101E]/95 backdrop-blur-xl border-r border-white/10 shadow-modal transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-[64px] px-[16px] border-b border-white/10">
          <Link to="/" className="flex items-center gap-[10px]" onClick={() => setIsOpen(false)}>
            <div className="text-brand-blue">
              <Droplets className="w-[28px] h-[28px]" />
            </div>
            <span className="text-[18px] font-bold text-text-primary font-poppins">
              Sinar Mahira
            </span>
          </Link>
          <button 
            className="text-text-primary p-[8px] rounded-[8px] hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-[16px] flex flex-col gap-[4px]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-[16px] font-jakarta font-normal w-full py-[12px] px-[16px] rounded-[10px] transition-colors ${
                location.pathname === link.path 
                  ? 'bg-brand-coral/10 text-brand-coral font-semibold' 
                  : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-[1px] bg-white/10 my-[8px]"></div>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-brand-coral text-white w-full text-center h-[48px] flex items-center justify-center rounded-[16px] font-jakarta font-normal text-[16px] shadow-floating hover:bg-brand-coral-hover transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
