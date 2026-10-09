import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/spiritualData';

export default function CategorySection({ onSelectCategory }) {
  return (
    <section className="w-full min-h-[283px] py-3 bg-[#F5EFE1] relative border-b border-[#E1D3BA]">
      {/* Background subtle luxury corner linework */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none bg-[radial-gradient(#C69A38_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none bg-[radial-gradient(#C69A38_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-[1536px] h-full mx-auto px-4 sm:px-6 lg:px-[38px] flex flex-col justify-start pt-[2px]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          
          {/* Subtle gold center lotus flourish */}
          <div className="mb-0.5 text-[#C69A38] opacity-80">
            <svg width="15" height="9" viewBox="0 0 24 16" fill="currentColor">
              <path d="M12 0C12 4 10 9 10 13C10 15 11 16 12 16C13 16 14 15 14 13C14 9 12 0 12 0Z" />
              <path d="M9 6C7 8 5 11 5 13C5 15 7 16 9 15C10 14 10.5 12 10.5 10" />
              <path d="M15 6C17 8 19 11 19 13C19 15 17 16 15 15C14 14 13.5 12 13.5 10" />
            </svg>
          </div>

          {/* Eyebrow with fine decorative horizontal lines */}
          <div className="flex items-center space-x-2.5 mb-0.5">
            <span className="w-7 h-[1px] bg-[#C69A38]/50" />
            <span className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#A9832B]">
              EXPLORE THE COLLECTION
            </span>
            <span className="w-7 h-[1px] bg-[#C69A38]/50" />
          </div>

          {/* Main Heading (37–39px, Cormorant Garamond / Serif) */}
          <h2 className="font-serif text-[36px] sm:text-[38px] leading-[1.05] text-[#1B1611] font-normal tracking-[-0.01em]">
            A Place for Every Sacred Tradition.
          </h2>

          {/* Subtitle (14.5px, muted taupe) */}
          <p className="text-[14.5px] text-[#736A5B] font-sans font-light tracking-normal mt-0.5">
            Explore spiritual essentials selected for prayer, ritual, reflection and everyday devotional life.
          </p>
        </div>

        {/* 10 Category Cards Grid (Starts at exactly y ≈ 100px from section top) */}
        <div className="w-full mt-[3px] overflow-x-auto scrollbar-none">
          <div className="grid grid-flow-col auto-cols-[137px] sm:auto-cols-[138px] xl:grid-cols-10 gap-[7.5px] min-w-max xl:min-w-0">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory?.(cat)}
                tabIndex={0}
                className="group card-category-spiritual w-[137px] sm:w-[138px] h-[164px] bg-[#FAF6EE] border border-[#DFCDB2] rounded-[3px] overflow-hidden flex flex-col justify-between shadow-[0_1px_4px_rgba(0,0,0,0.03)] cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C69A38]"
              >
                {/* Product Image Area (~116px tall) */}
                <div className="w-full h-[116px] overflow-hidden bg-[#241F1A] relative flex-shrink-0">
                  <picture className="w-full h-full block">
                    <source type="image/webp" srcSet={cat.image.replace(/\.(jpg|jpeg|png)$/, '.webp')} />
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-350 ease-out"
                      loading="eager"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Caption Area (~48px tall) */}
                <div className="w-full h-[48px] px-2.5 py-1.5 flex items-center justify-between bg-[#F8F4EA] border-t border-[#E8DEC9] group-hover:bg-[#FCF9F2] transition-colors">
                  <span className="font-serif text-[11.5px] leading-[13px] text-[#221B14] font-medium tracking-wide line-clamp-2 pr-1 group-hover:text-[#0C0A07] transition-colors">
                    {cat.name}
                  </span>
                  
                  {/* Circular Gold Outlined Arrow with hover glow and motion */}
                  <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full border border-[#C69A38]/70 text-[#C69A38] flex items-center justify-center transition-all duration-250 group-hover:bg-[#C69A38] group-hover:text-[#0C0A07] group-hover:border-[#E5BC5C] group-hover:shadow-[0_0_8px_rgba(212,172,76,0.45)]">
                    <ChevronRight size={11} strokeWidth={2.2} className="transition-transform duration-250 group-hover:translate-x-[1.5px]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
