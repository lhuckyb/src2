import React, { useMemo } from 'react';

export function FloralBackground() {
  // Generate stable petal positions
  const petals = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7.5 + (i % 3) * 4) % 96}%`,
      top: `${(i * 11 + (i % 5) * 6) % 94}%`,
      size: 14 + (i % 4) * 6,
      rotation: (i * 47) % 360,
      opacity: 0.18 + (i % 3) * 0.12,
      duration: 7 + (i % 5) * 3,
      delay: (i * 0.7) % 4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F2FD] via-[#FBF9FE] to-[#F5EFFC]" />

      {/* Atmospheric glowing orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 rounded-full bg-pink-100/40 blur-3xl" />

      {/* Subtle floral pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: `radial-gradient(#7c3aed 1px, transparent 1px), radial-gradient(#a855f7 1px, #faf7fd 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      {/* Floating lavender petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute transition-transform duration-1000 ease-in-out"
          style={{
            left: petal.left,
            top: petal.top,
            width: `${petal.size}px`,
            height: `${petal.size * 1.5}px`,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotation}deg)`,
            animation: `floatSlow ${petal.duration}s ease-in-out infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg viewBox="0 0 20 30" fill="none" className="w-full h-full drop-shadow-sm">
            <path
              d="M10 0C16 10 19 18 10 30C1 18 4 10 10 0Z"
              fill="url(#petalGradient)"
            />
            <defs>
              <linearGradient id="petalGradient" x1="0" y1="0" x2="20" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C4B5FD" />
                <stop offset="0.6" stopColor="#A78BFA" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
