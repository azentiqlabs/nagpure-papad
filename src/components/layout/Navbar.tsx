'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_NUMBER } from '@/lib/constants';
import { buildWhatsAppCallUrl } from '@/lib/whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-maroon-800 shadow-lg shadow-maroon-950/30'
          : 'bg-maroon-800/95 backdrop-blur-sm'
      }`}
    >
      {/* Top strip */}
      <div className="bg-saffron-500 text-white text-center py-1 text-xs font-sans font-semibold tracking-wide">
        🚚 Free delivery within Akola | WhatsApp to order anywhere in Maharastra
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo text */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold text-cream-100 tracking-wide">Nagpure</span>
            <span className="text-saffron-400 text-xs font-devanagari tracking-wider">पापड & कुरिया</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex flex-col items-center px-3 py-2 rounded text-cream-200 hover:text-saffron-400 transition-colors duration-200"
                >
                  <span className="text-sm font-sans font-medium">{item.label}</span>
                  <span className="text-[10px] font-devanagari text-cream-300/70 group-hover:text-saffron-400/80 transition-colors">
                    {item.labelMarathi}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={buildWhatsAppCallUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-sans font-semibold px-4 py-2 rounded-full transition-all duration-200 whatsapp-pulse"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.85L0 24l6.335-1.524A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.006-1.368l-.36-.213-3.76.905.938-3.651-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Order Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-cream-100 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-maroon-900 border-t border-maroon-700">
          <ul className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-cream-200 hover:bg-maroon-700 hover:text-saffron-400 transition-colors"
                >
                  <span className="font-sans font-medium">{item.label}</span>
                  <span className="font-devanagari text-sm text-cream-300/70">{item.labelMarathi}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <a
              href={buildWhatsAppCallUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white font-sans font-semibold py-3 rounded-full w-full"
            >
              <Phone className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
