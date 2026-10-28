"use client";

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const Star = ({ size = 16, color = "#fbbf24", fill = "#fbbf24" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

import { testimonials } from "@/data/testimonials";

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
