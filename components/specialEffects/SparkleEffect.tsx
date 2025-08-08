import React, { useEffect, useMemo } from 'react';
import { SpecialEffectComponent } from '../../types';

const SPARKLE_COUNT = 30;

export const SparkleEffect: SpecialEffectComponent = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500); // Animation lasts 1.5s
    return () => clearTimeout(timer);
  }, [onComplete]);

  const sparkles = useMemo(() => Array.from({ length: SPARKLE_COUNT }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 1}s`,
    transform: `scale(${0.5 + Math.random() * 1}) rotate(${Math.random() * 360}deg)`,
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {sparkles.map(s => (
        <div
          key={s.id}
          className="absolute w-8 h-8 animate-sparkle"
          style={{
            top: s.top,
            left: s.left,
            transform: s.transform,
            animationDelay: s.animationDelay,
          }}
        >
          <svg viewBox="0 0 100 100" fill="hotpink">
            <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes sparkle {
          0%, 100% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-sparkle {
          animation-name: sparkle;
          animation-duration: 0.5s;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};
