import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.cyberGrid}></div>
      <div className={styles.glowOrb}></div>
      
      <div className={`container ${styles.heroContent}`}>
        <div>
          <div className={styles.terminalWrapper}>
            &gt; INITIALIZING SECURE PROTOCOLS...<span className={styles.cursor}>_</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            Your Cyber Security <br />
            <span className={styles.glitchText}>Journey Starts Here !!</span>
          </h1>
          
          <p className={styles.heroDesc}>
            Join CyberiumX trainings and gain cutting-edge skills to defend against cyber threats like a pro.
          </p>
          
          <div className={styles.heroBtns}>
            <Link href="/courses" className="btn-primary">
              View All Courses
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
          
          <div className={styles.statsBar}>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.666-6.479L12 14z"/>
                </svg>
              </div>
              <div>
                <div className={styles.statNumber}>25,000+</div>
                <div className={styles.statLabel}>Students Trained</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <div className={styles.statNumber}>Real-World</div>
                <div className={styles.statLabel}>Cyber Ranges & Labs</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div>
                <div className={styles.statNumber}>Certified</div>
                <div className={styles.statLabel}>Expert Instructors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
