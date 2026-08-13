"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './CoursesGrid.module.css';
import { courses, categories } from '@/data/courses';

export default function CoursesGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCourses = courses.filter(c => {
    const matchesCategory = activeFilter === 'All' || c.category === activeFilter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.pulseBadge}>PREMIUM TRAINING</div>
          <h2 className={styles.mainTitle}>Our Courses</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>Master the tools and techniques used by elite cybersecurity professionals. Launch your career with industry-recognized certifications.</p>
        </motion.div>

        <motion.div 
          className={styles.searchContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredCourses.map((course) => (
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
                  background: 'rgba(239, 68, 68, 0.1)', 
                  color: '#ef4444', 
                  padding: '4px 10px', 
                  borderRadius: '12px', 
                  fontSize: '0.75rem', 
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  boxShadow: '0 0 10px rgba(239, 68, 68, 0.2)'
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
                <span className={styles.metaDot}>•</span>
                <span className={styles.metaItem}>{course.category}</span>
              </div>
              
              <div className={styles.cardFooter}>
                <Link href={course.link} className={styles.cardLink} aria-label={`View details for ${course.title}`}>
                  View Details
                </Link>
                <Link href={course.link} className={styles.cardLinkReveal} aria-hidden="true" tabIndex={-1}>
                  Explore Course →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
      
      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
