"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Verify.module.css';
import { mockCertificates } from '@/data/mockCertificates';

export default function VerifyPage() {
  const [certId, setCertId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setIsSearching(true);
    setHasSearched(true);
    setResult(null);

    // Simulate network delay for effect
    setTimeout(() => {
      const found = mockCertificates.find(c => c.id.toUpperCase() === certId.trim().toUpperCase());
      setResult(found || false); // false means not found
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className={styles.verifyContainer}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Credential Verification</h1>
        <p className={styles.subtitle}>Enter a CyberiumX Certificate ID to verify its authenticity.</p>

        <form onSubmit={handleVerify} className={styles.searchBox}>
          <div className={styles.inputWrapper}>
            <span className={styles.searchIcon}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="e.g. CX-2026-98765"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.verifyBtn} disabled={isSearching || !certId.trim()}>
            {isSearching ? 'Querying Secure Database...' : 'Verify Certificate'}
          </button>
        </form>

        {hasSearched && !isSearching && (
          <motion.div 
            className={styles.resultContainer}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            {result === false ? (
              <div className={styles.errorBox}>
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ margin: '0 0 0.25rem', color: '#ef4444' }}>Invalid Credential</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>We could not find any record matching <strong>{certId}</strong>. This certificate may be forged or invalid.</p>
                </div>
              </div>
            ) : (
              <div className={styles.successBox}>
                <div className={styles.successHeader}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Verified Authentic
                </div>
                
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Certificate ID</span>
                  <span className={styles.detailValue} style={{ fontFamily: 'var(--font-mono)' }}>{result.id}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Student Name</span>
                  <span className={styles.detailValue}>{result.studentName}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Course Completed</span>
                  <span className={styles.detailValue} style={{ color: 'var(--primary)' }}>{result.courseName}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Issue Date</span>
                  <span className={styles.detailValue}>{result.issueDate}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Status</span>
                  <span className={styles.detailValue} style={{ color: '#10b981' }}>{result.status}</span>
                </div>

                <div className={styles.certPreview}>
                  <img src="/logo.png" alt="CyberiumX" style={{ height: '30px', marginBottom: '1rem', filter: 'invert(1)' }} />
                  <h3 style={{ margin: '0 0 0.5rem', fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.5rem' }}>Certificate of Completion</h3>
                  <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: '#666' }}>Awarded to</p>
                  <h2 style={{ margin: '0 0 1rem', color: '#ef4444', fontSize: '1.8rem' }}>{result.studentName}</h2>
                  <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: '#666' }}>for completing</p>
                  <h4 style={{ margin: '0', fontSize: '1.1rem' }}>{result.courseName}</h4>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
