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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]/75 backdrop-blur-md shadow-floating border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-[16px] md:px-[32px]">
          <div className="flex justify-between items-center h-[64px] md:h-[72px]">
            <Link to="/" className="flex items-center gap-[10px] group">
              <div className="text-brand-blue group-hover:scale-110 transition-transform duration-300">
                <Droplets className="w-[28px] h-[28px] md:w-[32px] md:h-[32px]" />
              </div>
              <span className="text-[18px] md:text-[20px] font-bold text-text-primary tracking-tight font-poppins">
                Sinar Mahira
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-[6px]">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-[14px] font-medium transition-all duration-300 font-jakarta px-[14px] py-[8px] rounded-[10px] ${
                    location.pathname === link.path 
                      ? 'text-brand-coral font-bold bg-brand-coral/10 shadow-[0_0_15px_rgba(240,112,87,0.15)] border border-brand-coral/20' 
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-[1px] h-[20px] bg-white/10 mx-[8px]"></div>
              <Link 
                to="/contact" 
                className="bg-brand-coral hover:bg-brand-coral-hover text-white px-[20px] h-[40px] flex items-center rounded-[12px] font-jakarta font-bold text-[14px] transition-all duration-300 shadow-floating border border-transparent"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-text-primary p-[10px] rounded-[10px] hover:bg-white/5 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
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
      <div className={`md:hidden fixed top-0 left-0 z-50 h-full w-[280px] bg-[#0f172a]/95 backdrop-blur-xl border-r border-white/5 shadow-modal transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-[72px] px-[16px] border-b border-white/5">
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
        
        <div className="p-[16px] flex flex-col gap-[6px]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-[15px] font-jakarta font-medium w-full py-[12px] px-[16px] rounded-[12px] transition-all duration-300 ${
                location.pathname === link.path 
                  ? 'bg-brand-coral/10 text-brand-coral font-bold shadow-[0_0_15px_rgba(240,112,87,0.15)] border border-brand-coral/20' 
                  : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-[1px] bg-white/5 my-[8px]"></div>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-brand-coral text-white w-full text-center h-[48px] flex items-center justify-center rounded-[12px] font-jakarta font-bold text-[16px] shadow-floating hover:bg-brand-coral-hover transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
