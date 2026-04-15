import { Shield, BookOpen, Award } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const experts = [
  {
    photo: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'PS',
    name: 'Dr. Priya Sharma',
    title: 'Integrative Medicine Physician',
    years: '14 Years Experience',
    credentials: 'MBBS, MD (Internal Medicine), Fellowship in Integrative Medicine',
    specialty: 'Lifestyle Disorder Reversal',
    color: '#0d9488',
    bg: 'rgba(13,148,136,0.06)',
    border: 'rgba(13,148,136,0.18)',
  },
  {
    photo: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'AM',
    name: 'Dr. Arjun Mehta',
    title: 'Lifestyle Medicine Specialist',
    years: '12 Years Experience',
    credentials: 'MBBS, Diploma in Yoga Medicine, Certified Lifestyle Medicine Expert',
    specialty: 'Stress & Metabolic Health',
    color: '#0284c7',
    bg: 'rgba(2,132,199,0.06)',
    border: 'rgba(2,132,199,0.18)',
  },
  {
    photo: 'https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=400',
    initials: 'KR',
    name: 'Kavita Rao',
    title: 'Clinical Psychologist',
    years: '10 Years Experience',
    credentials: 'M.Phil Clinical Psychology, CBT Certified, Mindfulness-Based Therapist',
    specialty: 'Emotional & Mental Wellbeing',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.06)',
    border: 'rgba(217,119,6,0.18)',
  },
];

const methodologies = [
  { label: 'Yoga Science', icon: '🧘' },
  { label: 'Ayurveda', icon: '🌿' },
  { label: 'CBT', icon: '🧠' },
  { label: 'Nutrition', icon: '🥗' },
  { label: 'Breathwork', icon: '💨' },
  { label: 'Sleep Science', icon: '🌙' },
];

export function AuthoritySection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}
    >
      <div className="orb w-80 h-80 bg-sky-300 top-0 right-0" style={{ opacity: 0.1 }} />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-sky-600 uppercase rounded-full"
            style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)' }}
          >
            Our Experts
          </div>
          <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
            Backed by experts.<br />
            <span className="gradient-text">Designed for real results.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our multidisciplinary team combines conventional medicine with evidence-based holistic practices to deliver outcomes that last.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {experts.map((expert, i) => (
            <AnimatedSection key={expert.name} delay={i * 100}>
              <div
                className="rounded-2xl h-full flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{ background: expert.bg, border: "1px solid " + expert.border, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={expert.photo}
                    alt={expert.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = expert.color + "20";
                        parent.style.display = 'flex';
                        parent.style.alignItems = 'center';
                        parent.style.justifyContent = 'center';
                        parent.innerHTML = '<span style="color:' + expert.color + ';font-weight:700;font-size:28px">' + expert.initials + '</span>';
                      }
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 55%)' }} />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-semibold text-slate-800 text-sm">{expert.name}</h3>
                    <p className="text-xs mt-0.5 font-medium" style={{ color: expert.color }}>{expert.title}</p>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={12} style={{ color: expert.color }} />
                    <p className="text-slate-400 text-xs">{expert.years}</p>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <BookOpen size={12} className="text-slate-300 shrink-0 mt-0.5" />
                    <p className="text-slate-400 text-xs leading-relaxed">{expert.credentials}</p>
                  </div>

                  <div className="mt-auto pt-3 border-t" style={{ borderColor: expert.color + "20" }}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Specialty</p>
                    <p className="text-sm font-semibold" style={{ color: expert.color }}>{expert.specialty}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="glass-card p-6 sm:p-8 mb-8" style={{ border: '1px solid rgba(20,184,166,0.15)' }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(20,184,166,0.1)' }}>
                  <Shield size={22} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-slate-800 font-semibold">Science-Backed</p>
                  <p className="text-teal-600 text-sm">20+ peer-reviewed studies</p>
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden sm:block" />
              <div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Every protocol at AnandBodh is grounded in published research across lifestyle medicine, psychoneuroimmunology, and integrative health. We combine the best of modern science with time-tested traditional practices.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest font-semibold">Our Methodology Includes</p>
            <div className="flex flex-wrap justify-center gap-3">
              {methodologies.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-sm"
                  style={{ border: '1px solid rgba(0,0,0,0.07)' }}
                >
                  <span>{m.icon}</span>
                  <span className="text-slate-600 font-medium">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
