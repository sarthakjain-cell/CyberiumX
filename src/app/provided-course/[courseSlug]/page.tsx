"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { courses } from '@/data/courses';
import styles from './CoursePlayer.module.css';

export default function CoursePlayerPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);

  // Interactive Curriculum State
  const [modules, setModules] = useState([
    {
      title: "Module 1: Intelligence Gathering",
      duration: "45m",
      lessons: [
        { title: "Course Overview & Objectives", duration: "10m", completed: true },
        { title: "Setting up your Lab Environment", duration: "35m", completed: true },
      ]
    },
    {
      title: "Module 2: Core Concepts",
      duration: "2h 15m",
      lessons: [
        { title: "Understanding the Architecture", duration: "45m", completed: true },
        { title: "Threat Modeling Basics", duration: "50m", completed: false },
        { title: "Initial Reconnaissance", duration: "40m", completed: false },
      ]
    },
    {
      title: "Module 3: Advanced Exploitation",
      duration: "3h 30m",
      lessons: [
        { title: "Exploitation Vectors", duration: "1h 10m", completed: false },
        { title: "Bypassing Security Controls", duration: "1h 20m", completed: false },
        { title: "Post-Exploitation", duration: "1h 0m", completed: false },
      ]
    }
  ]);

  // Find the course based on the slug. We extract the slug from the end of the link.
  const course = courses.find(c => {
    const slug = c.link.split('/').filter(Boolean).pop();
    return slug === params.courseSlug;
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null; // Avoid hydration mismatch

  if (!course) {
    return (
      <div className={styles.playerLayout} style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>404 - Course Not Found</h2>
          <p style={{ margin: '1rem 0', color: '#9ca3af' }}>The secure training module you initialized does not exist.</p>
          <button className="btn-primary" onClick={() => router.push('/courses')} style={{ padding: '0.75rem 1.5rem' }}>Return to Directory</button>
        </div>
      </div>
    );
  }

  // Curriculum State moved to top to satisfy React Rules of Hooks

  const toggleLesson = (mIdx: number, lIdx: number) => {
    setModules(prev => prev.map((mod, i) => {
      if (i !== mIdx) return mod;
      return {
        ...mod,
        lessons: mod.lessons.map((lesson, j) => {
          if (j !== lIdx) return lesson;
          return { ...lesson, completed: !lesson.completed };
        })
      };
    }));
  };

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = modules.reduce((acc, m) => acc + m.lessons.filter(l => l.completed).length, 0);
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);
  const isCertified = completedLessons === totalLessons;

  return (
    <div className={styles.playerLayout}>
      
      {/* LEFT COLUMN: Player & Info */}
      <main className={styles.mainContent}>
        
        {/* Video Player Setup */}
        <div className={styles.videoWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Video Thumbnail"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.videoOverlay}>
            <div className={styles.playBtn}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
            
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Now Playing</span>
              <h2 style={{ fontSize: '1.5rem', margin: '0.25rem 0 0 0', color: '#fff' }}>1.2 Setting up your Lab Environment</h2>
            </div>
          </div>
        </div>

        {/* Informational Tabs */}
        <div className={styles.tabsHeader}>
          <button 
            className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'qa' ? styles.active : ''}`}
            onClick={() => setActiveTab('qa')}
          >
            Q&A
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'notes' ? styles.active : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            Notes
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'resources' ? styles.active : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </div>

        {/* Tab Content Display */}
        <div className={styles.tabContent}>
          {activeTab === 'overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2>About this course</h2>
              <p>{course.description}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#fff' }}>By the numbers</h3>
                  <ul style={{ color: '#9ca3af', lineHeight: '1.8' }}>
                    <li>Skill Level: <span style={{ color: '#fff' }}>{course.level}</span></li>
                    <li>Category: <span style={{ color: '#fff' }}>{course.category}</span></li>
                    <li>Duration: <span style={{ color: '#fff' }}>{course.duration}</span></li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#fff' }}>Features</h3>
                  <ul style={{ color: '#9ca3af', lineHeight: '1.8' }}>
                    <li>Available on iOS and Android</li>
                    <li>Certificate of completion</li>
                    <li>Real-world lab environments</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'qa' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2>Instructor Q&A</h2>
              <p>Search previous questions or ask a new one to the instructors.</p>
              <input 
                type="text" 
                placeholder="Search all course questions..."
                style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border)', color: '#fff', borderRadius: '6px', marginTop: '1rem' }}
              />
            </motion.div>
          )}
        </div>
      </main>

      {/* RIGHT COLUMN: Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h1 className={styles.courseTitle}>{course.title}</h1>
          
          <div className={styles.progressSection}>
            <div className={styles.progressHeader}>
              <span>Course Progress</span>
              <span style={{ color: 'var(--primary)' }}>{progressPercent}%</span>
            </div>
            <div className={styles.progressTrack}>
              <motion.div 
                className={styles.progressFill} 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className={styles.metrics}>
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {course.duration} total</span>
              <span>{completedLessons} of {totalLessons} lessons completed</span>
            </div>
          </div>

          <div className={styles.certificateUnlock} style={{ borderColor: isCertified ? 'var(--primary)' : 'rgba(0, 255, 65, 0.15)', background: isCertified ? 'rgba(0, 255, 65, 0.1)' : 'rgba(0, 255, 65, 0.03)' }}>
            <div className={styles.certIcon}>
              {isCertified ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-2 5-9-5 9-5 2 5z"></path><path d="M12 15l2 5 9-5-9-5-2 5z"></path></svg>
              )}
            </div>
            <div className={styles.certText}>
              <h4>{isCertified ? 'Certificate Unlocked!' : 'Certificate Locked'}</h4>
              <p>{isCertified ? 'Congratulations! You can now download your official certificate.' : `Complete ${totalLessons - completedLessons} more lessons to earn your official ${course.category} certification.`}</p>
            </div>
          </div>
        </div>

        <div className={styles.curriculum}>
          <h3>Course Content</h3>
          
          {modules.map((mod, idx) => (
            <div key={idx} className={styles.module}>
              <div className={styles.moduleHeader}>
                <span className={styles.moduleTitle}>{mod.title}</span>
                <span className={styles.moduleMeta}>{mod.duration}</span>
              </div>
              <div className={styles.lessonList}>
                {mod.lessons.map((lesson, lIdx) => (
                  <div key={lIdx} className={styles.lesson} onClick={() => toggleLesson(idx, lIdx)}>
                    <div className={`${styles.checkbox} ${lesson.completed ? styles.completed : ''}`}>
                      {lesson.completed && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>
                    <span style={{ flex: 1, textDecoration: lesson.completed ? 'line-through' : 'none', opacity: lesson.completed ? 0.6 : 1 }}>
                      {lesson.title}
                    </span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>{lesson.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
