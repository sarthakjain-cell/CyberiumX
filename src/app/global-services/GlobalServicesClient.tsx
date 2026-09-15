"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './GlobalServices.module.css';

interface Item {
  title: string;
  description: string;
}

export default function GlobalServicesClient({
  courses,
  services
}: {
  courses: Item[];
  services: Item[];
}) {
  const [activeItem, setActiveItem] = useState<Item | null>(null);

  return (
    <div className={styles.pageContainer}>
      {/* Premium Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div>
            <span className={styles.heroBadge}>Worldwide Reach</span>
            <h1 className={styles.heroTitle}>Global Cybersecurity<br/>Training & Services</h1>
            <p className={styles.heroDesc}>
              Providing elite training and robust security solutions to businesses, governments, and individuals across Australia, Canada, the UK, Germany, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Callout Card */}
      <section className={styles.calloutSection}>
        <div className={styles.calloutCard}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>The Growing Global Need</h2>
          <p>
            In today’s rapidly evolving digital world, cybersecurity has become a global priority. Businesses, governments, and individuals rely heavily on technology, making them increasingly vulnerable to cyber threats. From ransomware attacks to data breaches, organizations across the world are facing serious security challenges.
          </p>
          <p>
            To combat these growing threats, the demand for skilled cybersecurity professionals and advanced security services is higher than ever before. Cybersecurity is no longer just an IT requirement—it is a critical business strategy.
          </p>
        </div>
      </section>

      {/* 2-Column Bento Grid Section */}
      <section className={styles.contentSection}>
        <div className={styles.gridContainer}>
          
          {/* Column 1: Global Training */}
          <div className={styles.columnCard}>
            <div className={styles.columnHeader}>
              <span className={styles.columnBadge}>Global Courses</span>
              <h2 className={styles.columnTitle}>Cyber Security Training</h2>
            </div>
            <div className={styles.itemList}>
              {courses.map((item, idx) => (
                <div key={idx} className={styles.interactiveItem} onClick={() => setActiveItem(item)}>
                  <span>{item.title}</span>
                  <span className={styles.arrowIcon}>→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Global Services */}
          <div className={styles.columnCard}>
            <div className={styles.columnHeader}>
              <span className={styles.columnBadge} style={{ color: '#00ff41', borderColor: 'rgba(0,255,65,0.3)', background: 'rgba(0,255,65,0.1)' }}>Global Protection</span>
              <h2 className={styles.columnTitle}>Cyber Security Services</h2>
            </div>
            <div className={styles.itemList}>
              {services.map((item, idx) => (
                <div key={idx} className={styles.interactiveItem} onClick={() => setActiveItem(item)}>
                  <span>{item.title}</span>
                  <span className={styles.arrowIcon}>→</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2>Ready to Secure Your Global Operations?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Contact our cybersecurity experts today for customized enterprise protection and training programs tailored to your country and compliance requirements.
          </p>
          <Link href="/contact-us" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Get Started Today</Link>
        </div>
      </section>

      {/* Interactive Modal Overlay */}
      <AnimatePresence>
        {activeItem && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setActiveItem(null)} aria-label="Close modal">✕</button>
              <h3 className={styles.modalTitle}>{activeItem.title}</h3>
              <p className={styles.modalDesc}>{activeItem.description}</p>
              <Link href="/contact-us" className="btn-primary" style={{ display: 'inline-block' }}>Inquire Now</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
