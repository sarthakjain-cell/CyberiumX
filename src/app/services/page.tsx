"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Services.module.css';

const layers = [
  {
    title: "Layer 1 – Security Auditing",
    desc: "Security auditing serves as the foundation of strong cybersecurity. Before organizations can defend themselves effectively, they must understand their current security posture. A security audit provides a comprehensive evaluation of existing systems, policies, and infrastructure.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: "Layer 2 – Penetration Testing",
    desc: "Simulating real-world cyberattacks to evaluate the effectiveness of security defenses. Our professionals act like attackers, attempting to exploit vulnerabilities within an organization’s systems before malicious hackers do.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "Layer 3 – Website Security Protection",
    desc: "Websites are among the most common targets. We help businesses secure their websites by conducting vulnerability assessments and recommending security improvements against SQL injection, XSS, and broken authentication.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    )
  },
  {
    title: "Layer 4 – Social Media Security",
    desc: "Protecting brand identity and customer trust. These services include account security audits, brand impersonation monitoring, and secure login configurations to prevent hijacking.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  {
    title: "Layer 5 – Network Security Assessment",
    desc: "Corporate networks are often targeted to gain unauthorized access to internal systems. We conduct detailed network security assessments to identify weaknesses in routers, switches, and firewalls.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    )
  },
  {
    title: "Layer 6 – Employee Security Awareness",
    desc: "Human behavior plays a critical role in cybersecurity. We provide awareness training programs that educate employees about common threats such as phishing, social engineering, and password security.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Layer 7 – Continuous Security Monitoring",
    desc: "Cybersecurity is an ongoing process. We provide ongoing security monitoring, vulnerability assessments, incident response support, and threat analysis to detect suspicious activities early.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <div className="container">
      <section className={styles.servicesHero}>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={styles.title}>7X-Security</h1>
          <p className={styles.subtitle}>
            The CyberiumX 7-Layer Cybersecurity Protection Framework, designed to provide comprehensive protection against modern cyber threats.
          </p>
        </motion.div>

        <div className={styles.articleContent}>
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.textSection}
          >
            <h2>Why Every Business is a Target Today</h2>
            <p>
              Think of cybersecurity like protecting a building. If a building has only one door lock but dozens of windows left open, intruders will simply find another way inside. Businesses may install antivirus software or a firewall and assume they are safe, but attackers rarely rely on a single method.
            </p>
            <p>
              Studies show that 68% of security breaches involve human error, demonstrating how attackers often manipulate people rather than just technology. In many cases, cybercriminals simply trick employees into revealing login credentials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.textSection}
          >
            <h2>Why Businesses Need Multi-Layer Cybersecurity Protection</h2>
            <p>
              Traditional security approaches usually focus on a single protection point, such as blocking malware or filtering network traffic. Unfortunately, cybercriminals rarely attack through just one channel. They combine multiple techniques to bypass defenses.
            </p>
            <p>
              Cybersecurity experts therefore recommend adopting defense-in-depth strategies, also known as layered security models. This approach ensures that security measures are applied at multiple levels—including infrastructure, applications, users, networks, and monitoring systems.
            </p>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={styles.cardIcon}>
                {layer.icon}
              </div>
              <h3 className={styles.cardTitle}>{layer.title}</h3>
              <p className={styles.cardDesc}>{layer.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.textSection}
          style={{ marginTop: '4rem' }}
        >
          <h2>Benefits of CyberiumX 7X Cybersecurity Protection</h2>
          <p>
            Organizations that implement CyberiumX’s security framework gain several advantages. First, they achieve comprehensive protection against multiple attack vectors, reducing the likelihood of successful cyberattacks. Second, businesses improve their compliance with data protection regulations and industry standards.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
             <Link href="/contact-us" className="btn-primary">Book a Demo</Link>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
