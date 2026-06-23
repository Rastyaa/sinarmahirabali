import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  left: string;
  top: string;
  size: number;
}

interface Bubble {
  id: number;
  left: string;
  size: number;
  delay: string;
  duration: string;
}

const WaterDropsBackground = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    let idCounter = 0;
    let isMounted = true;
    
    // Spawn Water Ripples
    const spawnRipple = () => {
      if (!isMounted) return;
      
      const newRipple: Ripple = {
        id: idCounter++,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 250 + 250, 
      };
      
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        if (isMounted) {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }
      }, 7000);
    };

    const scheduleNextDrop = () => {
      if (!isMounted) return;
      spawnRipple();
      const nextDelay = Math.random() * 1500 + 1000;
      setTimeout(scheduleNextDrop, nextDelay);
    };

    scheduleNextDrop();

    // Generate static list of rising bubbles for clean performance
    const generatedBubbles: Bubble[] = Array.from({ length: 18 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 12 + 6, // 6px to 18px size
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 8 + 12}s`, // 12s to 20s travel time
    }));
    setBubbles(generatedBubbles);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Water Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute flex items-center justify-center"
          style={{
            left: ripple.left,
            top: ripple.top,
            width: ripple.size,
            height: ripple.size,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* The Initial Water Drop hitting the surface */}
          <div 
            className="absolute rounded-full z-10"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(56, 189, 248, 0.9)',
              animation: 'drop-fall 0.8s cubic-bezier(0.14, 0.8, 0.34, 1) forwards',
            }}
          />

          {/* Multiple expanding water refraction rings */}
          {[0, 1, 2].map((ringIndex) => (
            <div
              key={ringIndex}
              className="absolute rounded-full border-solid border-transparent"
              style={{
                width: '100%',
                height: '100%',
                animation: `water-ripple 5.5s cubic-bezier(0.1, 0.4, 0.2, 1) forwards`,
                animationDelay: `${0.2 + (ringIndex * 0.4)}s`,
                opacity: 0,
                transform: 'scale(0.05)'
              }}
            />
          ))}
        </div>
      ))}

      {/* Rising Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full border border-brand-blue/30 bg-gradient-to-tr from-brand-blue/5 to-white/5"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            bottom: '-10%',
            animation: `rise ${bubble.duration} linear infinite`,
            animationDelay: bubble.delay,
            boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.2), 0 0 10px rgba(56, 189, 248, 0.1)',
          }}
        />
      ))}
    </div>
  );
};

export default WaterDropsBackground;