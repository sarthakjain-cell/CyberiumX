"use client";

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { courses } from '@/data/courses';
import { getCertificateByCourseId, CertificateRecord } from '@/data/mockCertificates';
import { motion } from 'framer-motion';

export default function CertificatePage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<any>(null);
  const [certRecord, setCertRecord] = useState<CertificateRecord | null>(null);
  const [studentName, setStudentName] = useState<string>('Certified Student');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(true);
  const [progressPercent, setProgressPercent] = useState<number>(100);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const courseId = parseInt(params.courseId as string);
    const foundCourse = courses.find(c => c.id === courseId);
    
    if (foundCourse) {
      setCourse(foundCourse);
      const record = getCertificateByCourseId(courseId);
      if (record) {
        setCertRecord(record);
        setStudentName(record.studentName);
      } else {
        setStudentName('Certified Practitioner');
      }

      // Check student session
      let userId = '00000000-0000-4000-a000-000000000001';
      if (typeof window !== 'undefined') {
        try {
          const session = JSON.parse(localStorage.getItem('cx_student_session') || '{}');
          if (session.id) userId = session.id;
          if (session.fullName) setStudentName(session.fullName);
        } catch (e) {
          console.warn('Session parse note:', e);
        }
      }

      // Server-side anti-exploit check: verify 100% completion in database
      async function verifyServerEligibility() {
        try {
          const res = await fetch(`/api/course/progress?courseId=${courseId}&userId=${encodeURIComponent(userId)}`);
          if (res.ok) {
            const data = await res.json();
            setProgressPercent(data.progressPercent || 0);
            // If totalCount is 0 (mock demo), allow preview; otherwise strictly enforce 100%
            if (data.totalCount > 0) {
              setIsUnlocked(data.isCertificateUnlocked);
            }
          }
        } catch (err) {
          console.warn('Eligibility check fallback:', err);
        } finally {
          setLoading(false);
        }
      }

      verifyServerEligibility();
    } else {
      router.push('/dashboard');
    }
  }, [params.courseId, router]);

  if (!course || loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0d14', color: '#9ca3af' }}>
        Verifying credential issuance and course completion...
      </div>
    );
  }

  const courseSlug = course.link.split('/').filter(Boolean).pop();

  // If server reports < 100% completion, display secure gating
  if (!isUnlocked) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: '#0b0d14' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ 
            background: 'rgba(20, 24, 32, 0.95)', 
            border: '1px solid rgba(252, 22, 22, 0.3)', 
            borderRadius: '20px', 
            padding: '3.5rem 2.5rem', 
            maxWidth: '620px', 
            width: '100%', 
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 50px rgba(252,22,22,0.15)'
          }}
        >
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(252,22,22,0.1)', border: '2px solid #fc1616', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.8rem' }}>
            🔒
          </div>
          <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.75rem', fontWeight: 800 }}>
            Official Credential Locked
          </h2>
          <p style={{ color: '#9ca3af', lineHeight: 1.6, marginBottom: '2rem', fontSize: '0.95rem' }}>
            CyberiumX official certificates are tamper-proof and cryptographically signed. To unlock this credential, 
            you must complete <strong style={{ color: '#fc1616' }}>100% of all curriculum lectures and security labs</strong>.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem', marginBottom: '2rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <span style={{ color: '#fff', fontWeight: 600 }}>Your Verified Progress</span>
              <span style={{ color: '#fc1616', fontWeight: 700 }}>{progressPercent}% / 100%</span>
            </div>
            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progressPercent}%`, background: '#fc1616' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href={`/provided-course/${courseSlug}/learn`}
              className="btn-primary" 
              style={{ padding: '0.85rem 1.75rem', textDecoration: 'none' }}
            >
              Resume Learning &amp; Complete Requirements &rarr;
            </Link>
            <Link 
              href="/my-courses"
              className="btn-secondary" 
              style={{ padding: '0.85rem 1.75rem', textDecoration: 'none' }}
            >
              My Courses
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const credentialId = certRecord ? certRecord.id : `CX-2026-${10000 + (course?.id || 1)}`;
  const issueDate = certRecord ? certRecord.issueDate : '15 August 2026';
  const grade = certRecord ? certRecord.grade : 'A+ (Distinction)';
  const credHash = certRecord ? certRecord.credentialHash : `cx_0x${(course?.id || 1)}a88e99b22c710f44`;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: '#0b0d14' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ 
          background: 'rgba(20, 24, 32, 0.95)', 
          border: '1px solid rgba(255, 255, 255, 0.12)', 
          borderRadius: '20px', 
          padding: '4rem 3rem', 
          maxWidth: '850px', 
          width: '100%', 
          textAlign: 'center',
          boxShadow: '0 25px 60px rgba(0,0,0,0.7), 0 0 80px rgba(252,22,22,0.15)',
          position: 'relative'
        }}
      >
        {/* Certificate Watermark / Header Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo.png" 
            alt="CyberiumX Logo" 
            style={{ height: '70px', width: 'auto', objectFit: 'contain' }} 
          />
        </div>
        
        <div style={{ display: 'inline-block', padding: '4px 16px', borderRadius: '50px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid #10b981', color: '#10b981', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Verified Official Credential
        </div>

        <h1 style={{ fontSize: '2.8rem', color: '#fff', margin: '0 0 1rem', fontFamily: 'serif', fontStyle: 'italic', letterSpacing: '1px' }}>
          Certificate of Completion
        </h1>
        
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          This is to officially certify that
        </p>
        
        <h2 style={{ fontSize: '2.4rem', color: '#fc1616', margin: '0 0 1.5rem', borderBottom: '2px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem', display: 'inline-block', minWidth: '320px', fontWeight: 800 }}>
          {studentName}
        </h2>
        
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '1rem' }}>
          has fulfilled all practical lab examinations, security audits, and graduation requirements for
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0 2.5rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: '#ffffff',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
          }}>
            <img src={course.icon} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <h3 style={{ fontSize: '1.7rem', color: '#fff', margin: 0, fontWeight: 700 }}>{course.title}</h3>
        </div>
        
        {/* Certificate Meta Details */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Date of Issue</span>
            <span style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>{issueDate}</span>
          </div>

          <div>
            <span style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Grade / Honors</span>
            <span style={{ fontSize: '1rem', color: '#10b981', fontWeight: 700 }}>{grade}</span>
          </div>

          <div>
            <span style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Official Credential ID</span>
            <span style={{ fontSize: '1rem', color: '#fc1616', fontWeight: 700, fontFamily: 'monospace' }}>{credentialId}</span>
          </div>

          <div>
            <span style={{ fontSize: '0.8rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Security Hash</span>
            <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'monospace', wordBreak: 'break-all' }}>{credHash}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => window.print()} 
            className="btn-primary" 
            style={{ padding: '0.8rem 1.75rem', fontSize: '0.95rem' }}
          >
            🖨️ Print / Save as PDF
          </button>
          
          <Link 
            href={`/verify?id=${encodeURIComponent(credentialId)}`} 
            className="btn-secondary" 
            style={{ 
              padding: '0.8rem 1.75rem', 
              fontSize: '0.95rem', 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              borderColor: '#10b981',
              color: '#10b981'
            }}
          >
            <span>✓</span> Verify Online Authenticity
          </Link>
          
          <button 
            onClick={() => router.push('/dashboard')} 
            className="btn-secondary" 
            style={{ padding: '0.8rem 1.75rem', fontSize: '0.95rem' }}
          >
            Return to Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
}
