import React from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/spiritualData';

export default function FeaturedProducts({
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  return (
    <section className="w-full bg-[#0A0806] border-t border-[#231A12] pt-[1px] pb-[56px] relative select-none">
      {/* Background subtle cinematic architectural atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#130E09] via-[#0A0806] to-[#060504] opacity-95 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#C69A38]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-[98px]">
        
        {/* Section Header: Eyebrow, Heading, View All Products (Height ≈ 56px, starts at y ≈ 16px) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pt-[5px] mb-[12px]">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center space-x-2 text-[#C69A38] mb-0.5">
              <span className="w-4 h-[1px] bg-[#C69A38]/60" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#C69A38]">
                THE COLLECTION
              </span>
              <span className="text-[#C69A38] text-[11px]">→</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-[27px] sm:text-[28px] lg:text-[28.5px] leading-tight text-[#F7F2E7] font-normal tracking-[-0.01em]">
              Sacred Essentials, Thoughtfully Chosen.
            </h2>
          </div>

          {/* View All Products Link */}
          <a
            href="#all-products"
            className="mt-2 sm:mt-0 flex items-center space-x-1.5 text-[11.5px] font-sans font-medium text-[#D8B15D] hover:text-[#F2D78C] transition-colors group cursor-pointer pb-0.5"
          >
            <span>View All Products</span>
            <span className="group-hover:translate-x-1 transition-transform text-[13px]">→</span>
          </a>
        </div>

        {/* 6 Product Cards Grid (Starts at Y ≈ 928px on desktop) */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-none">
          <div className="grid grid-flow-col auto-cols-[212px] xl:grid-cols-6 gap-[13px] min-w-max xl:min-w-0">
            {FEATURED_PRODUCTS.map((prod) => {
              const isWishlisted = wishlist.includes(prod.id);

              return (
                <div
                  key={prod.id}
                  className="group w-[212px] bg-[#FAF5EB] border border-[#E1D3BA] rounded-[4px] overflow-hidden flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#C69A38]/60"
                >
                  {/* Image Container with Cream background */}
                  <div className="w-full h-[180px] bg-[#F7F2E7] relative overflow-hidden flex items-center justify-center p-2">
                    
                    {/* Badge (Top-Left) */}
                    {prod.badge && (
                      <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-[2px] bg-[#E5BC5C] text-[#161208] text-[9.5px] font-sans font-semibold tracking-wider uppercase shadow-sm">
                        {prod.badge}
                      </span>
                    )}

                    {/* Wishlist Button (Top-Right) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(prod.id);
                      }}
                      className="absolute top-2.5 right-2.5 z-10 w-[24px] h-[24px] rounded-full bg-[#FAF5EB]/90 hover:bg-white text-[#4A4033] hover:text-[#C69A38] border border-[#D5C4A8] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
                      aria-label="Wishlist"
                    >
                      <Heart
                        size={13}
                        className={isWishlisted ? "text-[#C69A38] fill-[#C69A38]" : "text-[#554A3B]"}
                      />
                    </button>

                    {/* Product Photo */}
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                    />

                    {/* Quick View Hover overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={() => onQuickView(prod)}
                        className="px-3 py-1.5 bg-[#FAF5EB] text-[#1C160F] text-[11px] font-sans font-medium rounded shadow hover:bg-white flex items-center gap-1 cursor-pointer"
                      >
                        <Eye size={12} />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Details Area (Visible on scroll / full card) */}
                  <div className="p-3 bg-[#FAF5EB] border-t border-[#E8DEC9] flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-[10px] font-sans uppercase tracking-wider text-[#8A7963]">
                        {prod.category}
                      </span>
                      <h3 className="font-serif text-[13.5px] leading-[17px] text-[#1E1710] font-medium tracking-tight mt-0.5 line-clamp-1 group-hover:text-[#A9832B] transition-colors">
                        {prod.name}
                      </h3>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-[#EAE0CD] flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[13px] font-semibold text-[#1F1811]">
                          ₹{prod.price.toLocaleString('en-IN')}
                        </span>
                        {prod.originalPrice && (
                          <span className="text-[10.5px] text-[#9E907B] line-through">
                            ₹{prod.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => onAddToCart(prod)}
                        className="w-[26px] h-[26px] rounded bg-[#1C1610] hover:bg-[#C69A38] text-[#F8F4EA] hover:text-[#110E0B] flex items-center justify-center transition-colors cursor-pointer"
                        title="Add to Cart"
                      >
                        <ShoppingBag size={12} />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
