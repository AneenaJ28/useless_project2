import React from 'react';
import { Mood } from '../types';
import { MOOD_CONFIGS } from '../constants';

interface SpecialEffectControllerProps {
  activeMood: Mood;
  isPlaying: boolean;
  onComplete: () => void;
}

const SpecialEffectController: React.FC<SpecialEffectControllerProps> = ({ activeMood, isPlaying, onComplete }) => {
  if (!isPlaying) {
    return null;
  }

  const { SpecialEffect } = MOOD_CONFIGS[activeMood];

  return <SpecialEffect onComplete={onComplete} />;
};

export default SpecialEffectController;
