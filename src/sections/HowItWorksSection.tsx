import { ClipboardList, Microscope, TrendingUp } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const steps = [
  {
    number: '01',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <ClipboardList size={22} className="text-teal-600" />,
    title: 'Take the Assessment',
    desc: 'Complete the 60-second stress assessment. Answer 8 targeted questions designed by our clinical team to map your unique health patterns.',
    detail: 'Science-based • Personalized • Takes 60 seconds',
    color: '#0d9488',
    bg: 'rgba(13,148,136,0.08)',
  },
  {
    number: '02',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Microscope size={22} className="text-sky-600" />,
    title: 'Get Your Diagnosis',
    desc: 'Receive a detailed profile that identifies your stress type, root cause patterns, and the specific lifestyle factors driving your symptoms.',
    detail: 'Clinically informed • Root cause focused • Instant result',
    color: '#0284c7',
    bg: 'rgba(2,132,199,0.08)',
  },
  {
    number: '03',
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <TrendingUp size={22} className="text-amber-600" />,
    title: 'Follow Your Plan',
    desc: 'Get a personalized wellness roadmap — combining nutrition, movement, breathwork, sleep optimization, and mind-body practices built for you.',
    detail: 'Personalized roadmap • Expert guidance • Lasting change',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.08)',
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0fdf9 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-teal-700 uppercase rounded-full"
            style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)' }}
          >
            The Process
          </div>
          <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
            Simple. Clear. <span className="gradient-text">Effective.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Three steps to go from chronic stress to lasting health transformation.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-[108px] left-[calc(16.67%+70px)] right-[calc(16.67%+70px)] h-0.5" style={{ background: 'linear-gradient(90deg, rgba(13,148,136,0.3), rgba(2,132,199,0.3), rgba(217,119,6,0.3))' }} />

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 120}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div
                      className="w-36 h-36 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                      style={{ border: "2px solid " + step.color + "30", boxShadow: "0 8px 30px " + step.color + "15" }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl" style={{ background: "radial-gradient(circle at center, " + step.color + "10 0%, transparent 70%)" }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', border: "1px solid " + step.color + "40" }}
                        >
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold z-10 text-white"
                      style={{ background: step.color }}
                    >
                      {step.number.slice(1)}
                    </div>
                  </div>

                  <h3 className="font-semibold text-slate-800 text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: step.color + "10", color: step.color }}
                  >
                    {step.detail}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
