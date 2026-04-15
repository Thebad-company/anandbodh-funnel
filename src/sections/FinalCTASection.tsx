import { ArrowRight, Clock } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

interface FinalCTASectionProps {
  onStartQuiz: () => void;
}

export function FinalCTASection({ onStartQuiz }: FinalCTASectionProps) {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf9 0%, #e0f2fe 50%, #f0fdf9 100%)' }}
    >
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)', opacity: 1 }} />
      <div className="orb w-64 h-64 bg-sky-300 top-0 right-0" style={{ opacity: 0.15 }} />
      <div className="orb w-64 h-64 bg-teal-300 bottom-0 left-0" style={{ opacity: 0.15 }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-rose-600 rounded-full"
            style={{ background: 'rgba(225,29,72,0.08)', border: '1px solid rgba(225,29,72,0.2)' }}
          >
            <Clock size={14} />
            Don't wait for a health crisis to act
          </div>

          <h2 className="font-bungee text-3xl sm:text-4xl lg:text-6xl text-slate-800 mb-6 leading-tight">
            Don't wait for your<br />
            body to <span className="gradient-text-warm">break down</span>.
          </h2>

          <p className="text-slate-600 text-lg sm:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            Chronic stress compounds quietly for years before it becomes visible as disease. The best time to intervene was years ago. The next best time is right now.
          </p>

          <p className="text-slate-400 text-sm mb-12 max-w-lg mx-auto">
            Your free assessment takes 60 seconds. Your personalized profile is instant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onStartQuiz}
              className="btn-primary text-lg px-10 py-4 flex items-center gap-3 glow-teal"
            >
              <span>Take the Free Assessment</span>
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary text-base px-8 py-4">
              Start Your Wellness Journey
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Free, no sign-up required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              60-second assessment
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Personalized to you
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
