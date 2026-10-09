import React from 'react';

export default function BrandPrinciples() {
  const items = [
    {
      id: 1,
      title: "Tradition First",
      desc: "Inspired by enduring Indian spiritual practices.",
      icon: (
        // Refined Lotus line art
        <svg viewBox="0 0 48 48" className="w-[42px] h-[42px] text-[#C69A38] stroke-current fill-none" strokeWidth="1.2">
          <path d="M24 10C24 10 21 18 21 27C21 32 24 35 24 35C24 35 27 32 27 27C27 18 24 10 24 10Z" />
          <path d="M21 21C17 19 11 20 9 26C8 30 11 34 16 35C19 35.5 22 34 23 33" />
          <path d="M27 21C31 19 37 20 39 26C40 30 37 34 32 35C29 35.5 26 34 25 33" />
          <path d="M19 28C14 29 10 33 11 37C12 39 16 40 21 39" />
          <path d="M29 28C34 29 38 33 37 37C36 39 32 40 27 39" />
          <path d="M18 39C21 40 27 40 30 39" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Thoughtfully Selected",
      desc: "A considered range for devotional living.",
      icon: (
        // Delicate Botanical Sprig line art
        <svg viewBox="0 0 48 48" className="w-[42px] h-[42px] text-[#C69A38] stroke-current fill-none" strokeWidth="1.2">
          <path d="M14 38C22 34 28 26 34 12" />
          <path d="M34 12C31 16 26 17 23 15C20 13 22 8 34 12Z" />
          <path d="M28 20C24 23 19 23 17 20C15 17 18 13 28 20Z" />
          <path d="M30 21C34 25 34 30 31 32C28 34 25 30 30 21Z" />
          <path d="M23 28C19 31 15 31 14 28C13 25 16 22 23 28Z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Quality in Every Detail",
      desc: "Product information presented with care and clarity.",
      icon: (
        // Fine Geometric Diamond line art
        <svg viewBox="0 0 48 48" className="w-[42px] h-[42px] text-[#C69A38] stroke-current fill-none" strokeWidth="1.2">
          <path d="M24 8L37 18L24 40L11 18L24 8Z" />
          <path d="M11 18H37" />
          <path d="M24 8L20 18L24 40L28 18L24 8Z" />
          <path d="M20 18L11 18" />
          <path d="M28 18L37 18" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Rooted in Devotion",
      desc: "Created around respect for spiritual traditions.",
      icon: (
        // Restrained Praying-Hands (Namaste) line art
        <svg viewBox="0 0 48 48" className="w-[42px] h-[42px] text-[#C69A38] stroke-current fill-none" strokeWidth="1.2">
          <path d="M24 10C23 13 22 17 21 21C20 25 18 29 16 33C15 35 17 38 19 38C21 38 23 35 24 33" />
          <path d="M24 10C25 13 26 17 27 21C28 25 30 29 32 33C33 35 31 38 29 38C27 38 25 35 24 33" />
          <path d="M19 22C17 25 15 28 14 31C13 34 15 37 18 37" />
          <path d="M29 22C31 25 33 28 34 31C35 34 33 37 30 37" />
          <path d="M20 38C22 41 26 41 28 38" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full min-h-[94px] py-4 lg:py-0 bg-[#F7F2E7] border-b border-[#E3D7C1] relative flex items-center">
      {/* Background subtle ornamental linework pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
        style={{
          backgroundImage: "radial-gradient(#C69A38 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />

      <div className="max-w-[1536px] w-full h-full mx-auto px-6 sm:px-12 lg:px-16 flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center w-full h-full">
          {items.map((item, index) => (
            <div key={item.id} className="relative flex items-center justify-center lg:justify-start py-1 lg:py-0 px-3 lg:px-5">
              {/* Content Group (Icon + 2-line text block) */}
              <div className="flex items-center space-x-3.5">
                {/* Gold line icon (42–50px) */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Text Block */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-[15px] font-semibold text-[#221D16] tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#6E6352] font-sans font-normal leading-[16px] mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Fine vertical gold separator between groups (1px wide, 38px tall) */}
              {index < items.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[38px] bg-[#DFCDB1]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
