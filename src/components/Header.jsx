import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/spiritualData';

export default function Header({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAuth,
  activeNav = 'Home',
  onSelectNav
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="w-full h-[88px] bg-[#070706] border-b border-[#C69A38]/25 z-40 relative">
      <div className="max-w-[1536px] h-full mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* LEFT BRAND AREA: x ≈ 65px, width ≈ 300px */}
        <div className="flex items-center min-w-[260px] md:min-w-[300px] h-[75px]">
          <a href="#" className="flex items-center gap-3.5 group">
            {/* Authentic Logo Emblem */}
            <picture>
              <source srcSet="/assets/logo_full.webp" type="image/webp" />
              <img 
                src="/assets/logo_full.png" 
                alt="DHRUVAGOURI SPIRITUALS - Authentic Indian Spiritual Traditions" 
                className="h-[58px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                width="211"
                height="58"
              />
            </picture>
          </a>
        </div>

        {/* CENTRE NAVIGATION: serif typography, warm ivory */}
        <nav className="hidden xl:flex items-center space-x-7 text-[13px] font-sans font-medium text-[#F4EFE6] tracking-wide">
          {NAV_LINKS.map((link) => {
            const isActive = link.name === activeNav;
            const hasDropdown = Boolean(link.hasDropdown);

            return (
              <div 
                key={link.name} 
                className="relative py-7 group"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => onSelectNav?.(link.name)}
                  className={`flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-[#F8F4EA] font-semibold' 
                      : 'text-[#E0D8C8] hover:text-[#E5BC5C]'
                  }`}
                >
                  <span className="font-serif text-[15px] tracking-wide">{link.name}</span>
                  {hasDropdown && (
                    <ChevronDown size={12} className="text-[#C69A38] opacity-80 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </button>

                {/* Understated gold active indicator visible in reference screenshot */}
                {isActive && (
                  <span className="absolute bottom-[20px] left-0 right-0 h-[1.5px] bg-[#C69A38] rounded-full shadow-[0_0_6px_rgba(198,154,56,0.6)]" />
                )}

                {/* Dropdown Menu */}
                {hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-[75px] left-0 w-64 bg-[#110F0C] border border-[#C69A38]/30 shadow-2xl py-3 px-2 z-50 rounded-sm backdrop-blur-md">
                    {link.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-[12px] font-sans text-[#E5DDCF] hover:text-[#E5BC5C] hover:bg-[#1C1813] transition-colors rounded"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* RIGHT CONTROLS: Search, Account, Wishlist, Shopping Bag */}
        <div className="flex items-center space-x-4 lg:space-x-5">
          {/* Search Input Box (desktop width ≈ 228px, height ≈ 37px, rounded ≈ 22px) */}
          <div 
            onClick={onOpenSearch}
            className="hidden lg:flex items-center justify-between w-[228px] h-[37px] px-3.5 rounded-full bg-[#161411] border border-[#3A3327] hover:border-[#C69A38]/60 transition-colors cursor-pointer group"
          >
            <span className="text-[12px] font-sans text-[#786F62] group-hover:text-[#A89D8B] transition-colors">
              Search for products...
            </span>
            <Search size={15} className="text-[#8C806F] group-hover:text-[#E5BC5C] transition-colors" />
          </div>

          {/* Search Icon button for tablet/mobile */}
          <button 
            onClick={onOpenSearch} 
            className="lg:hidden p-2 text-[#DDD3C2] hover:text-[#E5BC5C] transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.75} />
          </button>

          {/* Account Icon */}
          <button 
            onClick={onOpenAuth}
            className="p-1.5 text-[#E6DECة] text-[#DDD3C2] hover:text-[#E5BC5C] transition-colors cursor-pointer relative"
            aria-label="Account"
          >
            <User size={21} strokeWidth={1.65} />
          </button>

          {/* Wishlist Heart Icon */}
          <button 
            onClick={onOpenWishlist}
            className="p-1.5 text-[#DDD3C2] hover:text-[#E5BC5C] transition-colors cursor-pointer relative"
            aria-label="Wishlist"
          >
            <Heart size={21} strokeWidth={1.65} className={wishlistCount > 0 ? "text-[#E5BC5C] fill-[#E5BC5C]/20" : ""} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-[#C69A38] text-[#080807] text-[9px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag Icon with item-count badge (size ≈ 16-18px) */}
          <button 
            onClick={onOpenCart}
            className="p-1.5 text-[#DDD3C2] hover:text-[#E5BC5C] transition-colors cursor-pointer relative"
            aria-label="Shopping Bag"
          >
            <ShoppingBag size={21} strokeWidth={1.65} />
            <span className="absolute -top-1 -right-1.5 min-w-[17px] h-[17px] bg-[#C69A38] text-[#080807] text-[10px] font-bold rounded-full flex items-center justify-center px-0.5 shadow-sm">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="xl:hidden p-1.5 text-[#DDD3C2] hover:text-[#E5BC5C] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[118px] bg-[#0E0C09]/98 border-b border-[#C69A38]/30 backdrop-blur-xl p-6 z-50 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            <div 
              onClick={() => { onOpenSearch(); setMobileMenuOpen(false); }}
              className="flex items-center justify-between w-full h-[40px] px-4 rounded-full bg-[#181512] border border-[#3A3327]"
            >
              <span className="text-[13px] text-[#8C806F]">Search for products...</span>
              <Search size={16} className="text-[#C69A38]" />
            </div>

            <div className="border-t border-[#3A3327]/60 pt-4 flex flex-col space-y-3 font-serif text-[17px]">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    onSelectNav?.(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left py-1.5 text-[#EFE6D3] hover:text-[#E5BC5C] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown size={14} className="text-[#C69A38]" />}
                </button>
              ))}
            </div>

            <div className="border-t border-[#3A3327]/60 pt-4 flex items-center justify-around text-[12px] text-[#C4A053]">
              <button onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}>My Account</button>
              <span>•</span>
              <button onClick={() => { onOpenWishlist(); setMobileMenuOpen(false); }}>Wishlist ({wishlistCount})</button>
              <span>•</span>
              <button onClick={() => { onOpenCart(); setMobileMenuOpen(false); }}>Cart ({cartCount})</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
