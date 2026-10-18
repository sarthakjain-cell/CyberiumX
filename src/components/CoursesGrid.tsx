"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CoursesGrid.module.css';

interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  rating: string;
  level: string;
  duration: string;
  link: string;
  logo: string;
}

const allCourses: CourseItem[] = [
  {
    id: 'cehv13',
    title: 'Certified Ethical Hacker CEHv13 AI',
    subtitle: 'Certified Ethical Hacker v13 AI',
    category: 'Penetration Testing',
    overview: 'The Certified Ethical Hacker (CEHv13 - AI) course is designed to equip candidates with cutting-edge skills in vulnerability assessment, threat intelligence, and AI-driven ethical hacking.',
    rating: '5.0',
    level: 'Intermediate',
    duration: '50 Hours',
    link: '/provided-course/certified-ethical-hacker-cehv13-ai/',
    logo: '/logos/ceh.svg'
  },
  {
    id: 'ccna',
    title: 'CCNA Course',
    subtitle: 'Cisco Certified Network Associate',
    category: 'Networking',
    overview: 'The Cisco Certified Network Associate (CCNA) course is a comprehensive training program framed to equip learners with fundamental knowledge of enterprise routing, switching, and network defense.',
    rating: '4.9',
    level: 'Beginner',
    duration: '40 Hours',
    link: '/provided-course/ccna-course/',
    logo: '/logos/ccna.svg'
  },
  {
    id: 'oscp',
    title: 'OSCP+ Course',
    subtitle: 'OffSec Certified Professional',
    category: 'Penetration Testing',
    overview: 'The OffSec Certified Professional (OSCP+) course is an elite, hands-on penetration testing certification training that trains individuals for real-world offensive assessments.',
    rating: '5.0',
    level: 'Advanced',
    duration: '100 Hours',
    link: '/provided-course/oscp-course/',
    logo: '/logos/oscp.svg'
  },
  {
    id: 'azure',
    title: 'Microsoft Azure Course',
    subtitle: 'Cloud Architecture & Enterprise Defense',
    category: 'Cloud Security',
    overview: 'The Microsoft Azure Cloud training course is designed to advance candidates with the skills required to work with enterprise cloud architecture, identity management, and cloud security.',
    rating: '4.9',
    level: 'Intermediate',
    duration: '40 Hours',
    link: '/provided-course/microsoft-azure-course/',
    logo: '/logos/azure.png'
  },
  {
    id: 'aws-sec',
    title: 'AWS Penetration Testing & Security',
    subtitle: 'Offensive Cloud Security & Auditing',
    category: 'Cloud Security',
    overview: 'Hands-on training focusing on AWS cloud security auditing, detecting IAM misconfigurations, exploiting vulnerable S3/EC2/Lambda assets, and remediation architecture.',
    rating: '5.0',
    level: 'Advanced',
    duration: '30 Hours',
    link: '/provided-course/aws-penetration-testing-security/',
    logo: '/logos/aws.svg'
  },
  {
    id: 'aws-fund',
    title: 'Amazon Web Services (AWS) Course',
    subtitle: 'Cloud Fundamentals & Infrastructure',
    category: 'Cloud Security',
    overview: 'The Amazon Web Services (AWS) training course is designed to equip candidates with foundational and intermediate skills required to work with cloud security environments.',
    rating: '4.8',
    level: 'Intermediate',
    duration: '30 Hours',
    link: '/provided-course/amazon-web-servicesaws-course/',
    logo: '/logos/aws.svg'
  },
  {
    id: 'ejpt',
    title: 'eJPTv2 Course',
    subtitle: 'eLearnSecurity Junior Penetration Tester',
    category: 'Penetration Testing',
    overview: 'The eJPTv2 training course provides an elite, 100% practical foundation in Ethical Hacking, assessment methodology, network reconnaissance, and real-world system exploitation.',
    rating: '4.9',
    level: 'Beginner',
    duration: '50 Hours',
    link: '/provided-course/ejptv2-course/',
    logo: '/logos/ejpt.svg'
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    subtitle: 'CyberiumX Core Defensive & Offensive Program',
    category: 'Penetration Testing',
    overview: 'CyberiumX’s Ethical Hacking course is designed to help candidates gain the knowledge and real lab skills required to become certified penetration testers.',
    rating: '4.9',
    level: 'Beginner',
    duration: '40 Hours',
    link: '/provided-course/ethical-hacking/',
    logo: '/logos/ethical-hacking.svg'
  },
  {
    id: 'kali-linux',
    title: 'Kali Linux Course',
    subtitle: 'Offensive OS & Toolkit Mastery',
    category: 'Penetration Testing',
    overview: 'Master Kali Linux, the industry-standard OS for security auditing. Learn to master command-line tools, network analyzers, payloads, Metasploit, and custom automation scripts.',
    rating: '4.9',
    level: 'Beginner',
    duration: '20 Hours',
    link: '/provided-course/kali-linux-course/',
    logo: '/logos/kali.svg'
  },
  {
    id: 'networking-eh',
    title: 'Networking For Ethical Hackers Course',
    subtitle: 'TCP/IP, Routing & Packet Analysis',
    category: 'Networking',
    overview: 'A rock-solid foundation in networking is essential for cybersecurity. Master TCP/IP packet structures, Wireshark, subnetting, firewalls, and network defense strategies.',
    rating: '4.8',
    level: 'Beginner',
    duration: '20 Hours',
    link: '/provided-course/networking-for-ethical-hackers-course/',
    logo: '/logos/networking.svg'
  },
  {
    id: 'bug-bounty',
    title: 'Bug Bounty Course',
    subtitle: 'Web Application Vulnerability Hunting',
    category: 'Penetration Testing',
    overview: 'Learn how to legally hack top global platforms and earn bounties. Master OWASP Top 10 vulnerabilities, IDOR, SSRF, authentication bypasses, and professional vulnerability reporting.',
    rating: '5.0',
    level: 'Beginner',
    duration: '40 Hours',
    link: '/provided-course/bug-bounty-course/',
    logo: '/logos/bug-bounty.svg'
  },
  {
    id: 'vapt',
    title: 'VAPT',
    subtitle: 'Vulnerability Assessment & Penetration Testing',
    category: 'Penetration Testing',
    overview: 'Comprehensive corporate security testing combining automated vulnerability assessments with hands-on manual exploitation, risk analysis, and executive remediation reporting.',
    rating: '5.0',
    level: 'Advanced',
    duration: '40 Hours',
    link: '/provided-course/vapt/',
    logo: '/logos/vapt.svg'
  }
];

const categories = ["All", "Penetration Testing", "Networking", "Cloud Security"];

export default function CoursesGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? allCourses 
    : allCourses.filter(c => c.category === activeCategory);

  return (
    <section className={styles.coursesSection} style={{ padding: '3rem 2rem 6rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div className={styles.sectionHeader}>
          <div className={styles.pulseBadge}>PREMIUM TRAINING</div>
          <h2 className={styles.mainTitle}>Best Online Cybersecurity Training</h2>
          <p style={{ color: '#9ca3af', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Master real-world offensive defense with our globally recognized, expert-led training tracks.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div 
                key={course.id} 
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                {/* Course Icon centered in the middle with white background */}
                <div className={styles.centerIconContainer}>
                  <div className={styles.centerIconBox} title={course.subtitle}>
                    <img 
                      src={course.logo} 
                      alt={`${course.title} Logo`} 
                      width={60} 
                      height={60} 
                      style={{ objectFit: 'contain', width: '100%', height: '100%' }} 
                    />
                  </div>
                </div>

                {/* Course Name */}
                <h3 className={styles.cardTitle}>{course.title}</h3>

                {/* Highly Demanded Course Badge */}
                <div className={styles.badgeWrapper}>
                  <span className={styles.demandedBadge}>
                    Highly Demanded Course
                  </span>
                </div>
                
                {/* Course Overview */}
                <p className={styles.cardDesc}>
                  <strong className={styles.descPrefix}>Course Overview: </strong>
                  {course.overview}
                </p>
                
                {/* Stars with Rating */}
                <div className={styles.ratingRow}>
                  <div className={styles.stars} aria-label={`${course.rating} out of 5 stars`}>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#facc15">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className={styles.ratingText}>{course.rating}</span>
                </div>
                
                {/* Meta stats */}
                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>{course.level}</span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.metaItem}>{course.duration}</span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.metaItem} style={{ color: '#fc1616' }}>{course.category}</span>
                </div>
                
                {/* Action Footer: Centered with rounded edges */}
                <div className={styles.cardFooter}>
                  <Link href={course.link} className={styles.cardLink} aria-label={`Explore ${course.title}`}>
                    <span>Explore Course</span>
                    <span className={styles.cardArrow}>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
      </div>
      
      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>Need Guidance on Choosing the Right Track?</h3>
        <p className={styles.ctaDesc}>Talk with our senior cybersecurity career consultants for a customized roadmap.</p>
        <Link href="/contact-us" className="btn-primary" style={{ padding: '0.9rem 2.5rem', display: 'inline-block', marginTop: '1rem' }}>
          Consult an Advisor
        </Link>
      </div>
    </section>
  );
}
