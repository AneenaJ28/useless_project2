import React, { useEffect, useMemo } from 'react';
import { SpecialEffectComponent } from '../../types';

const DROP_COUNT = 60;

export const RainEffect: SpecialEffectComponent = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000); // Animation lasts 3s
    return () => clearTimeout(timer);
  }, [onComplete]);

  const drops = useMemo(() => Array.from({ length: DROP_COUNT }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}s`,
    animationDuration: `${0.5 + Math.random() * 0.5}s`,
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {drops.map(d => (
        <div
          key={d.id}
          className="absolute top-[-20%] w-px h-[20%] bg-gradient-to-b from-transparent to-blue-300 animate-rain-drop"
          style={{
            left: d.left,
            animationDelay: d.animationDelay,
            animationDuration: d.animationDuration,
          }}
        />
      ))}
      <style>{`
        @keyframes rain-drop {
          0% {
            transform: translateY(0vh);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh);
            opacity: 1;
          }
        }
        .animate-rain-drop {
          animation-name: rain-drop;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};
