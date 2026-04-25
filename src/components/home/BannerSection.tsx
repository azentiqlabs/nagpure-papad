import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { QUALITY_FEATURES } from '@/lib/constants';

export default function BannerSection() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAF4E0 0%, #F5E8C0 50%, #EEDAA0 100%)',
      }}
    >
      {/* Decorative top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-maroon-700 via-saffron-500 to-maroon-700" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-maroon-700 via-saffron-500 to-maroon-700" />

      {/* Mandala overlay */}
      <div className="absolute inset-0 mandala-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <p className="font-devanagari text-saffron-700 text-lg">घरघुती स्वाद, परंपरेची साथ</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon-700 leading-tight">
              Nagpure<br />
              <span className="text-saffron-600">PAPAD & KURDYA</span>
            </h2>
            <p className="text-maroon-600/70 font-body">
              GHARGHUTI · SINCE 1995
            </p>
            <a
              href={buildWhatsAppUrl({ isGeneral: true })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-maroon-700 hover:bg-maroon-600 text-cream-50 font-sans font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg mt-2"
            >
              Order Now 🛒
            </a>
          </div>

          {/* Quality badges strip */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {QUALITY_FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center text-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-saffron-200/60 shadow-sm"
              >
                <span className="text-3xl">{f.icon}</span>
                <p className="font-devanagari text-maroon-700 text-xs font-semibold leading-tight">{f.titleMarathi}</p>
                <p className="text-maroon-600/60 text-[10px] font-sans uppercase tracking-wide">{f.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
