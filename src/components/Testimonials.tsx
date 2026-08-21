"use client";

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";
const Star = ({ size = 24, color = "currentColor", fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const testimonials = [
  {
    name: "Zeeshan Ahmed",
    text: "I highly recommend the CyberiumX Ethical Hacking course to anyone aspiring to build a career in cybersecurity. The hands-on labs provided essential practical experience."
  },
  {
    name: "Nelson Fadeh",
    text: "The CyberiumX Bug Bounty course went beyond my expectations. The instructors were highly knowledgeable and passionate about cybersecurity."
  },
  {
    name: "Max J",
    text: "Enrolling in the CyberiumX OSCP+ course was a game-changer for my career. The curriculum covered every key aspect and the hands-on labs were invaluable."
  },
  {
    name: "Addae Prince",
    text: "The CEH training material was exceptional! I was thrilled to learn various techniques for identifying and exploiting system vulnerabilities."
  },
  {
    name: "Aarav",
    text: "I recently attended the Crash Course on Ethical Hacking Practicals offered by CyberiumX. It was packed with real-world scenarios and hands-on labs."
  },
  {
    name: "Shikha",
    text: "I recently completed the eJPT course. The experience was phenomenal. The course provided a perfect blend of theoretical knowledge and hands-on exercises."
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>What Our Learners Say</h2>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <h4 className={styles.name}>{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
