"use client";

import React from 'react';
import Image from 'next/image';
import styles from './TrustBadge.module.css';

export default function TrustBadge() {
  return (
    <section className={styles.trustSection}>
      <div className={styles.trustContainer}>
        
        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>JUSTDIAL CERTIFIED ACADEMY</span>
          <h2 className={styles.title}>Recognized & Certified by Justdial</h2>
          <p className={styles.subtitle}>
            CyberiumX is officially accredited as a Trusted Business and Users&apos; Choice Cybersecurity Academy for delivering real-world hands-on training.
          </p>
        </div>

        {/* Framed Awards Grid */}
        <div className={styles.awardGrid}>
          {/* Award 1: Page 3 Trusted Business Plaque & Medallion */}
          <a 
            href="https://jsdl.in/DT-23VTC9S887W" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.awardCard}
            aria-label="View CyberiumX Justdial Trusted Business Award 2026 (opens in new tab)"
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/justdial/justdial_trusted_business_award.jpg" 
                alt="Justdial CyberiumX Trusted Business Registered In 2026 Framed Award" 
                className={styles.awardImg}
              />
            </div>
            <div className={styles.awardCaption}>
              <span className={styles.captionBadge}>Official Recognition</span>
              <h4>Justdial Trusted Business 2026</h4>
              <p>Official recognition certificate with 2026 Genuine Business Gold Medallion</p>
            </div>
          </a>

          {/* Award 2: Page 4 Users' Choice Certificate */}
          <a 
            href="https://jsdl.in/DT-23VTC9S887W" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.awardCard}
            aria-label="View CyberiumX Justdial Users Choice 2026 Certificate (opens in new tab)"
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/justdial/justdial_users_choice_award.jpg" 
                alt="Justdial Users Choice 2026 5-Star Rating Framed Award for CyberiumX" 
                className={styles.awardImg}
              />
            </div>
            <div className={styles.awardCaption}>
              <span className={styles.captionBadge}>Users&apos; Choice Award</span>
              <h4>Jd Users&apos; Choice 2026</h4>
              <p>5-Star rated excellence in practical cybersecurity certifications & mentorship</p>
            </div>
          </a>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <a 
            href="https://jsdl.in/DT-23VTC9S887W" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.verifyButton}
          >
            Verify CyberiumX on Justdial
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
