import { Moon, Brain, Zap, TrendingUp, Activity, Heart } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const symptoms = [
  {
    icon: <Zap size={24} className="text-amber-500" />,
    title: 'Constant Fatigue',
    desc: 'Tired even after 8 hours of sleep. Your body never fully recovers.',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.25)',
  },
  {
    icon: <Brain size={24} className="text-sky-500" />,
    title: 'Brain Fog',
    desc: "Can't focus, forget things easily, tasks take twice as long.",
    bg: 'rgba(14,165,233,0.07)',
    border: 'rgba(14,165,233,0.2)',
  },
  {
    icon: <Moon size={24} className="text-teal-500" />,
    title: 'Poor Sleep',
    desc: 'Light, broken sleep. Racing thoughts at night. Never fully resting.',
    bg: 'rgba(20,184,166,0.07)',
    border: 'rgba(20,184,166,0.2)',
  },
  {
    icon: <Activity size={24} className="text-rose-500" />,
    title: 'Anxiety & Stress',
    desc: 'Persistent low-level worry. Tension in your body. Feeling overwhelmed.',
    bg: 'rgba(244,63,94,0.07)',
    border: 'rgba(244,63,94,0.2)',
  },
  {
    icon: <TrendingUp size={24} className="text-amber-500" />,
    title: 'Weight & BP Issues',
    desc: 'Unexplained weight gain, high blood pressure, or blood sugar spikes.',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.25)',
  },
  {
    icon: <Heart size={24} className="text-sky-500" />,
    title: 'Emotional Depletion',
    desc: 'Irritable, reactive, numb. No bandwidth left for people you love.',
    bg: 'rgba(14,165,233,0.07)',
    border: 'rgba(14,165,233,0.2)',
  },
];

export function ProblemSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}
    >
      <div className="orb w-72 h-72 bg-rose-300 top-0 right-0" style={{ opacity: 0.12 }} />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div
                className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-rose-600 uppercase rounded-full"
                style={{ background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.2)' }}
              >
                Wake-Up Call
              </div>
              <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
                You think it's <span className="gradient-text-warm">normal</span>…<br />but it's not.
              </h2>
              <p className="text-slate-500 text-lg max-w-xl">
                These symptoms are your body's distress signals. Most people normalize them. That's the problem.
              </p>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden hidden lg:block"
              style={{ border: '1px solid rgba(244,63,94,0.15)', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
            >
              <img
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Exhausted person at work showing signs of chronic stress"
                className="w-full h-64 object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.75) 0%, transparent 60%)' }}
              />
              <div className="absolute inset-0 flex items-center px-6">
                <p className="text-slate-800 font-semibold text-lg leading-snug max-w-[220px]">
                  "I just thought I was tired. I didn't realize it was chronic stress."
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {symptoms.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 80}>
              <div
                className="p-6 rounded-2xl h-full transition-all duration-300 hover:scale-[1.02] cursor-default"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,255,255,0.7)' }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-base mb-1">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div
            className="glass-card p-8 text-center max-w-3xl mx-auto"
            style={{ border: '1px solid rgba(20,184,166,0.2)' }}
          >
            <div className="w-1 h-12 bg-gradient-to-b from-teal-500 to-sky-500 mx-auto mb-4 rounded-full" />
            <p className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed">
              "These are not random. Your body is{' '}
              <span className="gradient-text font-semibold">signaling imbalance</span>."
            </p>
            <p className="text-slate-500 mt-3 text-sm">
              Chronic stress is the common thread linking all lifestyle disorders — and it can be reversed.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
