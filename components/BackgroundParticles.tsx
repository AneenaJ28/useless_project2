import React from 'react';
import { Mood } from '../types';

const PARTICLE_COUNT = 15;

const particleColors: Record<Mood, string> = {
    [Mood.Happy]: 'bg-yellow-300/50',
    [Mood.Sad]: 'bg-blue-300/50',
    [Mood.Angry]: 'bg-red-400/50',
    [Mood.Genz]: 'bg-violet-200/50',
};

const BackgroundParticles: React.FC<{ activeMood: Mood | null }> = ({ activeMood }) => {
    const particles = React.useMemo(() => {
        return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * -20}s`,
            size: `${Math.floor(20 + Math.random() * 60)}px`,
        }));
    }, []);

    const colorClass = activeMood !== null ? particleColors[activeMood] : 'bg-gray-500/30';

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className={`absolute bottom-0 rounded-full animate-float ${colorClass} transition-colors duration-1000`}
                    style={{
                        left: particle.left,
                        width: particle.size,
                        height: particle.size,
                        animationDuration: particle.animationDuration,
                        animationDelay: particle.animationDelay,
                    }}
                />
            ))}
            <style>{`
                @keyframes float {
                    0% {
                        transform: translateY(0) scale(1);
                        opacity: 0;
                    }
                    10% {
                         opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) scale(1.5);
                        opacity: 0;
                    }
                }
                .animate-float {
                    animation-name: float;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
            `}</style>
        </div>
    );
};

export default BackgroundParticles;