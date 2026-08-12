"use client";

import { motion } from "framer-motion";
import styles from "./AlumniMarquee.module.css";

const companies = [
  { name: "Google", icon: "G" },
  { name: "Amazon Web Services", icon: "☁️" },
  { name: "Microsoft", icon: "⊞" },
  { name: "Deloitte", icon: "D" },
  { name: "IBM Security", icon: "IBM" },
  { name: "Cisco", icon: "🕸️" },
  { name: "CrowdStrike", icon: "🦅" },
  { name: "Palo Alto", icon: "🛡️" }
];

export default function AlumniMarquee() {
  return (
    <section className={styles.marqueeSection}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className={styles.marqueeTitle}>Our Alumni Secure Infrastructure At</h3>
        
        <div className={styles.marqueeContainer}>
          {/* First set */}
          <div className={styles.marqueeContent}>
            {companies.map((company, index) => (
              <div key={index} className={styles.logoItem}>
                <span className={styles.logoIcon}>{company.icon}</span>
                {company.name}
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless looping */}
          <div className={styles.marqueeContent}>
            {companies.map((company, index) => (
              <div key={`dup-${index}`} className={styles.logoItem}>
                <span className={styles.logoIcon}>{company.icon}</span>
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
