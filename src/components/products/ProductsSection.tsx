import ProductCard from './ProductCard';
import { PRODUCTS } from '@/lib/constants';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface SectionHeaderProps {
  en: string;
  mr: string;
  subtitle?: string;
}

function SectionHeader({ en, mr, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <p className="font-devanagari text-saffron-600 text-xl mb-1">{mr}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon-700">{en}</h2>
      {subtitle && (
        <p className="text-maroon-500/70 font-body mt-3 max-w-lg mx-auto">{subtitle}</p>
      )}
      <div className="divider-ornament mt-4 max-w-xs mx-auto">
        <span className="text-saffron-500 text-xl">✦</span>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const papads = PRODUCTS.filter((p) => p.category === 'papad');
  const kurdyas = PRODUCTS.filter((p) => p.category === 'kurdya');
  const combos = PRODUCTS.filter((p) => p.category === 'combo');

  return (
    <>
      {/* PAPAD */}
      <section id="papad" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            mr="आमचे पापड"
            en="Our Papads"
            subtitle="Sun-dried, crispy, and made with authentic family recipes passed down generations."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {papads.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* KURDYA */}
      <section
        id="kurdya"
        className="py-20"
        style={{ background: 'linear-gradient(180deg, #FAF4E0 0%, #FDF8EC 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Decorative border */}
          <div className="text-center mb-4">
            <div className="inline-block px-6 py-2 border-2 border-maroon-200 rounded-full text-maroon-400 text-xs font-sans tracking-widest uppercase">
              ✦ Traditional Recipes ✦
            </div>
          </div>
          <SectionHeader
            mr="आमच्या कुरिया"
            en="Our Kurdya"
            subtitle="Wafer-shaped delights with our secret masala blend — the pride of every Maharashtrian kitchen."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {kurdyas.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* COMBOS */}
      <section id="combos" className="py-20 bg-maroon-800 relative overflow-hidden">
        <div className="absolute inset-0 diagonal-stripes opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="font-devanagari text-saffron-400 text-xl mb-1">विशेष कॉम्बो</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream-50">Special Combos</h2>
            <p className="text-cream-200/60 font-body mt-3 max-w-lg mx-auto">
              Best value packs for families — save more, enjoy more!
            </p>
            <div className="divider-ornament mt-4 max-w-xs mx-auto">
              <span className="text-saffron-400 text-xl">✦</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {combos.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
            {/* Custom order card */}
            <div className="bg-saffron-500/10 border-2 border-saffron-400/30 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-5xl">📦</span>
              <div>
                <h3 className="font-display text-xl font-bold text-cream-100">Custom Order</h3>
                <p className="font-devanagari text-saffron-400 text-sm">मनाप्रमाणे ऑर्डर</p>
                <p className="text-cream-300/70 text-sm font-body mt-2">
                  Tell us what you need — we'll put together a custom pack for you!
                </p>
              </div>
              <a
                href={buildWhatsAppUrl({ isGeneral: true })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-sans font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.85L0 24l6.335-1.524A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.006-1.368l-.36-.213-3.76.905.938-3.651-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                </svg>
                Chat with us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
