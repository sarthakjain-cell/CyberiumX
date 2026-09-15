"use client";

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const Star = ({ size = 18, color = "#ff1616", fill = "#ff1616" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const testimonials = [
  {
    name: "Zeeshan Ahmed",
    role: "Security Analyst",
    text: "I highly recommend the CyberiumX Ethical Hacking course to anyone aspiring to build a career in cybersecurity. The hands-on labs provided essential practical experience."
  },
  {
    name: "Nelson Fadeh",
    role: "Penetration Tester",
    text: "The CyberiumX Bug Bounty course went beyond my expectations. The instructors were highly knowledgeable and passionate about cybersecurity."
  },
  {
    name: "Max J",
    role: "SOC Lead",
    text: "Enrolling in the CyberiumX OSCP+ course was a game-changer for my career. The curriculum covered every key aspect and the hands-on labs were invaluable."
  },
  {
    name: "Addae Prince",
    role: "Security Engineer",
    text: "The CEH training material was exceptional! I was thrilled to learn various techniques for identifying and exploiting system vulnerabilities."
  },
  {
    name: "Aarav Sharma",
    role: "Cybersecurity Specialist",
    text: "I recently attended the Crash Course on Ethical Hacking Practicals offered by CyberiumX. It was packed with real-world scenarios and hands-on labs."
  },
  {
    name: "Shikha Verma",
    role: "Security Auditor",
    text: "I recently completed the eJPT course. The experience was phenomenal. The course provided a perfect blend of theoretical knowledge and hands-on exercises."
  },
  {
    name: "Rohan Gupta",
    role: "Red Teamer",
    text: "The Network Penetration Testing labs were top-tier. Simulating real active directory attacks gave me the confidence to crack my professional certs!"
  },
  {
    name: "Emily Chen",
    role: "AppSec Engineer",
    text: "The Web Application Security course gave me in-depth mastery over OWASP Top 10 vulnerabilities. CyberiumX's mentors are world-class."
  },
  {
    name: "Karthik Nair",
    role: "Cloud Security Architect",
    text: "CyberiumX provided the best practical exposure for Cloud Hacking. The virtual cyber ranges felt exactly like real enterprise environments."
  },
  {
    name: "Tariq Mansoor",
    role: "Incident Responder",
    text: "The Incident Response & Forensics track exceeded all expectations. CyberiumX gave me practical skills I use daily in my security operations center."
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>STUDENT FEEDBACK</span>
          <h2 className={styles.title}>What <span className={styles.highlightText}>Our Learners Say</span></h2>
          <p className={styles.subtitle}>Real stories from cybersecurity professionals and students trained by CyberiumX.</p>
        </div>
      </div>

      {/* Infinite Moving Marquee Track */}
      <div className={styles.marqueeTrackWrapper}>
        <div className={styles.marqueeTrack}>
          {/* First set of 10 reviews */}
          <div className={styles.marqueeGroup}>
            {testimonials.map((t, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>{t.name.substring(0, 2)}</div>
                  <div>
                    <h4 className={styles.name}>{t.name}</h4>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} size={16} />
                  ))}
                </div>
                <p className={styles.text}>"{t.text}"</p>
              </div>
            ))}
          </div>

          {/* Duplicated set of 10 reviews for seamless infinite loop */}
          <div className={styles.marqueeGroup}>
            {testimonials.map((t, idx) => (
              <div key={`dup-${idx}`} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>{t.name.substring(0, 2)}</div>
                  <div>
                    <h4 className={styles.name}>{t.name}</h4>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} size={16} />
                  ))}
                </div>
                <p className={styles.text}>"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
