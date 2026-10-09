import React from 'react';

export default function AnnouncementBar({ onOpenModal }) {
  return (
    <div className="w-full h-[30px] bg-[#1a120b] border-b border-[#C69A38]/30 text-[#D8B467] text-[11px] tracking-wide select-none flex items-center justify-between px-6 sm:px-12 md:px-20 z-50 relative">
      {/* Left ornamental flourish */}
      <div className="flex items-center space-x-2 text-[#C69A38] opacity-80 pl-4 md:pl-10">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.4 7.2L20 8.4L16 12.8L17 18.4L12 15.6L7 18.4L8 12.8L4 8.4L9.6 7.2L12 2Z" opacity="0.8"/>
        </svg>
      </div>

      {/* Center announcement text */}
      <div className="absolute left-1/2 -translate-x-1/2 font-sans font-normal text-[#E2C481] tracking-[0.03em] whitespace-nowrap text-[11px]">
        Discover the timeless traditions of India.
      </div>

      {/* Right links and ornament */}
      <div className="hidden sm:flex items-center space-x-3 text-[11px] text-[#C4A053] pr-4 md:pr-10 font-sans">
        <a href="#about" onClick={(e) => { e.preventDefault(); onOpenModal?.('About Us'); }} className="hover:text-[#F2D78C] transition-colors">About Us</a>
        <span className="text-[#C69A38]/40">|</span>
        <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenModal?.('Contact'); }} className="hover:text-[#F2D78C] transition-colors">Contact</a>
        <span className="text-[#C69A38]/40">|</span>
        <a href="#help" onClick={(e) => { e.preventDefault(); onOpenModal?.('Help & FAQ'); }} className="hover:text-[#F2D78C] transition-colors">Help</a>
        <span className="text-[#C69A38] opacity-75 ml-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 2C13.1 5 15 6.9 18 8C15 9.1 13.1 11 12 14C10.9 11 9 9.1 6 8C9 6.9 10.9 5 12 2Z"/>
          </svg>
        </span>
      </div>
    </div>
  );
}
