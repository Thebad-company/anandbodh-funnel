import { useEffect, useRef } from 'react';
import { useQuiz } from './hooks/useQuiz';

import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { ScienceSection } from './sections/ScienceSection';
import { QuizSection } from './sections/QuizSection';
import { ResultsSection } from './sections/ResultsSection';
import { WhyFailSection } from './sections/WhyFailSection';
import { BreathingSection } from './sections/BreathingSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { AuthoritySection } from './sections/AuthoritySection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { FAQSection } from './sections/FAQSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { StickyBar } from './components/StickyBar';

export default function App() {
  const quiz = useQuiz();
  const quizSectionRef = useRef<HTMLDivElement>(null);

  const scrollToQuiz = () => {
    quiz.startQuiz();
    setTimeout(() => {
      const el = document.getElementById('quiz');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  useEffect(() => {
    if (quiz.state === 'active') {
      setTimeout(() => {
        const el = document.getElementById('quiz');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [quiz.state]);

  useEffect(() => {
    if (quiz.state === 'completed') {
      setTimeout(() => {
        const el = document.getElementById('results');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [quiz.state]);

  const quizActive = quiz.state === 'active' || quiz.state === 'lead_capture';

  return (
    <div className="relative font-inter" style={{ background: '#f8fafc', color: '#1e293b' }}>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 md:py-4"
        style={{
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
        }}
      >
        <div className="flex items-center">
          <img src="/logo.jpg" alt="AnandBodh — The Happy Life" className="h-8 sm:h-10 w-auto object-contain" />
        </div>
        <button
          onClick={scrollToQuiz}
          className="btn-primary text-xs sm:text-sm px-4 sm:px-6 py-2.5"
        >
          <span>Free Assessment</span>
        </button>
      </nav>

      <div className="pt-0">
        <HeroSection onStartQuiz={scrollToQuiz} />
        <ProblemSection />
        <ScienceSection />

        <div ref={quizSectionRef}>
          <QuizSection quiz={quiz} />
        </div>

        <ResultsSection quiz={quiz} />
        <WhyFailSection />
        <BreathingSection />
        <TestimonialsSection />
        <AuthoritySection />
        <HowItWorksSection />
        <ProgramsSection />
        <FAQSection />
        <FinalCTASection onStartQuiz={scrollToQuiz} />
      </div>

      <footer
        className="py-10 px-6 text-center"
        style={{ background: '#1e293b', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center justify-center mb-3">
          <img src="/logo.jpg" alt="AnandBodh — The Happy Life" className="h-10 w-auto object-contain" />
        </div>
        <p className="text-slate-400 text-xs mb-1">India's First Integrated Health Solutions & Wellbeing Ecosystem</p>
        <p className="text-slate-500 text-xs">
          Evidence-based tools to reverse lifestyle disorders • Rejuvenation • Vitality • Longevity
        </p>
        <div className="flex justify-center gap-6 mt-5 text-slate-500 text-xs">
          <a href="#" className="hover:text-teal-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} AnandBodh. All rights reserved.
          </p>
          
          {/* Site Credits */}
          <div 
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full"
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <a 
              href="https://fabulousmedia.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img 
                src="/sitecredits/fabulous.png" 
                alt="Fabulous Media" 
                className="h-5 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            
            <div 
              className="w-px h-5"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            />
            
            <a 
              href="https://gocommercially.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img 
                src="/sitecredits/gocomercially.svg" 
                alt="Go Commercially" 
                className="h-5 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </footer>

      <LeadCaptureModal quiz={quiz} />
      <StickyBar onStartQuiz={scrollToQuiz} quizActive={quizActive} />
    </div>
  );
}
