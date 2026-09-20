"use client";

import Link from 'next/link';

const featuredServices = [
  {
    title: "Network Penetration Testing",
    category: "Training & Audits",
    desc: "Simulate real active directory & network infrastructure attacks to identify misconfigurations and secure internal assets.",
    link: "/global-services",
    icon: "📡"
  },
  {
    title: "Bug Bounty Training",
    category: "Specialized Course",
    desc: "Master methodologies for discovering high-severity vulnerabilities in live enterprise applications and earn bounties legally.",
    link: "/global-services",
    icon: "💰"
  },
  {
    title: "Kali Linux Training",
    category: "Hands-on Practical",
    desc: "Deep dive into Kali Linux operating system, mastering hundreds of built-in penetration testing and forensics tools.",
    link: "/global-services",
    icon: "🐧"
  },
  {
    title: "Website Security Testing",
    category: "Global Protection",
    desc: "Comprehensive Web Application PenTesting uncovering OWASP Top 10 vulnerabilities like SQLi, XSS, and broken auth.",
    link: "/services",
    icon: "🔒"
  },
  {
    title: "Network Security Assessment",
    category: "Enterprise Defense",
    desc: "In-depth auditing of internal & external firewall, router, and cloud network configurations against cyber threats.",
    link: "/services",
    icon: "⚡"
  },
  {
    title: "Vulnerability Assessment",
    category: "Security Service",
    desc: "Automated and expert manual scanning of digital assets to catalog, rate, and prioritize security flaw remediation.",
    link: "/services",
    icon: "🔍"
  },
  {
    title: "Penetration Testing (VAPT)",
    category: "Offensive Security",
    desc: "Simulated real-world cyber attacks evaluating defense controls, wireless networks, and mobile application infrastructure.",
    link: "/services",
    icon: "⚔️"
  }
];

export default function ServicesPreview() {
  return (
    <section className="container" style={{ padding: '2rem 1.5rem', position: 'relative', zIndex: 2 }}>
      <div style={{
        background: 'rgba(10, 12, 18, 0.95)',
        border: '1px solid rgba(255, 22, 22, 0.3)',
        borderRadius: '24px',
        padding: '3rem 2rem',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75), 0 0 35px rgba(255, 22, 22, 0.12)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            <span>🛡️</span> ENTERPRISE PROTECTION & GLOBAL SERVICES
          </div>

          <h2 style={{ 
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', 
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
            maxWidth: '720px', 
            margin: '0 auto', 
            fontSize: '1.15rem', 
            lineHeight: 1.6,
            fontWeight: 400 
          }}>
            Comprehensive defense-in-depth protection and specialized cybersecurity training for global enterprises and individuals.
          </p>
        </div>

        {/* 2 Main Overview Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Card 1: 7-Layer Protection */}
          <div
            style={{
              background: 'rgba(18, 22, 30, 0.9)',
              border: '1px solid rgba(255, 22, 22, 0.3)',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.75rem' }}>🛡️</span>
                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 700, margin: 0 }}>
                  7-Layer Security Audit
                </h3>
              </div>
              <p style={{ color: '#d1d5db', lineHeight: '1.75', marginBottom: '2rem', fontSize: '1.05rem' }}>
                Cybersecurity defense-in-depth applied at multiple levels—infrastructure, applications, endpoints, databases, network perimeters, and active threat monitoring.
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
              background: 'rgba(18, 22, 30, 0.9)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.75rem' }}>🌐</span>
                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 700, margin: 0 }}>
                  Global Reach & Protection
                </h3>
              </div>
              <p style={{ color: '#d1d5db', lineHeight: '1.75', marginBottom: '2rem', fontSize: '1.05rem' }}>
                Providing elite training and robust cybersecurity services worldwide to students, businesses, and government organizations in US, UK, Australia, Canada, & Germany.
              </p>
            </div>

            <Link href="/global-services" style={{ 
              color: '#10b981', 
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

        {/* Featured Global Services & Training Sub-Grid */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.5rem' }}>
            Featured Global Training & Services
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
            Click any service to view specialized course tracks and enterprise auditing solutions.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.25rem' 
        }}>
          {featuredServices.map((service, idx) => (
            <Link
              key={idx}
              href={service.link}
              style={{
                background: 'rgba(22, 27, 36, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ff1616';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 22, 22, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.35rem' }}>{service.icon}</span>
                  <span style={{ color: '#ff1616', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', background: 'rgba(255, 22, 22, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                    {service.category}
                  </span>
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {service.title}
                </h4>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                  {service.desc}
                </p>
              </div>
              <div style={{ marginTop: '1rem', color: '#ff1616', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>Learn Details</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

