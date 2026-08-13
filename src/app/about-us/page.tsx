"use client";

import { motion } from 'framer-motion';
import styles from './AboutPage.module.css';

export default function AboutUsPage() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Premium Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.heroBadge}>Our Mission</span>
            <h1 className={styles.heroTitle}>Securing the Future of<br/>Digital Infrastructure</h1>
            <p className={styles.heroDesc}>
              CyberiumX is an elite, globally recognized institution dedicated to forging the next generation of cybersecurity professionals. We don&apos;t just teach theory; we simulate real-world cyber warfare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className={styles.statsSection}>
        <motion.div 
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.statItem}>
            <div className={styles.statNumber}>25K+</div>
            <div className={styles.statLabel}>Students Trained</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>120+</div>
            <div className={styles.statLabel}>Countries Reached</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Job Placement Rate</div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Bento Grid */}
      <section className={styles.valuesSection}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>
        
        <div className={styles.bentoGrid}>
          {/* Value 1 */}
          <motion.div 
            className={`${styles.bentoCard} ${styles.span2}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <h3 className={styles.valueTitle}>Relentless Innovation</h3>
            <p className={styles.valueDesc}>
              The threat landscape evolves every single day. We continuously update our curriculum, our labs, and our methodologies to ensure our students are always one step ahead of advanced persistent threats (APTs).
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div 
            className={styles.bentoCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className={styles.valueTitle}>Ethical Integrity</h3>
            <p className={styles.valueDesc}>
              We teach offensive techniques to build better defenders. Strict ethical boundaries and responsible disclosure are at the heart of our training.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div 
            className={styles.bentoCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3 className={styles.valueTitle}>Offensive Defense</h3>
            <p className={styles.valueDesc}>
              You cannot defend against what you do not understand. Our approach focuses on deep, practical exploitation to construct impenetrable defenses.
            </p>
          </motion.div>

          {/* Value 4 */}
          <motion.div 
            className={`${styles.bentoCard} ${styles.span2}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3 className={styles.valueTitle}>Global Community</h3>
            <p className={styles.valueDesc}>
              CyberiumX is more than an institution; it is a worldwide network of elite professionals. Our alumni collaborate, share intelligence, and defend global infrastructure together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The CyberiumX Story Timeline */}
      <section className={styles.timelineSection}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The CyberiumX Story
        </motion.h2>

        <div className={styles.timelineContainer}>
          
          <motion.div 
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.timelineYear}>2018</div>
            <h3 className={styles.timelineTitle}>The Inception</h3>
            <p className={styles.timelineDesc}>
              Founded by a collective of former intelligence officers and penetration testers, CyberiumX was built to address the massive global shortage of truly practical, hands-on cybersecurity training.
            </p>
          </motion.div>

          <motion.div 
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.timelineYear}>2021</div>
            <h3 className={styles.timelineTitle}>Global Expansion</h3>
            <p className={styles.timelineDesc}>
              Our training platforms went fully digital, allowing us to reach students in over 120 countries. We launched our flagship CEH and OSCP preparatory cyber ranges.
            </p>
          </motion.div>

          <motion.div 
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.timelineYear}>2024</div>
            <h3 className={styles.timelineTitle}>Enterprise Security Division</h3>
            <p className={styles.timelineDesc}>
              Beyond training, we launched our Professional Security Services division, directly securing Fortune 500 companies and critical infrastructure through rigorous penetration testing.
            </p>
          </motion.div>

          <motion.div 
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.timelineYear}>Present</div>
            <h3 className={styles.timelineTitle}>The Future of Cyber</h3>
            <p className={styles.timelineDesc}>
              Today, CyberiumX stands at the forefront of AI-driven threat modeling and advanced vulnerability research, continuing our mission to forge the world&apos;s elite cyber defenders.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
