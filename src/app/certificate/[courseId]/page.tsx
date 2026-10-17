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
        // Fallback proportional record
        setStudentName('Certified Practitioner');
      }

      // Check if user set their custom name in session/localStorage
      if (typeof window !== 'undefined') {
        const customName = localStorage.getItem('user_name') || localStorage.getItem('student_name');
        if (customName && customName.trim()) {
          setStudentName(customName.trim());
        }
      }
    } else {
      router.push('/dashboard');
    }
  }, [params.courseId, router]);

  if (!course) return null;

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
