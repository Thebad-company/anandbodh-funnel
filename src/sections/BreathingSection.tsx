import { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

type BreathPhase = 'idle' | 'inhale' | 'hold' | 'exhale' | 'rest';

const phaseConfig: Record<BreathPhase, { label: string; duration: number; subLabel: string }> = {
  idle: { label: 'Press Start', duration: 0, subLabel: 'to begin your session' },
  inhale: { label: 'Breathe In', duration: 4000, subLabel: 'slowly through your nose' },
  hold: { label: 'Hold', duration: 4000, subLabel: 'gently hold your breath' },
  exhale: { label: 'Breathe Out', duration: 6000, subLabel: 'slowly through your mouth' },
  rest: { label: 'Rest', duration: 2000, subLabel: 'let your body settle' },
};

const phaseOrder: BreathPhase[] = ['inhale', 'hold', 'exhale', 'rest'];

export function BreathingSection() {
  const [phase, setPhase] = useState<BreathPhase>('idle');
  const [active, setActive] = useState(false);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseIndexRef = useRef(0);

  const runPhase = (index: number) => {
    const p = phaseOrder[index % phaseOrder.length];
    setPhase(p);
    timerRef.current = setTimeout(() => {
      runPhase(index + 1);
    }, phaseConfig[p].duration);
  };

  const handleStart = () => {
    setActive(true);
    setSessionSeconds(0);
    phaseIndexRef.current = 0;
    runPhase(0);
    intervalRef.current = setInterval(() => {
      setSessionSeconds((s) => s + 1);
    }, 1000);
  };

  const handleStop = () => {
    setActive(false);
    setPhase('idle');
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (s: number) => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');

  const isExpanded = phase === 'inhale' || phase === 'hold';
  const config = phaseConfig[phase];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0fdf9 0%, #e0f2fe 100%)' }}
    >
      <div
        className="orb w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)', opacity: 0.06 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-teal-700 uppercase rounded-full"
            style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)' }}
          >
            Free Experience
          </div>
          <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
            Feel the <span className="gradient-text">difference</span> in minutes
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Your nervous system can shift from stress mode to recovery mode in under 3 minutes. Try it right now.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection className="hidden lg:block">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ border: '1px solid rgba(20,184,166,0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
            >
              <img
                src="/hero.png"
                alt="Breathing illustration"
                className="w-full h-[420px] object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(240,253,250,0.9) 0%, rgba(240,253,250,0.1) 60%, transparent 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass-card px-4 py-3">
                  <p className="text-teal-700 text-xs font-semibold uppercase tracking-wider mb-1">Science Says</p>
                  <p className="text-slate-700 text-sm leading-relaxed">Just 3 minutes of controlled breathing reduces cortisol by up to 23% and activates the parasympathetic nervous system.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="flex flex-col items-center gap-10">
            <div className="relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72">
              <div
                className="absolute rounded-full breathing-ring-2"
                style={{
                  width: isExpanded ? '280px' : '160px',
                  height: isExpanded ? '280px' : '160px',
                  border: '1px solid rgba(20,184,166,0.2)',
                  transition: "width " + (phase === 'inhale' ? '4s' : phase === 'exhale' ? '6s' : '0.3s') + " ease-in-out, height " + (phase === 'inhale' ? '4s' : phase === 'exhale' ? '6s' : '0.3s') + " ease-in-out",
                }}
              />
              <div
                className="absolute rounded-full breathing-ring-1"
                style={{
                  width: isExpanded ? '240px' : '130px',
                  height: isExpanded ? '240px' : '130px',
                  border: '1px solid rgba(20,184,166,0.35)',
                  transition: "width " + (phase === 'inhale' ? '4s' : phase === 'exhale' ? '6s' : '0.3s') + " ease-in-out, height " + (phase === 'inhale' ? '4s' : phase === 'exhale' ? '6s' : '0.3s') + " ease-in-out",
                }}
              />
              <div
                className="relative z-10 rounded-full flex flex-col items-center justify-center"
                style={{
                  width: isExpanded ? '200px' : '110px',
                  height: isExpanded ? '200px' : '110px',
                  background: isExpanded
                    ? 'radial-gradient(circle, rgba(20,184,166,0.2) 0%, rgba(20,184,166,0.05) 100%)'
                    : 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, rgba(20,184,166,0.02) 100%)',
                  border: "2px solid " + (isExpanded ? 'rgba(20,184,166,0.5)' : 'rgba(20,184,166,0.2)'),
                  transition: "width " + (phase === 'inhale' ? '4s' : phase === 'exhale' ? '6s' : '0.3s') + " ease-in-out, height " + (phase === 'inhale' ? '4s' : phase === 'exhale' ? '6s' : '0.3s') + " ease-in-out, background 0.5s ease, border-color 0.5s ease",
                  boxShadow: isExpanded ? '0 0 30px rgba(20,184,166,0.2)' : 'none',
                }}
              >
                <span className="font-semibold text-slate-800 text-lg text-center leading-tight px-3">{config.label}</span>
                {active && (
                  <span className="text-teal-600 text-xs mt-1 text-center px-3">{config.subLabel}</span>
                )}
              </div>
            </div>

            {active && (
              <div className="text-center">
                <div className="font-bungee text-2xl text-teal-600 mb-1">{formatTime(sessionSeconds)}</div>
                <p className="text-slate-400 text-xs">Session time</p>
              </div>
            )}

            <div className="flex flex-col items-center gap-3">
              {!active ? (
                <button onClick={handleStart} className="btn-primary px-10 py-3.5 text-base">
                  <span>Start Free Session</span>
                </button>
              ) : (
                <button onClick={handleStop} className="btn-secondary px-10 py-3.5 text-base">
                  End Session
                </button>
              )}
              {!active && (
                <p className="text-slate-400 text-sm">4-4-6 breathing pattern • Clinically proven to reduce cortisol</p>
              )}
            </div>

            {active && (
              <AnimatedSection>
                <div className="glass-card p-5 text-center max-w-sm">
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Box breathing activates your parasympathetic nervous system, reducing cortisol levels and restoring calm within minutes.
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
