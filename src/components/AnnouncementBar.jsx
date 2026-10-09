import React from 'react';

const LotusIcon = ({ className = "h-[14px] w-auto" }) => (
  <img 
    src="/assets/lotus_clean.png" 
    alt="Lotus" 
    className={`inline-block object-contain flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${className}`}
  />
);

export default function AnnouncementBar({ onOpenModal }) {
  return (
    <div className="w-full h-[34px] bg-[#28180a] border-b border-[#C69A38]/30 select-none flex items-center justify-between px-6 sm:px-12 md:px-16 z-50 relative">
      {/* Left Lotus ornament */}
      <div className="hidden sm:flex items-center pl-1">
        <LotusIcon className="h-[14px] w-auto" />
      </div>

      {/* Center announcement text with Lotus flourish exactly matching reference */}
      <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center space-x-2.5 font-serif text-[#D8B467] text-[13px] sm:text-[13.5px] font-medium tracking-[0.02em] whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mx-auto sm:mx-0">
        <LotusIcon className="h-[14px] w-auto" />
        <span>Discover the timeless traditions of India.</span>
      </div>

      {/* Right links and ornament */}
      <div className="hidden sm:flex items-center space-x-3.5 font-serif text-[12px] sm:text-[12.5px] text-[#C4A053] pr-2">
        <a href="#about" onClick={(e) => { e.preventDefault(); onOpenModal?.('About Us'); }} className="hover:text-[#F2D78C] transition-colors">About Us</a>
        <span className="text-[#C69A38]/40">|</span>
        <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenModal?.('Contact'); }} className="hover:text-[#F2D78C] transition-colors">Contact</a>
        <span className="text-[#C69A38]/40">|</span>
        <a href="#help" onClick={(e) => { e.preventDefault(); onOpenModal?.('Help & FAQ'); }} className="hover:text-[#F2D78C] transition-colors">Help</a>
        <span className="ml-1 flex items-center">
          <LotusIcon className="h-[13px] w-auto" />
        </span>
      </div>
    </div>
  );
}
