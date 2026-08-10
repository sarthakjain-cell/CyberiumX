"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Dashboard.module.css';
import { courses } from '@/data/courses';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('courses');
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [completedCourses, setCompletedCourses] = useState<any[]>([]);

  useEffect(() => {
    const loadedEnrolled: any[] = [];
    const loadedCompleted: any[] = [];

    // Loop through all 12 real courses
    courses.forEach(course => {
      const progressStr = localStorage.getItem(`course_progress_${course.id}`);
      if (progressStr) {
        const progressObj = JSON.parse(progressStr);
        // Calculate percentage
        const total = Object.keys(progressObj).length;
        const checked = Object.values(progressObj).filter(v => v === true).length;
        const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
        
        const courseData = { ...course, percentage };

        if (percentage === 100) {
          loadedCompleted.push(courseData);
        } else {
          loadedEnrolled.push(courseData);
        }
      }
    });

    // If no data, give them a default course to start with for the demo
    if (loadedEnrolled.length === 0 && loadedCompleted.length === 0) {
      loadedEnrolled.push({ ...courses[0], percentage: 0 }); // Pre-enroll in Microsoft Azure Course
      loadedEnrolled.push({ ...courses[5], percentage: 45 }); // Pre-enroll in CEHv13
    }

    setEnrolledCourses(loadedEnrolled);
    setCompletedCourses(loadedCompleted);
  }, []);

  return (
    <div className={styles.dashboardLayout}>
      {/* LMS Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <span style={{ color: 'var(--primary)' }}>Cyberium</span>X Portal
        </div>
        <nav className={styles.navMenu}>
          <button 
            className={`${styles.navItem} ${activeTab === 'courses' ? styles.activeNav : ''}`}
            onClick={() => setActiveTab('courses')}
            style={{ background: 'transparent', border: 'none', width: '100%', textAlign: 'left' }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            My Courses
          </button>
          
          <button 
            className={`${styles.navItem} ${activeTab === 'certificates' ? styles.activeNav : ''}`}
            onClick={() => setActiveTab('certificates')}
            style={{ background: 'transparent', border: 'none', width: '100%', textAlign: 'left' }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 15l-2 5-9-5 9-5 2 5zm0 0l2 5 9-5-9-5-2 5z"></path></svg>
            Certificates
          </button>
          
          <Link href="/courses" className={styles.navItem}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            Browse Catalog
          </Link>

          <Link href="/" className={styles.navItem} style={{ marginTop: 'auto', color: '#ef4444' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"></path></svg>
            Log Out
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>{activeTab === 'courses' ? 'Continue Learning' : 'My Certificates'}</h1>
          <div className={styles.userProfile}>
            <span style={{ color: '#9ca3af' }}>Welcome back, Student!</span>
            <div className={styles.avatar}>S</div>
          </div>
        </header>

        {activeTab === 'courses' && (
          <div style={{ padding: '2rem' }}>
            {enrolledCourses.length === 0 ? (
              <p style={{ color: '#9ca3af' }}>You are not enrolled in any active courses right now.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                {enrolledCourses.map((course, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <Image src={course.icon} alt={course.title} width={40} height={40} />
                      <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>{course.title}</h3>
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#9ca3af', marginBottom: '0.5rem' }}>
                        <span>Progress</span>
                        <span style={{ color: 'var(--primary)' }}>{course.percentage}%</span>
                      </div>
                      <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${course.percentage}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.5s ease' }}></div>
                      </div>
                    </div>

                    <Link href={course.link} className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', textAlign: 'center' }}>
                      {course.percentage === 0 ? 'Start Course' : 'Resume Course'}
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'certificates' && (
          <div style={{ padding: '2rem' }}>
            {completedCourses.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 0', color: '#9ca3af' }}>
                <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" style={{ margin: '0 auto 1rem', opacity: 0.5 }}>
                  <path d="M12 15l-2 5-9-5 9-5 2 5zm0 0l2 5 9-5-9-5-2 5z"></path>
                </svg>
                <p>You have not earned any certificates yet. Complete a course to 100% to unlock!</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                {completedCourses.map((course, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    style={{ background: 'linear-gradient(135deg, rgba(252,22,22,0.1) 0%, rgba(0,0,0,0.5) 100%)', border: '1px solid var(--primary)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}
                  >
                    <svg width="48" height="48" fill="var(--primary)" viewBox="0 0 24 24" style={{ margin: '0 auto 1rem' }}>
                      <path d="M12 15l-2 5-9-5 9-5 2 5zm0 0l2 5 9-5-9-5-2 5z"></path>
                    </svg>
                    <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>{course.title}</h3>
                    <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Completed • Certified Expert</p>
                    <Link href={`/certificate/${course.id}`} className="btn-primary" style={{ width: '100%', display: 'block' }}>
                      View Certificate
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}
