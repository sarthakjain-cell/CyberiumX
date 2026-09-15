"use client";

import Link from 'next/link';
import styles from './CoursesGrid.module.css'; // Reuse the grid CSS
import { courses } from '@/data/courses';

export default function CoursesPreview() {
  const topCourses = courses.slice(0, 3);

  return (
    <section className={styles.coursesSection} style={{ padding: '6rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Elite Cyber Security Courses</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Master real-world skills with our expert-led, practical training programs.
          </p>
        </div>

        <div className={styles.grid}>
          {topCourses.map((course) => (
            <div key={course.id} className={styles.card}>
              
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <img 
                    src={course.icon} 
                    alt={course.title} 
                    width={34} 
                    height={34}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/logo.png';
                    }}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className={styles.providerInfo}>
                  <span className={styles.providerName}>CyberiumX</span>
                  <span className={styles.certType}>Professional Certificate</span>
                </div>
              </div>

              {/* Highly Demanded Course Badge */}
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ 
                  background: 'rgba(255, 22, 22, 0.12)', color: '#ff1616', padding: '4px 12px', 
                  borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800,
                  textTransform: 'uppercase', border: '1px solid rgba(255, 22, 22, 0.3)'
                }}>
                  🔥 Highly Demanded Course
                </span>
              </div>
              
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <p className={styles.cardDesc}>{course.description}</p>
              
              <div className={styles.ratingRow}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingText}>{['5.0', '4.9', '4.8'][course.id % 3]}</span>
              </div>
              
              <div className={styles.metaRow}>
                <span className={styles.metaItem}>{course.level}</span>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>{course.duration}</span>
              </div>
              
              <div className={styles.cardFooter}>
                <Link href={course.link} className={styles.cardLink} aria-label={`View details for ${course.title}`}>View Details</Link>
                <Link href={course.link} className={styles.cardLinkReveal} aria-hidden="true" tabIndex={-1}>Explore Course →</Link>
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
