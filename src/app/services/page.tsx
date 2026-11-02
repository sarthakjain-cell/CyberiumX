import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './Services.module.css';

export const metadata: Metadata = {
  title: "7X-Security with CyberiumX | 7-Layer Cybersecurity Protection Framework",
  description: "Explore the CyberiumX 7-Layer Cybersecurity Protection Framework: Security Auditing, Penetration Testing, Website Security, Social Media Security, Network Security, Employee Awareness, and Continuous Monitoring.",
  alternates: {
    canonical: "https://cyberiumx.com/services",
  },
};

const layers = [
  {
    title: "Layer 1 – Security Auditing",
    desc: "Security auditing serves as the foundation of strong cybersecurity. Before organizations can defend themselves effectively, they must understand their current security posture. A security audit provides a comprehensive evaluation of existing systems, policies, and infrastructure. CyberiumX conducts detailed security audits that analyze every aspect of an organization’s digital environment.",
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
    title: "Layer 2 – Penetration Testing (Pentesting)",
    desc: "Penetration testing, often referred to as ethical hacking, involves simulating real-world cyberattacks to evaluate the effectiveness of security defenses. CyberiumX security professionals act like attackers, attempting to exploit vulnerabilities within an organization’s systems across networks, web applications, APIs, and cloud.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "Layer 3 – Website Security Protection",
    desc: "Websites are among the most common targets for cyber attackers because they are publicly accessible and often connected to sensitive databases. CyberiumX helps businesses secure their websites against SQL injection, cross-site scripting (XSS), broken authentication, and insecure file uploads.",
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
    desc: "CyberiumX provides specialized social media security services that protect brand identity and customer trust. These services include account security audits, brand impersonation monitoring, and secure login configurations so attackers cannot misuse company profiles.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  {
    title: "Layer 5 – Network Security Assessment",
    desc: "Corporate networks are often targeted by attackers attempting to gain unauthorized access to internal systems. CyberiumX conducts detailed network security assessments to identify weaknesses in routers, switches, firewalls, and internal configurations.",
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
    title: "Layer 6 – Employee Security Awareness Training",
    desc: "Technology alone cannot protect organizations from cyber threats. CyberiumX provides cybersecurity awareness training programs that educate employees about common threats such as phishing, social engineering, and password security so they become the first line of defense.",
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
    title: "Layer 7 – Continuous Security Monitoring and Support",
    desc: "Cybersecurity is not a one-time task; it is an ongoing process. CyberiumX provides ongoing security monitoring, vulnerability assessments, incident response support, and threat analysis, allowing businesses to detect suspicious activities early and respond quickly.",
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
        <div className={styles.header}>
          <h1 className={styles.title}>7X-Security with CyberiumX</h1>
          <p className={styles.subtitle}>
            The CyberiumX 7-Layer Cybersecurity Protection Framework, designed to provide comprehensive protection against modern cyber threats.
          </p>
        </div>

        {/* Interactive 7-Layer Cards Grid */}
        <div className={styles.grid}>
          {layers.map((layer, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                {layer.icon}
              </div>
              <h3 className={styles.cardTitle}>{layer.title}</h3>
              <p className={styles.cardDesc}>{layer.desc}</p>
            </div>
          ))}
        </div>

        {/* Full Official 7X-Security Content */}
        <div className={styles.articleContent} style={{ maxWidth: '960px' }}>
          <div className={styles.textSection}>
            <h2>7X-Security Overview</h2>
            <p>
              The digital world has transformed how businesses operate. Organizations now rely heavily on websites, cloud systems, digital payments, and social media platforms to communicate with customers and run operations. While this digital transformation creates massive opportunities, it also opens doors for cybercriminals who constantly search for weaknesses in systems. Cybersecurity has therefore become one of the most important priorities for companies across the world.
            </p>
            <p>
              Recent statistics show how serious the situation has become. In 2025 alone, 12,195 confirmed data breaches were recorded globally, the highest ever reported. Cyberattacks now occur approximately every 39 seconds worldwide, affecting businesses of all sizes. Even more concerning is the financial impact—the average global cost of a data breach is around $4.4 million, which can cripple small and medium businesses.
            </p>
            <p>
              Experts also estimate that cybercrime could cost the global economy $10.5 trillion annually by 2025, making it one of the largest economic threats in the world today. These numbers highlight a simple truth: cyber threats are not slowing down; they are evolving faster than ever. Attackers are using advanced technologies such as artificial intelligence, automated hacking tools, and sophisticated social engineering tactics to compromise systems.
            </p>
            <p>
              Businesses today face threats ranging from ransomware attacks and phishing scams to credential theft and cloud misconfigurations. Many organizations believe they are too small to be targeted, but in reality, cybercriminals often prefer smaller companies because they tend to have weaker security measures. This is exactly why companies need a structured and layered cybersecurity strategy that protects every digital asset within their ecosystem.
            </p>
          </div>

          <div className={styles.textSection}>
            <h2>Why Every Business is a Target Today</h2>
            <p>
              Think of cybersecurity like protecting a building. If a building has only one door lock but dozens of windows left open, intruders will simply find another way inside. The same principle applies to cybersecurity. Businesses may install antivirus software or a firewall and assume they are safe, but attackers rarely rely on a single method. Instead, they exploit multiple vulnerabilities simultaneously.
            </p>
            <p>
              Modern cyber attackers target businesses through several entry points. Websites with coding vulnerabilities can allow hackers to inject malicious scripts or steal sensitive data. Social media accounts can be hijacked through phishing attacks or weak passwords, damaging brand reputation. Corporate networks can be infiltrated through misconfigured routers or insecure remote access systems. Even employees themselves can unknowingly become gateways for cyberattacks by clicking on malicious links or downloading infected files.
            </p>
            <p>
              Studies show that 68% of security breaches involve human error, demonstrating how attackers often manipulate people rather than just technology. In many cases, cybercriminals do not need advanced hacking skills; they simply trick employees into revealing login credentials or sensitive information.
            </p>
            <p>
              As businesses expand their digital presence through cloud computing, mobile applications, and third-party integrations, the attack surface continues to grow. A single vulnerability in any system component can compromise the entire organization. This is why relying on a single security solution is no longer enough. Companies must adopt a multi-layer cybersecurity approach, ensuring that even if one defense fails, other layers continue protecting the organization.
            </p>
          </div>

          <div className={styles.textSection}>
            <h2>Why Businesses Need Multi-Layer Cybersecurity Protection</h2>
            <p>
              For many years, organizations relied on traditional security solutions such as antivirus software, firewalls, or intrusion detection systems. While these tools remain important, they are no longer sufficient on their own. Cyber attackers today operate like highly organized businesses with specialized tools, automated attack frameworks, and global networks.
            </p>
            <p>
              Traditional security approaches usually focus on a single protection point, such as blocking malware or filtering network traffic. Unfortunately, cybercriminals rarely attack through just one channel. They combine multiple techniques to bypass defenses.
            </p>
            <p>
              Another limitation of traditional security systems is that they often detect threats only after an attack has already begun. By the time an organization realizes something is wrong, sensitive data may already have been stolen or encrypted by ransomware. This reactive approach makes it difficult for companies to stay ahead of attackers.
            </p>
            <p>
              Cybersecurity experts therefore recommend adopting defense-in-depth strategies, also known as layered security models. This approach ensures that security measures are applied at multiple levels—including infrastructure, applications, users, networks, and monitoring systems. Even if one layer is bypassed, the next layer continues to protect critical systems.
            </p>
          </div>

          <div className={styles.textSection}>
            <h2>Common Cyber Attack Vectors Targeting Businesses</h2>
            <p>
              Modern cyber attacks use a wide range of techniques, many of which exploit weaknesses across different parts of a company&apos;s digital infrastructure. Some of the most common attack vectors include:
            </p>
            <div style={{ margin: '1.75rem 0', textAlign: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://cyberiumx.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-14-2026-12_50_01-PM-e1773478170164-1024x425.png" 
                alt="Attack vector and their impact" 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
            <p>
              These attack vectors demonstrate why cybersecurity cannot rely on just one defense mechanism. Businesses must protect their networks, applications, employees, digital platforms, and monitoring systems simultaneously.
            </p>
            <p>
              This is where CyberiumX introduces its 7-Layer Cybersecurity Protection Framework, known as <strong>7-x Security by CyberiumX</strong>, designed to provide comprehensive protection against modern cyber threats.
            </p>
          </div>

          <div className={styles.textSection}>
            <h2>Overview of CyberiumX 7X Protection Framework &amp; Key Objectives</h2>
            <p>
              Layered cybersecurity works much like the security system of a modern airport. Before passengers reach the aircraft, they pass through multiple checkpoints—identity verification, baggage screening, body scanning, and security patrols. Even if one control fails, others continue protecting the system.
            </p>
            <p>
              The primary goal of this framework is not just to react to cyberattacks but to prevent them before they occur. CyberiumX focuses on identifying vulnerabilities early and strengthening defenses proactively. The framework aims to achieve several objectives:
            </p>
            <ul style={{ color: '#d1d5db', margin: '1rem 0 1.5rem 1.5rem', lineHeight: '1.8', fontSize: '1.08rem' }}>
              <li>Detect hidden vulnerabilities across systems</li>
              <li>Strengthen network and application security</li>
              <li>Protect brand identity across digital platforms</li>
              <li>Educate employees about cyber threats</li>
              <li>Continuously monitor systems for suspicious activity</li>
            </ul>
            <div style={{ margin: '1.75rem 0', textAlign: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://cyberiumx.com/wp-content/uploads/2026/03/aud.png" 
                alt="Key Components of a Security Audit" 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
            <p><strong style={{ color: '#fff' }}>Key Components of a Security Audit:</strong></p>
            <ul style={{ color: '#d1d5db', margin: '0.75rem 0 1.5rem 1.5rem', lineHeight: '1.8', fontSize: '1.08rem' }}>
              <li><strong>Infrastructure Security Assessment</strong> – Evaluating servers, networks, and systems for weaknesses.</li>
              <li><strong>Vulnerability Scanning</strong> – Identifying known security flaws in software or configurations.</li>
              <li><strong>Policy Evaluation</strong> – Reviewing security policies and procedures.</li>
              <li><strong>Risk Assessment</strong> – Determining the potential impact of vulnerabilities.</li>
            </ul>
          </div>

          <div className={styles.textSection}>
            <h2>Benefits of CyberiumX 7X Cybersecurity Protection &amp; Conclusion</h2>
            <p>
              Organizations that implement CyberiumX’s security framework gain several advantages. First, they achieve comprehensive protection against multiple attack vectors, reducing the likelihood of successful cyberattacks. Second, businesses improve their compliance with data protection regulations and industry standards.
            </p>
            <p>
              Another important benefit is increased customer trust. When organizations demonstrate strong cybersecurity practices, clients feel more confident sharing sensitive information and conducting business online. CyberiumX combines cybersecurity expertise, ethical hacking techniques, and real-world experience to protect organizations from cyber threats.
            </p>
            <p>
              Cyber threats are growing more sophisticated every year. Businesses that rely solely on basic security tools risk becoming easy targets for cybercriminals. A multi-layer cybersecurity strategy is no longer optional—it is essential. CyberiumX offers a comprehensive 7-Layer Cybersecurity Protection Framework that secures every part of an organization’s digital ecosystem.
            </p>
          </div>

          <div className={styles.textSection}>
            <h2>FAQs</h2>
            <p><strong style={{ color: '#fff' }}>1. What is multi-layer cybersecurity protection?</strong><br/>Multi-layer cybersecurity protection involves implementing several security measures across different systems to defend against cyber threats.</p>
            <p><strong style={{ color: '#fff' }}>2. Why is penetration testing important?</strong><br/>Penetration testing helps organizations identify vulnerabilities before attackers exploit them.</p>
            <p><strong style={{ color: '#fff' }}>3. How often should businesses perform security audits?</strong><br/>Most cybersecurity experts recommend conducting security audits at least once a year or after major infrastructure changes.</p>
            <p><strong style={{ color: '#fff' }}>4. Can small businesses benefit from cybersecurity services?</strong><br/>Yes, small businesses are often targeted by cybercriminals and require strong security measures.</p>
            <p><strong style={{ color: '#fff' }}>5. How does CyberiumX help organizations stay secure?</strong><br/>CyberiumX provides security auditing, penetration testing, website security, social media protection, network security assessments, employee training, and continuous monitoring.</p>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/contact-us" className="btn-primary">Book a Demo</Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
