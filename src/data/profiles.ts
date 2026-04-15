export interface StressProfile {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bodyImpact: string;
  score: string;
  color: string;
  borderColor: string;
  bgColor: string;
  scoreRange: [number, number];
  recommendations: string[];
  programs: string[];
  urgency: 'critical' | 'high' | 'moderate' | 'low';
}

export const stressProfiles: StressProfile[] = [
  {
    id: 'high-stress',
    name: 'High Stress Overload',
    tagline: 'Your nervous system is in constant overdrive',
    description:
      'Your body is showing strong signs of chronic stress activation. Cortisol levels are likely elevated, which is directly impacting your immune system, metabolism, and sleep architecture. This is a critical signal — your body is asking for intervention.',
    bodyImpact:
      'Chronic cortisol elevation is disrupting your hormonal balance, sleep cycles, and metabolic function.',
    score: '25–24',
    color: '#fb7185',
    borderColor: 'rgba(251, 113, 133, 0.4)',
    bgColor: 'rgba(251, 113, 133, 0.08)',
    scoreRange: [19, 24],
    recommendations: [
      'Begin daily nervous system regulation (breathwork, cold exposure)',
      'Prioritize sleep hygiene with a structured wind-down protocol',
      'Reduce cortisol triggers — screen time, caffeine, decision fatigue',
      'Start a structured lifestyle intervention program immediately',
    ],
    programs: ['Lifestyle Disorder Reversal', 'Therapy & Counseling', 'Guided Breathwork'],
    urgency: 'critical',
  },
  {
    id: 'mental-fatigue',
    name: 'Mental Fatigue & Fog',
    tagline: 'Your cognitive reserves are depleted',
    description:
      'Your mind is running on empty. Chronic mental stress has been slowly draining your cognitive energy, leading to brain fog, poor focus, and emotional depletion. The good news: this is highly reversible with the right approach.',
    bodyImpact:
      'Neuroinflammation and poor sleep quality are impairing memory, focus, and emotional regulation circuits.',
    score: '13–18',
    color: '#fbbf24',
    borderColor: 'rgba(251, 191, 36, 0.4)',
    bgColor: 'rgba(251, 191, 36, 0.08)',
    scoreRange: [13, 18],
    recommendations: [
      'Implement a digital detox protocol during morning and evening hours',
      'Introduce daily meditation — even 10 minutes rebuilds neural pathways',
      'Optimize nutrition for brain health (omega-3s, magnesium, hydration)',
      'Practice single-tasking and reduce cognitive load',
    ],
    programs: ['Yoga & Breathwork', 'Personalized Nutrition', 'Meditation Program'],
    urgency: 'high',
  },
  {
    id: 'lifestyle-burnout',
    name: 'Lifestyle Burnout',
    tagline: 'You\'re running on reserves you no longer have',
    description:
      'You\'ve been pushing through for too long. Your body\'s natural recovery systems are compromised — stress hormones, sleep quality, and metabolic health are all showing signs of wear. A structured reset will dramatically change how you feel.',
    bodyImpact:
      'Adrenal fatigue patterns, disrupted circadian rhythm, and metabolic sluggishness are compounding your symptoms.',
    score: '7–12',
    color: '#38bdf8',
    borderColor: 'rgba(56, 189, 248, 0.4)',
    bgColor: 'rgba(56, 189, 248, 0.08)',
    scoreRange: [7, 12],
    recommendations: [
      'Establish consistent sleep and wake cycles — your circadian rhythm needs repair',
      'Introduce movement therapy — yoga or gentle exercise 3x per week',
      'Address nutritional deficiencies that are draining your energy',
      'Create clear work-life boundaries and recovery time',
    ],
    programs: ['Yoga & Meditation', 'Personalized Wellness Plan', 'Lifestyle Coaching'],
    urgency: 'moderate',
  },
  {
    id: 'metabolic-imbalance',
    name: 'Metabolic Imbalance',
    tagline: 'Underlying imbalances are quietly limiting you',
    description:
      'Your stress levels appear manageable, but there are early signs of metabolic and lifestyle imbalance. Without addressing these now, they tend to compound over time into more serious disorders. You\'re at the ideal stage to intervene proactively.',
    bodyImpact:
      'Early metabolic signals — blood sugar fluctuations, weight management challenges, or energy dips — indicate systemic imbalance.',
    score: '0–6',
    color: '#2dd4bf',
    borderColor: 'rgba(45, 212, 191, 0.4)',
    bgColor: 'rgba(45, 212, 191, 0.08)',
    scoreRange: [0, 6],
    recommendations: [
      'Build preventive health habits before symptoms worsen',
      'Optimize your metabolic health through evidence-based nutrition',
      'Introduce mindfulness practices to maintain emotional resilience',
      'Consider a comprehensive health assessment to establish baselines',
    ],
    programs: ['Personalized Nutrition', 'Preventive Wellness Plan', 'Metabolic Health Program'],
    urgency: 'low',
  },
];

export function getProfileByScore(score: number): StressProfile {
  const profile = stressProfiles.find(
    (p) => score >= p.scoreRange[0] && score <= p.scoreRange[1]
  );
  return profile ?? stressProfiles[0];
}
