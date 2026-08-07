import Link from 'next/link';
import styles from './Dashboard.module.css';

export const metadata = {
  title: 'Student Dashboard | CyberiumX',
  robots: { index: false, follow: false } // Good SEO practice for private LMS routes
};

export default function DashboardPage() {
  return (
    <div className={styles.dashboardLayout}>
      {/* LMS Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <span style={{ color: 'var(--primary)' }}>Cyberium</span>X Portal
        </div>
        <nav className={styles.navMenu}>
          <Link href="/dashboard" className={`${styles.navItem} ${styles.activeNav}`}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            My Courses
          </Link>
          <Link href="#" className={styles.navItem}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            Assignments
          </Link>
          <Link href="#" className={styles.navItem}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 15l-2 5-9-5 9-5 2 5zm0 0l2 5 9-5-9-5-2 5z"></path></svg>
            Certificates
          </Link>
          <Link href="#" className={styles.navItem}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            Settings
          </Link>
          <Link href="/" className={styles.navItem} style={{ marginTop: 'auto', color: '#ef4444' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"></path></svg>
            Log Out
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Continue Learning</h1>
          <div className={styles.userProfile}>
            <span style={{ color: '#9ca3af' }}>Welcome back, Student!</span>
            <div className={styles.avatar}>S</div>
          </div>
        </header>

        {/* Video Player Mockup */}
        <div className={styles.videoSection}>
          <div className={styles.playIcon}>
            <svg width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>
          </div>
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', color: 'white', zIndex: 10 }}>
            <span style={{ display: 'block', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Module 4</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>Advanced Web Exploitation</span>
          </div>
        </div>

        <div className={styles.courseInfo}>
          <div className={styles.details}>
            <h2>Bug Bounty Masterclass</h2>
            <p>In this module, you will learn how to identify, exploit, and report complex vulnerabilities in modern web applications. We will cover advanced techniques for bypassing Web Application Firewalls (WAFs) and chaining multiple exploits together for maximum impact.</p>
          </div>
          
          <div className={styles.progressCard}>
            <div className={styles.progressHeader}>
              <span>Course Progress</span>
              <span style={{ color: 'var(--primary)' }}>75%</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#9ca3af' }}>Next up: Module 4 Security Quiz</p>
            <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>Resume Course</button>
          </div>
        </div>
      </main>
    </div>
  );
}
