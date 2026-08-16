"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./CareerQuiz.module.css";

const UnlockIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>;
const ShieldIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const CrosshairIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>;
const CloudIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>;

const SproutIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"></path><path d="M10 20c5.5-1.5 5.5-5 5.5-5a5 5 0 1 0-7-6c0 4 1.5 7.5 1.5 11"></path><path d="M10 14c-1.5 0-3-1-3-3"></path></svg>;
const LaptopIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>;
const UserCheckIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>;
const NinjaIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H2a10 10 0 0 0 10-10Z"></path><path d="M2 12c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4"></path><path d="M8 12v-2"></path><path d="M16 12v-2"></path></svg>;

const questions = [
  {
    id: 1,
    question: "What is your primary goal?",
    options: [
      { text: "I want to break into systems", icon: <UnlockIcon /> },
      { text: "I want to defend networks", icon: <ShieldIcon /> },
      { text: "I want to hunt for bounties", icon: <CrosshairIcon /> },
      { text: "I want to manage cloud security", icon: <CloudIcon /> },
    ]
  },
  {
    id: 2,
    question: "What is your current skill level?",
    options: [
      { text: "Complete Beginner", icon: <SproutIcon /> },
      { text: "Some IT Experience", icon: <LaptopIcon /> },
      { text: "Security Professional", icon: <UserCheckIcon /> },
      { text: "Advanced Hacker", icon: <NinjaIcon /> },
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
