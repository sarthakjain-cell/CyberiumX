import type { Metadata } from 'next';
import GlobalServicesClient from './GlobalServicesClient';

export const metadata: Metadata = {
  title: "Global Cybersecurity Services & Training | CyberiumX",
  description: "Providing elite cybersecurity training and robust security solutions to businesses, governments, and individuals across Australia, Canada, the UK, Germany, and worldwide.",
  alternates: {
    canonical: "https://cyberiumx.com/global-services",
  },
};

const globalCourses = [
  { title: "Ethical Hacking Training", description: "Master the fundamentals of ethical hacking. Learn how to identify, exploit, and secure vulnerabilities in enterprise systems using real-world scenarios." },
  { title: "CEH (Certified Ethical Hacker) Training", description: "Get prepared for the CEH certification. This comprehensive training covers advanced footprinting, network scanning, and system hacking techniques." },
  { title: "OSCP Training", description: "Rigorous, hands-on training preparing you for the Offensive Security Certified Professional exam. Focuses exclusively on practical penetration testing." },
  { title: "Web Application Penetration Testing", description: "Deep dive into securing web applications. Learn to discover and exploit OWASP Top 10 vulnerabilities like SQLi, XSS, and CSRF." },
  { title: "Network Penetration Testing", description: "Learn to secure enterprise networks. Covers advanced routing protocols, wireless security, and exploiting network misconfigurations." },
  { title: "Bug Bounty Training", description: "Learn how to legally hack and get paid. Discover methodologies for finding high-severity bugs in major platforms and bug bounty programs." },
  { title: "Kali Linux Training", description: "Master the industry-standard penetration testing operating system. Learn to utilize hundreds of built-in security and forensics tools." }
];

const globalServices = [
  { title: "Website security testing", description: "Comprehensive security audits of your web applications to uncover vulnerabilities before malicious actors can exploit them." },
  { title: "Network security assessment", description: "Deep analysis of your internal and external network infrastructure to identify misconfigurations and weak points." },
  { title: "Vulnerability assessment", description: "Automated and manual scanning of your digital assets to catalog and prioritize security flaws for remediation." },
  { title: "Penetration testing", description: "Simulated cyber attacks on your organization's systems to evaluate the effectiveness of your security controls." },
  { title: "Social media security", description: "Protect your brand and executives from social engineering, account takeover, and OSINT-based targeted attacks." }
];

export default function GlobalServicesPage() {
  return <GlobalServicesClient courses={globalCourses} services={globalServices} />;
}
