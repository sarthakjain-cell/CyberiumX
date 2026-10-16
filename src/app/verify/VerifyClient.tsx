"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Verify.module.css';
import { mockCertificates } from '@/data/mockCertificates';

export default function VerifyClient() {
  const [certId, setCertId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const performVerification = (idToTest: string) => {
    if (!idToTest.trim()) return;
    setIsSearching(true);
    setHasSearched(true);
    setResult(null);

    // Realistic verification simulation
    setTimeout(() => {
      const found = mockCertificates.find(
        c => c.id.trim().toUpperCase() === idToTest.trim().toUpperCase()
      );
      setResult(found || false);
      setIsSearching(false);
    }, 600);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    performVerification(certId);
  };

  const handleQuickSample = (sampleId: string) => {
    setCertId(sampleId);
    performVerification(sampleId);
  };

  return (
    <div className={styles.verifySection}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.pulseBadge}>Instant Credential Verification</div>
          <h1>Verify Certificate Authenticity</h1>
          <p>
            Enter the unique CyberiumX Certificate Credential ID below to validate official student completion records, exam grades, and security specialization badges.
          </p>
        </div>

        <div className={styles.searchBoxWrapper}>
          <form onSubmit={handleVerify} className={styles.searchForm}>
            <label htmlFor="certificateIdInput" className="sr-only" style={{ display: 'none' }}>Certificate ID</label>
            <input 
              id="certificateIdInput"
              type="text" 
              placeholder="Enter Certificate ID (e.g. CX-2026-98765)"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              className={styles.searchInput}
              required
            />
            <button type="submit" className="btn-primary" disabled={isSearching} style={{ minWidth: '150px' }}>
              {isSearching ? 'Validating...' : 'Verify Now'}
            </button>
          </form>

          {/* Quick test sample IDs for verification convenience */}
          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: '#9ca3af', marginRight: '0.5rem' }}>
              Click to test sample IDs:
            </span>
            <div style={{ display: 'inline-flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              {mockCertificates.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => handleQuickSample(sample.id)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#e5e7eb',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.color = '#e5e7eb';
                  }}
                >
                  {sample.id}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Box */}
        {hasSearched && (
          <div className={styles.resultContainer}>
            {isSearching ? (
              <div className={styles.loadingBox}>
                <div className={styles.spinner}></div>
                <p>Querying CyberiumX Official Credential Registry...</p>
              </div>
            ) : result ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.successCard}
              >
                <div className={styles.statusBadgeValid}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  VALID & AUTHENTIC CREDENTIAL RECORD
                </div>

                <div className={styles.certMetaGrid}>
                  <div className={styles.metaItem}>
                    <label>Student Name</label>
                    <div className={styles.valueHighlight}>{result.studentName || result.name}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Course Title</label>
                    <div className={styles.valueHighlight}>{result.courseName || result.course}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Issue Date</label>
                    <div>{result.issueDate}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Grade / Evaluation</label>
                    <div style={{ color: '#10b981', fontWeight: 700 }}>{result.grade || 'Passed'}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Credential ID</label>
                    <div><code style={{ color: '#ff1616', fontWeight: 700 }}>{result.id}</code></div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Cryptographic Hash</label>
                    <div><code style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{result.credentialHash}</code></div>
                  </div>
                </div>

                <div className={styles.certFooter}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/logo.png" 
                    alt="CyberiumX Logo" 
                    width={160} 
                    height={40} 
                    loading="lazy" 
                    style={{ height: '36px', width: 'auto', marginBottom: '1rem', objectFit: 'contain' }} 
                  />
                  <p className={styles.validMsg}>
                    This digital credential has been officially validated against the CyberiumX Academic Database. The recipient has fulfilled all hands-on lab evaluations and exam standards.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.invalidCard}
              >
                <div className={styles.statusBadgeInvalid}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  INVALID OR UNRECORDED CREDENTIAL
                </div>
                <p>
                  No verified certificate record was found matching ID: <strong>{certId}</strong>. Please double-check the ID format or contact admissions at <strong>contact@cyberiumx.com</strong> if you require manual transcript verification.
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
