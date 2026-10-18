"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { courses } from '@/data/courses';
import { curriculums } from '@/data/curriculums';
import styles from '../CoursePlayer.module.css';

export default function CoursePlayerPage() {
  const params = useParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<'overview' | 'labs' | 'resources'>('overview');
  const [activeModuleIdx, setActiveModuleIdx] = useState<number>(0);
  const [activeLessonIdx, setActiveLessonIdx] = useState<number>(0);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnrolled, setHasEnrolled] = useState(true);
  const [justEnrolled, setJustEnrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isEnrolledParam = new URLSearchParams(window.location.search).get('enrolled') === 'true';
      if (isEnrolledParam) {
        setJustEnrolled(true);
      }
    }
  }, []);

  const course = courses.find((c) => {
    const slug = c.link.split('/').filter(Boolean).pop();
    return slug === params.courseSlug;
  });

  const syllabus = course ? curriculums[course.id] || [] : [];

  // Calculate total lessons
  const totalLessons = syllabus.reduce((acc: number, mod: any) => acc + (mod.lessons?.length || 0), 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Calculate hours watched vs remaining
  const totalHoursInt = course ? parseInt(course.duration.replace(/\D/g, '') || '40', 10) : 40;
  const hoursCompleted = Math.round((progressPercent / 100) * totalHoursInt);
  const hoursRemaining = Math.max(0, totalHoursInt - hoursCompleted);

  // Load verified progress from server on mount
  useEffect(() => {
    if (!course) return;

    const session = typeof window !== 'undefined' ? 
      JSON.parse(localStorage.getItem('cx_student_session') || '{}') : {};
    const userId = session.id || '00000000-0000-4000-a000-000000000001';

    async function loadServerProgress() {
      try {
        const res = await fetch(`/api/course/progress?courseId=${course?.id}&userId=${encodeURIComponent(userId)}`);
        if (res.ok) {
          const data = await res.json();
          if (data.completedLessons && Object.keys(data.completedLessons).length > 0) {
            setCompletedLessons(data.completedLessons);
            return;
          }
        }
      } catch (e) {
        console.warn('Server progress load fallback:', e);
      }

      // Safe local cache fallback
      if (typeof window !== 'undefined') {
        const storedProgress = localStorage.getItem(`course_progress_${course?.id}`);
        if (storedProgress) {
          try {
            setCompletedLessons(JSON.parse(storedProgress));
          } catch (e) {
            console.warn('Failed parsing progress:', e);
          }
        }
      }
    }

    loadServerProgress();
  }, [course]);

  if (!course) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Course Not Found</h2>
          <p style={{ margin: '1rem 0', color: '#9ca3af' }}>The requested course player could not be located.</p>
          <Link href="/courses" className="btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'inline-block' }}>
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  const currentModule = syllabus[activeModuleIdx] || syllabus[0];
  const currentLesson = currentModule?.lessons?.[activeLessonIdx] || currentModule?.lessons?.[0];

  const toggleLessonComplete = async (lessonKey: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    const nextVal = !completedLessons[lessonKey];
    const updated = {
      ...completedLessons,
      [lessonKey]: nextVal
    };
    setCompletedLessons(updated);

    const session = typeof window !== 'undefined' ? 
      JSON.parse(localStorage.getItem('cx_student_session') || '{}') : {};
    const userId = session.id || '00000000-0000-4000-a000-000000000001';

    // Persist to server database (PostgreSQL source of truth)
    try {
      await fetch('/api/course/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: course.id,
          lectureId: lessonKey,
          isCompleted: nextVal,
          userId,
          durationMinutes: 25
        })
      });
    } catch (err) {
      console.warn('Server progress sync note:', err);
    }

    // Keep fast local cache
    if (typeof window !== 'undefined') {
      localStorage.setItem(`course_progress_${course.id}`, JSON.stringify(updated));
    }
  };

  return (
    <div className={styles.playerLayout}>
      {/* Left Column: Video & Tabs */}
      <div className={styles.mainContent}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.85rem', color: '#9ca3af' }}>
          <Link href="/courses" style={{ color: '#9ca3af', textDecoration: 'none' }}>Courses</Link>
          <span>&gt;</span>
          <Link href={`/provided-course/${params.courseSlug}`} style={{ color: 'var(--primary)', textDecoration: 'none' }}>{course.title}</Link>
          <span>&gt;</span>
          <span style={{ color: '#fff' }}>Interactive Lab Player</span>
        </div>

        {/* Newly Enrolled Welcome Banner */}
        {justEnrolled && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid #10b981',
            borderRadius: '12px',
            padding: '1rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem'
          }}>
            <span style={{ fontSize: '1.6rem' }}>🎉</span>
            <div>
              <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.95rem' }}>
                Payment Verified &amp; All Course Lectures Unlocked!
              </div>
              <div style={{ color: '#d1d5db', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                Welcome to your interactive cybersecurity training environment. Fulfill 100% of all lectures and practical examination labs to generate your official CyberiumX Certificate.
              </div>
            </div>
          </div>
        )}

        {/* Video Player */}
        <div className={styles.videoWrapper}>
          {!isPlaying ? (
            <div className={styles.videoOverlay}>
              <button 
                className={styles.playBtn} 
                onClick={() => setIsPlaying(true)}
                aria-label="Play Lesson Video"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>
                    {currentLesson?.title || 'Interactive Course Overview'}
                  </h3>
                  <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                    Module {activeModuleIdx + 1}: {currentModule?.title} • {currentLesson?.duration || '25m'}
                  </span>
                </div>
                <span style={{ background: 'rgba(252, 22, 22, 0.2)', color: '#fc1616', padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid rgba(252, 22, 22, 0.4)' }}>
                  UNLOCKED
                </span>
              </div>
            </div>
          ) : (
            <div style={{ width: '100%', height: '100%', background: '#0a0a0c', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#10b981' }}>
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>{currentLesson?.title}</h3>
              <p style={{ color: '#9ca3af', maxWidth: '600px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                CyberiumX HD Lecture & Hands-on Lab Environment streaming live. Complete practical tasks and click Mark Complete to record study hours.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  onClick={() => toggleLessonComplete(`m${activeModuleIdx}_l${activeLessonIdx}`)}
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                >
                  {completedLessons[`m${activeModuleIdx}_l${activeLessonIdx}`] ? '✓ Completed' : 'Mark Lesson Complete'}
                </button>
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                >
                  Close Player
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Tabs Header */}
        <div className={styles.tabsHeader}>
          <button 
            className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'labs' ? styles.active : ''}`}
            onClick={() => setActiveTab('labs')}
          >
            Hands-on Labs
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'resources' ? styles.active : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Study Notes & Resources
          </button>
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>
          {activeTab === 'overview' && (
            <div>
              <h2>{course.title} – Master Certification Track</h2>
              <p>{course.description}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase' }}>Difficulty</span>
                  <p style={{ margin: '0.25rem 0 0', color: '#fff', fontWeight: 700 }}>{course.level}</p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase' }}>Category</span>
                  <p style={{ margin: '0.25rem 0 0', color: '#fc1616', fontWeight: 700 }}>{course.category}</p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase' }}>Required for Certificate</span>
                  <p style={{ margin: '0.25rem 0 0', color: '#10b981', fontWeight: 700 }}>100% Labs & Lectures</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'labs' && (
            <div>
              <h2>Dedicated Hands-On Attack & Defense Lab Pods</h2>
              <p>Each module incorporates isolated virtual environments (Kali Linux, Windows Server target, network routers). You can deploy attacks, analyze PCAP captures, and document remediation.</p>
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '10px', padding: '1.25rem' }}>
                <span style={{ color: '#10b981', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>✓ Cloud Lab Pod: Ready</span>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#d1d5db' }}>Connect via Web Terminal or OpenVPN configuration package to access your dedicated penetration testing subnet.</p>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div>
              <h2>Cheat Sheets, Tools & Documentation</h2>
              <ul style={{ color: '#d1d5db', lineHeight: '2', paddingLeft: '1.25rem' }}>
                <li>Official CyberiumX Lab Manual & Cheatsheet (PDF)</li>
                <li>Custom Python Automation Exploitation Scripts (.py)</li>
                <li>Nmap, Wireshark, & Metasploit Quick Reference Guides</li>
                <li>Practice Exam Preparation & Knowledge Checks</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Curriculum & Progress Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '40px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', flexShrink: 0 }}>
              <img src={course.icon} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <h2 className={styles.courseTitle} style={{ margin: 0 }}>{course.title}</h2>
              <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>All Lectures Unlocked</span>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className={styles.progressSection}>
            <div className={styles.progressHeader}>
              <span style={{ color: '#fff' }}>Course Progress</span>
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{progressPercent}%</span>
            </div>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${progressPercent}%` }}></div>
            </div>
            <div className={styles.metrics}>
              <span>⏱️ {hoursCompleted}h completed</span>
              <span>⌛ {hoursRemaining}h remaining</span>
            </div>
          </div>

          {/* Certificate Requirement Box */}
          <div className={styles.certificateUnlock}>
            <div className={styles.certIcon}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 15l-2 5-9-5 9-5 2 5zm0 0l2 5 9-5-9-5-2 5z"/>
              </svg>
            </div>
            <div className={styles.certText} style={{ flex: 1 }}>
              <h4>Official Certificate Eligibility</h4>
              {progressPercent >= 100 ? (
                <div>
                  <p style={{ color: '#10b981', fontWeight: 700, marginBottom: '0.75rem' }}>
                    🎉 100% Completed! Your certificate is officially issued.
                  </p>
                  <Link 
                    href={`/certificate/${course.id}`} 
                    className="btn-primary" 
                    style={{ display: 'block', textAlign: 'center', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  >
                    View Official Certificate →
                  </Link>
                </div>
              ) : (
                <p>
                  You need <strong>{hoursRemaining} more hours</strong> ({totalLessons - completedCount} lessons) to reach 100% and claim your official CyberiumX Certificate.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Modules & Lessons List */}
        <div className={styles.curriculum}>
          <h3>Course Modules ({syllabus.length})</h3>
          
          {syllabus.map((module: any, modIdx: number) => (
            <div key={modIdx} className={styles.module}>
              <div 
                className={styles.moduleHeader}
                onClick={() => setActiveModuleIdx(modIdx)}
                style={{ background: activeModuleIdx === modIdx ? 'rgba(252, 22, 22, 0.08)' : undefined }}
              >
                <div>
                  <span className={styles.moduleTitle}>Module {modIdx + 1}: {module.title}</span>
                  <div className={styles.moduleMeta}>{module.lessons?.length || 0} Lessons • {module.duration || '4h'}</div>
                </div>
                <span style={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                  {activeModuleIdx === modIdx ? '▲' : '▼'}
                </span>
              </div>

              {activeModuleIdx === modIdx && (
                <div className={styles.lessonList}>
                  {module.lessons?.map((lesson: any, lesIdx: number) => {
                    const lessonKey = `m${modIdx}_l${lesIdx}`;
                    const isDone = !!completedLessons[lessonKey];
                    const isCurrent = activeModuleIdx === modIdx && activeLessonIdx === lesIdx;

                    return (
                      <div 
                        key={lesIdx}
                        className={styles.lesson}
                        onClick={() => {
                          setActiveLessonIdx(lesIdx);
                          setIsPlaying(true);
                        }}
                        style={{
                          color: isCurrent ? 'var(--primary)' : undefined,
                          fontWeight: isCurrent ? 700 : undefined
                        }}
                      >
                        <div 
                          className={`${styles.checkbox} ${isDone ? styles.completed : ''}`}
                          onClick={(e) => toggleLessonComplete(lessonKey, e)}
                          title={isDone ? 'Mark Incomplete' : 'Mark Complete'}
                        >
                          {isDone ? '✓' : ''}
                        </div>
                        <span style={{ flex: 1 }}>{lesson.title}</span>
                        <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{lesson.duration || '20m'}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
