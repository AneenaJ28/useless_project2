import React from 'react';

export enum Mood {
  Happy,
  Sad,
  Angry,
  Genz,
}

export type SpecialEffectComponent = React.FC<{ onComplete: () => void }>;

export interface MoodConfig {
  name: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  ringColor: string;
  Icon: React.FC<{ className?: string }>;
  prompt: string;
  cursor: string;
  SpecialEffect: SpecialEffectComponent;
}
