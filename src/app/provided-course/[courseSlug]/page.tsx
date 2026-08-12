"use client";

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { courses } from '@/data/courses';
import { curriculums } from '@/data/curriculums';
import styles from './CourseLanding.module.css';

export default function CourseLandingPage() {
  const params = useParams();
  const router = useRouter();
  const [isEnrolling, setIsEnrolling] = useState(false);

  const course = courses.find(c => {
    const slug = c.link.split('/').filter(Boolean).pop();
    return slug === params.courseSlug;
  });

  if (!course) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Course Not Found</h2>
          <p style={{ margin: '1rem 0', color: '#9ca3af' }}>The secure training module you are looking for does not exist.</p>
          <Link href="/courses" className="btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'inline-block' }}>Return to Directory</Link>
        </div>
      </div>
    );
  }

  const syllabus = curriculums[course.id] || [];
  
  // Mock Skills based on course title
  const skills = [
    "Threat Modeling & Architecture",
    "Exploitation Techniques",
    "Security Governance & Compliance",
    "Disaster Recovery & Incident Response",
    "Vulnerability Assessment",
    "Secure Configuration Management"
  ];

  const handleEnroll = () => {
    setIsEnrolling(true);
    // Simulate payment gateway delay
    setTimeout(() => {
      // After secure processing, redirect to actual learning player
      router.push(`/provided-course/${params.courseSlug}/learn`);
    }, 2500);
  };

  return (
    <div className={styles.landingContainer}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          
          <div className={styles.heroLeft}>
            <div className={styles.breadcrumbs}>
              <Link href="/courses">Browse</Link> &gt; 
              <span>{course.category}</span> &gt; 
              <span style={{ color: '#fff' }}>{course.title}</span>
            </div>
            
            <span className={styles.providerBadge}>CyberiumX Professional Certificate</span>
            
            <h1 className={styles.title}>{course.title}</h1>
            <p className={styles.description}>{course.description}</p>
            
            <div className={styles.instructorInfo}>
              <div className={styles.instructorAvatar}>CX</div>
              <div>
                <div style={{ fontWeight: 700 }}>CyberiumX Education & Training</div>
                <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Industry Experts & Elite Practitioners</div>
              </div>
            </div>
            
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statIcon}>★★★★★</span>
                <span style={{ fontWeight: 700, color: '#fff' }}>4.9</span>
                <span>(2.4k reviews)</span>
              </div>
              <div className={styles.statItem}>
                <span style={{ fontWeight: 700, color: '#fff' }}>{course.level}</span>
                <span>Level</span>
              </div>
              <div className={styles.statItem}>
                <span style={{ fontWeight: 700, color: '#fff' }}>{course.duration}</span>
                <span>to complete</span>
              </div>
            </div>
          </div>
          
          <div className={styles.heroRight}>
            <div className={styles.enrollCard}>
              <div style={{ color: '#fc1616', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Limited Time Access</div>
              <div className={styles.enrollPrice}>$499</div>
              <div className={styles.enrollSub}>One-time payment for lifetime access</div>
              <button className={styles.enrollBtn} onClick={handleEnroll}>
                Enroll Now
              </button>
              <div className={styles.guarantee}>
                <span>🛡️</span> 30-Day Money-Back Guarantee
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#9ca3af' }}>Join 25,000+ enrolled students</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Main Content Area */}
      <section className={styles.contentArea}>
        
        <div className={styles.mainContent}>
          <h2 className={styles.sectionTitle}>What you&apos;ll learn</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, idx) => (
              <div key={idx} className={styles.skillBadge}>
                <span className={styles.skillCheck}>✓</span>
                {skill}
              </div>
            ))}
          </div>

          <div className={styles.certSection}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Earn a Career Certificate</h2>
            <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Add this credential to your LinkedIn profile, resume, or CV upon completion.</p>
            <div className={styles.certPreviewBox}>
              <div style={{ color: '#fc1616', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem' }}>CyberiumX Education & Training</div>
              <div className={styles.certTitle}>Certificate of Completion</div>
              <div style={{ color: '#d1d5db', marginBottom: '2rem' }}>This certifies that you have successfully completed<br/><span style={{ fontWeight: 700, color: '#fff', fontSize: '1.2rem', display: 'block', marginTop: '0.5rem' }}>{courseData.title}</span></div>
              <div className={styles.certSeal}>CX SEAL</div>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>Course Syllabus</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>This course is broken down into highly structured modules containing video lectures, interactive labs, and quizzes.</p>
          
          <div className={styles.syllabusContainer}>
            {syllabus.map((mod, idx) => (
              <div key={idx} className={styles.syllabusModule}>
                <h3 className={styles.moduleTitle}>{mod.title}</h3>
                <div className={styles.moduleMeta}>{mod.duration} • {mod.lessons.length} Lessons</div>
                
                <ul className={styles.lessonList}>
                  {mod.lessons.map((lesson, lIdx) => (
                    <li key={lIdx} className={styles.lessonItem}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ color: '#fc1616' }}>▶</span>
                        {lesson.title}
                      </span>
                      <span style={{ color: '#9ca3af' }}>{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.sidebarContent}>
           {/* Placeholder for sidebar content like related courses or student reviews */}
           <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: '100px' }}>
              <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Earn a Career Certificate</h3>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '1.5rem', lineHeight: 1.6 }}>Add this credential to your LinkedIn profile, resume, or CV. Share it on social media and in your performance review.</p>
              
              <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>100% Online & Flexible</h3>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.6 }}>Learn at your own pace. Start instantly and learn on your own schedule.</p>
           </div>
        </div>

      </section>

      {/* Simulated Payment Gateway Modal */}
      {isEnrolling && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.spinner}></div>
            <h3 style={{ marginBottom: '0.5rem' }}>Processing Secure Checkout...</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Please do not close this window. You will be redirected to the course player shortly.</p>
          </div>
        </div>
      )}

    </div>
  );
}
