import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  left: string;
  top: string;
  size: number;
}

const WaterDropsBackground = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let idCounter = 0;
    let isMounted = true;
    
    const spawnRipple = () => {
      if (!isMounted) return;
      
      const newRipple: Ripple = {
        id: idCounter++,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 300 + 200, 
      };
      
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        if (isMounted) {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }
      }, 6000);
    };

    const interval = setInterval(spawnRipple, 1200);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full flex items-center justify-center"
          style={{
            left: ripple.left,
            top: ripple.top,
            width: ripple.size,
            height: ripple.size,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {[0, 1, 2].map((ringIndex) => (
            <div
              key={ringIndex}
              className="absolute rounded-full border-[1.5px] border-brand-teal/40"
              style={{
                width: '100%',
                height: '100%',
                animation: `ripple 6s cubic-bezier(0, 0.2, 0.4, 1) forwards`,
                animationDelay: `${ringIndex * 1.5}s`,
                opacity: 0,
                transform: 'scale(0)',
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.3)'
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WaterDropsBackground;
