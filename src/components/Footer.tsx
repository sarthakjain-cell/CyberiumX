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
            <a href="https://www.linkedin.com/company/cyberiumx" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.linkedin}`} title="LinkedIn" aria-label="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.instagram.com/cyberiumx" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instagram}`} title="Instagram" aria-label="Instagram">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://twitter.com/cyberiumx" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.twitter}`} title="Twitter / X" aria-label="Twitter">
              <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://t.me/cyberiumx" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.telegram}`} title="Telegram" aria-label="Telegram">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.65-.53.81-1.07.5l-3.02-2.23-1.46 1.41c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.92c-.64-.2-.65-.64.13-.95l11.57-4.46c.54-.2 1.01.13.86.94z"/></svg>
            </a>
            <a href="https://wa.me/+919318492128" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.whatsapp}`} title="WhatsApp" aria-label="WhatsApp">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.002 3.66 3.745-.983zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
            <a href="https://youtube.com/@cyberiumx" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.youtube}`} title="YouTube" aria-label="YouTube">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
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
