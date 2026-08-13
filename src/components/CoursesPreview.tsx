"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './CoursesGrid.module.css'; // Reuse the grid CSS
import { courses } from '@/data/courses';

export default function CoursesPreview() {
  const topCourses = courses.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className={styles.coursesSection} style={{ padding: '6rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Elite Cyber Security Courses</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Master real-world skills with our expert-led, practical training programs.
          </p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {topCourses.map((course) => (
            <motion.div key={course.id} className={styles.card} variants={cardVariants}>
              
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Image src={course.icon} alt={course.title} width={34} height={34} />
                </div>
                <div className={styles.providerInfo}>
                  <span className={styles.providerName}>CyberiumX</span>
                  <span className={styles.certType}>Professional Certificate</span>
                </div>
              </div>

              {/* Dynamic Scarcity/Urgency Badge */}
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ 
                  background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '4px 10px', 
                  borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800,
                  textTransform: 'uppercase', border: '1px solid rgba(239, 68, 68, 0.3)'
                }}>
                  {course.id.length % 2 === 0 ? '🔥 High Demand' : `⏳ Only ${(course.id.length % 3) + 1} Seats Left`}
                </span>
              </div>
              
              <h3 className={styles.cardTitle}>{course.title}</h3>
              
              <div className={styles.ratingRow}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingText}>4.9 (2.4k reviews)</span>
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
            </motion.div>
          ))}
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/courses" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
            View All Courses
          </Link>
        </div>
        
      </div>
    </section>
  );
}
