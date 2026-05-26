import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export default function Logo({ className = '', onClick }: LogoProps) {
  return (
    <div onClick={onClick} className={`flex items-center select-none ${className}`}>
      <img 
        src="/logo.png" 
        alt="HyPro Academy" 
        className="h-11 sm:h-14 w-auto object-contain hover:opacity-95 transition-opacity" 
      />
    </div>
  );
}
