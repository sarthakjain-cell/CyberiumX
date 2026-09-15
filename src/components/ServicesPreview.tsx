"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPreview() {
  return (
    <section className="container" style={{ padding: '2rem 0 5rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>7X-Security & Global Services</h2>
        <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
          Comprehensive protection against modern cyber threats and global security training.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(15, 23, 42, 0.65)',
            border: '1px solid rgba(255, 22, 22, 0.2)',
            borderRadius: '16px',
            padding: '3rem',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(12px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#ff1616';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 22, 22, 0.2)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 22, 22, 0.2)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem', position: 'relative', display: 'inline-block' }}>
            7-Layer Protection
            <div style={{ position: 'absolute', bottom: '-10px', left: 0, width: '40px', height: '3px', background: '#ff1616', borderRadius: '2px' }}></div>
          </h3>
          <p style={{ color: '#9ca3af', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Cybersecurity experts recommend defense-in-depth strategies. This approach ensures security measures are applied at multiple levels—infrastructure, applications, users, networks, and monitoring systems.
          </p>
          <Link href="/services" style={{ color: '#ff1616', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Explore 7X-Security
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            background: 'rgba(15, 23, 42, 0.65)',
            border: '1px solid rgba(255, 22, 22, 0.2)',
            borderRadius: '16px',
            padding: '3rem',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(12px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#ff1616';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 22, 22, 0.2)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 22, 22, 0.2)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem', position: 'relative', display: 'inline-block' }}>
            Global Reach
            <div style={{ position: 'absolute', bottom: '-10px', left: 0, width: '40px', height: '3px', background: '#ff1616', borderRadius: '2px' }}></div>
          </h3>
          <p style={{ color: '#9ca3af', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.1rem' }}>
            CyberiumX is expanding its world-class cybersecurity training and security services globally, providing solutions to students and organizations in the US, UK, Australia, Canada, and Germany.
          </p>
          <Link href="/global-services" style={{ color: '#ff1616', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            View Global Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
