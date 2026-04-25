import { SINCE_YEAR } from '@/lib/constants';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-cream-100/50 relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Decorative frame */}
            <div
              className="relative w-72 h-72 rounded-full border-4 border-saffron-400/40 shadow-2xl flex items-center justify-center"
              style={{ background: 'radial-gradient(circle, #F5E8C0, #EEDAA0)' }}
            >
              <div className="text-center space-y-2 px-8">
                <div className="text-6xl">👨‍👩‍👧‍👦</div>
                <p className="font-devanagari text-maroon-700 text-base font-semibold leading-tight">
                  घरघुती स्वाद,<br />परंपरेची साथ
                </p>
                <div className="w-12 h-0.5 bg-saffron-500 mx-auto" />
                <p className="font-sans text-maroon-600/80 text-xs font-bold tracking-widest uppercase">
                  Since {SINCE_YEAR}
                </p>
              </div>
              {/* Orbit dots */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-3 h-3 rounded-full bg-saffron-400"
                  style={{
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 140}px - 6px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 140}px - 6px)`,
                    opacity: 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <p className="font-devanagari text-saffron-600 text-xl mb-1">आमच्याबद्दल</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon-700">Our Story</h2>
              <div className="divider-ornament mt-3 max-w-xs">
                <span className="text-saffron-500 text-xl">✦</span>
              </div>
            </div>

            <p className="text-maroon-600/80 font-body text-lg leading-relaxed">
              It began in <strong className="text-maroon-700">{SINCE_YEAR}</strong> in a small Akola kitchen 
              where our grandmother would wake at dawn to prepare papads for the family. 
              What started as a labor of love has grown into a trusted household name.
            </p>
            <p className="text-maroon-600/70 font-body leading-relaxed">
              Every papad, every kurdya is still made the same way — by hand, with the same 
              pure ingredients and time-honored recipes. No factory, no shortcuts, no preservatives. 
              Just the honest taste of home.
            </p>

            <div className="bg-saffron-50 border-l-4 border-saffron-500 rounded-r-xl p-4">
              <p className="font-devanagari text-maroon-700 text-base font-semibold">
                "आमचे पापड म्हणजे फक्त खाद्यपदार्थ नाही — ते आमच्या कुटुंबाची परंपरा आहे."
              </p>
              <p className="text-maroon-500/70 text-sm font-body italic mt-1">
                "Our papads are not just food — they are our family's tradition."
              </p>
              <p className="text-saffron-600 font-sans font-semibold text-sm mt-2">
                — Nagpure Family, Akola
              </p>
            </div>

            <a
              href={buildWhatsAppUrl({ isGeneral: true })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-maroon-700 hover:bg-maroon-600 text-cream-50 font-sans font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg"
            >
              <span>🙏</span> Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
