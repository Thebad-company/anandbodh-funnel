import { ArrowRight, RefreshCw, Wind, Heart, Leaf, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const programs = [
  {
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <RefreshCw size={22} className="text-rose-500" />,
    title: 'Lifestyle Disorder Reversal',
    desc: 'A structured 90-day program to reverse diabetes, hypertension, and metabolic disorders through root-cause interventions — not just symptom management.',
    benefits: ['Blood Sugar Control', 'BP Normalization', 'Weight Management', 'Hormonal Balance'],
    cta: 'Explore Program',
    color: '#e11d48',
    bg: 'linear-gradient(135deg, rgba(225,29,72,0.08) 0%, rgba(225,29,72,0.03) 100%)',
    border: 'rgba(225,29,72,0.2)',
    highlight: true,
    duration: '90 Days',
  },
  {
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Wind size={22} className="text-teal-600" />,
    title: 'Yoga & Breathwork',
    desc: 'Evidence-based yoga therapy and pranayama protocols to regulate your nervous system, improve lung capacity, and restore physical vitality.',
    benefits: ['Stress Reduction', 'Flexibility', 'Lung Function', 'Energy Boost'],
    cta: 'Explore Program',
    color: '#0d9488',
    bg: 'linear-gradient(135deg, rgba(13,148,136,0.08) 0%, rgba(13,148,136,0.03) 100%)',
    border: 'rgba(13,148,136,0.2)',
    highlight: false,
    duration: 'Ongoing',
  },
  {
    image: 'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Heart size={22} className="text-sky-600" />,
    title: 'Therapy & Counseling',
    desc: 'One-on-one sessions with certified clinical psychologists and therapists to address emotional health, anxiety, burnout, and behavioral patterns.',
    benefits: ['Anxiety Relief', 'Emotional Healing', 'Burnout Recovery', 'Resilience'],
    cta: 'Explore Program',
    color: '#0284c7',
    bg: 'linear-gradient(135deg, rgba(2,132,199,0.08) 0%, rgba(2,132,199,0.03) 100%)',
    border: 'rgba(2,132,199,0.2)',
    highlight: false,
    duration: 'Flexible',
  },
  {
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Leaf size={22} className="text-amber-600" />,
    title: 'Personalized Wellness Plan',
    desc: 'A fully customized health blueprint — integrating nutrition, sleep, movement, mindfulness, and lifestyle adjustments specific to your profile.',
    benefits: ['Custom Nutrition', 'Sleep Protocol', 'Mind-Body Reset', 'Longevity Focus'],
    cta: 'Explore Program',
    color: '#d97706',
    bg: 'linear-gradient(135deg, rgba(217,119,6,0.08) 0%, rgba(217,119,6,0.03) 100%)',
    border: 'rgba(217,119,6,0.2)',
    highlight: false,
    duration: 'Personalized',
  },
];

export function ProgramsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0fdf9 0%, #ffffff 50%, #fefce8 100%)' }}
    >
      <div className="orb w-96 h-96 bg-teal-300 top-[10%] right-[-100px]" style={{ opacity: 0.12 }} />
      <div className="orb w-80 h-80 bg-amber-300 bottom-[5%] left-[-80px]" style={{ opacity: 0.1 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-xs font-semibold tracking-wide text-teal-700 uppercase rounded-full"
            style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)' }}
          >
            <Sparkles size={14} className="text-teal-600" />
            Our Programs
          </div>
          <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-5 leading-tight">
            Fix the root cause —<br />
            <span className="gradient-text">not just the symptoms</span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Every program is designed to work together. Most members use a combination tailored to their unique profile.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, i) => (
            <AnimatedSection key={program.title} delay={i * 100}>
              <a
                href="https://anandbodh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl h-full flex flex-col transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden cursor-pointer block"
                style={{ 
                  background: program.bg, 
                  border: `1.5px solid ${program.border}`, 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)' 
                }}
              >
                {program.highlight && (
                  <div
                    className="absolute top-5 right-5 z-10 text-xs font-bold px-3.5 py-1.5 rounded-full text-white flex items-center gap-1.5 shadow-lg"
                    style={{ background: program.color }}
                  >
                    <Sparkles size={12} />
                    Most Popular
                  </div>
                )}

                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0" 
                    style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.95) 100%)" }} 
                  />
                  
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110"
                          style={{ background: 'rgba(255,255,255,0.95)', border: `2px solid ${program.color}40` }}
                        >
                          {program.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-lg leading-tight">{program.title}</h3>
                          <p className="text-xs text-slate-500 mt-0.5">{program.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 flex-1">{program.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.benefits.map((b) => (
                      <span
                        key={b}
                        className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300 hover:scale-105"
                        style={{ 
                          background: `${program.color}15`, 
                          color: program.color,
                          border: `1px solid ${program.color}30`
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://anandbodh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-sm transition-all duration-300 w-fit group-hover:gap-3"
                    style={{ color: program.color }}
                  >
                    {program.cta}
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            Not sure which program is right for you?{' '}
            <a 
              href="https://anandbodh.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold hover:text-teal-700 transition-colors underline"
            >
              Take the free assessment
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
