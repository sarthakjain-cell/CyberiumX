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
            Master the Art of <br />
            <span className={styles.glitchText}>Offensive Security</span>
          </h1>
          
          <p className={styles.heroDesc}>
            Join the elite ranks of Cyber Security professionals. Train in real-world simulated environments and learn to defend critical infrastructure against advanced persistent threats.
          </p>
          
          <div className={styles.heroBtns}>
            <Link href="/courses" className="btn-primary">
              View All Courses
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
          
          <div className={styles.trustBadges}>
            <div className={styles.badgeItem}>✓ 25k+ Students Trained</div>
            <div className={styles.badgeItem}>✓ Real-world Cyber Ranges</div>
            <div className={styles.badgeItem}>✓ Certified Instructors</div>
          </div>
        </div>
      </div>
    </section>
  );
}
