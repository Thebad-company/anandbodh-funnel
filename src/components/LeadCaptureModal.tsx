import { useState, FormEvent } from 'react';
import { X, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { UseQuizReturn } from '../hooks/useQuiz';

interface LeadCaptureModalProps {
  quiz: UseQuizReturn;
}

export function LeadCaptureModal({ quiz }: LeadCaptureModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  if (quiz.state !== 'lead_capture') return null;
  if (!quiz.profile) return null;

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email';
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    quiz.submitLead();
  };

  const { profile } = quiz;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(8px)' }}>
      <div
        className="w-full max-w-md rounded-3xl p-7 relative"
        style={{ background: '#ffffff', border: '1px solid rgba(20,184,166,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
      >
        <button
          onClick={quiz.resetQuiz}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
          style={{ background: 'rgba(0,0,0,0.05)' }}
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: profile.color + '15', border: '1px solid ' + profile.color + '30' }}
          >
            <Sparkles size={22} style={{ color: profile.color }} />
          </div>
          <div>
            <h3 className="font-bungee text-lg text-slate-800">Get Your Free Report</h3>
            <p className="text-sm font-medium" style={{ color: profile.color }}>{profile.name}</p>
          </div>
        </div>

        <div
          className="rounded-xl p-3 mb-5"
          style={{ background: profile.color + '08', border: '1px solid ' + profile.color + '20' }}
        >
          <p className="text-slate-600 text-sm leading-relaxed">
            Your personalized <strong style={{ color: profile.color }}>{profile.name}</strong> reset plan includes a detailed analysis, root cause breakdown, and your 30-day wellness roadmap.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl text-slate-800 text-sm outline-none transition-all duration-200"
              style={{
                background: '#f8fafc',
                border: errors.name ? '1px solid rgba(225,29,72,0.5)' : '1px solid #e2e8f0',
                caretColor: '#14b8a6',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(20,184,166,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(20,184,166,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = errors.name ? 'rgba(225,29,72,0.5)' : '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
            />
            {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl text-slate-800 text-sm outline-none transition-all duration-200"
              style={{
                background: '#f8fafc',
                border: errors.email ? '1px solid rgba(225,29,72,0.5)' : '1px solid #e2e8f0',
                caretColor: '#14b8a6',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(20,184,166,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(20,184,166,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = errors.email ? 'rgba(225,29,72,0.5)' : '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
            />
            {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1.5">
              WhatsApp Number <span className="text-slate-300 font-normal normal-case">(optional)</span>
            </label>
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl text-slate-800 text-sm outline-none transition-all duration-200"
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                caretColor: '#14b8a6',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(20,184,166,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(20,184,166,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          <button type="submit" className="btn-primary w-full py-3.5 text-base mt-2">
            <span className="flex items-center justify-center gap-2">
              <CheckCircle2 size={18} />
              Get My Personalized Report
            </span>
          </button>
        </form>

        <div className="flex items-center justify-center gap-1.5 mt-4 text-slate-400 text-xs">
          <Lock size={11} />
          <span>Your data is private. We never share or sell your information.</span>
        </div>
      </div>
    </div>
  );
}
