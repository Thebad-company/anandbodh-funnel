import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyBarProps {
  onStartQuiz: () => void;
  quizActive: boolean;
}

export function StickyBar({ onStartQuiz, quizActive }: StickyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 500;
      
      // Check if footer is in viewport
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;
        setVisible(scrolled && !isFooterVisible);
      } else {
        setVisible(scrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || quizActive) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-4 px-4"
      style={{
        background: 'linear-gradient(to top, rgba(255,255,255,0.98) 0%, transparent 100%)',
        paddingTop: '24px',
        animation: 'fadeUp 0.4s ease-out',
      }}
    >
      <button
        onClick={onStartQuiz}
        className="btn-primary flex items-center gap-3 px-8 py-3.5 text-sm glow-teal"
        style={{ boxShadow: '0 8px 24px rgba(20,184,166,0.35)' }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
        </span>
        <span>Check Your Stress Score — Free</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
