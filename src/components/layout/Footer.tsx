import Link from 'next/link';
import { BUSINESS_NAME, BUSINESS_TAGLINE, SINCE_YEAR, QUALITY_FEATURES, NAV_ITEMS } from '@/lib/constants';
import { buildWhatsAppCallUrl, buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-forest-600 text-white">
      {/* Quality strip */}
      <div className="bg-forest-700 border-b border-forest-500/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {QUALITY_FEATURES.map((feat) => (
              <div key={feat.title} className="flex flex-col items-center text-center gap-2">
                <span className="text-3xl">{feat.icon}</span>
                <div>
                  <p className="font-devanagari text-sm text-cream-200 font-semibold leading-tight">{feat.titleMarathi}</p>
                  <p className="font-sans text-xs text-cream-300/80 mt-0.5">{feat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-3xl font-bold text-cream-100">Nagpure</h3>
              <p className="font-devanagari text-saffron-400 text-lg">पापड & कुरिया</p>
              <p className="text-cream-300/70 text-sm italic font-body mt-1">{BUSINESS_TAGLINE}</p>
            </div>
            <p className="text-cream-300/80 text-sm font-body leading-relaxed">
              Bringing authentic Maharashtrian flavors to your table since {SINCE_YEAR}. 
              Made with love, pure ingredients, and generations of tradition.
            </p>
            <p className="text-saffron-400 font-devanagari text-sm">
              घरघुती स्वाद, परंपरेची साथ — Since {SINCE_YEAR}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-cream-300/80 hover:text-saffron-400 transition-colors text-sm font-body"
                  >
                    <span className="text-saffron-500 text-xs">❧</span>
                    <span>{item.label}</span>
                    <span className="font-devanagari text-xs text-cream-400/60 ml-1">({item.labelMarathi})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream-200 mb-4">Order & Contact</h4>
            <div className="space-y-3">
              <a
                href={buildWhatsAppUrl({ isGeneral: true })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-700/50 hover:bg-green-600/60 border border-green-600/40 rounded-xl px-4 py-3 transition-all duration-200 group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-400 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.85L0 24l6.335-1.524A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.006-1.368l-.36-.213-3.76.905.938-3.651-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                </svg>
                <div>
                  <p className="text-green-300 font-sans font-semibold text-sm">WhatsApp Order</p>
                  <p className="text-cream-300/70 text-xs">Tap to chat & order</p>
                </div>
              </a>
              <div className="text-cream-300/70 text-sm font-body space-y-1 pl-1">
                <p>📍 Akola, Maharashtra</p>
                <p>🕐 Mon–Sat: 9 AM – 7 PM</p>
                <p>📦 Ship all over India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-500/40 bg-maroon-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-cream-300/60 font-sans">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p className="font-devanagari text-xs">{BUSINESS_TAGLINE} · Since {SINCE_YEAR}</p>
        </div>
      </div>
    </footer>
  );
}
