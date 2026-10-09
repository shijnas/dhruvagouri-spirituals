import React from 'react';
import { Heart, ShoppingBag, Eye, ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/spiritualData';

export default function FeaturedProducts({
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  return (
    <section id="featured-products" className="w-full bg-[#0A0806] border-t border-[#231A12] pt-6 pb-16 relative">
      {/* Background subtle cinematic architectural atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#130E09] via-[#0A0806] to-[#060504] opacity-95 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#C69A38]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        
        {/* Section Header: Eyebrow, Heading, View All Products */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center space-x-2 text-[#C69A38] mb-1">
              <span className="w-4 h-[1px] bg-[#C69A38]/60" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#C69A38]">
                THE COLLECTION
              </span>
              <span className="text-[#C69A38] text-[11px]">→</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-[28px] sm:text-[31px] leading-tight text-[#F7F2E7] font-normal tracking-[-0.01em]">
              Sacred Essentials, Thoughtfully Chosen.
            </h2>
          </div>

          {/* View All Products Link */}
          <a
            href="#all-products"
            className="mt-2 sm:mt-0 flex items-center space-x-1.5 text-[12px] font-sans font-medium text-[#D8B15D] hover:text-[#F2D78C] transition-colors group cursor-pointer pb-0.5"
          >
            <span>View All Products</span>
            <span className="group-hover:translate-x-1 transition-transform text-[13px]">→</span>
          </a>
        </div>

        {/* 6 Product Cards Grid — Exact 6 equal columns on desktop, responsive reflow, zero horizontal scrollbar */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 lg:gap-4 w-full">
            {FEATURED_PRODUCTS.map((prod) => {
              const isWishlisted = wishlist.includes(prod.id);

              return (
                <div
                  key={prod.id}
                  className="group bg-[#FAF5EB] border border-[#E1D3BA] rounded-[4px] overflow-hidden flex flex-col justify-between shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#C69A38]/70"
                >
                  {/* PRODUCT IMAGE FRAME — 1:1 square, occupies entire container, no empty space, no nested borders */}
                  <div className="w-full aspect-square bg-[#FAF5EB] relative overflow-hidden flex items-center justify-center">
                    
                    {/* Genuine Product Badge */}
                    {prod.badge && (
                      <span className="absolute top-2.5 left-2.5 z-20 px-2.5 py-0.5 rounded-[2px] bg-[#E5BC5C] text-[#141009] text-[9.5px] font-sans font-bold uppercase tracking-wider shadow-sm">
                        {prod.badge}
                      </span>
                    )}

                    {/* Wishlist Button (Single instance, consistent top-right position) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(prod.id);
                      }}
                      className="absolute top-2.5 right-2.5 z-20 w-[28px] h-[28px] rounded-full bg-[#FAF5EB]/90 hover:bg-white text-[#4A4033] hover:text-[#C69A38] border border-[#D5C4A8] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
                      aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                      title={isWishlisted ? "In Wishlist" : "Add to Wishlist"}
                    >
                      <Heart
                        size={14}
                        className={isWishlisted ? "text-[#C69A38] fill-[#C69A38]" : "text-[#554A3B]"}
                      />
                    </button>

                    {/* Clean Product Photograph — 100% width and height, object-cover */}
                    <picture className="w-full h-full block">
                      <source type="image/webp" srcSet={prod.image.replace(/\.(jpg|jpeg|png)$/, '.webp')} />
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                      />
                    </picture>

                    {/* Quick View Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 pointer-events-none group-hover:pointer-events-auto">
                      <button
                        onClick={() => onQuickView(prod)}
                        className="px-3.5 py-1.5 bg-[#FAF5EB] text-[#1C160F] text-[11px] font-sans font-semibold rounded shadow hover:bg-white flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <Eye size={13} />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* PRODUCT INFORMATION */}
                  <div className="p-3.5 bg-[#FAF5EB] border-t border-[#E8DEC9] flex flex-col flex-grow justify-between">
                    <div>
                      {/* Category Label */}
                      <span className="text-[10px] font-sans uppercase tracking-[0.14em] text-[#8A7963] font-medium block mb-1">
                        {prod.category}
                      </span>

                      {/* Product Name — Wraps naturally to two lines with min-height for uniform baseline */}
                      <h3 
                        className="font-serif text-[13.5px] sm:text-[14px] leading-[18px] text-[#1E1710] font-medium tracking-tight min-h-[36px] line-clamp-2 group-hover:text-[#A9832B] transition-colors"
                        title={prod.name}
                      >
                        {prod.name}
                      </h3>
                    </div>

                    {/* Price and Add-to-Cart Baseline */}
                    <div className="mt-3 pt-2.5 border-t border-[#EAE0CD] flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        {/* Current Price in Indian Currency notation */}
                        <span className="text-[13.5px] sm:text-[14px] font-bold text-[#1F1811]">
                          ₹{prod.price.toLocaleString('en-IN')}
                        </span>
                        {/* Comparison Price */}
                        {prod.originalPrice && (
                          <span className="text-[10.5px] sm:text-[11px] text-[#9E907B] line-through">
                            ₹{prod.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      {/* Add to Bag Button */}
                      <button
                        onClick={() => onAddToCart(prod)}
                        className="w-[28px] h-[28px] rounded bg-[#1C1610] hover:bg-[#C69A38] text-[#F8F4EA] hover:text-[#110E0B] flex items-center justify-center transition-colors cursor-pointer"
                        title="Add to Bag"
                        aria-label={`Add ${prod.name} to bag`}
                      >
                        <ShoppingBag size={13} />
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
