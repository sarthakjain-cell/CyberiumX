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

import BlogClient from './BlogClient';

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

        <BlogClient initialBlogs={blogs} />
      </section>
    </div>
  );
}
