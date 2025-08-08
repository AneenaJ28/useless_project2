import React from 'react';
import { Mood } from '../types';
import { MOOD_CONFIGS } from '../constants';

interface HomePageProps {
  onMoodSelect: (mood: Mood) => void;
  textColor: string;
}

const HomePage: React.FC<HomePageProps> = ({ onMoodSelect, textColor }) => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in w-full">
      <header className="mb-8 text-center">
        <h1 className={`text-4xl md:text-5xl font-bold transition-colors duration-1000 ${textColor}`}>
          Mood Swing Simulator
        </h1>
        <p className={`mt-2 text-lg transition-colors duration-1000 ${textColor} opacity-80`}>
          Select a mood to change the vibe
        </p>
      </header>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {Object.keys(MOOD_CONFIGS).map(moodKeyString => {
          const moodKey = Number(moodKeyString) as Mood;
          const config = MOOD_CONFIGS[moodKey];
          const Icon = config.Icon;
          return (
            <div key={config.name} className="flex flex-col items-center gap-2">
              <button
                onClick={() => onMoodSelect(moodKey)}
                className={`
                  relative w-24 h-24 md:w-28 md:h-28 p-2 rounded-full flex items-center justify-center 
                  transition-all duration-300 ease-in-out transform
                  focus:outline-none focus-visible:ring-4 ${config.ringColor}
                  bg-white/10 hover:bg-white/20 hover:scale-105
                `}
                aria-label={`Select ${config.name} mood`}
              >
                <Icon className={`w-full h-full opacity-90`} />
              </button>
              <span className={`font-medium transition-colors duration-1000 ${textColor}`}>
                {config.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;