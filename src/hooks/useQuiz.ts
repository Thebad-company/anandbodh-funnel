import { useState, useCallback } from 'react';
import { quizQuestions } from '../data/quizData';
import { getProfileByScore, StressProfile } from '../data/profiles';

export type QuizState = 'idle' | 'active' | 'completed' | 'lead_capture' | 'submitted';

export interface QuizAnswer {
  questionId: number;
  score: number;
}

export interface UseQuizReturn {
  state: QuizState;
  currentQuestionIndex: number;
  answers: QuizAnswer[];
  totalScore: number;
  profile: StressProfile | null;
  totalQuestions: number;
  progress: number;
  startQuiz: () => void;
  answerQuestion: (score: number) => void;
  goBack: () => void;
  openLeadCapture: () => void;
  submitLead: () => void;
  resetQuiz: () => void;
}

export function useQuiz(): UseQuizReturn {
  const [state, setState] = useState<QuizState>('idle');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const totalQuestions = quizQuestions.length;
  const progress = totalQuestions > 0 ? (currentQuestionIndex / totalQuestions) * 100 : 0;

  const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
  const profile = state === 'completed' || state === 'lead_capture' || state === 'submitted'
    ? getProfileByScore(totalScore)
    : null;

  const startQuiz = useCallback(() => {
    setState('active');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }, []);

  const answerQuestion = useCallback((score: number) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const newAnswer: QuizAnswer = { questionId: currentQuestion.id, score };

    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === currentQuestion.id);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = newAnswer;
        return updated;
      }
      return [...prev, newAnswer];
    });

    if (currentQuestionIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((i) => i + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setState('completed');
      }, 300);
    }
  }, [currentQuestionIndex, totalQuestions]);

  const goBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((i) => i - 1);
    }
  }, [currentQuestionIndex]);

  const openLeadCapture = useCallback(() => {
    setState('lead_capture');
  }, []);

  const submitLead = useCallback(() => {
    setState('submitted');
  }, []);

  const resetQuiz = useCallback(() => {
    setState('idle');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }, []);

  return {
    state,
    currentQuestionIndex,
    answers,
    totalScore,
    profile,
    totalQuestions,
    progress,
    startQuiz,
    answerQuestion,
    goBack,
    openLeadCapture,
    submitLead,
    resetQuiz,
  };
}
