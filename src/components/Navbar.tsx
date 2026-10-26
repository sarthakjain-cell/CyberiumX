"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolledNavbar : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} aria-label="CyberiumX Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo.png" 
            alt="CyberiumX Logo" 
            width={374}
            height={361}
            loading="eager"
            className={styles.logoImage}
          />
        </Link>

        <nav className={`${styles.navLinks} ${mobileOpen ? styles.mobileNavShow : ''}`}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about-us" className={`${styles.navLink} ${pathname === '/about-us' ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/services" className={`${styles.navLink} ${styles.specialLink}`} onClick={() => setMobileOpen(false)}>7X-Security</Link>
          <Link href="/courses" className={`${styles.navLink} ${pathname.startsWith('/courses') || pathname.startsWith('/provided-course') ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>Our Courses</Link>
          <Link href="/global-services" className={`${styles.navLink} ${pathname.startsWith('/global-services') ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>Global Services</Link>

          <div 
            className={styles.dropdown}
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <span 
              className={`${styles.navLink} ${pathname === '/blog' || pathname === '/faqs' || pathname === '/faq' ? styles.active : ''}`} 
              style={{cursor: 'pointer'}}
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More ▼
            </span>
            <div className={`${styles.dropdownContent} ${moreOpen ? styles.dropdownShow : ''}`}>
              <Link href="/my-courses" className={styles.dropdownItem} style={{ color: '#fc1616', fontWeight: 600 }} onClick={() => { setMoreOpen(false); setMobileOpen(false); }}>🎓 My Courses</Link>
              <Link href="/blog" className={styles.dropdownItem} onClick={() => { setMoreOpen(false); setMobileOpen(false); }}>Blog</Link>
              <Link href="/faqs" className={styles.dropdownItem} onClick={() => { setMoreOpen(false); setMobileOpen(false); }}>FAQs</Link>
              <Link href="/verify" className={styles.dropdownItem} style={{ color: '#10b981', fontWeight: 600 }} onClick={() => { setMoreOpen(false); setMobileOpen(false); }}>Verify Certificate</Link>
            </div>
          </div>
          <Link href="/contact-us" className={`${styles.navLink} ${pathname === '/contact-us' ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>Contact Us</Link>
          
          <Link href="/login" className={styles.navLink} style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }} onClick={() => setMobileOpen(false)}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            Login
          </Link>
          <Link href="https://wa.me/+919318492128" className={styles.getStartedBtn} onClick={() => setMobileOpen(false)}>Get Started</Link>
        </nav>
        <button className={styles.mobileMenuBtn} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </header>
  );
}
