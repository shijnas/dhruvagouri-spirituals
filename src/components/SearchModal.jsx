import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { FEATURED_PRODUCTS, CATEGORIES } from '../data/spiritualData';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onSelectCategory }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() 
    ? FEATURED_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : FEATURED_PRODUCTS.slice(0, 4);

  const filteredCategories = query.trim()
    ? CATEGORIES.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    : CATEGORIES.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#110E0B] border border-[#C69A38]/40 rounded-[6px] shadow-2xl p-6 z-10 overflow-hidden">
        
        {/* Search input container */}
        <div className="relative flex items-center border-b border-[#3B3022] pb-4">
          <Search size={22} className="text-[#C69A38] mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search Rudraksha, brass idols, puja essentials, malas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[#F8F4EA] font-serif text-[20px] placeholder-[#6E614F] focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-[#8C7D69] hover:text-white mr-2"
            >
              <X size={18} />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-2.5 py-1 text-[12px] uppercase tracking-wider text-[#A69984] hover:text-white"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div className="pt-5 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Quick Categories */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#C69A38] mb-2.5">
              Matching Traditions & Collections
            </h4>
            <div className="flex flex-wrap gap-2">
              {filteredCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory?.(cat);
                    onClose();
                  }}
                  className="px-3 py-1.5 rounded-full bg-[#1A1510] hover:bg-[#2B2219] border border-[#3E3224] text-[12px] text-[#E0D5C1] hover:text-[#E5BC5C] flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Tag size={12} className="text-[#C69A38]" />
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Matching Products */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#C69A38] mb-2.5">
              {query ? 'Search Results' : 'Sacred Suggestions'}
            </h4>
            <div className="space-y-2.5">
              {filteredProducts.length === 0 ? (
                <p className="text-[13px] text-[#786B5A] py-3">No spiritual products found matching "{query}".</p>
              ) : (
                filteredProducts.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct?.(prod);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded bg-[#16120E] hover:bg-[#1F1913] border border-[#2D2318] hover:border-[#C69A38]/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={prod.image} 
                        alt={prod.name}
                        className="w-12 h-12 object-cover rounded bg-[#FAF5EB] p-1"
                      />
                      <div>
                        <h5 className="font-serif text-[15px] text-[#FAF4EA] group-hover:text-[#E5BC5C] transition-colors">
                          {prod.name}
                        </h5>
                        <span className="text-[11px] text-[#8C7D68]">{prod.category}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-[13px] font-semibold text-[#E5BC5C]">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </span>
                      <ArrowRight size={14} className="text-[#786B5A] group-hover:text-[#E5BC5C] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
