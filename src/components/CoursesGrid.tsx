"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './CoursesGrid.module.css';
import { courses, categories } from '@/data/courses';

export default function CoursesGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [allCourses, setAllCourses] = useState(courses);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        if (data.courses && data.courses.length > 0) {
          setAllCourses([...data.courses, ...courses]);
        }
      })
      .catch(err => console.error(err));
  }, []);
  
  const filteredCourses = allCourses.filter(c => {
    const matchesCategory = activeFilter === 'All' || c.category === activeFilter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className={styles.coursesSection}>
      <div className="container">
        
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.pulseBadge}>PREMIUM TRAINING</div>
          <h2 className={styles.mainTitle}>Best Online Cybersecurity Training</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>Master the tools and techniques used by elite cybersecurity professionals. Launch your career with industry-recognized certifications.</p>
        </motion.div>

        <motion.div 
          className={styles.searchContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          style={{ maxWidth: '600px', margin: '0 auto 2rem', position: 'relative' }}
        >
          <input 
            type="text" 
            placeholder="Search courses..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              color: '#fff',
              fontSize: '1.1rem',
              outline: 'none'
            }}
          />
        </motion.div>

        <motion.div 
          className={styles.filterBar}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          {filteredCourses.map((course) => (
            <motion.div key={course.id} className={styles.card} variants={cardVariants}>
              
              {/* Course Icon centered in the middle with white background */}
              <div className={styles.centerIconContainer}>
                <div className={styles.centerIconBox}>
                  <img 
                    src={course.icon} 
                    alt={course.title} 
                    width={40} 
                    height={40}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/logo.png';
                    }}
                    style={{ objectFit: 'contain' }}
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
                {course.description.replace(/^Course Overview:?\s*/i, '')}
              </p>
              
              {/* Stars with Rating */}
              <div className={styles.ratingRow}>
                <div className={styles.stars} aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((starIdx) => (
                    <svg key={starIdx} width="16" height="16" viewBox="0 0 24 24" fill="#facc15">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className={styles.ratingText}>{['5.0', '4.9', '5.0'][course.id % 3]}</span>
              </div>
              
              <div className={styles.metaRow}>
                <span className={styles.metaItem}>{course.level}</span>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>{course.duration}</span>
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>{course.category}</span>
              </div>
              
              <div className={styles.cardFooter}>
                <Link href={course.link} className={styles.cardLink} aria-label={`Explore ${course.title}`}>
                  <span>Explore Course</span>
                  <span className={styles.cardArrow}>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
      
      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className={styles.ctaTitle}>Need Help Choosing a Course?</h2>
          <p className={styles.ctaDesc}>
            Our cybersecurity experts can help you find the perfect training path for your career goals.
          </p>
          <Link href="/contact-us" className="btn-primary" style={{ padding: '0.75rem 2.5rem', fontSize: '1.1rem' }}>
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
