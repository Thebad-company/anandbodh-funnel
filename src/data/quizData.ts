export interface QuizOption {
  text: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  category: 'energy' | 'sleep' | 'mental' | 'emotional' | 'physical' | 'lifestyle';
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How would you describe your energy levels throughout the day?",
    category: 'energy',
    options: [
      { text: "I feel energetic and focused all day", score: 0 },
      { text: "I have moderate energy with occasional dips", score: 1 },
      { text: "I feel tired by midday and rely on caffeine", score: 2 },
      { text: "I'm exhausted from the moment I wake up", score: 3 },
    ],
  },
  {
    id: 2,
    question: "How often do you experience difficulty sleeping or waking up unrested?",
    category: 'sleep',
    options: [
      { text: "Rarely — I sleep well most nights", score: 0 },
      { text: "Occasionally, maybe 1–2 nights a week", score: 1 },
      { text: "Often — my sleep is light or broken", score: 2 },
      { text: "Almost every night — I never feel rested", score: 3 },
    ],
  },
  {
    id: 3,
    question: "How frequently do you experience brain fog, poor memory, or difficulty concentrating?",
    category: 'mental',
    options: [
      { text: "Rarely — my mind stays sharp", score: 0 },
      { text: "Sometimes during stressful periods", score: 1 },
      { text: "Often — tasks that used to be easy now feel hard", score: 2 },
      { text: "Daily — I struggle to think clearly", score: 3 },
    ],
  },
  {
    id: 4,
    question: "How would you describe your stress and anxiety levels over the past month?",
    category: 'emotional',
    options: [
      { text: "Calm and mostly in control", score: 0 },
      { text: "Mild stress that I manage okay", score: 1 },
      { text: "Frequently anxious or overwhelmed", score: 2 },
      { text: "Chronic stress — it feels constant and unmanageable", score: 3 },
    ],
  },
  {
    id: 5,
    question: "Which of these physical symptoms do you experience regularly?",
    category: 'physical',
    options: [
      { text: "None — I feel physically well", score: 0 },
      { text: "Occasional headaches or muscle tension", score: 1 },
      { text: "Digestive issues, weight fluctuation, or skin problems", score: 2 },
      { text: "High BP, blood sugar concerns, or persistent weight issues", score: 3 },
    ],
  },
  {
    id: 6,
    question: "How many hours per day are you mentally or emotionally engaged with work, screens, or responsibilities?",
    category: 'lifestyle',
    options: [
      { text: "Less than 6 hours — I have good boundaries", score: 0 },
      { text: "6–8 hours with some downtime", score: 1 },
      { text: "8–10 hours — work follows me home", score: 2 },
      { text: "More than 10 hours — I'm always 'on'", score: 3 },
    ],
  },
  {
    id: 7,
    question: "How would you describe your emotional state on most days?",
    category: 'emotional',
    options: [
      { text: "Content and emotionally balanced", score: 0 },
      { text: "Occasionally irritable or low", score: 1 },
      { text: "Often emotionally drained or reactive", score: 2 },
      { text: "Persistently anxious, numb, or burnt out", score: 3 },
    ],
  },
  {
    id: 8,
    question: "How do you typically cope with stress?",
    category: 'lifestyle',
    options: [
      { text: "Healthy practices — exercise, breathwork, nature", score: 0 },
      { text: "A mix of healthy and unhealthy habits", score: 1 },
      { text: "Mostly avoidance — screen time, eating, or sleep", score: 2 },
      { text: "I don't cope well — it just builds up", score: 3 },
    ],
  },
];
