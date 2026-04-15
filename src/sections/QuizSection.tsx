import { useState, useEffect } from "react";
import { ChevronLeft, Clock, Sparkles } from "lucide-react";
import { quizQuestions } from "../data/quizData";
import { UseQuizReturn } from "../hooks/useQuiz";
import { AnimatedSection } from "../components/ui/AnimatedSection";

interface QuizSectionProps {
  quiz: UseQuizReturn;
}

const optionLetters = ["A", "B", "C", "D"];

export function QuizSection({ quiz }: QuizSectionProps) {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const currentQuestion = quizQuestions[quiz.currentQuestionIndex];

  useEffect(() => {
    setSelectedScore(null);
    setAnimating(false);
  }, [quiz.currentQuestionIndex]);

  const handleSelect = (score: number) => {
    if (animating) return;
    setSelectedScore(score);
    setAnimating(true);
    quiz.answerQuestion(score);
  };

  if (quiz.state === "idle") {
    return (
      <section
        id="quiz"
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f0fdf9 0%, #e0f2fe 100%)" }}
      >
        <div className="orb w-96 h-96 bg-teal-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.1 }} />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div
              className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-teal-700 uppercase rounded-full"
              style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.25)" }}
            >
              Free Assessment
            </div>
            <h2 className="font-bungee text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4">
              Discover your <span className="gradient-text">stress profile</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
              8 targeted questions. Clinically informed. Personalized result that reveals exactly where your body is under stress and what to do about it.
            </p>

            <div className="glass-card p-8 mb-8 text-left">
              <div className="grid sm:grid-cols-3 gap-5 mb-6">
                {[
                  { icon: <Clock size={18} className="text-teal-500" />, label: "60 seconds", sub: "to complete" },
                  { icon: <Sparkles size={18} className="text-sky-500" />, label: "Personalized", sub: "result & plan" },
                  { icon: <span className="text-amber-500 text-lg">check</span>, label: "Free", sub: "no sign-up needed" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0,0,0,0.04)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold text-sm">{item.label}</p>
                      <p className="text-slate-400 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="rounded-xl p-4 mb-2"
                style={{ background: "rgba(20,184,166,0.06)", border: "1px solid rgba(20,184,166,0.15)" }}
              >
                <p className="text-slate-600 text-sm font-medium mb-1">Sample question preview:</p>
                <p className="text-slate-500 text-sm italic">How would you describe your energy levels throughout the day?</p>
              </div>
            </div>

            <button onClick={quiz.startQuiz} className="btn-primary text-lg px-10 py-4">
              <span>Start the 60-sec Assessment</span>
            </button>
            <p className="text-slate-400 text-xs mt-4">
              Your results are private and not stored anywhere.
            </p>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  if (quiz.state !== "active") return null;

  return (
    <section
      id="quiz"
      className="relative py-16 min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f0fdf9 0%, #e0f2fe 100%)" }}
    >
      <div className="orb w-96 h-96 bg-teal-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.08 }} />

      <div className="max-w-2xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={quiz.goBack}
            className="flex items-center gap-1.5 text-slate-400 hover:text-teal-600 transition-colors text-sm"
            disabled={quiz.currentQuestionIndex === 0}
          >
            <ChevronLeft size={16} />
            Back
          </button>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Clock size={14} className="text-teal-500" />
            <span>Question {quiz.currentQuestionIndex + 1} of {quiz.totalQuestions}</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Progress</span>
            <span>{Math.round(quiz.progress)}%</span>
          </div>
          <div className="w-full h-2 rounded-full" style={{ background: "rgba(0,0,0,0.07)" }}>
            <div className="progress-bar-fill" style={{ width: quiz.progress + "%" }} />
          </div>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <div className="mb-2">
            <span className="text-xs font-semibold tracking-widest text-teal-600 uppercase">
              {currentQuestion.category.toUpperCase()}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(option.score)}
                className={"quiz-option " + (selectedScore === option.score ? "selected" : "")}
                disabled={animating}
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    background: selectedScore === option.score ? "rgba(20,184,166,0.15)" : "rgba(0,0,0,0.05)",
                    color: selectedScore === option.score ? "#0d9488" : "#94a3b8",
                  }}
                >
                  {optionLetters[i]}
                </span>
                <span>{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-slate-400 text-xs mt-4">
          Your answers are analyzed to build your personalized health profile
        </p>
      </div>
    </section>
  );
}
