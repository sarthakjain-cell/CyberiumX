"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Verify.module.css';
import { mockCertificates, CertificateRecord } from '@/data/mockCertificates';

export default function VerifyClient() {
  const [certId, setCertId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<CertificateRecord | false | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const performVerification = (searchQuery: string) => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    setIsSearching(true);
    setHasSearched(true);
    setResult(null);

    // Fast, responsive verification simulation
    setTimeout(() => {
      const cleanQuery = trimmed.toUpperCase().replace(/[\s-]/g, '');
      const rawUpper = trimmed.toUpperCase();

      const found = mockCertificates.find((c) => {
        const cleanId = c.id.toUpperCase().replace(/[\s-]/g, '');
        const studentNameUpper = (c.studentName || c.name || '').toUpperCase();
        const courseNameUpper = (c.courseName || c.course || '').toUpperCase();

        return (
          cleanId === cleanQuery ||
          cleanId.includes(cleanQuery) ||
          c.id.toUpperCase() === rawUpper ||
          studentNameUpper.includes(rawUpper) ||
          courseNameUpper.includes(rawUpper)
        );
      });

      setResult(found || false);
      setIsSearching(false);
    }, 300);
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
            Enter a student name or unique CyberiumX Certificate Credential ID below to validate official academic completion records, exam grades, and cybersecurity badges.
          </p>
        </div>

        <div className={styles.searchBoxWrapper}>
          <form onSubmit={handleVerify} className={styles.searchForm}>
            <label htmlFor="certificateIdInput" className="sr-only" style={{ display: 'none' }}>Certificate ID or Student Name</label>
            <input 
              id="certificateIdInput"
              type="text" 
              placeholder="Enter Certificate ID (e.g. CX-2026-98765) or Student Name..."
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
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: '#9ca3af', display: 'block', marginBottom: '0.6rem' }}>
              Click any sample credential ID to test instant verification:
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {mockCertificates.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => handleQuickSample(sample.id)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#e5e7eb',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(252, 22, 22, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.color = '#e5e7eb';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  {sample.id} ({sample.studentName.split(' ')[0]})
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
                  OFFICIALLY VALID & AUTHENTIC CREDENTIAL
                </div>

                <div className={styles.certMetaGrid}>
                  <div className={styles.metaItem}>
                    <label>Student Name</label>
                    <div className={styles.valueHighlight}>{result.studentName || result.name}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Course Program</label>
                    <div className={styles.valueHighlight}>{result.courseName || result.course}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Issue Date</label>
                    <div>{result.issueDate}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Evaluation / Grade</label>
                    <div style={{ color: '#10b981', fontWeight: 700 }}>{result.grade || 'Passed'}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Credential ID</label>
                    <div><code style={{ color: '#ff1616', fontWeight: 700 }}>{result.id}</code></div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Security Hash Verification</label>
                    <div><code style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{result.credentialHash}</code></div>
                  </div>
                </div>

                <div className={styles.certFooter}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/logo.png" 
                    alt="CyberiumX Logo" 
                    width={180} 
                    height={48} 
                    loading="lazy" 
                    style={{ height: '44px', width: 'auto', marginBottom: '1rem', objectFit: 'contain' }} 
                  />
                  <p className={styles.validMsg}>
                    This digital credential has been officially validated against the CyberiumX Academic Database. The recipient has fulfilled all hands-on practical lab assessments and examination requirements.
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
                  NO MATCHING RECORD FOUND
                </div>
                <p>
                  No verified certificate record was found matching: <strong>&quot;{certId}&quot;</strong>.
                </p>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#9ca3af' }}>
                  Please verify the ID format (e.g. <code>CX-2026-98765</code>) or contact our academic verification office at <a href="mailto:contact@cyberiumx.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>contact@cyberiumx.com</a>.
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
