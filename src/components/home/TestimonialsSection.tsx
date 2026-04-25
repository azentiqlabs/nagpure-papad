import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-maroon-50 relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-devanagari text-saffron-600 text-xl mb-1">ग्राहकांचे अभिप्राय</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon-700">What Families Say</h2>
          <div className="divider-ornament mt-4 max-w-xs mx-auto">
            <span className="text-saffron-500 text-xl">✦</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200 relative"
            >
              {/* Quote mark */}
              <div
                className="absolute -top-4 left-6 w-8 h-8 rounded-full flex items-center justify-center font-display text-2xl font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #E8861A, #C9962A)' }}
              >
                "
              </div>

              <div className="flex gap-1 mb-3 mt-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-saffron-500 text-sm">★</span>
                ))}
              </div>

              <p className="text-maroon-600/80 font-body text-sm leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="mt-4 pt-4 border-t border-cream-200 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-lg"
                  style={{ background: 'linear-gradient(135deg, #7B1C1C, #E8861A)' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-sans font-semibold text-maroon-700 text-sm">{t.name}</p>
                  <p className="text-maroon-500/60 text-xs font-body">📍 {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
