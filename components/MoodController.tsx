import React from 'react';
import { Mood } from '../types';
import { MOOD_CONFIGS } from '../constants';

interface MoodControllerProps {
  activeMood: Mood | null;
  isLoading: boolean;
  onMoodSelect: (mood: Mood) => void;
  onGetQuote: () => void;
}

const MoodController: React.FC<MoodControllerProps> = ({ activeMood, isLoading, onMoodSelect, onGetQuote }) => {
  const activeConfig = activeMood !== null ? MOOD_CONFIGS[activeMood] : null;

  return (
    <div className="flex flex-col items-center gap-8 w-full p-4">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {Object.keys(MOOD_CONFIGS).map(moodKeyString => {
          const moodKey = Number(moodKeyString) as Mood;
          const config = MOOD_CONFIGS[moodKey];
          const isSelected = activeMood === moodKey;
          const Icon = config.Icon;
          return (
            <div key={config.name} className="flex flex-col items-center gap-2">
              <button
                onClick={() => onMoodSelect(moodKey)}
                className={`
                  relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center 
                  transition-all duration-300 ease-in-out transform
                  focus:outline-none focus-visible:ring-4 ${config.ringColor}
                  ${isSelected ? 'bg-white/30 scale-110' : 'bg-white/10 hover:bg-white/20 hover:scale-105'}
                `}
                aria-label={`Select ${config.name} mood`}
              >
                <Icon className={`w-10 h-10 md:w-12 md:h-12 ${config.textColor} opacity-80`} />
              </button>
              <span className={`font-medium transition-colors duration-1000 ${activeConfig ? activeConfig.textColor : 'text-slate-300'}`}>
                {config.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="h-20 flex items-center">
        {activeConfig && (
          <button
            onClick={onGetQuote}
            disabled={isLoading}
            className={`
              px-8 py-3 rounded-full font-bold text-lg text-white shadow-lg
              transition-all duration-300 ease-in-out transform hover:scale-105
              focus:outline-none focus-visible:ring-4
              disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
              ${activeConfig.accentColor} animate-fade-in
            `}
          >
            {isLoading ? 'Thinking...' : `Get a ${activeConfig.name} Quote`}
          </button>
        )}
      </div>
    </div>
  );
};

export default MoodController;