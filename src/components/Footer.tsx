"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        {/* Column 1: Brand & Contact Info */}
        <div className={styles.footerCol}>
          <Image src="/logo.png" alt="CyberiumX Logo" width={200} height={50} style={{ objectFit: 'contain', marginBottom: '1.5rem' }} />
          <p className={styles.contactText} style={{ color: '#d1d5db' }}>
            We equip Cyber Security professionals with practical skills to help create a safer digital world.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.icon} aria-hidden="true">📞</span>
              <a href="tel:+919318492128">+91-9318492128</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon} aria-hidden="true">✉️</span>
              <a href="mailto:contact@cyberiumx.com">contact@cyberiumx.com</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon} aria-hidden="true">📍</span>
              <span>Noida, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/services">7X-Security</Link></li>
            <li><Link href="/blog">Blogs</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Courses */}
        <div className={styles.footerCol}>
          <h4>Our Courses</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/provided-course/amazon-web-servicesaws-course">Amazon Web Services(AWS)</Link></li>
            <li><Link href="/provided-course/bug-bounty-course">Bug Bounty</Link></li>
            <li><Link href="/provided-course/certified-ethical-hacker-cehv13-ai">Certified Ethical Hacker CEHv13 AI</Link></li>
            <li><Link href="/provided-course/ccna-course">CCNA Course</Link></li>
            <li><Link href="/provided-course/networking-for-ethical-hackers-course">Networking For Ethical Hackers</Link></li>
            <li><Link href="/provided-course/ejptv2-course">eJPTv2 Course</Link></li>
            <li><Link href="/provided-course/ethical-hacking">Ethical Hacking</Link></li>
            <li><Link href="/provided-course/kali-linux-course">Kali Linux</Link></li>
            <li><Link href="/provided-course/oscp-course">OSCP+ Course</Link></li>
            <li><Link href="/provided-course/vapt">VAPT</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Socials */}
        <div className={styles.footerCol}>
          <h4>Subscribe to Newsletter</h4>
          <p className={styles.newsletterDesc} style={{ color: '#d1d5db' }}>Stay updated with the latest in cybersecurity training and threat intelligence.</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletterEmail" className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>Email Address</label>
            <input type="email" id="newsletterEmail" placeholder="Email Address" required className={styles.emailInput} aria-label="Enter your email address" />
            <button type="submit" className={styles.subscribeBtn} aria-label="Subscribe to newsletter">Subscribe</button>
          </form>

          <h4 style={{ marginTop: '2rem' }}>Follow us on Social Media</h4>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Visit CyberiumX on Facebook" title="Facebook">FB</a>
            <a href="#" className={styles.socialIcon} aria-label="Visit CyberiumX on Instagram" title="Instagram">IG</a>
            <a href="#" className={styles.socialIcon} aria-label="Visit CyberiumX on LinkedIn" title="LinkedIn">IN</a>
            <a href="#" className={styles.socialIcon} aria-label="Visit CyberiumX on Telegram" title="Telegram">TG</a>
          </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CyberiumX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
