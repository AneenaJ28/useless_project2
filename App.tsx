import React, { useState, useCallback } from 'react';
import { Mood } from './types';
import { MOOD_CONFIGS } from './constants';
import { getMoodQuote } from './services/geminiService';
import BackgroundParticles from './components/BackgroundParticles';
import HomePage from './components/HomePage';
import MoodPage from './components/MoodPage';

function App() {
  const [page, setPage] = useState<'home' | 'mood'>('home');
  const [activeMood, setActiveMood] = useState<Mood | null>(null);
  const [quote, setQuote] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [customCursor, setCustomCursor] = useState('auto');
  const [bgColor, setBgColor] = useState('bg-slate-900');
  const [textColor, setTextColor] = useState('text-slate-100');

  const handleMoodSelect = useCallback((mood: Mood) => {
    setActiveMood(mood);
    setPage('mood');
    setQuote('');
    setCustomCursor('auto');
    setBgColor('bg-gray-800');
    setTextColor('text-gray-100');
  }, []);

  const handleGoHome = useCallback(() => {
    setPage('home');
    setActiveMood(null);
    setCustomCursor('auto');
    setBgColor('bg-slate-900');
    setTextColor('text-slate-100');
  }, []);

  const handleGetQuote = useCallback(async () => {
    if (activeMood === null) return;
    setIsLoading(true);
    setQuote('');
    const prompt = MOOD_CONFIGS[activeMood].prompt;
    const newQuote = await getMoodQuote(prompt);
    setQuote(newQuote);
    setIsLoading(false);
  }, [activeMood]);

  const handleSetColor = useCallback(() => {
    if (activeMood === null) return;
    const config = MOOD_CONFIGS[activeMood];
    setBgColor(config.bgColor);
    setTextColor(config.textColor);
  }, [activeMood]);
  
  const handleSetCursor = useCallback(() => {
    if (activeMood === null) return;
    const config = MOOD_CONFIGS[activeMood];
    setCustomCursor(config.cursor);
  }, [activeMood]);

  const handleResetCursor = useCallback(() => {
    setCustomCursor('auto');
  }, []);

  return (
    <main style={{ cursor: customCursor }} className={`relative w-full min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-1000 ease-in-out ${bgColor} overflow-hidden`}>
      <BackgroundParticles activeMood={activeMood} />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        {page === 'home' ? (
          <HomePage onMoodSelect={handleMoodSelect} textColor={textColor} />
        ) : activeMood !== null ? (
          <MoodPage
            activeMood={activeMood}
            quote={quote}
            isLoading={isLoading}
            textColor={textColor}
            onBack={handleGoHome}
            onGetQuote={handleGetQuote}
            onSetColor={handleSetColor}
            onSetCursor={handleSetCursor}
            onResetCursor={handleResetCursor}
          />
        ) : null}
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
        }
      `}</style>
    </main>
  );
}

export default App;
