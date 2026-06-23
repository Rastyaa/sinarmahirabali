import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [showPill, setShowPill] = useState(false);

  useEffect(() => {
    // Show the floating text pill after 2.5 seconds
    const showTimer = setTimeout(() => {
      setShowPill(true);
    }, 2500);

    // Automatically hide the pill after 10 seconds to avoid blocking mobile screens
    const hideTimer = setTimeout(() => {
      setShowPill(false);
    }, 12500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappUrl = "https://wa.me/6288987288952?text=Halo%20Sinar%20Mahira%20Bali,%20saya%20ingin%20konsultasi%20mengenai%20sistem%20sanitasi/pengolahan%20limbah.";

  return (
    <div className="fixed bottom-[24px] right-[24px] z-50 flex flex-col items-end pointer-events-none">
      
      {/* Floating text pill (temporary & non-intrusive) */}
      {showPill && (
        <div className="mb-[12px] flex items-center gap-[8px] bg-slate-900/90 backdrop-blur-md border border-[#25D366]/30 text-white px-[14px] py-[8px] rounded-[12px] shadow-modal animate-in fade-in slide-in-from-bottom-3 duration-300 pointer-events-auto max-w-[260px] sm:max-w-xs">
          <span className="text-[12px] sm:text-[13px] font-jakarta font-semibold leading-snug">
            Ada pertanyaan? Konsultasi gratis di WhatsApp!
          </span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              setShowPill(false);
            }}
            className="text-white/70 hover:text-white p-[2px] rounded-full hover:bg-white/10 transition-colors shrink-0"
            aria-label="Tutup"
          >
            <X className="w-[14px] h-[14px]" />
          </button>
        </div>
      )}

      {/* Ringing/Vibrating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-[14px] sm:p-[16px] rounded-full shadow-modal hover:scale-115 active:scale-95 transition-all duration-300 flex items-center justify-center pointer-events-auto animate-wa-ring"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
        
        {/* Glowing notifier wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none"></span>
      </a>
    </div>
  );
};

export default WhatsAppButton;