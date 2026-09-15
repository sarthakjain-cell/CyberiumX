import type { Metadata } from 'next';
import styles from './AboutPage.module.css';

export const metadata: Metadata = {
  title: "About Us | CyberiumX - Elite Cybersecurity Institute",
  description: "CyberiumX is an elite, globally recognized cybersecurity institute dedicated to forging the next generation of ethical hackers, security auditors, and penetration testers.",
  alternates: {
    canonical: "https://cyberiumx.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Premium Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div>
            <span className={styles.heroBadge}>Our Mission</span>
            <h1 className={styles.heroTitle}>Securing the Future of<br/>Digital Infrastructure</h1>
            <p className={styles.heroDesc}>
              CyberiumX is an elite, globally recognized institution dedicated to forging the next generation of cybersecurity professionals. We don&apos;t just teach theory; we simulate real-world cyber warfare.
            </p>
          </div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
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
        </div>
      </section>

      {/* Core Values Bento Grid */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>
          Our Core <span style={{ color: '#ff1616' }}>Values</span>
        </h2>
        
        <div className={styles.bentoGrid}>
          {/* Value 1 */}
          <div className={`${styles.bentoCard} ${styles.span2}`}>
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <h3 className={styles.valueTitle}>Relentless Innovation</h3>
            <p className={styles.valueDesc}>
              The threat landscape evolves every single day. We continuously update our curriculum, our labs, and our methodologies to ensure our students are always one step ahead of advanced persistent threats (APTs).
            </p>
          </div>

          {/* Value 2 */}
          <div className={styles.bentoCard}>
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className={styles.valueTitle}>Ethical Integrity</h3>
            <p className={styles.valueDesc}>
              We teach offensive techniques to build better defenders. Strict ethical boundaries and responsible disclosure are at the heart of our training.
            </p>
          </div>

          {/* Value 3 */}
          <div className={styles.bentoCard}>
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3 className={styles.valueTitle}>Offensive Defense</h3>
            <p className={styles.valueDesc}>
              You cannot defend against what you do not understand. Our approach focuses on deep, practical exploitation to construct impenetrable defenses.
            </p>
          </div>

          {/* Value 4 */}
          <div className={`${styles.bentoCard} ${styles.span2}`}>
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3 className={styles.valueTitle}>Global Community</h3>
            <p className={styles.valueDesc}>
              CyberiumX is more than an institution; it is a worldwide network of elite professionals. Our alumni collaborate, share intelligence, and defend global infrastructure together.
            </p>
          </div>
        </div>
      </section>

      {/* The CyberiumX Story Timeline */}
      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>
          The <span style={{ color: '#ff1616' }}>CyberiumX</span> Story
        </h2>

        <div className={styles.timelineContainer}>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2018</div>
            <h3 className={styles.timelineTitle}>The Inception</h3>
            <p className={styles.timelineDesc}>
              Founded by a collective of former intelligence officers and penetration testers, CyberiumX was built to address the massive global shortage of truly practical, hands-on cybersecurity training.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2021</div>
            <h3 className={styles.timelineTitle}>Global Expansion</h3>
            <p className={styles.timelineDesc}>
              Our training platforms went fully digital, allowing us to reach students in over 120 countries. We launched our flagship CEH and OSCP preparatory cyber ranges.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2024</div>
            <h3 className={styles.timelineTitle}>Enterprise Security Division</h3>
            <p className={styles.timelineDesc}>
              Beyond training, we launched our Professional Security Services division, directly securing Fortune 500 companies and critical infrastructure through rigorous penetration testing.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Present</div>
            <h3 className={styles.timelineTitle}>The Future of Cyber</h3>
            <p className={styles.timelineDesc}>
              Today, CyberiumX stands at the forefront of AI-driven threat modeling and advanced vulnerability research, continuing our mission to forge the world&apos;s elite cyber defenders.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
