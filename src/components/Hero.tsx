"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import GoogleReviewsModal from './GoogleReviewsModal';
import styles from './Hero.module.css';

const rotatingParts = [
  "Master Real-World Ethical Hacking & Cyber Defense",
  "Train in Live Virtual Cyber Ranges & Practice Labs",
  "Earn Globally Recognized Cyber Security Certifications"
];

export default function Hero() {
  const [partIndex, setPartIndex] = useState(0);
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPartIndex((prev) => (prev + 1) % rotatingParts.length);
    }, 3200); // Rotates every 3.2 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.cyberGrid}></div>
      <div className={styles.glowOrb}></div>
      
      <div className={`container ${styles.heroContent}`}>
        <div>
          {/* Top Row: Welcome Banner + Google Reviews Social Proof Badge */}
          <div className={styles.topBannersRow}>
            {/* Top Auto-Changing Welcome Banner */}
            <div className={styles.welcomeBanner}>
              <span className={styles.welcomeTag}>WELCOME TO CYBERIUMX</span>
              <div className={styles.rotatingTextWrapper}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={partIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className={styles.rotatingPartText}
                  >
                    {rotatingParts[partIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Google Reviews Social Proof Badge (Clickable for proof) */}
            <button
              type="button"
              className={styles.googleReviewBadge}
              onClick={() => setShowReviewsModal(true)}
              aria-label="View verified Google reviews and proof"
            >
              <div className={styles.googleIconBox}>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
              <div className={styles.googleStars} aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC05">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className={styles.googleRatingText}><strong>4.9/5</strong> Rating</span>
              <span className={styles.googleDivider}>•</span>
              <span className={styles.googleReviewCount}>500+ Google Reviews</span>
              <span className={styles.googleProofTag} aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>
          </div>
          
          <h1 className={styles.heroTitle}>
            Your Cyber Security <br />
            <span className={styles.glitchText}>Journey Starts Here !!</span>
          </h1>
          
          <p className={styles.heroDesc}>
            Join CyberiumX trainings and gain cutting-edge skills to defend against cyber threats like a pro.
          </p>
          
          <div className={styles.heroBtns}>
            <Link href="/courses" className="btn-primary">
              View All Courses
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
          
          <div className={styles.statsBar}>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.666-6.479L12 14z"/>
                </svg>
              </div>
              <div>
                <div className={styles.statNumber}>25,000+</div>
                <div className={styles.statLabel}>Students Trained</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <div className={styles.statNumber}>Real-World</div>
                <div className={styles.statLabel}>Cyber Ranges & Labs</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div>
                <div className={styles.statNumber}>Certified</div>
                <div className={styles.statLabel}>Expert Instructors</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GoogleReviewsModal
        isOpen={showReviewsModal}
        onClose={() => setShowReviewsModal(false)}
      />
    </section>
  );
}
