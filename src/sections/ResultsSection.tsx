import { ArrowRight, AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react';
import { UseQuizReturn } from '../hooks/useQuiz';
import { AnimatedSection } from '../components/ui/AnimatedSection';

interface ResultsSectionProps {
  quiz: UseQuizReturn;
}

const urgencyConfig = {
  critical: { label: 'Critical — Act Now', icon: <AlertTriangle size={16} />, bg: 'rgba(225,29,72,0.1)', text: '#e11d48' },
  high: { label: 'High Priority', icon: <AlertTriangle size={16} />, bg: 'rgba(245,158,11,0.1)', text: '#d97706' },
  moderate: { label: 'Moderate Concern', icon: <CheckCircle2 size={16} />, bg: 'rgba(14,165,233,0.1)', text: '#0284c7' },
  low: { label: 'Early Warning', icon: <CheckCircle2 size={16} />, bg: 'rgba(20,184,166,0.1)', text: '#0d9488' },
};

export function ResultsSection({ quiz }: ResultsSectionProps) {
  if (quiz.state !== 'completed' && quiz.state !== 'submitted') return null;
  if (!quiz.profile) return null;

  const { profile } = quiz;
  const urgency = urgencyConfig[profile.urgency];
  const maxScore = quiz.totalQuestions * 3;
  const percentage = Math.round((quiz.totalScore / maxScore) * 100);

  if (quiz.state === 'submitted') {
    return (
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0fdf9 0%, #e0f2fe 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(20,184,166,0.12)', border: '2px solid rgba(20,184,166,0.3)' }}>
              <CheckCircle2 size={40} className="text-teal-600" />
            </div>
            <h2 className="font-bungee text-3xl text-slate-800 mb-4">Your Report is on its Way!</h2>
            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              Your personalized <span className="text-teal-600 font-semibold">{profile.name}</span> reset plan has been sent. Check your inbox within the next 5 minutes.
            </p>
            <div className="glass-card p-6 text-left mb-8">
              <p className="text-slate-800 font-semibold mb-3">What is included in your report:</p>
              <ul className="space-y-2">
                {['Your detailed stress profile analysis', 'Root cause breakdown for your symptoms', 'A 30-day personalized wellness roadmap', 'Recommended programs for your profile', 'Expert resources and guided practices'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-500 text-sm">
                    <CheckCircle2 size={14} className="text-teal-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={quiz.resetQuiz} className="btn-secondary flex items-center gap-2 mx-auto">
              <RotateCcw size={16} />
              Retake Assessment
            </button>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section
      id="results"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0fdf9 0%, #e0f2fe 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-10">
          <div
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full"
            style={{ background: profile.color + '12', color: profile.color, border: '1px solid ' + profile.color + '30' }}
          >
            Your Result
          </div>
          <h2 className="font-bungee text-3xl sm:text-4xl text-slate-800 mb-2">
            Your Health <span className="gradient-text">Profile</span>
          </h2>
          <p className="text-slate-500">Based on your responses, here is what your body is telling you.</p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            className="rounded-3xl p-6 sm:p-8 mb-8"
            style={{ background: profile.bgColor, border: '1px solid ' + profile.borderColor, boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-2"
                  style={{ background: urgency.bg, color: urgency.text }}
                >
                  {urgency.icon}
                  {urgency.label}
                </div>
                <h3 className="font-bungee text-2xl sm:text-3xl text-slate-800">{profile.name}</h3>
                <p className="text-slate-500 mt-1">{profile.tagline}</p>
              </div>
              <div className="text-center">
                <div className="relative w-24 h-24">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="40" fill="none"
                      stroke={profile.color} strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={String(2 * Math.PI * 40)}
                      strokeDashoffset={String(2 * Math.PI * 40 * (1 - percentage / 100))}
                      style={{ transition: 'stroke-dashoffset 1s ease' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bungee text-xl" style={{ color: profile.color }}>{percentage}%</span>
                    <span className="text-slate-400 text-xs">Stress Load</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">{profile.description}</p>
            <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.07)' }}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Body Impact</p>
              <p className="text-slate-600 text-sm">{profile.bodyImpact}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="glass-card p-6 sm:p-8 mb-8">
            <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span style={{ color: profile.color }}>●</span>
              Your Personalized Recommendations
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {profile.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 text-white" style={{ background: profile.color }}>
                    {i + 1}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300} className="text-center">
          <button
            onClick={quiz.openLeadCapture}
            className="btn-primary text-lg px-10 py-4 flex items-center gap-3 mx-auto glow-teal"
          >
            <span>Get Your Personalized Reset Plan</span>
            <ArrowRight size={20} />
          </button>
          <p className="text-slate-400 text-xs mt-3">Free report sent to your email. No spam, ever.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
