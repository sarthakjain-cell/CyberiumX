"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`${styles.navbar} ${scrolled ? styles.scrolledNavbar : ''}`}
    >
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="CyberiumX Logo" 
            width={200} 
            height={50} 
            priority 
          />
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
          <Link href="/about-us" className={`${styles.navLink} ${pathname === '/about-us' ? styles.active : ''}`}>About Us</Link>
          <Link href="/services" className={`${styles.navLink} ${styles.specialLink}`}>7X-Security</Link>
          <Link href="/courses" className={`${styles.navLink} ${pathname.startsWith('/courses') || pathname.startsWith('/provided-course') ? styles.active : ''}`}>Our Courses</Link>

          <Link href="/global-services" className={`${styles.navLink} ${pathname.startsWith('/global-services') ? styles.active : ''}`}>Global Services</Link>

          <div className={styles.dropdown}>
            <span className={`${styles.navLink} ${pathname === '/blog' || pathname === '/faq' || pathname === '/verify' ? styles.active : ''}`} style={{cursor: 'pointer'}}>More ▾</span>
            <div className={styles.dropdownContent}>
              <Link href="/blog" className={styles.dropdownItem}>Blog</Link>
              <Link href="/faq" className={styles.dropdownItem}>Reviews/FAQ</Link>
              <Link href="/verify" className={styles.dropdownItem} style={{ color: '#10b981', fontWeight: 600 }}>Verify</Link>
            </div>
          </div>
          <Link href="/contact-us" className={`${styles.navLink} ${pathname === '/contact-us' ? styles.active : ''}`}>Contact Us</Link>
          
          <Link href="/login" className={styles.navLink} style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            Login
          </Link>
          <Link href="https://wa.me/+919318492128" className={styles.getStartedBtn}>Get Started</Link>
        </nav>
        <button className={styles.mobileMenuBtn} aria-label="Menu">☰</button>
      </div>
    </header>
  );
}
