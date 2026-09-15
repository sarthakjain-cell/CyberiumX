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
    }, 1200);
  };

  return (
    <div className={styles.verifySection}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.pulseBadge}>Instant Credential Verification</div>
          <h1>Verify Certificate Authenticity</h1>
          <p>Enter the unique CyberiumX Certificate Credential ID below to validate student completion records and security specialization badges.</p>
        </div>

        <div className={styles.searchBoxWrapper}>
          <form onSubmit={handleVerify} className={styles.searchForm}>
            <label htmlFor="certificateIdInput" className="sr-only" style={{ display: 'none' }}>Certificate ID</label>
            <input 
              id="certificateIdInput"
              type="text" 
              placeholder="Enter Certificate ID (e.g. CYB-2025-8942)"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              className={styles.searchInput}
              required
            />
            <button type="submit" className="btn-primary" disabled={isSearching} style={{ minWidth: '140px' }}>
              {isSearching ? 'Validating...' : 'Verify Now'}
            </button>
          </form>
        </div>

        {/* Results Box */}
        {hasSearched && (
          <div className={styles.resultContainer}>
            {isSearching ? (
              <div className={styles.loadingBox}>
                <div className={styles.spinner}></div>
                <p>Querying CyberiumX Blockchain Verification Registry...</p>
              </div>
            ) : result ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.successCard}
              >
                <div className={styles.statusBadgeValid}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  VALID CREDENTIAL RECORD
                </div>

                <div className={styles.certMetaGrid}>
                  <div className={styles.metaItem}>
                    <label>Student Name</label>
                    <div className={styles.valueHighlight}>{result.name}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Course Title</label>
                    <div className={styles.valueHighlight}>{result.course}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Issue Date</label>
                    <div>{result.issueDate}</div>
                  </div>
                  <div className={styles.metaItem}>
                    <label>Credential ID</label>
                    <div><code>{result.id}</code></div>
                  </div>
                </div>

                <div className={styles.certFooter}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="CyberiumX Logo" width={120} height={30} loading="lazy" style={{ height: '30px', width: 'auto', marginBottom: '1rem', filter: 'invert(1)' }} />
                  <p className={styles.validMsg}>This digital certificate was officially issued by CyberiumX Academy. All security verification hashes match cryptographic signatures.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.invalidCard}
              >
                <div className={styles.statusBadgeInvalid}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                  INVALID OR UNRECORDED CREDENTIAL
                </div>
                <p>No verified certificate record was found matching ID: <strong>{certId}</strong>. Please double check the ID format or contact support if you believe this is an error.</p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
