import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup automatically after 3 seconds for upgraded UX
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-[32px] right-[32px] z-50 flex flex-col items-end">
      {/* WhatsApp Chat Popup Window */}
      {showPopup && (
        <div className="mb-[16px] w-[300px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-[20px] shadow-modal overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#075E54] p-[16px] flex items-center justify-between text-white">
            <div className="flex items-center gap-[10px]">
              <div className="relative">
                <div className="w-[36px] h-[36px] bg-[#128C7E] rounded-full flex items-center justify-center font-bold text-[14px]">
                  SMB
                </div>
                <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-brand-green rounded-full border-2 border-[#075E54]"></div>
              </div>
              <div>
                <h4 className="font-poppins font-bold text-[14px] leading-tight">Sinar Mahira Bali</h4>
                <span className="text-[11px] text-white/80 font-medium">Online • Siap Membantu</span>
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowPopup(false);
              }}
              className="text-white/85 hover:text-white hover:bg-white/10 p-[4px] rounded-full transition-colors"
            >
              <X className="w-[16px] h-[16px]" />
            </button>
          </div>
          
          {/* Body */}
          <div className="p-[20px] bg-slate-950/40">
            <div className="bg-white/5 border border-white/5 p-[14px] rounded-[14px] rounded-tl-none mb-[16px]">
              <p className="text-[13px] text-text-secondary leading-[18px] font-jakarta">
                Halo! Ada yang bisa kami bantu mengenai sistem pengolahan limbah (IPAL, STP, Bio Septic Tank)?
              </p>
            </div>
            <a
              href="https://wa.me/6288987288952?text=Halo%20Sinar%20Mahira%20Bali,%20saya%20ingin%20konsultasi%20mengenai%20sistem%20sanitasi/pengolahan%20limbah."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[40px] bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-[13px] rounded-[12px] flex items-center justify-center gap-[8px] transition-all duration-300 shadow-floating hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-[16px] h-[16px]" />
              Mulai Obrolan
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-[16px] rounded-full shadow-modal hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-[32px] h-[32px]" />
        {/* Simple dot notifier if popup is closed */}
        {!showPopup && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-coral"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;