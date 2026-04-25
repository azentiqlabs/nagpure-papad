import { QUALITY_FEATURES, SINCE_YEAR } from '@/lib/constants';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Sourcing',
    titleMr: 'निवड',
    desc: 'We hand-pick the finest lentils and spices from trusted local farmers.',
    icon: '🌾',
  },
  {
    step: '02',
    title: 'Traditional Recipe',
    titleMr: 'पारंपारिक पद्धत',
    desc: 'Our recipes passed down three generations — no shortcuts, ever.',
    icon: '📜',
  },
  {
    step: '03',
    title: 'Hand-crafted',
    titleMr: 'हाताने बनवलेले',
    desc: 'Each papad and kurdya is shaped by hand with expert precision.',
    icon: '🙌',
  },
  {
    step: '04',
    title: 'Sun Drying',
    titleMr: 'सूर्यताप वाळवणे',
    desc: 'Naturally dried under the Maharashtra sun for that authentic crunch.',
    icon: '☀️',
  },
];

export default function QualitySection() {
  return (
    <section id="quality" className="py-20 bg-cream-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 mandala-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-devanagari text-saffron-600 text-xl mb-1">आमची गुणवत्ता</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon-700">Our Quality Promise</h2>
          <p className="text-maroon-500/70 font-body mt-3 max-w-xl mx-auto">
            Since {SINCE_YEAR}, every product that leaves our kitchen meets the highest standard — 
            because we make it for your family just as we would for ours.
          </p>
          <div className="divider-ornament mt-4 max-w-xs mx-auto">
            <span className="text-saffron-500 text-xl">✦</span>
          </div>
        </div>

        {/* Quality features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {QUALITY_FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="group bg-white rounded-2xl p-6 text-center shadow-sm border border-cream-200 hover:border-saffron-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>
              <p className="font-devanagari text-maroon-700 font-semibold text-base">{feat.titleMarathi}</p>
              <p className="font-display text-maroon-600 font-semibold text-sm mt-0.5">{feat.title}</p>
              <p className="text-maroon-500/60 text-xs font-body mt-2">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div
          className="rounded-3xl p-10 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #7B1C1C 0%, #5c1414 100%)' }}
        >
          <div className="absolute inset-0 diagonal-stripes opacity-20 pointer-events-none" />
          <div className="relative">
            <div className="text-center mb-10">
              <p className="font-devanagari text-saffron-400 text-lg mb-1">बनवण्याची पद्धत</p>
              <h3 className="font-display text-3xl font-bold text-cream-50">How We Make It</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.step} className="text-center space-y-3">
                  <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-full bg-saffron-500/20 border-2 border-saffron-400/40 flex items-center justify-center mx-auto text-3xl">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 bg-saffron-500 text-white text-[10px] font-sans font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <p className="font-devanagari text-saffron-400 text-sm">{step.titleMr}</p>
                    <p className="font-display text-cream-100 font-semibold text-base">{step.title}</p>
                  </div>
                  <p className="text-cream-300/70 text-xs font-body leading-relaxed">{step.desc}</p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-saffron-400/40 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
