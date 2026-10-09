import React from 'react';

const LotusIcon = () => (
  <svg width="14" height="11" viewBox="0 0 24 18" fill="currentColor" className="text-[#C69A38] opacity-90">
    <path d="M12 2C11.5 5 10 9 10 13C10 15 11 16 12 16C13 16 14 15 14 13C14 9 12.5 5 12 2Z" />
    <path d="M8 6C6.5 8 4 11 4 13C4 15.5 6 16.5 8 15.5C9.5 14.7 10 13 10 11C10 9 9 7.5 8 6Z" />
    <path d="M16 6C17.5 8 20 11 20 13C20 15.5 18 16.5 16 15.5C14.5 14.7 14 13 14 11C14 9 15 7.5 16 6Z" />
    <path d="M5 10C3.5 11.5 2 13.5 2 15C2 16.5 4 17 6 16.5C7.5 16 8.5 14.5 8.5 13" />
    <path d="M19 10C20.5 11.5 22 13.5 22 15C22 16.5 20 17 18 16.5C16.5 16 15.5 14.5 15.5 13" />
  </svg>
);

export default function AnnouncementBar({ onOpenModal }) {
  return (
    <div className="w-full h-[30px] bg-[#1a120b] border-b border-[#C69A38]/30 text-[#D8B467] text-[11px] tracking-wide select-none flex items-center justify-between px-6 sm:px-12 md:px-20 z-50 relative">
      {/* Left ornamental flourish */}
      <div className="flex items-center space-x-2 text-[#C69A38] opacity-80 pl-4 md:pl-10">
        <LotusIcon />
      </div>

      {/* Center announcement text */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2 font-sans font-normal text-[#E2C481] tracking-[0.03em] whitespace-nowrap text-[11px]">
        <span>Discover the timeless traditions of India.</span>
      </div>

      {/* Right links and ornament */}
      <div className="hidden sm:flex items-center space-x-3 text-[11px] text-[#C4A053] pr-4 md:pr-10 font-sans">
        <a href="#about" onClick={(e) => { e.preventDefault(); onOpenModal?.('About Us'); }} className="hover:text-[#F2D78C] transition-colors">About Us</a>
        <span className="text-[#C69A38]/40">|</span>
        <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenModal?.('Contact'); }} className="hover:text-[#F2D78C] transition-colors">Contact</a>
        <span className="text-[#C69A38]/40">|</span>
        <a href="#help" onClick={(e) => { e.preventDefault(); onOpenModal?.('Help & FAQ'); }} className="hover:text-[#F2D78C] transition-colors">Help</a>
        <span className="ml-1 flex items-center">
          <LotusIcon />
        </span>
      </div>
    </div>
  );
}
