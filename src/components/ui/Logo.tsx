
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className={`relative ${sizeClasses[size]} aspect-square bg-gradient-to-br from-brainly-400 to-brainly-600 rounded-xl overflow-hidden p-1.5 transition-transform duration-300 group-hover:scale-105`}>
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            className="w-full h-full p-1 text-brainly-600"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M22 12.5a10 10 0 0 0-20 0c0 2.5 2 4.5 4 6.5s2 3 6 3 4-1 6-3 4-4 4-6.5Z"></path>
            <path d="M12 1v7"></path>
            <path d="M12 17v1"></path>
            <path d="M12 22v-1"></path>
            <path d="M7 8v1"></path>
            <path d="M17 8v1"></path>
          </svg>
        </div>
      </div>
      {withText && (
        <span className="font-semibold text-xl tracking-tight bg-gradient-to-b from-brainly-700 to-brainly-500 bg-clip-text text-transparent">
          Brainly
        </span>
      )}
    </Link>
  );
};

export default Logo;
