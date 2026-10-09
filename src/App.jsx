import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandPrinciples from './components/BrandPrinciples';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistModal from './components/WishlistModal';
import SearchModal from './components/SearchModal';
import QuickViewModal from './components/QuickViewModal';
import { FEATURED_PRODUCTS, CATEGORIES } from './data/spiritualData';

export default function App() {
  // State management
  const [cartItems, setCartItems] = useState([
    {
      ...FEATURED_PRODUCTS[0],
      quantity: 1,
    }
  ]);
  const [wishlist, setWishlist] = useState([2]); // Card 2 initial demo wishlist
  const [activeNav, setActiveNav] = useState('Home');

  // Modal open states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Cart actions
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity: newQty } : item
    ));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Wishlist actions
  const handleToggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#080807] text-[#F8F4EA] flex flex-col font-sans selection:bg-[#C69A38] selection:text-[#080807]">
      {/* 1. ANNOUNCEMENT BAR (Height: 30px) */}
      <AnnouncementBar 
        onOpenModal={(title) => alert(`DHRUVAGOURI SPIRITUALS: ${title}`)} 
      />

      {/* 2. PRIMARY NAVIGATION (Height: 88px) */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        activeNav={activeNav}
        onSelectNav={setActiveNav}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => alert('DHRUVAGOURI Devotee Portal: Please sign in or register.')}
      />

      {/* 3. HERO SECTION (Height: 360px) */}
      <main className="flex-1">
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('categories-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onHeritageClick={() => {
            alert('DHRUVAGOURI SPIRITUALS: Rooted in the sacred lineages of Kumbakonam, Varanasi, and the Himalayas.');
          }}
        />

        {/* 4. BRAND PRINCIPLES STRIP (Height: 94px) */}
        <BrandPrinciples />

        {/* 5. CATEGORY SECTION (Total Height: 283px) */}
        <div id="categories-section">
          <CategorySection
            onSelectCategory={(cat) => {
              alert(`Navigating to ${cat.name} Collection: ${cat.description}`);
            }}
          />
        </div>

        {/* 6. FEATURED PRODUCTS SECTION (Begins at Y = 855px) */}
        <FeaturedProducts
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />
      </main>

      {/* 7. LUXURY DEVOTIONAL FOOTER */}
      <Footer />

      {/* MODALS */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setQuickViewProduct(prod)}
        onSelectCategory={(cat) => alert(`Explore ${cat.name}`)}
      />

      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
