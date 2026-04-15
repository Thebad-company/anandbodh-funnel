import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const faqs = [
  {
    q: 'Is this medically backed?',
    a: 'Yes. Every protocol at AnandBodh is grounded in peer-reviewed research in lifestyle medicine, psychoneuroimmunology, and integrative health. Our clinical team includes MBBS doctors, certified lifestyle medicine specialists, and clinical psychologists.',
  },
  {
    q: 'How long before I see results?',
    a: 'Most members notice meaningful improvements in energy and sleep within 2–3 weeks. Significant changes in lifestyle disorders like blood pressure, blood sugar, and weight typically occur within 6–12 weeks of consistent program adherence.',
  },
  {
    q: 'Will this work for me specifically?',
    a: "That's exactly why we start with the stress assessment. The quiz maps your unique health profile and matches you with programs and recommendations specific to your situation.",
  },
  {
    q: 'Do I need any prior experience with yoga or meditation?',
    a: 'Absolutely not. Our programs are designed for complete beginners. Everything is introduced gradually with full guidance, starting where you are right now.',
  },
  {
    q: 'Can I do this alongside my current medications?',
    a: 'Yes. Our programs are designed to complement your existing medical treatment, not replace it. We work with your healthcare providers, not against them.',
  },
  {
    q: 'What makes AnandBodh different from other wellness platforms?',
    a: 'Three things: we treat chronic stress as the root cause, everything is personalized to your specific stress profile, and we integrate physical, mental, and emotional health in one cohesive ecosystem.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-teal-700 uppercase rounded-full"
            style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)' }}
          >
            Your Questions
          </div>
          <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
            Common <span className="gradient-text">questions</span> answered
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Everything you need to know before you start your wellness journey.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: openIndex === i ? 'rgba(20,184,166,0.04)' : '#ffffff',
                  border: openIndex === i ? '1px solid rgba(20,184,166,0.25)' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
                >
                  <span className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                    {faq.q}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: openIndex === i ? 'rgba(20,184,166,0.12)' : 'rgba(0,0,0,0.05)',
                    }}
                  >
                    {openIndex === i ? (
                      <Minus size={16} className="text-teal-600" />
                    ) : (
                      <Plus size={16} className="text-slate-400" />
                    )}
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: openIndex === i ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="w-full h-px mb-4" style={{ background: 'rgba(20,184,166,0.15)' }} />
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
