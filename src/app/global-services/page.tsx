"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../services/Services.module.css'; // Reuse services styling

const globalCourses = [
  "Ethical Hacking Training",
  "CEH (Certified Ethical Hacker) Training",
  "OSCP Training",
  "Web Application Penetration Testing",
  "Network Penetration Testing",
  "Bug Bounty Training",
  "Kali Linux Training"
];

const globalServices = [
  "Website security testing",
  "Network security assessment",
  "Vulnerability assessment",
  "Penetration testing",
  "Social media security"
];

export default function GlobalServicesPage() {
  return (
    <div className="container">
      <section className={styles.servicesHero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Global Services</h1>
          <p className={styles.subtitle}>
            Cybersecurity Training & Security Services Worldwide
          </p>
        </motion.div>

        <div className={styles.articleContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.textSection}
          >
            <p>
              In today’s rapidly evolving digital world, cybersecurity has become a global priority. Businesses, governments, and individuals rely heavily on technology, making them increasingly vulnerable to cyber threats. From ransomware attacks to data breaches, organizations across the world are facing serious security challenges that require skilled professionals and strong security solutions.
            </p>
            <p>
              Recognizing the growing global demand for cybersecurity expertise, CyberiumX is proud to announce the expansion of its cybersecurity training and security services to multiple countries around the world. With a strong reputation for delivering practical and industry-focused cybersecurity education, CyberiumX is now providing training and security solutions to students and organizations in countries such as Australia, Canada, the United Kingdom, Germany, and many others.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.textSection}
          >
            <h2>The Growing Global Need for Cybersecurity</h2>
            <p>
              Cybercrime is increasing at an alarming rate across the globe. Organizations in almost every industry—including finance, healthcare, government, and technology—are constantly targeted by cyber attackers seeking to exploit vulnerabilities in networks and applications.
            </p>
            <p>
              Countries such as the United States, the United Kingdom, Canada, Australia, and Germany have witnessed a sharp rise in cyber attacks in recent years. As a result, the demand for skilled cybersecurity professionals has grown dramatically. Companies are actively searching for experts who can identify vulnerabilities, perform penetration testing, and strengthen their security infrastructure.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.textSection}
          >
            <h2>Global Cybersecurity Training Programs</h2>
            <p>
              CyberiumX offers a wide range of cybersecurity courses designed for beginners, IT professionals, and aspiring ethical hackers. These training programs focus on practical learning and real-world scenarios to help students build strong technical expertise.
            </p>
            <ul style={{ color: '#9ca3af', lineHeight: '1.8', margin: '1rem 0 2rem 2rem' }}>
              {globalCourses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.textSection}
          >
            <h2>Professional Cybersecurity Services for Businesses</h2>
            <p>
              In addition to cybersecurity training, CyberiumX also provides professional security services to organizations across the globe. Businesses today must take proactive steps to secure their digital infrastructure, and CyberiumX helps them achieve this goal through expert security assessments.
            </p>
            <ul style={{ color: '#9ca3af', lineHeight: '1.8', margin: '1rem 0 2rem 2rem' }}>
              {globalServices.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
               <Link href="/contact-us" className="btn-primary">Get Started</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
