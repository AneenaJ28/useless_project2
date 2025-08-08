import React, { useState } from 'react';
import { Mood } from '../types';
import { MOOD_CONFIGS } from '../constants';
import Dropdown from './Dropdown';
import QuoteDisplay from './QuoteDisplay';
import { ArrowLeftIcon, PaletteIcon, QuoteIcon, CursorIcon, SparklesIcon } from './icons/Icons';
import SpecialEffectController from './SpecialEffectController';

interface MoodPageProps {
  activeMood: Mood;
  quote: string;
  isLoading: boolean;
  textColor: string;
  onBack: () => void;
  onGetQuote: () => void;
  onSetColor: () => void;
  onSetCursor: () => void;
  onResetCursor: () => void;
}

const MoodPage: React.FC<MoodPageProps> = (props) => {
  const { 
    activeMood, quote, isLoading, textColor, 
    onBack, onGetQuote, onSetColor, onSetCursor, onResetCursor 
  } = props;
  
  const [isEffectPlaying, setIsEffectPlaying] = useState(false);
  const [cursorSet, setCursorSet] = useState(false);
  
  const config = MOOD_CONFIGS[activeMood];

  const handleSetCursor = () => {
    if(cursorSet) {
      onResetCursor();
      setCursorSet(false);
    } else {
      onSetCursor();
      setCursorSet(true);
    }
  }

  const handlePlayEffect = () => {
    if (isEffectPlaying) return;
    setIsEffectPlaying(true);
  };
  
  const handleEffectComplete = () => {
    setIsEffectPlaying(false);
  };

  const DropdownItem: React.FC<{onClick: () => void, children: React.ReactNode, disabled?: boolean}> = ({onClick, children, disabled}) => (
     <button
        onClick={onClick}
        disabled={disabled}
        className={`
          flex items-center w-full text-left px-4 py-2 text-sm ${textColor} opacity-80 hover:opacity-100 hover:bg-white/10
          transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed
        `}
        role="menuitem"
      >
        {children}
      </button>
  );

  return (
    <div id="effect-container" className="flex flex-col items-center justify-center w-full h-full animate-fade-in">
        <SpecialEffectController activeMood={activeMood} isPlaying={isEffectPlaying} onComplete={handleEffectComplete} />
        <button
            onClick={onBack}
            className={`absolute top-6 left-6 p-2 rounded-full ${textColor} opacity-70 hover:opacity-100 hover:bg-white/10 transition-all`}
            aria-label="Go back to mood selection"
        >
            <ArrowLeftIcon className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center gap-8 w-full p-4">
            <div className="w-28 h-28 p-2 rounded-full bg-black/10">
                <config.Icon className={`w-full h-full ${textColor}`} />
            </div>
            <h2 className={`text-4xl font-bold ${textColor}`}>{config.name}</h2>
            
            <Dropdown triggerText="Actions" accentColor={config.accentColor}>
                <DropdownItem onClick={onSetColor}>
                    <PaletteIcon className="w-5 h-5 mr-3"/> Change Color
                </DropdownItem>
                <DropdownItem onClick={onGetQuote} disabled={isLoading}>
                    <QuoteIcon className="w-5 h-5 mr-3"/> Get Quote
                </DropdownItem>
                <DropdownItem onClick={handleSetCursor}>
                    <CursorIcon className="w-5 h-5 mr-3"/> {cursorSet ? 'Reset' : 'Set'} Cursor
                </DropdownItem>
                <DropdownItem onClick={handlePlayEffect} disabled={isEffectPlaying}>
                    <SparklesIcon className="w-5 h-5 mr-3"/> Special Effect
                </DropdownItem>
            </Dropdown>

            <QuoteDisplay quote={quote} isLoading={isLoading} textColor={textColor} Icon={!isLoading && quote ? config.Icon : undefined} />
        </div>
    </div>
  );
};

export default MoodPage;