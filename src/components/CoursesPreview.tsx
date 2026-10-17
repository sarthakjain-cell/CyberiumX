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
    logo: '/logos/CEH.png'
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
    logo: '/logos/CCNA.jpg'
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
    logo: '/logos/OSCP.png'
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
                  <img 
                    src={course.logo} 
                    alt={`${course.title} Logo`} 
                    width={60} 
                    height={60} 
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }} 
                  />
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
                <Link href={course.link} className={styles.cardLink} aria-label={`Explore ${course.title}`}>
                  <span>Explore Course</span>
                  <span className={styles.cardArrow}>→</span>
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
