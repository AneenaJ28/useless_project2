import React from 'react';

export const HappyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="happySunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{stopColor: '#FFD700'}} />
                <stop offset="100%" style={{stopColor: '#FFA500'}} />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="35" fill="url(#happySunGradient)" />
        <path d="M50,5 L50,15 M50,85 L50,95 M5,50 L15,50 M85,50 L95,50 M21,21 L28,28 M72,72 L79,79 M21,79 L28,72 M72,28 L79,21" stroke="#FFA500" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="45" r="3.5" fill="#2c2c2c" />
        <circle cx="60" cy="45" r="3.5" fill="#2c2c2c" />
        <path d="M40 60 Q 50 70 60 60" stroke="#2c2c2c" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    </svg>
);

export const SadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="sadCloudGradient" cx="50%" cy="50%" r="70%">
                <stop offset="0%" style={{stopColor: '#B0C4DE'}} />
                <stop offset="100%" style={{stopColor: '#778899'}} />
            </radialGradient>
        </defs>
        <path d="M 25,65 C 10,65 10,45 25,45 C 30,30 50,30 55,45 C 65,40 75,50 70,65 Z" fill="url(#sadCloudGradient)" />
        <path d="M35 55 C 37 52, 43 52, 45 55" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M55 55 C 57 52, 63 52, 65 55" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M30 75 Q 32 85 35 85" stroke="#4682B4" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M45 80 Q 47 90 50 90" stroke="#4682B4" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M60 75 Q 62 85 65 85" stroke="#4682B4" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
);

export const AngryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20 90 L 40 40 H 60 L 80 90 Z" fill="#5A5A5A" />
        <path d="M 40 40 C 42 35, 58 35, 60 40" fill="#E53E3E" stroke="#CF1020" strokeWidth="2" />
        <path d="M 50 45 C 45 60, 55 60, 50 45 L 45 90 H 55 L 50 45 Z" fill="#F56565" />
        <ellipse cx="50" cy="30" rx="15" ry="10" fill="#F7FAFC" />
        <ellipse cx="40" cy="20" rx="10" ry="7" fill="#E2E8F0" />
        <ellipse cx="60" cy="22" rx="12" ry="8" fill="#EDF2F7" />
        <circle cx="28" cy="65" r="5" fill="#F56565" />
        <circle cx="72" cy="70" r="8" fill="#E53E3E" />
    </svg>
);

export const GenzIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <defs>
            <linearGradient id="genzSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f871b5'}} />
                <stop offset="100%" style={{stopColor: '#9333ea'}} />
            </linearGradient>
            <linearGradient id="genzSunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#fde047'}} />
                <stop offset="100%" style={{stopColor: '#f97316'}} />
            </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#genzSkyGradient)" />
        <circle cx="50" cy="45" r="20" fill="url(#genzSunGradient)" />
        <rect x="20" y="44" width="60" height="2" fill="#fde047" />

        {/* Grid floor */}
        <g stroke="#f871b5" strokeWidth="1.5">
            <path d="M -5,100 L 50,55 L 105,100 Z" strokeWidth="2" />
            <path d="M 10,100 L 50,60 L 90,100 Z" />
            <path d="M 20,100 L 50,65 L 80,100 Z" />
            <path d="M 30,100 L 50,72 L 70,100 Z" />
            <path d="M 40,100 L 50,80 L 60,100 Z" />
            <path d="M 0,100 H 100" />
            <path d="M 5,92 H 95" />
            <path d="M 15,84 H 85" />
            <path d="M 25,76 H 75" />
            <path d="M 38,68 H 62" />
        </g>
    </svg>
);


export const LoadingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const CursorIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l5-2 2 8z" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M19 3v4M17 5h4M14 11l-1.5 1.5L11 14l-1.5-1.5L8 11l1.5-1.5L11 8l1.5 1.5L14 11zm7 7l-1.5 1.5L18 21l-1.5-1.5L15 18l1.5-1.5L18 15l1.5 1.5z" />
  </svg>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);