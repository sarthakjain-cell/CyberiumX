"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './GlobalServices.module.css';

const globalCourses = [
  { title: "Ethical Hacking Training", description: "Master the fundamentals of ethical hacking. Learn how to identify, exploit, and secure vulnerabilities in enterprise systems using real-world scenarios." },
  { title: "CEH (Certified Ethical Hacker) Training", description: "Get prepared for the CEH certification. This comprehensive training covers advanced footprinting, network scanning, and system hacking techniques." },
  { title: "OSCP Training", description: "Rigorous, hands-on training preparing you for the Offensive Security Certified Professional exam. Focuses exclusively on practical penetration testing." },
  { title: "Web Application Penetration Testing", description: "Deep dive into securing web applications. Learn to discover and exploit OWASP Top 10 vulnerabilities like SQLi, XSS, and CSRF." },
  { title: "Network Penetration Testing", description: "Learn to secure enterprise networks. Covers advanced routing protocols, wireless security, and exploiting network misconfigurations." },
  { title: "Bug Bounty Training", description: "Learn how to legally hack and get paid. Discover methodologies for finding high-severity bugs in major platforms and bug bounty programs." },
  { title: "Kali Linux Training", description: "Master the industry-standard penetration testing operating system. Learn to utilize hundreds of built-in security and forensics tools." }
];

const globalServices = [
  { title: "Website security testing", description: "Comprehensive security audits of your web applications to uncover vulnerabilities before malicious actors can exploit them." },
  { title: "Network security assessment", description: "Deep analysis of your internal and external network infrastructure to identify misconfigurations and weak points." },
  { title: "Vulnerability assessment", description: "Automated and manual scanning of your digital assets to catalog and prioritize security flaws for remediation." },
  { title: "Penetration testing", description: "Simulated cyber attacks on your organization's systems to evaluate the effectiveness of your security controls." },
  { title: "Social media security", description: "Protect your brand and executives from social engineering, account takeover, and OSINT-based targeted attacks." }
];

export default function GlobalServicesPage() {
  const [activeItem, setActiveItem] = useState<{title: string, description: string} | null>(null);

  return (
    <div className={styles.pageContainer}>
      
      {/* Premium Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroBadge}>Worldwide Reach</span>
            <h1 className={styles.heroTitle}>Global Cybersecurity<br/>Training & Services</h1>
            <p className={styles.heroDesc}>
              Providing elite training and robust security solutions to businesses, governments, and individuals across Australia, Canada, the UK, Germany, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floating Callout Card */}
      <section className={styles.calloutSection}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.calloutCard}
        >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>The Growing Global Need</h2>
          <p>
            In today’s rapidly evolving digital world, cybersecurity has become a global priority. Businesses, governments, and individuals rely heavily on technology, making them increasingly vulnerable to cyber threats. From ransomware attacks to data breaches, organizations across the world are facing serious security challenges.
          </p>
          <p>
            Cybercrime is increasing at an alarming rate across the globe. Countries such as the United States, the United Kingdom, Canada, Australia, and Germany have witnessed a sharp rise in cyber attacks in recent years. Companies are actively searching for experts who can identify vulnerabilities, perform penetration testing, and strengthen their security infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Grid Sections */}
      <section className={styles.contentSection} style={{ position: 'relative' }}>
        
        {/* Ambient Orbs */}
        <div className={styles.ambientOrb1}></div>
        <div className={styles.ambientOrb2}></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Global Training Programs</h2>
          <div className={styles.bentoGrid}>
            {globalCourses.map((course, i) => (
              <div 
                key={i} 
                className={`${styles.bentoCard} ${i % 4 === 0 || i % 4 === 3 ? styles.span2 : ''}`} 
                onClick={() => setActiveItem(course)} 
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.iconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <div className={styles.cardText}>{course.title}</div>
                <div className={styles.cardDesc}>{course.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Professional Security Services</h2>
          <div className={styles.bentoGrid}>
            {globalServices.map((service, i) => (
              <div 
                key={i} 
                className={`${styles.bentoCard} ${i % 3 === 0 ? styles.span2 : ''}`} 
                onClick={() => setActiveItem(service)} 
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.iconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div className={styles.cardText}>{service.title}</div>
                <div className={styles.cardDesc}>{service.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Ready to Secure Your Infrastructure?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Whether you are looking to upskill your team or require a comprehensive security assessment, CyberiumX is your global partner.
          </p>
          <Link href="/contact-us" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Get Started Today</Link>
        </motion.div>
      </section>

      {/* Interactive Modal Overlay */}
      <AnimatePresence>
        {activeItem && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setActiveItem(null)}>✕</button>
              <h3 className={styles.modalTitle}>{activeItem.title}</h3>
              <p className={styles.modalDesc}>{activeItem.description}</p>
              <Link href="/contact-us" className="btn-primary" style={{ display: 'inline-block' }}>Inquire Now</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
