'use client';

import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { BUSINESS_TAGLINE, SINCE_YEAR } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-maroon-800"
      style={{
        background: 'linear-gradient(135deg, #3a0e0e 0%, #7B1C1C 40%, #5c1414 70%, #2d0a0a 100%)',
      }}
    >
      {/* Decorative mandala circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 border-4 border-saffron-400"
          style={{ boxShadow: '0 0 80px rgba(232,134,26,0.3)' }}
        />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 border-2 border-saffron-400" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10 border-4 border-saffron-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] opacity-[0.03]"
          style={{
            background: 'repeating-conic-gradient(rgba(232,134,26,1) 0deg, transparent 5deg, transparent 15deg, rgba(232,134,26,0.5) 20deg)',
            borderRadius: '50%',
          }}
        />
        {/* Diagonal stripe overlay */}
        <div className="absolute inset-0 diagonal-stripes opacity-50" />
      </div>

      {/* Ornamental top border */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron-400/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left space-y-6">
          {/* Since badge */}
          <div className="inline-flex items-center gap-2 bg-saffron-500/20 border border-saffron-400/40 rounded-full px-4 py-1.5 text-saffron-400 text-sm font-sans font-semibold tracking-wider uppercase">
            <span>🏺</span> Gharghuti · Since {SINCE_YEAR}
          </div>

          {/* Tagline Marathi */}
          <p className="font-devanagari text-cream-200/80 text-lg tracking-wider">
            {BUSINESS_TAGLINE}
          </p>

          {/* Main headline */}
          <div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-none text-cream-50">
              Nagpure
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px flex-1 bg-gradient-to-r from-saffron-400 to-transparent" />
              <span
                className="text-saffron-400 font-display text-2xl sm:text-3xl font-semibold tracking-wide"
                style={{ textShadow: '0 0 20px rgba(232,134,26,0.6)' }}
              >
                PAPAD & KURDYA
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-saffron-400 to-transparent" />
            </div>
          </div>

          <p className="text-cream-200/70 text-lg font-body leading-relaxed max-w-lg mx-auto lg:mx-0">
            Authentic Maharashtrian Papad & Kurdya crafted with love and tradition — 
            pure ingredients, sun-dried perfection, zero preservatives.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <a
              href={buildWhatsAppUrl({ isGeneral: true })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-sans font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg shadow-green-900/40 whatsapp-pulse"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.85L0 24l6.335-1.524A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.006-1.368l-.36-.213-3.76.905.938-3.651-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Order on WhatsApp
            </a>
            <a
              href="#papad"
              className="flex items-center gap-2 border-2 border-cream-200/40 text-cream-200 hover:border-saffron-400 hover:text-saffron-400 font-sans font-semibold px-6 py-4 rounded-full text-base transition-all duration-200"
            >
              Browse Products ↓
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 justify-center lg:justify-start pt-4">
            {[
              { num: '30+', label: 'Years' },
              { num: '5000+', label: 'Happy Families' },
              { num: '100%', label: 'Homemade' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-saffron-400">{stat.num}</p>
                <p className="text-cream-300/70 text-xs font-sans uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div className="relative flex items-center justify-center">
          {/* Decorative ring */}
          <div
            className="absolute w-80 h-80 rounded-full border-2 border-saffron-400/30 animate-spin-slow"
            style={{ background: 'radial-gradient(circle, rgba(232,134,26,0.05) 0%, transparent 70%)' }}
          />
          <div className="absolute w-64 h-64 rounded-full border border-saffron-400/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

          {/* Logo circle */}
          <div
            className="relative z-10 w-72 h-72 rounded-full flex flex-col items-center justify-center border-4 border-saffron-400/60 shadow-2xl animate-float"
            style={{
              background: 'radial-gradient(circle at 40% 40%, #F5E8C0 0%, #EEDAA0 50%, #D4AA50 100%)',
              boxShadow: '0 0 60px rgba(232,134,26,0.4), inset 0 0 30px rgba(201,150,42,0.2)',
            }}
          >
            {/* House icon */}
            <div className="text-5xl mb-1">🏠</div>
            <p className="font-devanagari text-maroon-700 text-xs text-center leading-tight px-4">
              घरघुती स्वाद, परंपरेची साथ
            </p>
            <h2
              className="font-display text-4xl font-bold mt-1"
              style={{ color: '#7B1C1C', textShadow: '1px 1px 0 rgba(201,150,42,0.5)' }}
            >
              Nagpure
            </h2>
            <div
              className="flex items-center justify-center w-48 h-8 rounded-full mt-1"
              style={{ background: 'linear-gradient(135deg, #E8861A, #C9962A)' }}
            >
              <span className="text-white font-sans font-bold text-xs tracking-widest uppercase">PAPAD & KURDYA</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-maroon-600 text-lg">🌿</div>
              <span className="text-maroon-700 text-xs font-sans font-semibold tracking-wider">
                GHARGHUTI · SINCE {SINCE_YEAR}
              </span>
              <div className="text-maroon-600 text-lg">🌿</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="fill-cream-50 w-full">
          <path d="M0,60 L0,20 Q360,60 720,20 Q1080,-20 1440,20 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}
