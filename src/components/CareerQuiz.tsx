"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./CareerQuiz.module.css";

const questions = [
  {
    id: 1,
    question: "What is your primary goal?",
    options: [
      { text: "I want to break into systems", icon: "🔓" },
      { text: "I want to defend networks", icon: "🛡️" },
      { text: "I want to hunt for bounties", icon: "💰" },
      { text: "I want to manage cloud security", icon: "☁️" },
    ]
  },
  {
    id: 2,
    question: "What is your current skill level?",
    options: [
      { text: "Complete Beginner", icon: "🌱" },
      { text: "Some IT Experience", icon: "💻" },
      { text: "Security Professional", icon: "🕵️" },
      { text: "Advanced Hacker", icon: "🥷" },
    ]
  }
];

export default function CareerQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleOptionClick = (text: string) => {
    const newAnswers = [...answers, text];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate Result based on simple logic
      const isBeginner = newAnswers[1] === "Complete Beginner";
      const goal = newAnswers[0];

      if (goal === "I want to hunt for bounties") {
        setResult("Bug Bounty Course");
      } else if (goal === "I want to manage cloud security") {
        setResult("Amazon Web Services(AWS) Course");
      } else if (isBeginner) {
        setResult("Networking For Ethical Hackers Course");
      } else if (goal === "I want to break into systems") {
        setResult("OSCP+ Course");
      } else {
        setResult("Certified Ethical Hacker CEHv13 AI");
      }
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className={styles.quizSection}>
      <div className={styles.quizContainer}>
        
        {!result ? (
          <>
            <span className={styles.quizBadge}>Career Path Quiz</span>
            <h2 className={styles.quizTitle}>Find Your Perfect Training</h2>
            <p className={styles.quizSubtitle}>Answer 2 quick questions to get a personalized recommendation.</p>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={styles.questionText}>{questions[currentStep].question}</h3>
                <div className={styles.optionsGrid}>
                  {questions[currentStep].options.map((opt, i) => (
                    <button 
                      key={i} 
                      className={styles.optionBtn}
                      onClick={() => handleOptionClick(opt.text)}
                    >
                      <span style={{ fontSize: '1.5rem' }}>{opt.icon}</span>
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <div className={styles.resultBox}>
            <p className={styles.resultIntro}>Your Recommended Path</p>
            <h3 className={styles.resultCourse}>{result}</h3>
            <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
              Based on your goals and experience, this is the most optimal course to accelerate your cybersecurity career.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/courses" className="btn-primary">View Course Details</Link>
              <button className="btn-secondary" onClick={resetQuiz}>Retake Quiz</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
