"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    title: "Best Laptops for Cybersecurity Training in 2025",
    category: "Generic",
    date: "24 July 2025",
    desc: "If you’re planning to build a career in cybersecurity, your laptop is one of the most important tools you’ll invest in...",
    link: "https://cyberiumx.com/generic/best-laptops-for-cybersecurity-training-in-2025/",
    image: "https://cyberiumx.com/wp-content/uploads/2025/07/PortSwigger-1.jpg"
  },
  {
    title: "How to Build a Cybersecurity Lab at Home",
    category: "Generic",
    date: "13 July 2025",
    desc: "If you're passionate about cybersecurity and ethical hacking, practical hands-on experience is essential...",
    link: "https://cyberiumx.com/generic/how-to-build-a-cybersecurity-lab-at-home/",
    image: "https://cyberiumx.com/wp-content/uploads/2025/07/PortSwigger.jpg"
  },
  {
    title: "CyberChef : The Basics",
    category: "TryHackMe",
    date: "2 November 2024",
    desc: "In this blog, we will cover the concepts as well as the answers for the “CyberChef: The Basics” room...",
    link: "https://cyberiumx.com/write-ups/tryhackme-answers-for-cyberchef-the-basics/",
    image: "https://cyberiumx.com/wp-content/uploads/2024/11/CyberChef-_-The-Basics.jpg"
  }
];

export default function BlogPreview() {
  return (
    <section className="container" style={{ padding: '1.5rem 0 4rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Latest Insights & Writeups</h2>
        <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
          Explore our recent articles, write-ups, and guides on everything cybersecurity.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(252, 22, 22, 0.1)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', background: '#0a0a0a' }}>
              <img 
                src={blog.image} 
                alt={blog.title} 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo.png';
                  (e.target as HTMLImageElement).style.objectFit = 'contain';
                  (e.target as HTMLImageElement).style.padding = '2rem';
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              />
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{blog.category}</span>
                <span style={{ color: '#6b7280' }}>{blog.date}</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.4, color: '#fff' }}>
                <Link href={blog.link} target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>{blog.title}</Link>
              </h3>
              <p style={{ color: '#9ca3af', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>{blog.desc}</p>
              <div style={{ marginTop: 'auto' }}>
                <Link href={blog.link} target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
         <Link href="/blog" className="btn-primary" style={{ display: 'inline-block' }}>View All Blogs</Link>
      </div>
    </section>
  );
}
