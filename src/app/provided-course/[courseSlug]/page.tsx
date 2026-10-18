"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { courses } from '@/data/courses';
import { curriculums } from '@/data/curriculums';
import { getClientStudentSession } from '@/lib/auth/session';
import styles from './CourseLanding.module.css';

export default function CourseLandingPage() {
  const params = useParams();
  const router = useRouter();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<{ paymentId: string; courseTitle: string } | null>(null);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && params.courseSlug) {
      const isCookie = document.cookie.includes(`enrolled_${params.courseSlug}=true`);
      const stored = JSON.parse(localStorage.getItem('cyberiumx_enrolled_courses') || '[]');
      if (isCookie || stored.includes(params.courseSlug)) {
        setIsAlreadyEnrolled(true);
      }
    }
  }, [params.courseSlug]);

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
            const paymentId = response.razorpay_payment_id || `pay_${Date.now()}`;

            // 1. Immediately cache enrollment in cookies and localStorage
            if (typeof window !== 'undefined') {
              document.cookie = `enrolled_${params.courseSlug}=true; path=/; max-age=31536000; SameSite=Lax`;
              try {
                const prev = JSON.parse(localStorage.getItem('cyberiumx_enrolled_courses') || '[]');
                if (!prev.includes(params.courseSlug)) {
                  prev.push(params.courseSlug);
                  localStorage.setItem('cyberiumx_enrolled_courses', JSON.stringify(prev));
                }
                localStorage.setItem('cyberiumx_last_payment_id', paymentId);
              } catch (e) {}
            }

            // 2. Immediately trigger celebration modal so user gets instant response
            setIsEnrolling(false);
            setPaymentSuccess({
              paymentId,
              courseTitle: course.title
            });

            // 3. Persist to cloud backend (Supabase PostgreSQL)
            try {
              const session = getClientStudentSession();
              await fetch('/api/razorpay/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: paymentId,
                  razorpay_signature: response.razorpay_signature,
                  courseSlug: params.courseSlug,
                  courseTitle: course.title,
                  courseId: course.id,
                  userId: session.id
                })
              });
            } catch (err) {
              console.warn('Backend enrollment sync note:', err);
            }

            // 4. Auto-redirect to Course Player after 2 seconds
            setTimeout(() => {
              router.push(`/provided-course/${params.courseSlug}/learn?enrolled=true`);
            }, 2200);
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
              setTimeout(() => {
                setIsEnrolling(false);
              }, 400);
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
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#ffffff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.45)'
              }}>
                <img 
                  src={course.icon} 
                  alt={`${course.title} Logo`} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span className={styles.providerBadge} style={{ margin: 0 }}>CyberiumX Official Certification Track</span>
            </div>
            
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
                <span className={styles.statIcon}></span>
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
              <div style={{ color: '#ff1616', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}> Highly Demanded Course</div>
              <div className={styles.enrollPrice}>₹1 <span style={{ fontSize: '0.9rem', color: '#10b981' }}>(TEST MODE)</span></div>
              <div className={styles.enrollSub}>Test Mode: Pay ₹1 to verify full Razorpay checkout & signature authentication</div>
              
              {errorMessage && (
                <div style={{ padding: '0.6rem', marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: '6px', color: '#f87171', fontSize: '0.85rem' }}>
                  {errorMessage}
                </div>
              )}

              {isAlreadyEnrolled ? (
                <button 
                  className={styles.enrollBtn} 
                  style={{ background: '#10b981' }}
                  onClick={() => router.push(`/provided-course/${params.courseSlug}/learn`)}
                >
                  ✓ Already Enrolled &mdash; Resume Learning &rarr;
                </button>
              ) : (
                <button className={styles.enrollBtn} onClick={handleEnroll} disabled={isEnrolling}>
                  {isEnrolling ? 'Initiating Checkout...' : 'Enroll Now for ₹1 (Razorpay Test)'}
                </button>
              )}
              
              <div className={styles.guarantee}>
                <span>️</span> 30-Day Money-Back Guarantee
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#9ca3af' }}>Join 25,000+ enrolled students</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Main Content Area */}
      <section className={styles.contentArea}>
        
        <div className={styles.mainContent}>
          {/* 1. Course Overview Section */}
          <h2 className={styles.sectionTitle}>Course Overview</h2>
          <div className={styles.overviewBox}>
            <p>
              {course.overview || course.description}
            </p>
            <p>
              This comprehensive training includes core industry toolchains, vulnerability assessment frameworks, defensive configurations, practical cyber ranges, and real-world attack mitigation strategies. Practical skills will be reinforced through dedicated hands-on virtual labs and live simulations guided by certified security practitioners. By the end of this course, learners will gain industry-ready skills and deep technical confidence.
            </p>
          </div>

          <h2 className={styles.sectionTitle}>What you&apos;ll learn</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill: any, idx: number) => (
              <div key={idx} className={styles.skillBadge}>
                <span className={styles.skillCheck}></span>
                {skill}
              </div>
            ))}
          </div>

          {/* 2. Course Syllabus Section */}
          <h2 className={styles.sectionTitle} style={{ marginTop: '3.5rem' }}>Course Syllabus</h2>
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
                        <span style={{ color: '#fc1616' }}></span>
                        {lesson.title}
                      </span>
                      <span style={{ color: '#9ca3af' }}>{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3. Who Can Enroll? Section */}
          <h2 className={styles.sectionTitle} style={{ marginTop: '3.5rem' }}>Who can enroll?</h2>
          <div className={styles.whoCanEnrollBox}>
            <p>
              This course is apt for individuals seeking a high-growth career in cybersecurity and defensive/offensive computing, from beginners to experienced IT professionals. System administrators, developers, network engineers, and security analysts can join this course and learn how to identify vulnerabilities, deploy hardened architectures, and defend critical assets.
            </p>
            <ul className={styles.whoList}>
              <li>Aspiring Ethical Hackers and Penetration Testers looking for real-world lab mastery</li>
              <li>IT Administrators, Network Engineers, and Cloud Developers wanting to advance in security</li>
              <li>College students and freshers aiming to crack top cybersecurity job interviews</li>
              <li>Corporate professionals needing accredited certification credentials</li>
            </ul>
          </div>

          {/* 4. Need Help? FAQ Section */}
          <div className={styles.needHelpSection}>
            <h2 className={styles.sectionTitle}>Need Help?</h2>
            <p style={{ color: '#9ca3af' }}>Answers to common questions about this course, prerequisites, and certifications.</p>

            <div className={styles.faqAccordion}>
              {[
                {
                  q: "What does this cybersecurity training cover?",
                  a: "This training covers practical security principles, threat intelligence, vulnerability identification, exploitation frameworks, and real-world defense techniques."
                },
                {
                  q: "Do I need prior cybersecurity experience to enroll?",
                  a: "No prior hacking experience is required for beginner tracks. A basic understanding of computers and networking is helpful, and our mentors guide you from ground zero."
                },
                {
                  q: "Will I get access to hands-on practice labs?",
                  a: "Yes! Every student receives dedicated access to live virtual cyber ranges, practice targets, and simulated enterprise networks."
                },
                {
                  q: "Is there guidance for international certification exams?",
                  a: "Yes, we provide exam blueprint preparation, practice questions, and mock review sessions to ensure high pass rates in globally recognized exams."
                },
                {
                  q: "What career support is included?",
                  a: "We offer resume reviews, LinkedIn profile optimization, mock interview prep, and direct hiring partner referrals."
                }
              ].map((faqItem, fIdx) => (
                <div key={fIdx} className={styles.faqItem}>
                  <button 
                    type="button" 
                    className={styles.faqQuestionBtn}
                    onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                  >
                    <span>{faqItem.q}</span>
                    <span>{openFaq === fIdx ? '−' : '+'}</span>
                  </button>
                  {openFaq === fIdx && (
                    <div className={styles.faqAnswer}>
                      <p>{faqItem.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.certSection} style={{ marginTop: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Earn a Career Certificate</h2>
            <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Add this credential to your LinkedIn profile, resume, or CV upon completion.</p>
            <div className={styles.certPreviewBox}>
              <div style={{ color: '#fc1616', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem' }}>CyberiumX Education & Training</div>
              <div className={styles.certTitle}>Certificate of Completion</div>
              <div style={{ color: '#d1d5db', marginBottom: '2rem' }}>This certifies that you have successfully completed<br/><span style={{ fontWeight: 700, color: '#fff', fontSize: '1.2rem', display: 'block', marginTop: '0.5rem' }}>{course.title}</span></div>
              <div className={styles.certSeal}>CX SEAL</div>
            </div>
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

      {/* Payment Success Celebration & Access Unlocked Modal */}
      {paymentSuccess && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.88)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          padding: '1.5rem'
        }}>
          <div style={{
            background: 'rgba(20, 24, 32, 0.98)',
            border: '1px solid #10b981',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            maxWidth: '560px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 50px rgba(16,185,129,0.2)'
          }}>
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#10b981',
              margin: '0 auto 1.5rem'
            }}>
              ✓
            </div>
            <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 800 }}>
              Payment Verified &amp; Access Unlocked!
            </h2>
            <p style={{ color: '#10b981', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Transaction Ref: {paymentSuccess.paymentId}
            </p>
            <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              All lectures, practical labs, and security examination modules for <strong>{paymentSuccess.courseTitle}</strong> have been unlocked in your portal.
            </p>
            
            <div style={{
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '10px',
              padding: '0.85rem 1rem',
              color: '#fbbf24',
              fontSize: '0.825rem',
              lineHeight: 1.5,
              marginBottom: '1.5rem',
              textAlign: 'left'
            }}>
              <strong>🎓 Official Certificate Notice:</strong> You must complete <strong>100% of all lectures and labs</strong> to unlock and generate your official CyberiumX Certificate.
            </div>

            <div style={{ color: '#10b981', fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: 600 }}>
              🚀 Auto-redirecting you to your Course Player in 2 seconds...
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => router.push(`/provided-course/${params.courseSlug}/learn?enrolled=true`)}
                className="btn-primary"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem', background: '#fc1616', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
              >
                🚀 Enter Course &amp; Start Learning &rarr;
              </button>
              <Link
                href="/my-courses"
                className="btn-secondary"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem', textDecoration: 'none' }}
              >
                🎓 View in My Courses
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
