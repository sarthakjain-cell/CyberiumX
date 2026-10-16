import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogs } from '@/data/blogs';
import styles from './BlogPost.module.css';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | CyberiumX',
    };
  }

  return {
    title: `${blog.title} | CyberiumX Blog`,
    description: blog.desc,
    alternates: {
      canonical: `https://cyberiumx.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.desc,
      images: [{ url: blog.image }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container">
      <article className={styles.articleContainer}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <span style={{ color: '#ffffff', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            {blog.title}
          </span>
        </nav>

        <header>
          <div className={styles.metaHeader}>
            <span className={styles.categoryBadge}>{blog.category}</span>
            <span className={styles.readTime}>• {blog.readTime}</span>
          </div>
          <h1 className={styles.articleTitle}>{blog.title}</h1>
        </header>

        <div className={styles.imageHero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={blog.image} 
            alt={blog.title} 
            loading="eager"
          />
        </div>

        <div className={styles.introBox}>
          <p>{blog.content.intro}</p>
        </div>

        <div className={styles.articleBody}>
          {blog.content.sections.map((section, sIdx) => (
            <section key={sIdx}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              <ul className={styles.contentList}>
                {section.body.map((item, bIdx) => (
                  <li key={bIdx} className={styles.contentItem}>
                    <span className={styles.itemBullet}>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className={styles.conclusionCard}>
          <h3 className={styles.conclusionTitle}>Summary & Next Steps</h3>
          <p className={styles.conclusionText}>{blog.content.conclusion}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/courses" className="btn-primary" style={{ display: 'inline-block' }}>
              Explore Cybersecurity Courses
            </Link>
            <Link href="/contact-us" className="btn-outline" style={{ display: 'inline-block' }}>
              Talk with an Instructor
            </Link>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/blog" className={styles.backBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to All Blogs</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
