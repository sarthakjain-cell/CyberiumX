"use client";

import Link from 'next/link';

export default function ServicesPreview() {
  return (
    <section className="container" style={{ padding: '1rem 1.5rem 0.5rem 1.5rem', position: 'relative', zIndex: 2 }}>
      <div style={{
        background: 'rgba(10, 10, 10, 0.85)',
        border: '1px solid rgba(255, 22, 22, 0.25)',
        borderRadius: '20px',
        padding: '2rem 1.5rem',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 22, 22, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 22, 22, 0.12)',
            color: '#ff1616',
            padding: '6px 18px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '1.25rem',
            border: '1px solid rgba(255, 22, 22, 0.35)',
            boxShadow: '0 0 15px rgba(255, 22, 22, 0.2)'
          }}>
            <span>🛡️</span> ENTERPRISE PROTECTION
          </div>

          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            marginBottom: '1rem', 
            color: '#ffffff',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            7X-Security & <span style={{ color: '#ff1616', textShadow: '0 0 20px rgba(255, 22, 22, 0.4)' }}>Global Services</span>
          </h2>

          <p style={{ 
            color: '#d1d5db', 
            maxWidth: '680px', 
            margin: '0 auto', 
            fontSize: '1.15rem', 
            lineHeight: 1.6,
            fontWeight: 400 
          }}>
            Comprehensive protection against modern cyber threats and global security training.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          
          {/* Card 1: 7-Layer Protection */}
          <div
            style={{
              background: 'rgba(18, 18, 24, 0.9)',
              border: '1px solid rgba(255, 22, 22, 0.25)',
              borderRadius: '16px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ff1616';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 22, 22, 0.25)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 22, 22, 0.25)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: '#ffffff', 
                marginBottom: '1.25rem', 
                position: 'relative', 
                display: 'inline-block',
                fontWeight: 700
              }}>
                7-Layer Protection
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-8px', 
                  left: 0, 
                  width: '45px', 
                  height: '3px', 
                  background: '#ff1616', 
                  borderRadius: '2px',
                  boxShadow: '0 0 10px #ff1616'
                }}></div>
              </h3>

              <p style={{ color: '#9ca3af', lineHeight: '1.75', marginBottom: '2rem', fontSize: '1.05rem' }}>
                Cybersecurity experts recommend defense-in-depth strategies. This approach ensures security measures are applied at multiple levels—infrastructure, applications, users, networks, and monitoring systems.
              </p>
            </div>

            <Link href="/services" style={{ 
              color: '#ff1616', 
              textDecoration: 'none', 
              fontWeight: 700, 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.6rem',
              fontSize: '1.05rem',
              marginTop: 'auto'
            }}>
              Explore 7X-Security
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* Card 2: Global Reach */}
          <div
            style={{
              background: 'rgba(18, 18, 24, 0.9)',
              border: '1px solid rgba(255, 22, 22, 0.25)',
              borderRadius: '16px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ff1616';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 22, 22, 0.25)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 22, 22, 0.25)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: '#ffffff', 
                marginBottom: '1.25rem', 
                position: 'relative', 
                display: 'inline-block',
                fontWeight: 700
              }}>
                Global Reach
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-8px', 
                  left: 0, 
                  width: '45px', 
                  height: '3px', 
                  background: '#ff1616', 
                  borderRadius: '2px',
                  boxShadow: '0 0 10px #ff1616'
                }}></div>
              </h3>

              <p style={{ color: '#9ca3af', lineHeight: '1.75', marginBottom: '2rem', fontSize: '1.05rem' }}>
                CyberiumX is expanding its world-class cybersecurity training and security services globally, providing solutions to students and organizations in the US, UK, Australia, Canada, and Germany.
              </p>
            </div>

            <Link href="/global-services" style={{ 
              color: '#ff1616', 
              textDecoration: 'none', 
              fontWeight: 700, 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.6rem',
              fontSize: '1.05rem',
              marginTop: 'auto'
            }}>
              View Global Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
