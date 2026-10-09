import React from 'react';
import { Mail, ArrowRight, ShieldCheck, Sparkles, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#070605] border-t border-[#2A2116] text-[#A69B88] font-sans text-[13px] pt-12 pb-8">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Top Trust Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-[#241C13]">
          <div className="flex items-start space-x-3">
            <ShieldCheck size={22} className="text-[#C69A38] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-[16px] text-[#F5EFE3] font-medium">Sacred Authenticity</h4>
              <p className="text-[12px] text-[#8C806E] mt-1 leading-relaxed">
                Every Rudraksha bead, murti, and yantra is consecrated according to ancient Vedic traditions and certified for natural origin.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Sparkles size={22} className="text-[#C69A38] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-[16px] text-[#F5EFE3] font-medium">Traditional Craftsmanship</h4>
              <p className="text-[12px] text-[#8C806E] mt-1 leading-relaxed">
                Handcrafted by hereditary artisan guilds across Kumbakonam, Varanasi, and Jaipur who have sustained spiritual arts for generations.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Compass size={22} className="text-[#C69A38] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-[16px] text-[#F5EFE3] font-medium">Vedic Wisdom & Guidance</h4>
              <p className="text-[12px] text-[#8C806E] mt-1 leading-relaxed">
                Clear, reverent knowledge regarding auspicious placements, energization mantras, and traditional daily rituals.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-10 border-b border-[#241C13]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <img 
              src="/assets/logo_full.png" 
              alt="DHRUVAGOURI SPIRITUALS" 
              className="h-[52px] w-auto object-contain mb-4" 
            />
            <p className="text-[12px] text-[#8F8372] leading-relaxed max-w-[360px]">
              Rooted in reverence for India's sacred traditions. We curating authentic devotional treasures to bring peace, spiritual focus, and sacred living into everyday homes.
            </p>
            <div className="mt-4 flex items-center space-x-2 text-[11px] text-[#C69A38]">
              <span>✦</span>
              <span>Authentic Indian Spiritual Traditions</span>
            </div>
          </div>

          {/* Col 1 */}
          <div>
            <h4 className="font-serif text-[15px] text-[#FAF4EA] font-semibold tracking-wide uppercase text-[12px] mb-3">
              Sacred Collections
            </h4>
            <ul className="space-y-2 text-[12px] text-[#9E917F]">
              <li><a href="#rudraksha" className="hover:text-[#E5BC5C] transition-colors">Nepal Rudraksha</a></li>
              <li><a href="#sacred-malas" className="hover:text-[#E5BC5C] transition-colors">108-Bead Japa Malas</a></li>
              <li><a href="#idols" className="hover:text-[#E5BC5C] transition-colors">Ashtadhatu & Brass Murtis</a></li>
              <li><a href="#yantras" className="hover:text-[#E5BC5C] transition-colors">Shree Yantras</a></li>
              <li><a href="#puja-essentials" className="hover:text-[#E5BC5C] transition-colors">Brass Diyas & Thalis</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-serif text-[15px] text-[#FAF4EA] font-semibold tracking-wide uppercase text-[12px] mb-3">
              Heritage & Guidance
            </h4>
            <ul className="space-y-2 text-[12px] text-[#9E917F]">
              <li><a href="#our-heritage" className="hover:text-[#E5BC5C] transition-colors">Our Spiritual Lineage</a></li>
              <li><a href="#consecration" className="hover:text-[#E5BC5C] transition-colors">Consecration Process</a></li>
              <li><a href="#puja-rituals" className="hover:text-[#E5BC5C] transition-colors">Daily Puja Guide</a></li>
              <li><a href="#care" className="hover:text-[#E5BC5C] transition-colors">Care for Sacred Brass</a></li>
              <li><a href="#glossary" className="hover:text-[#E5BC5C] transition-colors">Vedic Glossary</a></li>
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div>
            <h4 className="font-serif text-[15px] text-[#FAF4EA] font-semibold tracking-wide uppercase text-[12px] mb-3">
              Devotional Circular
            </h4>
            <p className="text-[12px] text-[#8F8372] mb-3">
              Receive auspicious festival alerts, ritual guides, and sacred arrivals.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to DHRUVAGOURI Devotional Circular.'); }} className="flex items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="w-full h-[36px] px-3 bg-[#13100C] border border-[#3A2F22] rounded-l-[3px] text-[12px] text-[#EBE3D3] placeholder-[#665D4F] focus:outline-none focus:border-[#C69A38]"
              />
              <button 
                type="submit"
                className="h-[36px] px-3.5 bg-[#C69A38] hover:bg-[#E5BC5C] text-[#0A0806] rounded-r-[3px] flex items-center justify-center transition-colors"
              >
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6E6352]">
          <p>© 2026 DHRUVAGOURI SPIRITUALS. All rights reserved. Authentic Indian Spiritual Traditions.</p>
          <div className="flex space-x-5 mt-3 sm:mt-0">
            <a href="#privacy" className="hover:text-[#C69A38] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-[#C69A38] transition-colors">Terms of Sanctity & Service</a>
            <span>•</span>
            <a href="#shipping" className="hover:text-[#C69A38] transition-colors">Sacred Handling & Shipping</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
