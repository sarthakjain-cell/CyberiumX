"use client";

import Link from 'next/link';
import styles from './CoursesGrid.module.css';

const featuredCourses = [
  {
    id: 'cehv13',
    title: 'CEHv13',
    subtitle: 'Certified Ethical Hacker v13 AI',
    overview: 'The Certified Ethical Hacker (CEHv13 - AI) course is designed to equip candidates with cutting-edge skills in vulnerability assessment, threat intelligence, and AI-driven ethical hacking.',
    rating: '5.0',
    level: 'Intermediate',
    duration: '80 Hours',
    link: '/provided-course/certified-ethical-hacker-cehv13-ai/',
    renderIcon: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="#0f172a"/>
        <path d="M24 8L36 13V23C36 30.5 30.9 37.4 24 39.5C17.1 37.4 12 30.5 12 23V13L24 8Z" fill="#ff1616"/>
        <path d="M24 16C20.7 16 18 18.7 18 22C18 24.2 19.2 26.1 21 27.2V31H27V27.2C28.8 26.1 30 24.2 30 22C30 18.7 27.3 16 24 16Z" fill="#ffffff"/>
        <circle cx="22" cy="21" r="1.5" fill="#0f172a"/>
        <circle cx="26" cy="21" r="1.5" fill="#0f172a"/>
        <rect x="22.5" y="28" width="3" height="3" fill="#ff1616"/>
      </svg>
    )
  },
  {
    id: 'ccna',
    title: 'CCNA',
    subtitle: 'Cisco Certified Network Associate',
    overview: 'The CCNA training program frames foundational and advanced enterprise networking concepts, IP connectivity, network security, switching, and routing protocols.',
    rating: '4.9',
    level: 'Beginner',
    duration: '50 Hours',
    link: '/provided-course/ccna-course/',
    renderIcon: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="#032541"/>
        <circle cx="24" cy="24" r="6" fill="#049fd9"/>
        <circle cx="13" cy="16" r="4" fill="#00b4d8"/>
        <circle cx="35" cy="16" r="4" fill="#00b4d8"/>
        <circle cx="13" cy="32" r="4" fill="#00b4d8"/>
        <circle cx="35" cy="32" r="4" fill="#00b4d8"/>
        <path d="M16 18L20 21M28 21L32 18M16 30L20 27M28 27L32 30" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="2.5" fill="#ffffff"/>
      </svg>
    )
  },
  {
    id: 'oscp',
    title: 'OSCP+',
    subtitle: 'OffSec Certified Professional',
    overview: 'The OffSec Certified Professional (OSCP+) course is an elite, hands-on penetration testing certification preparing professionals to conduct real-world security assessments and attack simulations.',
    rating: '5.0',
    level: 'Advanced',
    duration: '90 Hours',
    link: '/provided-course/oscp-course/',
    renderIcon: () => (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="#18181b"/>
        <circle cx="24" cy="24" r="14" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="3 3"/>
        <circle cx="24" cy="24" r="9" stroke="#ffffff" strokeWidth="2"/>
        <circle cx="24" cy="24" r="3.5" fill="#e11d48"/>
        <line x1="24" y1="6" x2="24" y2="12" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="24" y1="36" x2="24" y2="42" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="6" y1="24" x2="12" y2="24" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="36" y1="24" x2="42" y2="24" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  }
];

export default function CoursesPreview() {
  return (
    <section className={styles.coursesSection} style={{ padding: '6rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Best Online Cybersecurity Training
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto' }}>
            Master real-world offensive defense with our globally recognized, expert-led training tracks.
          </p>
        </div>

        <div className={styles.grid}>
          {featuredCourses.map((course) => (
            <div key={course.id} className={styles.card}>
              
              {/* Course Icon centered in the middle with white background */}
              <div className={styles.centerIconContainer}>
                <div className={styles.centerIconBox} title={course.subtitle}>
                  {course.renderIcon()}
                </div>
              </div>

              {/* Course Name */}
              <h3 className={styles.cardTitle}>{course.title}</h3>

              {/* Highly Demanded Course Badge */}
              <div className={styles.badgeWrapper}>
                <span className={styles.demandedBadge}>
                  Highly Demanded Course
                </span>
              </div>
              
              {/* Course Overview */}
              <p className={styles.cardDesc}>
                <strong className={styles.descPrefix}>Course Overview: </strong>
                {course.overview}
              </p>
              
              {/* Stars with Rating */}
              <div className={styles.ratingRow}>
                <div className={styles.stars} aria-label={`${course.rating} out of 5 stars`}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#facc15">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className={styles.ratingText}>{course.rating}</span>
              </div>
              
              {/* Meta stats */}
              <div className={styles.metaRow}>
                <span className={styles.metaItem}>{course.level}</span>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>{course.duration}</span>
              </div>
              
              {/* Action Footer */}
              <div className={styles.cardFooter}>
                <Link href={course.link} className={styles.cardLink} aria-label={`View details for ${course.title}`}>
                  View Details
                </Link>
                <Link href={course.link} className={styles.cardLinkReveal} aria-hidden="true" tabIndex={-1}>
                  Explore Course →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/courses" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
            View All Courses
          </Link>
        </div>
        
      </div>
    </section>
  );
}
