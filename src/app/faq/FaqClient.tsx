"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Faq.module.css';

interface Review {
  name: string;
  review: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqClient({
  reviews,
  faqs
}: {
  reviews: Review[];
  faqs: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.pageContainer}>
      
      {/* Header */}
      <section className={styles.heroSection}>
        <div>
          <span className={styles.badge}>Student Feedback & Help Center</span>
          <h1 className={styles.heroTitle}>Student Reviews & FAQ</h1>
          <p className={styles.heroDesc}>
            Hear directly from our global alumni community and find answers to common questions about CyberiumX courses, certifications, and career support.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className={styles.reviewsSection}>
        <div className={styles.sectionHeader}>
          <h2>What Our <span style={{ color: '#ff1616' }}>Alumni Say</span></h2>
          <p>Real stories from students who launched cybersecurity careers with CyberiumX.</p>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((item, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.stars}></div>
              <p className={styles.reviewText}>&quot;{item.review}&quot;</p>
              <div className={styles.authorRow}>
                <div className={styles.avatar}>{item.name.charAt(0)}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{item.name}</div>
                  <div className={styles.verifiedBadge}> Verified Alumni</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2>Frequently Asked <span style={{ color: '#ff1616' }}>Questions</span></h2>
          <p>Got questions? We have answers. If you need further help, feel free to reach out.</p>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.faqAnswer}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
