"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const [text, setText] = useState('');
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

  return (
    <section className={styles.hero}>
      <div className={styles.cyberGrid}></div>
      <div className={styles.glowOrb}></div>
      
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
            Master The Art Of <br />
            <span className={styles.glitchText}>Cyber Warfare</span>
          </h1>
          
          <p className={styles.heroDesc}>
            Gain cutting-edge skills to defend against evolving cyber threats. Join CyberiumX and train in realistic, hands-on simulated environments designed by industry experts.
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
