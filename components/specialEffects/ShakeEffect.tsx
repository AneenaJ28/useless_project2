import React, { useEffect } from 'react';
import { SpecialEffectComponent } from '../../types';

export const ShakeEffect: SpecialEffectComponent = ({ onComplete }) => {
  useEffect(() => {
    const container = document.getElementById('effect-container');
    container?.classList.add('animate-shake');
    const timer = setTimeout(() => {
        container?.classList.remove('animate-shake');
        onComplete();
    }, 800);
    return () => {
        container?.classList.remove('animate-shake');
        clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-50 animate-vignette"></div>
      <style>{`
        @keyframes screen-shake {
          0%, 100% { transform: translate(0, 0) rotate(0); }
          10%, 30%, 50%, 70%, 90% { transform: translate(-3px, 3px) rotate(-1deg); }
          20%, 40%, 60%, 80% { transform: translate(3px, -3px) rotate(1deg); }
        }
        .animate-shake {
          animation: screen-shake 0.8s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes vignette-pulse {
            0% { box-shadow: inset 0 0 0px rgba(255, 0, 0, 0); }
            50% { box-shadow: inset 0 0 150px 50px rgba(200, 0, 0, 0.5); }
            100% { box-shadow: inset 0 0 0px rgba(255, 0, 0, 0); }
        }
        .animate-vignette {
            animation: vignette-pulse 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};
