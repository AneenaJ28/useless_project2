import React from 'react';
import { LoadingIcon } from './icons/Icons';

interface QuoteDisplayProps {
  quote: string;
  isLoading: boolean;
  textColor: string;
  Icon?: React.FC<{ className?: string }>;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ quote, isLoading, textColor, Icon }) => {
  return (
    <div className="w-full max-w-2xl min-h-[160px] flex items-center justify-center p-4">
      {isLoading ? (
        <LoadingIcon className={`w-10 h-10 ${textColor}`} />
      ) : (
        quote && (
          <div className="transition-opacity duration-700 animate-fade-in-up bg-black/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 w-full">
            <blockquote className="text-center">
              {Icon && <Icon className="w-16 h-16 mx-auto mb-4 opacity-90" />}
              <p className={`text-2xl md:text-3xl font-semibold italic ${textColor}`}>
                “{quote}”
              </p>
            </blockquote>
          </div>
        )
      )}
       <style>{`
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
        }
    `}</style>
    </div>
  );
};

export default QuoteDisplay;