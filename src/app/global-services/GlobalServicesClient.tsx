"use client";

import Link from 'next/link';
import styles from './GlobalServices.module.css';

interface Item {
  title: string;
  description: string;
}


export default function GlobalServicesClient({
  courses,
  services
}: {
  courses: Item[];
  services: Item[];
}) {
  return (
    <div className={styles.pageContainer}>
      {/* Premium Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div>
            <span className={styles.heroBadge}>Worldwide Reach</span>
            <h1 className={styles.heroTitle}>Global Cybersecurity<br/>Training & Services</h1>
            <p className={styles.heroDesc}>
              Providing elite training and robust security solutions to businesses, governments, and individuals across Australia, Canada, the UK, Germany, and worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Callout Card */}
      <section className={styles.calloutSection}>
        <div className={styles.calloutCard}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>The Growing Global Need</h2>
          <p>
            In today’s rapidly evolving digital world, cybersecurity has become a global priority. Businesses, governments, and individuals rely heavily on technology, making them increasingly vulnerable to cyber threats. From ransomware attacks to data breaches, organizations across the world are facing serious security challenges.
          </p>
          <p>
            To combat these growing threats, the demand for skilled cybersecurity professionals and advanced security services is higher than ever before. Cybersecurity is no longer just an IT requirement—it is a critical business strategy.
          </p>
        </div>
      </section>

      {/* Global Courses Section */}
      <section className={styles.contentSection}>
        <div className={styles.sectionHeaderContainer}>
          <div className={styles.sectionBadge}>
            GLOBAL ACADEMY & COURSES
          </div>
          <h2 className={styles.sectionTitle}>
            Global Cyber Security <span className={styles.highlight}>Training</span>
          </h2>
          <p className={styles.sectionDesc}>
            Industry-leading certifications and practical hands-on labs designed for global learners.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {courses.map((item, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.cardHeaderRow}>

                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.cardFooter}>
                <Link href="/courses" className={styles.cardLink}>
                  <span>Explore Course</span>
                  <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Services Section */}
      <section className={styles.contentSectionAlt}>
        <div className={styles.sectionHeaderContainer}>
          <div className={styles.sectionBadgeGreen}>
            ENTERPRISE PROTECTION
          </div>
          <h2 className={styles.sectionTitle}>
            Global Protection & <span className={styles.highlightGreen}>Cyber Security Services</span>
          </h2>
          <p className={styles.sectionDesc}>
            Proactive security audits, vulnerability assessments, and penetration testing for global enterprises.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {services.map((item, idx) => (
            <div key={idx} className={styles.serviceCardGreen}>
              <div className={styles.cardHeaderRow}>

                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.cardFooter}>
                <Link href="/contact-us" className={styles.cardLinkGreen}>
                  <span>Inquire Security Service</span>
                  <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2>Ready to Secure Your Global Operations?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Contact our cybersecurity experts today for customized enterprise protection and training programs tailored to your country and compliance requirements.
          </p>
          <Link href="/contact-us" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}

