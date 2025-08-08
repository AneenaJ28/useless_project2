import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from './icons/Icons';

interface DropdownProps {
  triggerText: string;
  children: React.ReactNode;
  accentColor: string;
}

const Dropdown: React.FC<DropdownProps> = ({ triggerText, children, accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className={`
            inline-flex justify-center w-full rounded-full border border-transparent shadow-sm px-6 py-3 
            font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800
            transition-transform transform hover:scale-105
            ${accentColor}
          `}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {triggerText}
          <ChevronDownIcon className={`-mr-1 ml-2 h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white/10 backdrop-blur-md ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          style={{ animation: 'fade-in 0.2s ease-out' }}
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Dropdown;
