import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/spiritualData';

export default function WishlistModal({ isOpen, onClose, wishlist, onToggleWishlist, onAddToCart }) {
  if (!isOpen) return null;

  const savedProducts = FEATURED_PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#110E0A] border border-[#C69A38]/40 rounded-[4px] shadow-2xl p-6 z-10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2C2317]">
          <div className="flex items-center space-x-2">
            <Heart size={20} className="text-[#C69A38] fill-[#C69A38]/30" />
            <h2 className="font-serif text-[22px] text-[#F8F4EA] font-semibold">Your Sacred Wishlist</h2>
            <span className="text-[12px] text-[#A69984]">({savedProducts.length} items)</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[#A69984] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 max-h-[60vh] overflow-y-auto space-y-3">
          {savedProducts.length === 0 ? (
            <div className="text-center py-10 text-[#7F7362]">
              <Heart size={36} className="mx-auto mb-2 text-[#4A3E31]" />
              <p className="font-serif text-[18px] text-[#E0D5BE]">No items saved yet</p>
              <p className="text-[12px] text-[#7F7362] mt-1">Tap the heart icon on any sacred treasure to keep it close.</p>
            </div>
          ) : (
            savedProducts.map((prod) => (
              <div 
                key={prod.id}
                className="flex items-center justify-between p-3.5 bg-[#17130F] border border-[#2E2419] rounded"
              >
                <div className="flex items-center space-x-3.5">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-14 h-14 object-cover rounded bg-[#FAF5EB] p-1"
                  />
                  <div>
                    <h4 className="font-serif text-[15px] text-[#FAF4EA] font-medium">{prod.name}</h4>
                    <p className="text-[11px] text-[#91836E]">{prod.category}</p>
                    <span className="text-[13px] font-semibold text-[#E5BC5C]">
                      ₹{prod.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      onAddToCart(prod);
                      onToggleWishlist(prod.id);
                    }}
                    className="px-3.5 py-1.5 bg-[#C69A38] hover:bg-[#E5BC5C] text-[#0E0C09] text-[11px] font-sans font-semibold rounded uppercase tracking-wider flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <ShoppingBag size={13} />
                    <span>Move to Bag</span>
                  </button>
                  <button
                    onClick={() => onToggleWishlist(prod.id)}
                    className="p-1.5 text-[#6B5E4F] hover:text-red-400 transition-colors"
                    title="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
