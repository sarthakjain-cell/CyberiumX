import type { Metadata } from 'next';
import styles from './AboutPage.module.css';
import TrustBadge from '@/components/TrustBadge';

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
            <span className={styles.heroBadge}>About CyberiumX</span>
            <h1 className={styles.heroTitle}>Empowering Minds.<br/>Securing the Digital World.</h1>
            <p className={styles.heroDesc}>
              At CyberiumX, we are impassioned about Cyber Security and devoted to providing valuable information and resources to help individuals and organizations stay safe in the digital world. Our mission is to equip Cyber Security professionals with practical skills and in-depth knowledge to help create a safer digital world.
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
            <div className={styles.timelineYear}>Mission</div>
            <h3 className={styles.timelineTitle}>Trusted Training Leader</h3>
            <p className={styles.timelineDesc}>
              Our mission is to equip Cyber Security professionals with practical skills and in-depth knowledge to help create a safer digital world. We provide top-quality training, certifications, degree programs, cyber ranges, and essential resources tailored to meet the needs of every Cyber Security professional.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Faculty</div>
            <h3 className={styles.timelineTitle}>Certified Industry Experts</h3>
            <p className={styles.timelineDesc}>
              CyberiumX online training platform has instructors who are all recognized as certified experts and respected leaders in their fields. As the industry constantly evolves, so does the CyberiumX curriculum to hold foundational courses for starters to highly advanced tracks for seasoned security professionals.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Curriculum</div>
            <h3 className={styles.timelineTitle}>Technology-Motivated Programs</h3>
            <p className={styles.timelineDesc}>
              CyberiumX has been implementing several technology-motivated training programs that provide Cyber Security Certifications and Courses Online. In addition to providing custom security programs, we offer comprehensive IT security training services in the areas of Cyber Security.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Delivery</div>
            <h3 className={styles.timelineTitle}>The Pursuit of Excellence</h3>
            <p className={styles.timelineDesc}>
              We help candidates in gaining knowledge in the pursuit of excellence. Cost-effectiveness, flexibility, and value-based delivery of courses make our services prominent in academia and the industry of Information Security.
            </p>
          </div>

        </div>
      </section>

      {/* Justdial Accreditation & Awards */}
      <TrustBadge />

    </div>
  );
}
