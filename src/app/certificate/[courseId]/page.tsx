"use client";

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { courses } from '@/data/courses';
import { motion } from 'framer-motion';

export default function CertificatePage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    const courseId = parseInt(params.courseId as string);
    const foundCourse = courses.find(c => c.id === courseId);
    
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      router.push('/dashboard');
    }
  }, [params.courseId, router]);

  if (!course) return null;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'var(--background)' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ 
          background: 'var(--glass-bg)', 
          border: '1px solid var(--border)', 
          borderRadius: '16px', 
          padding: '4rem', 
          maxWidth: '800px', 
          width: '100%', 
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 100px rgba(252,22,22,0.1)'
        }}
      >
        <Image src="/logo.png" alt="CyberiumX Logo" width={250} height={60} style={{ margin: '0 auto 3rem', objectFit: 'contain' }} />
        
        <h1 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 1rem', fontFamily: 'serif', fontStyle: 'italic' }}>Certificate of Completion</h1>
        
        <p style={{ color: '#9ca3af', fontSize: '1.2rem', marginBottom: '2rem' }}>This is to certify that</p>
        
        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: '0 0 2rem', borderBottom: '2px solid var(--border)', paddingBottom: '1rem', display: 'inline-block', minWidth: '300px' }}>
          Student
        </h2>
        
        <p style={{ color: '#9ca3af', fontSize: '1.2rem', marginBottom: '2rem' }}>has successfully completed the certification requirements for</p>
        
        <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: '0 0 3rem' }}>{course.title}</h3>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{ margin: 0, color: '#fff', fontWeight: 'bold' }}>Date of Issue</p>
            <p style={{ margin: 0, color: '#9ca3af' }}>{new Date().toLocaleDateString()}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg width="40" height="40" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 15l-2 5-9-5 9-5 2 5zm0 0l2 5 9-5-9-5-2 5z"></path></svg>
            </div>
            <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.8rem', textTransform: 'uppercase' }}>Official Seal</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, color: '#fff', fontWeight: 'bold' }}>Credential ID</p>
            <p style={{ margin: 0, color: '#9ca3af' }}>CBX-{course.id}-{Math.floor(Math.random() * 100000)}</p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <button onClick={() => window.print()} className="btn-primary" style={{ marginRight: '1rem' }}>Print / Save as PDF</button>
          <button onClick={() => router.push('/dashboard')} className="btn-secondary">Return to Dashboard</button>
        </div>
      </motion.div>
    </div>
  );
}
