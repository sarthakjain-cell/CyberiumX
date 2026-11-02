import type { Metadata } from 'next';
import { Suspense } from 'react';
import GlobalServicesClient from './GlobalServicesClient';

export const metadata: Metadata = {
  title: "Global Services | Cybersecurity Training & Security Services Worldwide - CyberiumX",
  description: "CyberiumX provides practical and industry-focused cybersecurity training and security services to students and organizations in the USA, Australia, Canada, the United Kingdom, Germany, and worldwide.",
  alternates: {
    canonical: "https://cyberiumx.com/global-services",
  },
};

const globalCourses = [
  { 
    title: "1. Ethical Hacking Training", 
    description: "Ethical hacking is one of the most exciting and in-demand fields in cybersecurity. This course teaches students how hackers think and how security professionals can identify and fix vulnerabilities before attackers exploit them. Students learn techniques such as network scanning, vulnerability analysis, exploitation, and post-exploitation methods.",
    logo: "/logos/ethical-hacking.jpg",
    link: "/provided-course/ethical-hacking/"
  },
  { 
    title: "2. CEH (Certified Ethical Hacker) Training", 
    description: "CyberiumX provides comprehensive preparation for the globally recognized CEH certification. This course covers key topics such as system hacking, malware threats, social engineering attacks, and network security. The CEH certification is widely respected by organizations around the world and is often considered an essential credential for cybersecurity professionals.",
    logo: "/logos/CEH.png",
    link: "/provided-course/certified-ethical-hacker-cehv13-ai/"
  },
  { 
    title: "3. OSCP Training", 
    description: "The Offensive Security Certified Professional (OSCP) certification is known for its challenging hands-on examination. CyberiumX provides structured guidance and practical training to help students master advanced penetration testing techniques required to succeed in the OSCP exam.",
    logo: "/logos/OSCP.png",
    link: "/provided-course/oscp-course/"
  },
  { 
    title: "4. Web Application Penetration Testing", 
    description: "Web applications are among the most common targets for cyber attacks. In this course, students learn how to identify and exploit vulnerabilities in web applications, including issues listed in the OWASP Top 10. The training covers vulnerabilities such as SQL injection, cross-site scripting, authentication flaws, and more.",
    logo: "/logos/VAPT.webp",
    link: "/provided-course/vapt/"
  },
  { 
    title: "5. Network Penetration Testing", 
    description: "This course focuses on assessing and securing network infrastructure. Students learn how to discover network vulnerabilities, perform exploitation, and secure network environments against cyber attacks.",
    logo: "/logos/networking-ethical-hackers.webp",
    link: "/provided-course/networking-for-ethical-hackers-course/"
  },
  { 
    title: "6. Bug Bounty Training", 
    description: "Bug bounty programs allow ethical hackers to discover and report vulnerabilities in real-world applications and receive rewards. CyberiumX teaches students the methodologies and tools used by successful bug hunters to find security flaws and report them professionally.",
    logo: "/logos/bug-bounty.png",
    link: "/provided-course/bug-bounty-course/"
  },
  { 
    title: "7. Kali Linux Training", 
    description: "Kali Linux is one of the most powerful operating systems used by cybersecurity professionals. This training program helps students understand and use various security tools available in Kali Linux for penetration testing and vulnerability assessment.",
    logo: "/logos/kali-linux.webp",
    link: "/provided-course/kali-linux-course/"
  }
];

const globalServices = [
  { title: "Website security testing" },
  { title: "Network security assessment" },
  { title: "Vulnerability assessment" },
  { title: "Penetration testing" },
  { title: "Social media security" }
];

const globalCareers = [
  "Ethical Hacker",
  "Penetration Tester",
  "Security Analyst",
  "Cybersecurity Consultant",
  "Bug Bounty Hunter"
];

export default function GlobalServicesPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <GlobalServicesClient 
        courses={globalCourses} 
        services={globalServices} 
        careers={globalCareers}
      />
    </Suspense>
  );
}
