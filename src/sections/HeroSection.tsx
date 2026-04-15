import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Users, Star } from 'lucide-react';

interface HeroSectionProps {
  onStartQuiz: () => void;
}

export function HeroSection({ onStartQuiz }: HeroSectionProps) {
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    const image = imageRef.current;
    
    if (headline) {
      setTimeout(() => headline.classList.add('visible'), 100);
    }
    
    if (image) {
      setTimeout(() => image.classList.add('visible'), 300);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf9 0%, #f8fafc 45%, #eff6ff 100%)' }}
    >
      <div className="orb w-96 h-96 bg-teal-400 top-[-80px] right-[-80px]" style={{ opacity: 0.18 }} />
      <div className="orb w-80 h-80 bg-sky-400 bottom-[-60px] left-[-60px]" style={{ opacity: 0.14 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={headlineRef} className="scroll-reveal">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-teal-700 rounded-full"
              style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)' }}
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              India's First Integrated Health Transformation Ecosystem
            </div>

            <h1 className="font-bungee text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-tight mb-6 text-slate-800">
              Chronic stress is{' '}
              <span className="gradient-text">silently</span>
              <br />
              <span className="gradient-text">affecting</span> your body.
            </h1>

            <p className="text-xl sm:text-2xl font-light text-slate-600 mb-4 max-w-xl leading-relaxed">
              Fix the root cause.
            </p>

            <p className="text-base sm:text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
              Discover what's impacting your health — physically, mentally, and emotionally. Get your free personalized stress report in 60 seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
              <button
                onClick={onStartQuiz}
                className="btn-primary text-lg px-10 py-4 flex items-center gap-3 glow-teal"
              >
                <span>Check Your Stress Score</span>
                <ArrowRight size={20} />
              </button>
              <p className="text-slate-400 text-sm">Free • Takes 60 seconds • No sign-up required</p>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-10">
              <TrustBadge icon={<Users size={18} className="text-teal-500" />} value="10,000+" label="People Helped" />
              <TrustBadge icon={<Shield size={18} className="text-sky-500" />} value="Evidence-Based" label="Science Backed" />
              <TrustBadge icon={<Star size={18} className="text-amber-500" />} value="4.9 / 5" label="Average Rating" />
            </div>
          </div>

          <div ref={imageRef} className="scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.12) 0%, rgba(14,165,233,0.08) 100%)', transform: 'rotate(3deg)', borderRadius: '24px' }}
              />
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ border: '1px solid rgba(20,184,166,0.2)', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
              >
                <img
                  src="/image.png"
                  alt="AnandBodh Wellness Experience"
                  className="w-full h-auto lg:h-[480px] object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs animate-bounce">
          <span>Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-teal-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.08)' }}
      >
        {icon}
      </div>
      <div className="text-left">
        <p className="text-slate-800 font-semibold text-sm leading-none">{value}</p>
        <p className="text-slate-400 text-xs mt-0.5">{label}</p>
      </div>
    </div>
  );
}
