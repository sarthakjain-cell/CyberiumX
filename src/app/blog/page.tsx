import type { Metadata } from 'next';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import styles from './Blog.module.css';

export const metadata: Metadata = {
  title: "Cybersecurity Insights & Blog | CyberiumX",
  description: "Stay ahead of digital threats with expert cybersecurity tutorials, ethical hacking guides, pentesting tips, and security news from CyberiumX.",
  alternates: {
    canonical: "https://cyberiumx.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="container">
      <section className={styles.blogHero}>
        <div>
          <h1 className={styles.title}>Our Blogs</h1>
          <p className={styles.subtitle}>
            Explore our latest articles, write-ups, and guides on everything cybersecurity.
          </p>
        </div>

        <div className={styles.blogGrid}>
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={styles.blogCard}
            >
              <div className={styles.blogImageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  loading="lazy"
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.blogCardContent}>
                <div className={styles.blogHeader}>
                  <span className={styles.blogCategory}>{blog.category}</span>
                  <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{blog.readTime}</span>
                </div>
                <h3 className={styles.blogTitle}>
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className={styles.blogDesc}>{blog.desc}</p>
                <div className={styles.readMore}>
                  <Link href={`/blog/${blog.slug}`} aria-label={`Read article: ${blog.title}`}>
                    <span>Read Article</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
