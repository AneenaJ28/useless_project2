import React, { useEffect, useMemo } from 'react';
import { SpecialEffectComponent } from '../../types';

const GLITCH_LINE_COUNT = 10;

export const GlitchEffect: SpecialEffectComponent = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000); // Effect lasts 1s
    return () => clearTimeout(timer);
  }, [onComplete]);

  const glitches = useMemo(() => Array.from({ length: GLITCH_LINE_COUNT }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${10 + Math.random() * 80}%`,
    height: `${Math.random() * 5 + 1}px`,
    animationDelay: `${Math.random() * 0.5}s`,
    animationDuration: `${0.1 + Math.random() * 0.2}s`,
    colorClass: Math.random() > 0.5 ? 'bg-cyan-400' : 'bg-pink-500',
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50 opacity-70">
      {glitches.map(g => (
        <div
          key={g.id}
          className={`absolute ${g.colorClass} animate-glitch-line`}
          style={{
            top: g.top,
            left: g.left,
            width: g.width,
            height: g.height,
            animationDelay: g.animationDelay,
            animationDuration: g.animationDuration,
          }}
        />
      ))}
      <style>{`
        @keyframes glitch-line {
          0% {
            transform: translateX(-100%);
            opacity: 0.8;
          }
          50% {
            transform: translateX(100%);
            opacity: 0.2;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        .animate-glitch-line {
          animation-name: glitch-line;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};
