import { Star } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const testimonials = [
  {
    photo: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200',
    initials: 'PR',
    name: 'Priya R.',
    location: 'Mumbai',
    age: 38,
    title: '"My BP normalized in 6 weeks"',
    text: "I had been on blood pressure medication for 3 years. After starting the lifestyle reversal program, my doctor reduced my dosage by half. I sleep better, I\'m calmer, and I have energy I forgot I could have.",
    tags: ['BP Management', 'Better Sleep', 'Energy Restored'],
    color: '#0d9488',
    bg: 'rgba(13,148,136,0.06)',
    border: 'rgba(13,148,136,0.18)',
  },
  {
    photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
    initials: 'AK',
    name: 'Arjun K.',
    location: 'Bangalore',
    age: 44,
    title: '"Brain fog completely gone"',
    text: "For two years I was barely functioning mentally. After the program I feel like my old self again — sharp, present, and actually enjoying work.",
    tags: ['Mental Clarity', 'Focus Restored', 'Productivity'],
    color: '#0284c7',
    bg: 'rgba(2,132,199,0.06)',
    border: 'rgba(2,132,199,0.18)',
  },
  {
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    initials: 'SM',
    name: 'Sunita M.',
    location: 'Delhi',
    age: 51,
    title: '"Lost 12kg without obsessing over food"',
    text: "When I addressed my stress first, my cravings disappeared, my metabolism improved, and the weight came off naturally. It\'s been 14 months and I\'ve kept it off.",
    tags: ['Weight Loss', 'Hormonal Balance', 'Sustainable'],
    color: '#d97706',
    bg: 'rgba(217,119,6,0.06)',
    border: 'rgba(217,119,6,0.18)',
  },
  {
    photo: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=200',
    initials: 'RP',
    name: 'Rahul P.',
    location: 'Pune',
    age: 33,
    title: '"Anxiety reduced by 80%"',
    text: "I was having panic attacks at work. After the breathwork and counseling combination, I haven\'t had one in 4 months. I finally feel like I\'m in control of my nervous system.",
    tags: ['Anxiety Relief', 'Stress Control', 'Mental Health'],
    color: '#e11d48',
    bg: 'rgba(225,29,72,0.05)',
    border: 'rgba(225,29,72,0.16)',
  },
  {
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    initials: 'NJ',
    name: 'Neha J.',
    location: 'Chennai',
    age: 29,
    title: '"Blood sugar is now normal"',
    text: "The integrated approach — stress management, yoga, and nutrition — brought my HbA1c from 6.1 to 5.4. My endocrinologist was genuinely impressed.",
    tags: ['Blood Sugar', 'Diabetes Reversal', 'Nutrition'],
    color: '#0d9488',
    bg: 'rgba(13,148,136,0.06)',
    border: 'rgba(13,148,136,0.18)',
  },
  {
    photo: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=200',
    initials: 'VT',
    name: 'Vikram T.',
    location: 'Hyderabad',
    age: 47,
    title: `"First full night's sleep in years"`,
    text: "Four weeks into the program I slept 7 solid hours naturally. My wife says I\'m a different person — calmer, more patient, present.",
    tags: ['Deep Sleep', 'Off Medication', 'Mood Improvement'],
    color: '#0284c7',
    bg: 'rgba(2,132,199,0.06)',
    border: 'rgba(2,132,199,0.18)',
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-teal-700 uppercase rounded-full"
            style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)' }}
          >
            Real Transformations
          </div>
          <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
            Stories that <span className="gradient-text">inspire</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real people, real results. These are not outliers — they\'re what happens when you treat the root cause.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 70}>
              <div
                className="p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:scale-[1.02]"
                style={{ background: t.bg, border: "1px solid " + t.border }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden shrink-0" style={{ border: "2px solid " + t.color + "40" }}>
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.style.background = t.color + "20";
                            parent.style.display = 'flex';
                            parent.style.alignItems = 'center';
                            parent.style.justifyContent = 'center';
                            parent.innerHTML = '<span style="color:' + t.color + ';font-weight:700;font-size:14px">' + t.initials + '</span>';
                          }
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold text-sm">{t.name}, {t.age}</p>
                      <p className="text-slate-400 text-xs">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={12} fill="#f59e0b" className="text-amber-500" />
                    ))}
                  </div>
                </div>

                <h4 className="font-semibold text-sm mb-3" style={{ color: t.color }}>{t.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>

                <div className="flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: t.color + "12", color: t.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="text-center mt-10">
          <div className="glass-card inline-flex items-center gap-8 px-8 py-4">
            {[
              { value: '94%', label: 'report reduced stress within 30 days' },
              { value: '87%', label: 'improve sleep quality in 2 weeks' },
              { value: '4.9★', label: 'average program satisfaction rating' },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-bungee text-xl gradient-text">{stat.value}</div>
                <div className="text-slate-400 text-xs mt-0.5 max-w-[120px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
