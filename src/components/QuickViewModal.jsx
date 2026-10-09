import React, { useEffect } from 'react';
import { X, Heart, ShoppingBag, ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function QuickViewModal({ 
  product, 
  isOpen, 
  onClose, 
  isWishlisted, 
  onToggleWishlist, 
  onAddToCart 
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-[#110E0B] border border-[#C69A38]/50 rounded-[4px] shadow-2xl p-6 sm:p-8 z-10 overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#9A8C78] hover:text-[#E5BC5C] transition-colors"
        >
          <X size={22} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Product Image Area on Cream Background */}
          <div className="w-full h-[320px] bg-[#FAF5EB] rounded-[4px] border border-[#E3D6C1] flex items-center justify-center p-6 relative overflow-hidden">
            {product.badge && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-[2px] bg-[#E5BC5C] text-[#141009] text-[10px] font-sans font-bold uppercase tracking-wider shadow">
                {product.badge}
              </span>
            )}
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Details Area */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C69A38] font-semibold">
                {product.category}
              </span>

              <h2 className="font-serif text-[26px] leading-tight text-[#FAF4EA] font-normal mt-1 mb-2">
                {product.name}
              </h2>

              <div className="flex items-baseline space-x-3 mb-4">
                <span className="text-[22px] font-bold text-[#E5BC5C]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-[15px] text-[#7F725F] line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-[11px] text-[#86C286] font-medium border border-[#3E5C3E] px-2 py-0.5 rounded">
                  In Stock & Sanctified
                </span>
              </div>

              <p className="text-[13.5px] leading-relaxed text-[#BFB3A0] font-sans font-light mb-6">
                {product.description}
              </p>

              {/* Guarantees */}
              <div className="space-y-2 border-t border-[#292015] pt-4 mb-6 text-[12px] text-[#9A8D7A]">
                <div className="flex items-center space-x-2">
                  <Check size={14} className="text-[#C69A38]" />
                  <span>100% Authentic Natural Himalayan Origin / Pure Metal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles size={14} className="text-[#C69A38]" />
                  <span>Handcrafted according to authentic shastra dimensions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck size={14} className="text-[#C69A38]" />
                  <span>Consecrated packaging & sacred dispatch process</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 h-[44px] gold-btn-gradient text-[#161208] text-[12px] font-sans font-bold tracking-[0.1em] uppercase rounded-[3px] flex items-center justify-center space-x-2 transition-transform active:scale-95 cursor-pointer"
              >
                <ShoppingBag size={15} />
                <span>ADD TO SACRED BAG</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product.id)}
                className="w-[44px] h-[44px] rounded-[3px] border border-[#3E3224] hover:border-[#C69A38] bg-[#17130F] text-[#DDD3C2] flex items-center justify-center transition-colors cursor-pointer"
                title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart 
                  size={18} 
                  className={isWishlisted ? "text-[#C69A38] fill-[#C69A38]" : ""}
                />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
