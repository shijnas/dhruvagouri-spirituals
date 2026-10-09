import React, { useEffect } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0F0D0A] border-l border-[#C69A38]/30 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-[#2B2319] flex items-center justify-between bg-[#14100C]">
            <div className="flex items-center space-x-2">
              <span className="text-[#C69A38]">✦</span>
              <h2 className="font-serif text-[20px] text-[#F8F4EA] font-semibold">Your Sacred Bag</h2>
              <span className="text-[12px] text-[#A69984] font-sans">({cartItems.reduce((a, b) => a + b.quantity, 0)} items)</span>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 text-[#B8AA94] hover:text-[#E5BC5C] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-[#7F7362] py-12">
                <div className="w-16 h-16 rounded-full border border-[#3E3326] flex items-center justify-center mb-3">
                  <span className="text-2xl text-[#C69A38]">ॐ</span>
                </div>
                <p className="font-serif text-[18px] text-[#E8DFC9]">Your bag is currently empty</p>
                <p className="text-[12px] text-[#7F7362] mt-1">Explore our sacred collection of malas, idols, and puja essentials.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex space-x-3.5 p-3 rounded bg-[#17130F] border border-[#2E251B]"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded bg-[#FAF5EB] p-1 flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-[14px] text-[#FAF4EA] font-medium leading-snug line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#9A8C77]">{item.category}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#3E3326] rounded text-[12px]">
                        <button 
                          onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-[#A69984] hover:text-white"
                        >-</button>
                        <span className="px-2 text-[#F2D78C] font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-[#A69984] hover:text-white"
                        >+</button>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className="text-[13px] font-semibold text-[#E5BC5C]">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#6B5E4F] hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#2B2319] bg-[#14100C] space-y-3">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#A69984]">Sacred Handling & Shipping</span>
                <span className="text-[#84C384] font-medium">Complimentary (All India)</span>
              </div>
              <div className="flex items-center justify-between text-[16px] font-serif pt-2 border-t border-[#2E251B]">
                <span className="text-[#FAF4EA]">Subtotal</span>
                <span className="text-[#E5BC5C] font-semibold text-[18px]">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center text-[11px] text-[#91836E] pt-1">
                <ShieldCheck size={14} className="text-[#C69A38] mr-1.5 flex-shrink-0" />
                <span>Consecrated packaging & pure traditional handling guaranteed.</span>
              </div>

              <button 
                onClick={() => alert(`Proceeding to demo checkout for ₹${subtotal.toLocaleString('en-IN')}`)}
                className="w-full h-[44px] gold-btn-gradient text-[#161208] text-[12px] font-sans font-bold tracking-[0.1em] uppercase rounded-[3px] flex items-center justify-center space-x-2 transition-transform active:scale-95 cursor-pointer mt-2"
              >
                <span>PROCEED TO CONSECRATED CHECKOUT</span>
                <ArrowRight size={15} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
