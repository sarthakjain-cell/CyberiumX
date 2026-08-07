"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './CoursesGrid.module.css';
import { courses } from '@/data/courses';

export default function CoursesGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Security', 'Cloud', 'Networking', 'Compliance'];
  
  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(c => c.category === activeFilter);

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
          <h2>Advanced Training Modules</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.1rem' }}>Master the tools and techniques used by elite cybersecurity professionals.</p>
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
              <div className={styles.iconWrapper}>
                <Image src={course.icon} alt={course.title} width={34} height={34} />
              </div>
              
              <div className={styles.tags}>
                <span className={styles.tag}>{course.category}</span>
                <span className={`${styles.tag} ${styles.tagLevel}`}>{course.level}</span>
              </div>
              
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <p className={styles.cardDesc}>{course.description}</p>
              
              <div className={styles.cardFooter}>
                <Link href={course.link} className={styles.cardLink}>
                  Explore Specs
                </Link>
                <Link href={course.link} className={styles.cardLinkReveal}>
                  Initialize Link →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
