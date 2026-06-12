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
    
    // Function to spawn a new ripple
    const spawnRipple = () => {
      if (!isMounted) return;
      
      const newRipple: Ripple = {
        id: idCounter++,
        left: `${Math.random() * 80 + 10}%`, // Keep it somewhat away from extreme edges
        top: `${Math.random() * 80 + 10}%`,
        size: Math.random() * 500 + 400, // Large ripples (400px to 900px)
      };
      
      setRipples((prev) => [...prev, newRipple]);

      // Remove the ripple after its animation completes (animation is 3.5s + max delay 1.5s = 5s total)
      setTimeout(() => {
        if (isMounted) {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }
      }, 5500);
    };

    // Spawn first few ripples sequentially
    spawnRipple();
    setTimeout(spawnRipple, 400);
    setTimeout(spawnRipple, 800);

    // Continuous spawner (one ripple every 0.8 seconds)
    const interval = setInterval(spawnRipple, 800);

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
          {/* Create 4 concentric rings per ripple */}
          {[0, 1, 2, 3].map((ringIndex) => (
            <div
              key={ringIndex}
              className="absolute rounded-full border-[2px] border-brand-teal/60"
              style={{
                width: '100%',
                height: '100%',
                animation: `ripple 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                animationDelay: `${ringIndex * 0.5}s`,
                opacity: 0,
                transform: 'scale(0)',
                boxShadow: '0 0 20px rgba(56, 189, 248, 0.5), inset 0 0 20px rgba(56, 189, 248, 0.5)'
              }}
            />
          ))}
          {/* Center point */}
          <div 
            className="absolute w-[8px] h-[8px] rounded-full bg-brand-teal shadow-[0_0_15px_rgba(56,189,248,1)]" 
            style={{ 
              animation: `rippleCenter 3.5s forwards`, 
            }} 
          />
        </div>
      ))}
    </div>
  );
};

export default WaterDropsBackground;
