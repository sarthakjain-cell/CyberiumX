"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './Faq.module.css';

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqClient({
  faqs
}: {
  faqs: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.pageContainer}>
      
      {/* Header */}
      <section className={styles.heroSection}>
        <div>
          <span className={styles.badge}>Help & Knowledge Center</span>
          <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
          <p className={styles.heroDesc}>
            Everything you need to know about CyberiumX courses, certifications, live mentorship, exam support, and career opportunities.
          </p>

          <div style={{ maxWidth: '600px', margin: '2rem auto 0', position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search FAQs (e.g., certificate, EMI, live sessions, beginner)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordion (All 20 Official Questions) */}
      <section className={styles.faqSection} style={{ paddingTop: '1rem' }}>
        <div className={styles.faqContainer}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: '#9ca3af' }}>
              <p>No FAQs match your search query &quot;{searchQuery}&quot;.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="btn-outline"
                style={{ marginTop: '1rem', display: 'inline-block' }}
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={styles.faqQuestion} 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span style={{ fontWeight: 600, fontSize: '1.1rem', textAlign: 'left', lineHeight: 1.5 }}>
                    {index + 1}. {faq.question}
                  </span>
                  <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className={styles.faqAnswer}
                    >
                      <div style={{ whiteSpace: 'pre-line', lineHeight: 1.8, color: '#d1d5db', fontSize: '1.02rem' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </div>

        {/* Still have questions banner */}
        <div style={{
          maxWidth: '800px',
          margin: '4rem auto 0',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(252, 22, 22, 0.08) 0%, rgba(20, 20, 20, 0.9) 100%)',
          border: '1px solid rgba(252, 22, 22, 0.3)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.8rem', fontWeight: 700 }}>
            Still have questions?
          </h3>
          <p style={{ color: '#9ca3af', maxWidth: '540px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            Our admissions and technical team is here to help you 24x7 via WhatsApp or Email.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/919318492128" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>WhatsApp Us 24x7</span>
            </a>
            <Link 
              href="/contact-us" 
              className="btn-outline" 
              style={{ display: 'inline-block' }}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
