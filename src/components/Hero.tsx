"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const [text, setText] = useState('');
  const [mounted, setMounted] = useState(false);
  const fullText = "> INITIALIZING SECURE PROTOCOLS...";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.cyberGrid}></div>
      <div className={styles.glowOrb}></div>
      
      {/* Animated Floating Particles */}
      {mounted && (
        <div className={styles.particlesContainer}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.1, 0.6, 0.1]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      )}

      <div className={`container ${styles.heroContent}`}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.terminalWrapper}>
            <span className={styles.terminalText}>{text}</span>
            <span className={styles.cursor}>_</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            Your Cyber Security <br />
            <span className={styles.glitchText}>Journey Starts Here !!</span>
          </h1>
          
          <p className={styles.heroDesc}>
            Join CyberiumX trainings and gain cutting-edge skills to defend against cyber threats like a pro.
          </p>
          
          <div className={styles.heroBtns}>
            <Link href="/courses" className="btn-primary">Initialize Training</Link>
            <Link href="/about-us" className="btn-secondary">System Specs</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
