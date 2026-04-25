import { buildWhatsAppUrl, buildWhatsAppCallUrl } from '@/lib/whatsapp';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function ContactSection() {
  const displayNumber = '+91 ' + WHATSAPP_NUMBER.replace('91', '').replace(/(\d{5})(\d{5})/, '$1 $2');

  return (
    <section id="contact" className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-devanagari text-saffron-600 text-xl mb-1">संपर्क करा</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon-700">Get In Touch</h2>
          <p className="text-maroon-500/70 font-body mt-3 max-w-lg mx-auto">
            The easiest way to order is via WhatsApp. Send us a message and we'll get back to you within minutes!
          </p>
          <div className="divider-ornament mt-4 max-w-xs mx-auto">
            <span className="text-saffron-500 text-xl">✦</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* WhatsApp CTAs */}
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-semibold text-maroon-700">Order on WhatsApp</h3>
            <p className="text-maroon-600/70 font-body">
              Just tap the button below, tell us what you need, and we'll confirm your order,
              share delivery details, and dispatch fresh from our kitchen.
            </p>

            {/* Primary WA button */}
            <a
              href={buildWhatsAppUrl({ isGeneral: true })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white font-sans font-bold px-8 py-5 rounded-2xl transition-all duration-200 shadow-xl shadow-green-900/20 whatsapp-pulse group"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.85L0 24l6.335-1.524A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.006-1.368l-.36-.213-3.76.905.938-3.651-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
              </svg>
              <div>
                <p className="text-lg leading-tight">Chat & Order Now</p>
                <p className="text-green-200 text-sm font-normal">{displayNumber}</p>
              </div>
              <span className="ml-auto text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Info boxes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⏱️', title: 'Quick Reply', desc: 'Usually within 30 minutes' },
                { icon: '🚚', title: 'Fast Delivery', desc: 'Available across Maharashtra' }, 
                { icon: '📦', title: 'Fresh Pack', desc: 'Packed fresh on order' },
                { icon: '💳', title: 'Easy Pay', desc: 'UPI, cash, bank transfer' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-4 border border-cream-200 shadow-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-sans font-semibold text-maroon-700 text-sm mt-1">{item.title}</p>
                  <p className="text-maroon-500/60 text-xs font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to order steps */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #7B1C1C 0%, #5c1414 100%)' }}
          >
            <div className="absolute inset-0 diagonal-stripes opacity-20 pointer-events-none" />
            <div className="relative space-y-6">
              <div>
                <p className="font-devanagari text-saffron-400 text-lg">ऑर्डर कसे करावे</p>
                <h3 className="font-display text-2xl font-bold text-cream-50 mt-0.5">How to Order</h3>
              </div>

              {[
                { step: '1', icon: '👆', text: 'Tap the WhatsApp button on any product you like' },
                { step: '2', icon: '💬', text: 'A pre-filled message opens — just send it!' },
                { step: '3', icon: '✅', text: 'We confirm your order and share payment details' },
                { step: '4', icon: '🚀', text: 'We pack fresh and dispatch within 24–48 hours' },
                { step: '5', icon: '🏠', text: 'Your authentic papad & kurdya arrives at your door!' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-saffron-500/20 border border-saffron-400/40 flex items-center justify-center text-saffron-400 font-display font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-cream-200/80 font-body text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-cream-200/10">
                <p className="text-cream-300/60 text-xs font-body text-center">
                  🕐 Available Mon–Sat, 9 AM – 7 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
