import { X, Check } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const failReasons = [
  'Treat symptoms with medication, not root cause',
  'Ignore the stress-disease connection entirely',
  'One-size-fits-all protocols that don\'t fit you',
  'Short-term fixes with no long-term strategy',
];

const successReasons = [
  'Identify and address root causes of your disorder',
  'Treat stress as the primary health variable',
  'Personalized plans built around your unique profile',
  'Integrated mind-body approach for lasting change',
];

export function WhyFailSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}
    >
      <div className="orb w-72 h-72 bg-rose-300 top-0 left-0" style={{ opacity: 0.1 }} />
      <div className="orb w-72 h-72 bg-teal-300 bottom-0 right-0" style={{ opacity: 0.1 }} />

      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-rose-600 uppercase rounded-full"
            style={{ background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.2)' }}
          >
            The Real Reason
          </div>
          <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
            Why nothing has <span className="gradient-text-warm">worked</span><br />for you… yet.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            It\'s not your willpower. It\'s not your effort. The approach itself was flawed.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          <AnimatedSection delay={100}>
            <div
              className="p-6 sm:p-8 rounded-3xl h-full"
              style={{ background: 'rgba(244,63,94,0.05)', border: '1px solid rgba(244,63,94,0.18)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(244,63,94,0.1)' }}>
                  <X size={20} className="text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">The Old Approach</h3>
                  <p className="text-slate-400 text-xs">Why it keeps failing you</p>
                </div>
              </div>
              <ul className="space-y-3">
                {failReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(244,63,94,0.1)' }}>
                      <X size={10} className="text-rose-500" />
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div
              className="p-6 sm:p-8 rounded-3xl h-full"
              style={{ background: 'rgba(20,184,166,0.05)', border: '1px solid rgba(20,184,166,0.2)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(20,184,166,0.1)' }}>
                  <Check size={20} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">The AnandBodh Way</h3>
                  <p className="text-slate-400 text-xs">Evidence-based. Root cause. Personalized.</p>
                </div>
              </div>
              <ul className="space-y-3">
                {successReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(20,184,166,0.12)' }}>
                      <Check size={10} className="text-teal-600" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300}>
          <div className="glass-card p-6 sm:p-8 text-center" style={{ border: '1px solid rgba(20,184,166,0.15)' }}>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { value: 'Root Cause', label: 'Approach that actually works', color: 'text-teal-600' },
                { value: 'Personalized', label: 'Built around your unique profile', color: 'text-sky-600' },
                { value: 'Integrated', label: 'Mind + Body + Lifestyle together', color: 'text-teal-500' },
              ].map((item) => (
                <div key={item.value} className="flex flex-col items-center">
                  <div className={"font-bungee text-2xl mb-1 " + item.color}>{item.value}</div>
                  <p className="text-slate-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
