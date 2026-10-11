"use client";

import { useEffect } from 'react';
import styles from './GoogleReviewsModal.module.css';

interface GoogleReview {
  id: number;
  name: string;
  avatarColor: string;
  role: string;
  course: string;
  rating: number;
  date: string;
  text: string;
}

const verifiedGoogleReviews: GoogleReview[] = [
  {
    id: 1,
    name: "Zeeshan Ahmed",
    avatarColor: "linear-gradient(135deg, #4285F4 0%, #1d4ed8 100%)",
    role: "Security Analyst",
    course: "Certified Ethical Hacker (CEHv13)",
    rating: 5,
    date: "Verified Google Review • 2026",
    text: "I highly recommend the CyberiumX Ethical Hacking course to anyone aspiring to build a career in cybersecurity. The course is well-structured, covering everything from network security to ethical hacking techniques. The hands-on labs and simulations provided essential practical experience, making it an invaluable learning opportunity in this field."
  },
  {
    id: 2,
    name: "Nelson Fadeh",
    avatarColor: "linear-gradient(135deg, #EA4335 0%, #b91c1c 100%)",
    role: "Penetration Tester",
    course: "Bug Bounty & Web Security",
    rating: 5,
    date: "Verified Google Review • 2026",
    text: "The CyberiumX Bug Bounty course went beyond my expectations. The content was current and relevant, and the instructors were not only highly knowledgeable but also deeply passionate about cybersecurity. The real-world scenarios integrated into the course offered practical experience in identifying and mitigating security threats."
  },
  {
    id: 3,
    name: "Max J",
    avatarColor: "linear-gradient(135deg, #FBBC05 0%, #b45309 100%)",
    role: "SOC Lead",
    course: "OSCP+ Certification Prep",
    rating: 5,
    date: "Verified Google Review • 2026",
    text: "Enrolling in the CyberiumX OSCP+ course was a game-changer for my career. The well-structured curriculum covered every key aspect of cybersecurity, while the hands-on labs provided invaluable practical experience. With expert instructors guiding the way, I now feel confident in tackling the ever-evolving challenges of the cybersecurity landscape."
  },
  {
    id: 4,
    name: "Addae Prince",
    avatarColor: "linear-gradient(135deg, #34A853 0%, #15803d 100%)",
    role: "Security Engineer",
    course: "CEHv13 AI & Exploitation",
    rating: 5,
    date: "Verified Google Review • 2026",
    text: "The CEH training material was exceptional! It was packed with valuable knowledge, and I was thrilled to learn various techniques for identifying and exploiting system vulnerabilities. What an incredible learning journey! Thank you, CyberiumX."
  },
  {
    id: 5,
    name: "Shikha Verma",
    avatarColor: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    role: "Security Auditor",
    course: "eJPT & Network Defense",
    rating: 5,
    date: "Verified Google Review • 2026",
    text: "I recently completed the eJPT course through CyberiumX, and I must say, the experience was phenomenal. From start to finish, the course was thoughtfully structured, providing a perfect blend of theoretical knowledge and hands-on practical exercises."
  },
  {
    id: 6,
    name: "Aarav Sharma",
    avatarColor: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",
    role: "Cybersecurity Specialist",
    course: "Ethical Hacking Practicals",
    rating: 5,
    date: "Verified Google Review • 2026",
    text: "I attended the Crash Course on Ethical Hacking Practicals offered by CyberiumX, and it exceeded all my expectations. This intensive course was packed with real-world scenarios, practical exercises, and hands-on labs that gave me the confidence to excel."
  }
];

export default function GoogleReviewsModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Verified Google Reviews Proof">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.googleGBox}>
              <svg viewBox="0 0 24 24" width="30" height="30">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div className={styles.headerText}>
              <h3>
                CyberiumX Reviews
                <span className={styles.verifiedGCheck} title="Verified Profile">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </span>
              </h3>
              <p className={styles.headerSubtitle}>Verified Customer Reviews & Ratings</p>
            </div>
          </div>
          <button 
            type="button" 
            className={styles.closeButton} 
            onClick={onClose} 
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Rating Summary Bar */}
        <div className={styles.summarySection}>
          <div className={styles.ratingBig}>
            <div className={styles.scoreNumber}>4.9</div>
            <div>
              <div className={styles.starsBig}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FBBC05">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <div className={styles.basedText}>Based on 500+ student reviews</div>
            </div>
          </div>

          <div className={styles.statPills}>
            <span className={`${styles.pill} ${styles.pillHighlight}`}>✓ 98% Positive Feedback</span>
            <span className={styles.pill}>✓ 100% Verified Learners</span>
            <span className={styles.pill}>✓ Certified Alumni</span>
          </div>
        </div>

        {/* Reviews List */}
        <div className={styles.reviewsScroll}>
          {verifiedGoogleReviews.map((item) => (
            <div key={item.id} className={styles.reviewProofCard}>
              <div className={styles.cardHeader}>
                <div className={styles.authorLeft}>
                  <div className={styles.authorAvatar} style={{ background: item.avatarColor }}>
                    {item.name.charAt(0)}
                  </div>
                  <div className={styles.authorDetails}>
                    <div className={styles.authorName}>
                      {item.name}
                    </div>
                    <span className={styles.googleSourceTag}>
                      <svg viewBox="0 0 24 24" width="12" height="12">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                      Verified Student Review
                    </span>
                  </div>
                </div>

                <div className={styles.cardMetaRight}>
                  <div className={styles.cardStars}>
                    {[...Array(item.rating)].map((_, sIdx) => (
                      <svg key={sIdx} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC05">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className={styles.reviewDate}>{item.date}</span>
                </div>
              </div>

              <div className={styles.courseTag}>{item.course}</div>
              <p className={styles.reviewText}>&quot;{item.text}&quot;</p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <div className={styles.footerTrustNote}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
            <span>Real student feedback collected across CyberiumX training programs</span>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className={styles.footerActionBtn}
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
