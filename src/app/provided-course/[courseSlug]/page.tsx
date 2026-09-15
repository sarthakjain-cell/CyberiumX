"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { courses } from '@/data/courses';
import { curriculums } from '@/data/curriculums';
import styles from './CourseLanding.module.css';

export default function CourseLandingPage() {
  const params = useParams();
  const router = useRouter();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
  
  const skills = [
    "Threat Modeling & Architecture",
    "Exploitation Techniques",
    "Security Governance & Compliance",
    "Disaster Recovery & Incident Response",
    "Vulnerability Assessment",
    "Secure Configuration Management"
  ];

  const handleEnroll = async () => {
    setIsEnrolling(true);
    setErrorMessage('');

    try {
      // 1. Create order on backend
      const res = await fetch('/api/razorpay/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 4999, // INR ₹4,999
          courseId: course.id,
          courseTitle: course.title
        })
      });

      const orderData = await res.json();

      if (!res.ok || orderData.error) {
        throw new Error(orderData.error || 'Failed to initiate secure checkout');
      }

      // 2. Open Razorpay Checkout overlay
      if (typeof window !== 'undefined' && (window as any).Razorpay) {
        const options = {
          key: orderData.keyId,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "CyberiumX Security Training",
          description: course.title,
          image: "/logo.png",
          order_id: orderData.id,
          handler: async function (response: any) {
            setIsEnrolling(true);
            try {
              // 3. Verify payment signature on backend
              const verifyRes = await fetch('/api/razorpay/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  courseSlug: params.courseSlug,
                  courseTitle: course.title
                })
              });

              const verifyData = await verifyRes.json();

              if (verifyRes.ok && verifyData.success) {
                router.push(`/provided-course/${params.courseSlug}/learn?enrolled=true`);
              } else {
                setErrorMessage(verifyData.error || 'Payment verification failed.');
                setIsEnrolling(false);
              }
            } catch (err: any) {
              setErrorMessage('Payment verification error: ' + err.message);
              setIsEnrolling(false);
            }
          },
          prefill: {
            name: "CyberiumX Student",
            email: "student@cyberiumx.com"
          },
          theme: {
            color: "#fc1616"
          },
          modal: {
            ondismiss: function() {
              setIsEnrolling(false);
            }
          }
        };

        const razorpayPopup = new (window as any).Razorpay(options);
        razorpayPopup.open();
      } else {
        throw new Error('Razorpay Checkout SDK failed to load. Please refresh and try again.');
      }

    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Error launching checkout.');
      setIsEnrolling(false);
    }
  };

  return (
    <div className={styles.landingContainer}>
      <Script 
        src="https://checkout.razorpay.com/v1/checkout.js" 
        onLoad={() => setRazorpayLoaded(true)} 
      />
      
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
                <span style={{ fontWeight: 700, color: '#fff' }}>{['5.0', '4.9', '4.8'][course.id % 3]}</span>
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
              <div style={{ color: '#ff1616', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>🔥 Highly Demanded Course</div>
              <div className={styles.enrollPrice}>₹1 <span style={{ fontSize: '0.9rem', color: '#10b981' }}>(TEST MODE)</span></div>
              <div className={styles.enrollSub}>Test Mode: Pay ₹1 to verify full Razorpay checkout & signature authentication</div>
              
              {errorMessage && (
                <div style={{ padding: '0.6rem', marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: '6px', color: '#f87171', fontSize: '0.85rem' }}>
                  {errorMessage}
                </div>
              )}

              <button className={styles.enrollBtn} onClick={handleEnroll} disabled={isEnrolling}>
                {isEnrolling ? 'Initiating Checkout...' : 'Enroll Now for ₹1 (Razorpay Test)'}
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
            {skills.map((skill: any, idx: number) => (
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
              <div style={{ color: '#d1d5db', marginBottom: '2rem' }}>This certifies that you have successfully completed<br/><span style={{ fontWeight: 700, color: '#fff', fontSize: '1.2rem', display: 'block', marginTop: '0.5rem' }}>{course.title}</span></div>
              <div className={styles.certSeal}>CX SEAL</div>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>Course Syllabus</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>This course is broken down into highly structured modules containing video lectures, interactive labs, and quizzes.</p>
          
          <div className={styles.syllabusContainer}>
            {syllabus.map((mod: any, idx: number) => (
              <div key={idx} className={styles.syllabusModule}>
                <h3 className={styles.moduleTitle}>{mod.title}</h3>
                <div className={styles.moduleMeta}>{mod.duration} • {mod.lessons.length} Lessons</div>
                
                <ul className={styles.lessonList}>
                  {mod.lessons.map((lesson: any, lIdx: number) => (
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
           <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: '100px' }}>
              <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Earn a Career Certificate</h3>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '1.5rem', lineHeight: 1.6 }}>Add this credential to your LinkedIn profile, resume, or CV. Share it on social media.</p>
              
              <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Student Review / Report Issue</h3>
              <form onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as any;
                const comment = form.comment.value;
                const name = form.userName.value;
                if (!comment) return;
                
                await fetch('/api/data', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    type: 'ADD_REVIEW',
                    courseId: course.id,
                    courseTitle: course.title,
                    userName: name || 'Student User',
                    comment
                  })
                });
                alert('Feedback submitted! The team will review it shortly.');
                form.reset();
              }}>
                <input 
                  type="text" 
                  name="userName" 
                  placeholder="Your Name (Optional)" 
                  style={{ width: '100%', padding: '0.6rem', marginBottom: '0.75rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border)', color: '#fff', borderRadius: '6px' }} 
                />
                <textarea 
                  name="comment" 
                  placeholder="Leave a review or report an issue..." 
                  required 
                  style={{ width: '100%', padding: '0.6rem', marginBottom: '0.75rem', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border)', color: '#fff', borderRadius: '6px', minHeight: '80px' }}
                />
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.6rem' }}>Submit Feedback</button>
              </form>
           </div>
        </div>

      </section>

      {/* Payment Processing Spinner */}
      {isEnrolling && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.spinner}></div>
            <h3 style={{ marginBottom: '0.5rem' }}>Connecting to Razorpay Secure Gateway...</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Please complete your payment in the Razorpay window.</p>
          </div>
        </div>
      )}

    </div>
  );
}
