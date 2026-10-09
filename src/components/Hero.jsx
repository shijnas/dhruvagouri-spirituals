import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({ onExploreClick, onHeritageClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      eyebrow: "ROOTED IN TIMELESS TRADITION",
      line1Prefix: "Bring the ",
      line1Highlight: "Sacred",
      line2Prefix: "Into Everyday ",
      line2Highlight: "Life.",
      description: "Discover thoughtfully selected Rudraksha, sacred malas, traditional puja essentials and devotional treasures inspired by India's rich spiritual heritage.",
      tagline: "Authentic Products  |  Traditional Practices  |  A More Meaningful Life"
    },
    {
      id: 1,
      eyebrow: "SACRED DEVOTIONAL ARTIFACTS",
      line1Prefix: "Awaken ",
      line1Highlight: "Divine",
      line2Prefix: "Presence in Every ",
      line2Highlight: "Space.",
      description: "Handcrafted brass murtis, energized yantras, and ritual samagri consecrated according to timeless Vedic traditions.",
      tagline: "Purity of Form  |  Sanctified Craft  |  Spiritual Harmony"
    },
    {
      id: 2,
      eyebrow: "PURE HIMALAYAN SEEDS",
      line1Prefix: "Wear the ",
      line1Highlight: "Energy",
      line2Prefix: "of Timeless ",
      line2Highlight: "Peace.",
      description: "Lab-tested authentic Rudraksha beads and japa malas designed to align the subtle mind and protect the spirit.",
      tagline: "Lab Certified  |  Hand-Strung Malas  |  Vedic Sanctity"
    }
  ];

  const slide = slides[currentSlide];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full min-h-[360px] h-auto py-8 sm:py-0 sm:h-[360px] bg-[#0c0a07] overflow-hidden border-b border-[#251d14]">
      {/* Background Cinematic Spiritual Still-Life */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-right lg:bg-center"
        style={{
          backgroundImage: "url('/assets/hero_bg_2x.jpg')",
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Soft vignette gradient for perfect text contrast on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080807] via-[#080807]/90 to-transparent w-full md:w-[62%]" />

        {/* Subtle, slow-moving ambient golden illumination layered over dark background */}
        <div className="absolute right-[22%] top-[15%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(229,188,92,0.06)_0%,rgba(198,154,56,0.02)_50%,transparent_75%)] animate-diya-glow pointer-events-none" />
      </div>

      {/* Vertical Slide Indicators (Far-left edge at x ≈ 38px, visible on md+) */}
      <div className="hidden md:flex absolute left-[20px] lg:left-[38px] top-1/2 -translate-y-1/2 z-30 flex-col items-center space-y-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="group relative flex items-center justify-center p-0.5 cursor-pointer"
            aria-label={`Slide ${idx + 1}`}
          >
            {idx === currentSlide ? (
              <span className="w-[13px] h-[13px] rounded-full border border-[#E5BC5C] flex items-center justify-center shadow-[0_0_8px_rgba(229,188,92,0.5)]">
                <span className="w-[4.5px] h-[4.5px] rounded-full bg-[#E5BC5C]" />
              </span>
            ) : (
              <span className="w-[5.5px] h-[5.5px] rounded-full bg-[#786B56] group-hover:bg-[#E5BC5C] group-hover:shadow-[0_0_6px_rgba(229,188,92,0.4)] transition-all" />
            )}
          </button>
        ))}
        {/* Subtle connecting gold guide line */}
        <div className="w-[1px] h-5 bg-[#C69A38]/30 animate-divider-glow" />
      </div>

      {/* Main Content Container (positioned at x ≈ 150px on desktop) */}
      <div className="relative max-w-[1536px] h-full mx-auto px-6 sm:px-12 md:pl-[148px] lg:pl-[152px] flex items-center z-20">
        <div className="max-w-[490px] pt-1">
          
          {/* Eyebrow with fine decorative horizontal lines and diamond */}
          <div className="flex items-center space-x-2.5 mb-2.5 text-[#C69A38]">
            <span className="w-5 h-[1px] bg-[#C69A38]/60 animate-divider-glow" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.24em] uppercase text-[#D4A947]">
              {slide.eyebrow}
            </span>
            <span className="w-5 h-[1px] bg-[#C69A38]/60 animate-divider-glow" />
          </div>

          {/* Main Headline (48–50px, line-height 0.98–1.05, Cormorant Garamond) */}
          <h1 className="font-serif text-[34px] sm:text-[48px] lg:text-[49px] leading-[1.04] sm:leading-[1.01] tracking-[-0.01em] text-[#F8F4EA] mb-3">
            <span>{slide.line1Prefix}</span>
            <span className="text-[#E5BC5C] font-normal animate-gold-headline inline-block">{slide.line1Highlight}</span>
            <br />
            <span>{slide.line2Prefix}</span>
            <span className="text-[#E5BC5C] font-normal animate-gold-headline inline-block">{slide.line2Highlight}</span>
          </h1>

          {/* Supporting Paragraph (15px, line-height 20px, max-width 420px) */}
          <p className="max-w-[420px] text-[14.5px] leading-[20.5px] text-[#D8CEBE] font-sans font-light mb-5">
            {slide.description}
          </p>

          {/* Buttons Row (Primary: ~244x43px, Secondary: ~222x43px, Gap: ~12px) */}
          <div className="flex flex-wrap items-center gap-[12px] mb-4">
            {/* Primary CTA */}
            <button
              onClick={onExploreClick}
              className="w-[244px] h-[43px] rounded-[3px] gold-btn-gradient btn-gold-glow text-[#161208] text-[12px] font-sans font-bold tracking-[0.08em] uppercase flex items-center justify-center space-x-2 cursor-pointer shadow-md"
            >
              <span>EXPLORE THE COLLECTION</span>
              <ArrowRight size={14} className="text-[#161208]" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={onHeritageClick}
              className="w-[222px] h-[43px] rounded-[3px] bg-transparent border border-[#C69A38]/80 btn-outline-gold text-[#F5EFE0] text-[12px] font-sans font-medium tracking-[0.08em] uppercase flex items-center justify-center cursor-pointer"
            >
              <span>DISCOVER OUR HERITAGE</span>
            </button>
          </div>

          {/* Supporting Details Line below buttons */}
          <div className="flex items-center space-x-2 text-[12px] text-[#A6977F] font-sans">
            <span className="text-[#C69A38] text-[13px]">→</span>
            <span className="tracking-wide">
              {slide.tagline}
            </span>
          </div>

        </div>
      </div>

      {/* Circular Carousel Controls on the Right (at x ≈ 1470–1500px) */}
      <div className="hidden md:flex absolute right-[28px] lg:right-[42px] top-1/2 -translate-y-1/2 z-30 flex-col space-y-3.5">
        <button
          onClick={prevSlide}
          className="w-[34px] h-[34px] rounded-full bg-[#110E0B]/75 hover:bg-[#C69A38] hover:text-[#0c0a07] text-[#C69A38] border border-[#C69A38]/40 flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-sm shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={nextSlide}
          className="w-[34px] h-[34px] rounded-full bg-[#110E0B]/75 hover:bg-[#C69A38] hover:text-[#0c0a07] text-[#C69A38] border border-[#C69A38]/40 flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-sm shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
