"use client";

import { motion } from "framer-motion";
import styles from "./StandOut.module.css";
const CheckCircle = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const features = [
  "Intensive Hands-On Training",
  "Industry-Recognized Global Certifications",
  "Virtual Lab Practice & Cyber Ranges",
  "CTF (Capture The Flag) Challenges",
  "Comprehensive Course Material",
  "Expert-Led Training by Elite Hackers",
  "Complimentary High-Quality E-Learning Access",
  "Exam Prep Mastery & Practice Tests",
  "Hands-on Cybersecurity Toolkit & Playbooks",
  "Mock Interviews & Career Placement Support",
  "Exam Success Strategy & Mentorship",
  "24/7 Dedicated Mentor & Alumni Support Network"
];

export default function StandOut() {
  return (
    <section className={styles.standOutSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.highlightBadge}>
            <span className={styles.fireIcon}>⚡</span> WHY CHOOSE US
          </div>
          <h2 className={styles.title}>
            What Makes <span className={styles.gradientHighlight}>CyberiumX Training Stand Out?</span>
          </h2>
          <p className={styles.subtitle}>
            Empowering next-generation security leaders with real-world cyber ranges, hands-on toolkits, and elite mentorship.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className={styles.iconBox}>
                <CheckCircle size={24} color="#ff1616" />
              </div>
              <span className={styles.featureText}>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
