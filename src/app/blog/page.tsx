import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './Blog.module.css';

export const metadata: Metadata = {
  title: "Cybersecurity Insights & Blog | CyberiumX",
  description: "Stay ahead of digital threats with expert cybersecurity tutorials, ethical hacking guides, pentesting tips, and security news from CyberiumX.",
  alternates: {
    canonical: "https://cyberiumx.com/blog",
  },
};

const blogs = [
  {
    title: "Best Laptops for Cybersecurity Training in 2025",
    category: "Generic",
    date: "24 July 2025",
    desc: "If you’re planning to build a career in cybersecurity, your laptop is one of the most important tools you’ll invest in. Whether you're running Kali...",
    link: "https://cyberiumx.com/generic/best-laptops-for-cybersecurity-training-in-2025/",
    image: "https://cyberiumx.com/wp-content/uploads/2025/07/PortSwigger-1.jpg"
  },
  {
    title: "How to Build a Cybersecurity Lab at Home",
    category: "Generic",
    date: "13 July 2025",
    desc: "If you're passionate about cybersecurity and ethical hacking, practical hands-on experience is essential. Whether you’re a beginner, student, or aspiring penetration tester...",
    link: "https://cyberiumx.com/generic/how-to-build-a-cybersecurity-lab-at-home/",
    image: "https://cyberiumx.com/wp-content/uploads/2025/07/PortSwigger.jpg"
  },
  {
    title: "TryHackMe | Answers for CyberChef: The Basics",
    category: "TryHackMe",
    date: "2 November 2024",
    desc: "In this blog, we will cover the concepts as well as the answers for the “CyberChef: The Basics” room which is a part of the...",
    link: "https://cyberiumx.com/write-ups/tryhackme-answers-for-cyberchef-the-basics/",
    image: "https://cyberiumx.com/wp-content/uploads/2024/11/CyberChef-_-The-Basics.jpg"
  },
  {
    title: "TryHackMe | Answers for Training Impact on Teams",
    category: "TryHackMe",
    date: "1 November 2024",
    desc: "In this blog, we will cover the importance as well as the answers for the “Training Impact on Teams” room which is a part of...",
    link: "https://cyberiumx.com/write-ups/tryhackme-answers-for-training-impact-on-teams/",
    image: "https://cyberiumx.com/wp-content/uploads/2024/11/TrainingImpactonteams.jpg"
  },
  {
    title: "TryHackMe | Answers for SOC Fundamentals",
    category: "TryHackMe",
    date: "1 November 2024",
    desc: "In this blog, we will cover the concepts as well as the answers for the “SOC Fundamentals” room which is a part of the “Cyber...",
    link: "https://cyberiumx.com/write-ups/tryhackme-answers-for-soc-fundamentals/",
    image: "https://cyberiumx.com/wp-content/uploads/2024/11/SOC-Fundamentals.jpg"
  },
  {
    title: "TryHackMe | Answers for Web Application Basics",
    category: "TryHackMe",
    date: "31 October 2024",
    desc: "In this blog, we will cover the concepts as well as the answers for the “Web Application Basics” room which is a part of the...",
    link: "https://cyberiumx.com/write-ups/tryhackme-answers-for-web-application-basics/",
    image: "https://cyberiumx.com/wp-content/uploads/2024/10/Web-Application-Basics.png"
  }
];

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
                  width={400}
                  height={200}
                  loading="lazy"
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.blogCardContent}>
                <div className={styles.blogHeader}>
                  <span className={styles.blogCategory}>{blog.category}</span>
                  <span className={styles.blogDate}>{blog.date}</span>
                </div>
                <h3 className={styles.blogTitle}>
                  <Link href={blog.link} target="_blank">{blog.title}</Link>
                </h3>
                <p className={styles.blogDesc}>{blog.desc}</p>
                <div className={styles.readMore}>
                  <Link href={blog.link} target="_blank" aria-label={`Read article: ${blog.title}`}>
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
