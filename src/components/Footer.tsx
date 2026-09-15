"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        {/* Column 1: Brand & Contact Info */}
        <div className={styles.brandCol}>
          <Image src="/logo.png" alt="CyberiumX Logo" width={200} height={50} style={{ objectFit: 'contain', marginBottom: '1.25rem' }} />
          <p className={styles.brandDesc}>
            CyberiumX is a trusted global leader in Cybersecurity Education, Penetration Testing, and Managed Security Services.
          </p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <a href="tel:+919318492128">+91-9318492128</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <a href="mailto:contact@cyberiumx.com">contact@cyberiumx.com</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          <div className={styles.socialRow}>
            <a href="https://www.linkedin.com/company/cyberiumx" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="LinkedIn">IN</a>
            <a href="https://twitter.com/cyberiumx" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Twitter">TW</a>
            <a href="https://t.me/cyberiumx" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Telegram">TG</a>
            <a href="https://wa.me/+919318492128" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="WhatsApp">WA</a>
          </div>
        </div>

        {/* Column 2: CyberiumX Academy */}
        <div className={styles.footerCol}>
          <h4>CyberiumX</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/courses">What We Offer</Link></li>
            <li><Link href="/about-us">Leadership & Team</Link></li>
            <li><Link href="/contact-us">Careers</Link></li>
            <li><Link href="/verify">Verify Certificate</Link></li>
            <li><Link href="/services">7X-Security</Link></li>
            <li><Link href="/global-services">Global Services</Link></li>
          </ul>
        </div>

        {/* Column 3: Professional Certifications */}
        <div className={styles.footerCol}>
          <h4>Certifications & Courses</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/provided-course/certified-ethical-hacker-cehv13-ai">Ethical Hacker (CEHv13 AI)</Link></li>
            <li><Link href="/provided-course/oscp-course">OSCP+ Mastery</Link></li>
            <li><Link href="/provided-course/bug-bounty-course">Bug Bounty Hunting</Link></li>
            <li><Link href="/provided-course/amazon-web-servicesaws-course">AWS Cloud Security</Link></li>
            <li><Link href="/provided-course/microsoft-azure-course">Microsoft Azure Security</Link></li>
            <li><Link href="/provided-course/ejptv2-course">eJPTv2 Practical Training</Link></li>
            <li><Link href="/provided-course/vapt">VAPT Specialist</Link></li>
            <li><Link href="/provided-course/ccna-course">CCNA Networking</Link></li>
          </ul>
        </div>

        {/* Column 4: Enterprise & Solutions */}
        <div className={styles.footerCol}>
          <h4>Enterprise & Solutions</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/services">CyberiumX for Enterprise</Link></li>
            <li><Link href="/global-services">Government & Defence</Link></li>
            <li><Link href="/global-services">University & Campus Training</Link></li>
            <li><Link href="/contact-us">Become a Partner</Link></li>
            <li><Link href="/faq">Learner Community</Link></li>
            <li><Link href="/blog">Cybersecurity Blog</Link></li>
            <li><Link href="/blog">Research & Writeups</Link></li>
          </ul>
        </div>

        {/* Column 5: Support & Legal */}
        <div className={styles.footerCol}>
          <h4>Support & Legal</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/faq">Help Center & FAQ</Link></li>
            <li><Link href="/contact-us">Contact Support</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/faq">Cookies Preference</Link></li>
            <li><Link href="/verify">Accessibility</Link></li>
          </ul>
        </div>

      </div>

      {/* Sources & Studies Bar */}
      <div className={styles.sourcesBar}>
        <div className="container">
          <div className={styles.sourcesGrid}>
            <div className={styles.sourceItem}>
              <span className={styles.sourceTag}>REPORT</span>
              <a href="https://cyberiumx.com" target="_blank" rel="noopener noreferrer">IDC Whitepaper: Cybersecurity Training ROI Study & Enterprise Impact</a>
            </div>
            <div className={styles.sourceItem}>
              <span className={styles.sourceTag}>STUDY</span>
              <a href="https://cyberiumx.com" target="_blank" rel="noopener noreferrer">Total Economic Impact™ Study of CyberiumX Virtual Cyber Ranges</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomFlex}>
            <p>&copy; {new Date().getFullYear()} CyberiumX Inc. All Rights Reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/verify">Certificate Directory</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
