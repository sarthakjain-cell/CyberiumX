"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { blogs } from '@/data/blogs';

export default function BlogPreview() {
  const previewBlogs = blogs.slice(0, 3);

  return (
    <section className="container" style={{ padding: '1.5rem 0 4rem 0', position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Latest Insights & Writeups</h2>
        <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
          Explore our recent articles, write-ups, and guides on everything cybersecurity.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
        {previewBlogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
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
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(252, 22, 22, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: '#0a0e17', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={blog.image} 
                alt={blog.title} 
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo.png';
                  (e.target as HTMLImageElement).style.objectFit = 'contain';
                  (e.target as HTMLImageElement).style.padding = '2rem';
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.4s ease' }}
              />
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{blog.category}</span>
                <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>{blog.readTime}</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.4, color: '#fff' }}>
                <Link href={`/blog/${blog.slug}`} style={{ color: '#fff', textDecoration: 'none' }}>{blog.title}</Link>
              </h3>
              <p style={{ color: '#9ca3af', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>{blog.desc}</p>
              <div style={{ marginTop: 'auto' }}>
                <Link href={`/blog/${blog.slug}`} aria-label={`Read article: ${blog.title}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>
                  <span>Read Article</span>
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
