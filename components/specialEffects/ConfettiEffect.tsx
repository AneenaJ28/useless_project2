import React, { useEffect, useMemo } from 'react';
import { SpecialEffectComponent } from '../../types';

const CONFETTI_COUNT = 50;
const colors = ['bg-yellow-400', 'bg-pink-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400'];

export const ConfettiEffect: SpecialEffectComponent = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000); // Animation lasts 3s
    return () => clearTimeout(timer);
  }, [onComplete]);

  const confetti = useMemo(() => Array.from({ length: CONFETTI_COUNT }).map((_, i) => ({
    id: i,
    color: colors[i % colors.length],
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 0.5}s`,
    animationDuration: `${1.5 + Math.random() * 1.5}s`,
    transform: `rotate(${Math.random() * 360}deg)`,
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {confetti.map(c => (
        <div
          key={c.id}
          className={`absolute top-[-20px] w-3 h-5 ${c.color} animate-fall`}
          style={{
            left: c.left,
            animationDelay: c.animationDelay,
            animationDuration: c.animationDuration,
            transform: c.transform,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-20vh) rotateZ(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotateZ(720deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};
