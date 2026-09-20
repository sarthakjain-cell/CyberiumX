"use client";

import React from 'react';
import styles from './TrustBadge.module.css';

export default function TrustBadge() {
  return (
    <section className={styles.trustSection}>
      <div className={styles.trustCard}>
        <div className={styles.trustIcon}>
          {/* Verified Badge Icon (Shield Check) */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
        
        <h2 className={styles.trustTitle}>Trusted by learners and professionals</h2>
        <p className={styles.trustSubtitle}>Read our reviews on Justdial</p>
        
        <a 
          href="https://jsdl.in/DT-23VTC9S887W" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.trustButton}
          aria-label="View Justdial profile (opens in a new tab)"
        >
          View Justdial profile
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </section>
  );
}
