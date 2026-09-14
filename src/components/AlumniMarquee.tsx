"use client";

import { motion } from "framer-motion";
import styles from "./AlumniMarquee.module.css";

const companies = [
  { name: "Google", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg", brandColor: "#4285F4" },
  { name: "AWS", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", brandColor: "#FF9900" },
  { name: "Microsoft", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", brandColor: "#00A4EF" },
  { name: "Cisco", logoUrl: "https://cdn.simpleicons.org/cisco/1BA0D7", brandColor: "#1BA0D7" },
  { name: "Palo Alto", logoUrl: "https://cdn.simpleicons.org/paloaltonetworks/F04E23", brandColor: "#F04E23" },
  { name: "Cloudflare", logoUrl: "https://cdn.simpleicons.org/cloudflare/F38020", brandColor: "#F38020" },
  { name: "Intel", logoUrl: "https://cdn.simpleicons.org/intel/0071C5", brandColor: "#0071C5" }
];

export default function AlumniMarquee() {
  return (
    <section className={styles.marqueeSection}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.marqueeTitle}>Our Alumni Secure Infrastructure At</h2>
        
        <div className={styles.marqueeContainer}>
          {/* First set */}
          <div className={styles.marqueeContent}>
            {companies.map((company, index) => (
              <div key={index} className={styles.logoItem}>
                {company.logoUrl ? (
                  <img src={company.logoUrl} alt={`${company.name} logo`} />
                ) : (
                  <span className={styles.textBadge}>{(company as any).iconText || company.name.substring(0,2)}</span>
                )}
                <span style={{ color: company.brandColor }}>{company.name}</span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless looping */}
          <div className={styles.marqueeContent}>
            {companies.map((company, index) => (
              <div key={`dup-${index}`} className={styles.logoItem}>
                {company.logoUrl ? (
                  <img src={company.logoUrl} alt={`${company.name} logo`} />
                ) : (
                  <span className={styles.textBadge}>{(company as any).iconText || company.name.substring(0,2)}</span>
                )}
                <span style={{ color: company.brandColor }}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
