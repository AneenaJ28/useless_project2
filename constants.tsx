import React from 'react';
import { Mood, MoodConfig } from './types';
import { HappyIcon, SadIcon, AngryIcon, GenzIcon } from './components/icons/Icons';
import { happyCursor, sadCursor, angryCursor, genzCursor } from './components/cursors';
import { ConfettiEffect } from './components/specialEffects/ConfettiEffect';
import { RainEffect } from './components/specialEffects/RainEffect';
import { ShakeEffect } from './components/specialEffects/ShakeEffect';
import { GlitchEffect } from './components/specialEffects/GlitchEffect';

export const MOOD_CONFIGS: Record<Mood, MoodConfig> = {
  [Mood.Happy]: {
    name: 'Happy',
    bgColor: 'bg-yellow-400',
    textColor: 'text-yellow-900',
    accentColor: 'bg-yellow-500 hover:bg-yellow-600 focus-visible:ring-yellow-400',
    ringColor: 'ring-yellow-400',
    Icon: HappyIcon,
    prompt: 'Write a short, uplifting, and cheerful quote about the joy of being happy. Keep it under 20 words.',
    cursor: happyCursor,
    SpecialEffect: ConfettiEffect,
  },
  [Mood.Sad]: {
    name: 'Sad',
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-100',
    accentColor: 'bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500',
    ringColor: 'ring-blue-500',
    Icon: SadIcon,
    prompt: 'Write a short, comforting quote for someone feeling sad. Keep it gentle and under 20 words.',
    cursor: sadCursor,
    SpecialEffect: RainEffect,
  },
  [Mood.Angry]: {
    name: 'Angry',
    bgColor: 'bg-red-600',
    textColor: 'text-red-100',
    accentColor: 'bg-red-700 hover:bg-red-800 focus-visible:ring-red-600',
    ringColor: 'ring-red-600',
    Icon: AngryIcon,
    prompt: 'Write a short, powerful quote about channeling anger into positive action. Keep it under 20 words.',
    cursor: angryCursor,
    SpecialEffect: ShakeEffect,
  },
  [Mood.Genz]: {
    name: 'Genz',
    bgColor: 'bg-violet-300',
    textColor: 'text-violet-900',
    accentColor: 'bg-violet-400 hover:bg-violet-500 focus-visible:ring-violet-300',
    ringColor: 'ring-violet-300',
    Icon: GenzIcon,
    prompt: 'Write a short, trendy quote that captures the gen-z vibe. Keep it under 20 words, no cap.',
    cursor: genzCursor,
    SpecialEffect: GlitchEffect,
  },
};