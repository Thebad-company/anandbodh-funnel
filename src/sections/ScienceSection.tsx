import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const flow = [
  { label: 'Chronic Stress', sub: 'Emotional & mental load', color: '#f43f5e', bg: 'rgba(244,63,94,0.08)' },
  { label: 'Cortisol Surge', sub: 'Hormonal disruption', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
  { label: 'Metabolic Shift', sub: 'Energy & weight changes', color: '#0ea5e9', bg: 'rgba(14,165,233,0.08)' },
  { label: 'Lifestyle Disorder', sub: 'BP, Diabetes, Fatigue', color: '#14b8a6', bg: 'rgba(20,184,166,0.08)' },
];

const stats = [
  { value: '77%', label: 'of adults experience stress-related physical symptoms' },
  { value: '3x', label: 'higher risk of lifestyle disorders with unmanaged chronic stress' },
  { value: '85%', label: 'of lifestyle disorders have stress as a root contributing factor' },
];

export function ScienceSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0fdf9 100%)' }}
    >
      <div className="orb w-80 h-80 bg-sky-400 bottom-0 left-0" style={{ opacity: 0.1 }} />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-sky-600 uppercase rounded-full"
            style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)' }}
          >
            The Science
          </div>
          <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
            It's all <span className="gradient-text">connected</span>.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Your mind, hormones, metabolism, and disease are not separate. Stress is the thread that pulls them all apart.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 mb-16">
            {flow.map((item, i) => (
              <div key={item.label} className="flex items-center gap-2 sm:gap-0">
                <div
                  className="relative p-5 rounded-2xl text-center min-w-[130px] sm:min-w-[140px] transition-all duration-300 hover:scale-105"
                  style={{ background: item.bg, border: `1px solid ${item.color}30` }}
                >
                  <div
                    className="w-3 h-3 rounded-full mx-auto mb-2 animate-pulse"
                    style={{ background: item.color }}
                  />
                  <p className="font-semibold text-slate-800 text-sm leading-tight">{item.label}</p>
                  <p className="text-xs mt-1 leading-tight font-medium" style={{ color: item.color }}>{item.sub}</p>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight
                    size={20}
                    className="shrink-0 mx-2 sm:mx-3"
                    style={{ color: item.color, opacity: 0.5 }}
                  />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div
            className="glass-card p-6 sm:p-8 mb-12"
            style={{ border: '1px solid rgba(0,0,0,0.07)' }}
          >
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-bungee text-2xl text-slate-800 mb-3">
                  Issues get stored in our tissues.
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                  Physical, mental, and emotional health are deeply inter-related. Mental stress has a direct correlation with how ill we get and how fast we recover. Modern life creates chronic stress — and chronic stress creates modern disease.
                </p>
                <div
                  className="mt-4 p-4 rounded-xl"
                  style={{ background: 'rgba(20,184,166,0.07)', border: '1px solid rgba(20,184,166,0.2)' }}
                >
                  <p className="text-teal-700 text-sm font-medium">
                    "If we lived in perfect bio-psycho-social harmony, we wouldn't get the issues in our tissues."
                  </p>
                  <p className="text-slate-400 text-xs mt-1">— AnandBodh Health Framework</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat) => (
                  <div key={stat.value} className="flex items-center gap-4">
                    <div className="text-3xl font-bungee gradient-text shrink-0">{stat.value}</div>
                    <p className="text-slate-500 text-sm leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: 'Mind Affects Body', desc: 'Every thought triggers a hormonal response. Negative thought patterns chronically elevate cortisol.', icon: '🧠' },
              { title: 'Body Affects Mind', desc: 'Inflammation, gut dysbiosis, and poor sleep directly impair mood and cognitive function.', icon: '🫀' },
              { title: 'Both Can Be Healed', desc: 'Addressing root causes creates a healing cascade — improvements in one area accelerate all others.', icon: '🌿' },
            ].map((card) => (
              <div
                key={card.title}
                className="glass-card p-5 text-center hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h4 className="font-semibold text-slate-800 mb-2 text-sm">{card.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
