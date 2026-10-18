export interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  description: string;
  overview?: string;
  link: string;
  icon: string;
}

export const courses: Course[] = [
  {
    "id": 1,
    "title": "Certified Ethical Hacker CEHv13 AI",
    "category": "Penetration Testing",
    "level": "Intermediate",
    "duration": "50 Hours",
    "description": "The Certified Ethical Hacker- Artificial Intelligence (CEHv13- AI) course is one of the most important and demanding certification courses designed by the EC Council. This course provides all the skills required to be...",
    "overview": "The Certified Ethical Hacker- Artificial Intelligence (CEHv13- AI) course is one of the most important and demanding certification courses designed by the EC Council. This course provides all the skills required to become an Ethical Hacker and builds foundational knowledge for exploring Penetration Testing. It is a highly valuable and regarded certification in the Cyber Security domain. This new version includes Artificial Intelligence which empowers ethical hackers in securing modern networks. Its key topics include web application security, IoT, OT security, Cloud Computing, Malware Threats, Cryptography, and Network security. After completing the course, you will have proficiency in ethical hacking methodology and hands-on experience with popular tools like Nmap, Burp Suite, Metasploit Framework, Nessus, Hydra, Hashcat, and others.",
    "link": "/provided-course/certified-ethical-hacker-cehv13-ai/",
    "icon": "/logos/ceh.svg"
  },
  {
    "id": 2,
    "title": "CCNA Course",
    "category": "Networking",
    "level": "Beginner",
    "duration": "40 Hours",
    "description": "The Cisco Certified Network Associate (CCNAv1.1) course is a comprehensive training program framed to equip learners with the fundamental knowledge and practical skills required for modern IT and networking requiremen...",
    "overview": "The Cisco Certified Network Associate (CCNAv1.1) course is a comprehensive training program framed to equip learners with the fundamental knowledge and practical skills required for modern IT and networking requirements. The CCNA Certification serves as a strong foundation in the IT industry helping individuals build careers in network administration, cyber security, and IT infrastructure. The integration of Artificial Intelligence in the latest CCNAv1.1 has significantly enhanced its efficiency and adaptability. AI-driven insights help optimize network automation, security, and troubleshooting, making the certification more relevant to modern IT environments. Also, this detailed course covers fundamental networking concepts, Routing and Switching, and Wireless Networking.",
    "link": "/provided-course/ccna-course/",
    "icon": "/logos/ccna.svg"
  },
  {
    "id": 3,
    "title": "OSCP+ Course",
    "category": "Penetration Testing",
    "level": "Advanced",
    "duration": "100 Hours",
    "description": "The OffSec Certified Professional (OSCP+) course is a hands-on Penetration Testing Certification training that trains individuals for real-world assessments. It emphasizes identifying, exploiting, and mitigating vulne...",
    "overview": "The OffSec Certified Professional (OSCP+) course is a hands-on Penetration Testing Certification training that trains individuals for real-world assessments. It emphasizes identifying, exploiting, and mitigating vulnerabilities across diverse systems in networks. Key areas of this course cover information gathering, enumeration, initial access, privilege escalation, web exploitation, active directory attacks, and pivoting. This OSCP+ is renowned for its 48-hour certification exam demanding candidate’s persistence and deep understanding of ethical hacking concepts. It is highly valued for cyber security professional aiming to gain expertise in pentesting.",
    "link": "/provided-course/oscp-course/",
    "icon": "/logos/oscp.svg"
  },
  {
    "id": 4,
    "title": "Microsoft Azure Course",
    "category": "Cloud Security",
    "level": "Intermediate",
    "duration": "40 Hours",
    "description": "The Microsoft Azure Cloud training course is designed to advance candidates with the skills required to work with one of the most demanding and vibrant Cloud Computing platforms. This comprehensive training includes c...",
    "overview": "The Microsoft Azure Cloud training course is designed to advance candidates with the skills required to work with one of the most demanding and vibrant Cloud Computing platforms. This comprehensive training includes core Azure Services like computing, storage, security, networking, databases, and identity management after which the concepts of Azure Security and Penetration Testing will be covered. Participants will explore Azure best practices for Security and Penetration Testing, cost optimization tactics, and effective deployment strategies. Practical cloud skills will be reinforced through hands-on labs and real-world scenarios. By the end of the course, learners will gain a solid understanding of Azure architecture and how to secure and pen-test one.",
    "link": "/provided-course/microsoft-azure-course/",
    "icon": "/logos/azure.png"
  },
  {
    "id": 5,
    "title": "AWS Penetration Testing & Security",
    "category": "Cloud Security",
    "level": "Advanced",
    "duration": "30 Hours",
    "description": "The Amazon Web Services (AWS) Penetration Testing training course is designed to help candidates with the skills required to perform penetration testing on one of the most popular Cloud Computing platforms. This Pract...",
    "overview": "The Amazon Web Services (AWS) Penetration Testing training course is designed to help candidates with the skills required to perform penetration testing on one of the most popular Cloud Computing platforms. This Practical-focused training includes an overview of AWS Services like computing, storage, networking, databases, and security, after which we participants will explore the concepts of Penetration Testing on AWS services. Most organizations have misconfigured policies for AWS services such as S3, EC2, Lambda, VPC, RDS, EBS, etc., which attackers can exploit. So this course is designed to help you identify the misconfigurations in AWS-configured policies and help in understanding the underlying security architecture. Practical cloud pentesting skills will be reinforced through hands-on labs and real-world scenarios. By the end of the course, learners will gain a solid understanding of AWS architecture and how to secure it.",
    "link": "/provided-course/aws-penetration-testing-security/",
    "icon": "/logos/aws.svg"
  },
  {
    "id": 6,
    "title": "Amazon Web Services (AWS) Course",
    "category": "Cloud Security",
    "level": "Intermediate",
    "duration": "30 Hours",
    "description": "The Amazon Web Services (AWS) training course is designed to equip candidates with the skills required to work with one of the most popular Cloud Computing platforms. This comprehensive training includes core AWS Serv...",
    "overview": "The Amazon Web Services (AWS) training course is designed to equip candidates with the skills required to work with one of the most popular Cloud Computing platforms. This comprehensive training includes core AWS Services like computing, storage, security, networking, databases, and identity management. Participants will explore AWS best practices, cost optimization tactics, and effective deployment strategies. Practical cloud skills will be reinforced through hands-on labs and real-world scenarios. By the end of the course, learners will gain a solid understanding of AWS architecture and how to build one.",
    "link": "/provided-course/amazon-web-servicesaws-course/",
    "icon": "/logos/aws.svg"
  },
  {
    "id": 7,
    "title": "eJPTv2 Course",
    "category": "Penetration Testing",
    "level": "Beginner",
    "duration": "50 Hours",
    "description": "The eJPTv2 training course is designed to provide a strong foundation in Ethical Hacking and Penetration Testing by gaining hands-on experience in identifying and exploiting security vulnerabilities. Key topics of thi...",
    "overview": "The eJPTv2 training course is designed to provide a strong foundation in Ethical Hacking and Penetration Testing by gaining hands-on experience in identifying and exploiting security vulnerabilities. Key topics of this course include Linux & Windows basics, reconnaissance, scanning, enumeration, vulnerability assessment, exploitation, privilege escalation, and report writing. Exploring Capture The Flag (CTF) contests will help an individual to understand real-world examples. By the end of this course, candidates will be empowered with the hands-on skills required to conduct penetration tests, making it an excellent starting point for those pursuing a career in cyber security. Candidates will be prepared for appearing and clearing the eJPTv2 International certification exam.",
    "link": "/provided-course/ejptv2-course/",
    "icon": "/logos/ejpt.svg"
  },
  {
    "id": 8,
    "title": "Ethical Hacking",
    "category": "Penetration Testing",
    "level": "Beginner",
    "duration": "40 Hours",
    "description": "CyberiumX’s Ethical Hacking course is designed to help candidates gain the knowledge and skills required to become Ethical Hackers. This advanced training course will equip learners to identify, analyze, and mitigate...",
    "overview": "CyberiumX’s Ethical Hacking course is designed to help candidates gain the knowledge and skills required to become Ethical Hackers. This advanced training course will equip learners to identify, analyze, and mitigate cyber threats. Apart from ethical hacking, this course will also cover the basic concepts of Kali Linux Operating system and Networking which is required for learning ethical hacking concepts. You will cover the practical aspects of ethical hacking, as well as the fundamentals of advanced hacking concepts. Key topics covered are Ethical hacking and its phases, Malware, Web Application attacks, DOS attacks, Sniffing, Social Engineering, Mobile hacking, Cryptography, and Penetration Testing. By the end of this course, candidates will have hands-on experience with Ethical Hacking, Penetration Testing, and securing networks & systems from cyber-attacks.",
    "link": "/provided-course/ethical-hacking/",
    "icon": "/logos/ethical-hacking.svg"
  },
  {
    "id": 9,
    "title": "Kali Linux Course",
    "category": "Penetration Testing",
    "level": "Beginner",
    "duration": "20 Hours",
    "description": "Kali Linux is one of the most powerful distributions that we have for performing Ethical Hacking and Penetration Testing. This advanced training will help ethical hackers start their practical journey in this field. I...",
    "overview": "Kali Linux is one of the most powerful distributions that we have for performing Ethical Hacking and Penetration Testing. This advanced training will help ethical hackers start their practical journey in this field. In this course, we will cover the Command Line Interface (CLI) of Linux OS and perform various operations such as file management, user and group management, installing and uninstalling software, and exploring other commands related to ethical hacking. By the end of this course, students will have the skills to effectively use Kali Linux for ethical hacking and penetration testing, making it ideal for cybersecurity professionals, ethical hackers, and security enthusiasts.",
    "link": "/provided-course/kali-linux-course/",
    "icon": "/logos/kali.svg"
  },
  {
    "id": 10,
    "title": "Networking For Ethical Hackers Course",
    "category": "Networking",
    "level": "Beginner",
    "duration": "20 Hours",
    "description": "A strong foundation in networking is essential for anyone pursuing a career in ethical hacking. This comprehensive course provides an in-depth understanding of how networks function, covering key concepts such as vari...",
    "overview": "A strong foundation in networking is essential for anyone pursuing a career in ethical hacking. This comprehensive course provides an in-depth understanding of how networks function, covering key concepts such as various protocols, IP addressing, subnetting, and the OSI and TCP/IP models. It also explores critical security measures, including firewalls, VPNs, and IDS/IPS, to help secure network infrastructures. By developing expertise in network monitoring and analysis, ethical hackers can effectively identify, assess, and mitigate potential security threats, making them better equipped to protect systems from cyberattacks.",
    "link": "/provided-course/networking-for-ethical-hackers-course/",
    "icon": "/logos/networking.svg"
  },
  {
    "id": 11,
    "title": "Bug Bounty Course",
    "category": "Penetration Testing",
    "level": "Beginner",
    "duration": "40 Hours",
    "description": "The Bug Bounty Hunting course is designed to teach people the skills required to exploit, identify, and report security vulnerabilities in web applications. As the use of technology increases, ethical hackers play a v...",
    "overview": "The Bug Bounty Hunting course is designed to teach people the skills required to exploit, identify, and report security vulnerabilities in web applications. As the use of technology increases, ethical hackers play a vital role in safeguarding a company's systems by identifying threats before malicious hackers can exploit them. This detailed course will offer learners practical insights into hacking methodologies and vulnerability assessment. With hands-on labs and in-depth theoretical knowledge, participants will gain expertise in web application security testing, and API exploitation. This course will take you to experience popular bug bounty programs like HackerOne, Bugcrowd, and Open Bug Bounty. By the end of this course, participants will have the ability to analyze, exploit, and report vulnerabilities effectively, positioning themselves a valuable assets in cybersecurity.",
    "link": "/provided-course/bug-bounty-course/",
    "icon": "/logos/bug-bounty.svg"
  },
  {
    "id": 12,
    "title": "VAPT",
    "category": "Penetration Testing",
    "level": "Advanced",
    "duration": "40 Hours",
    "description": "VAPT training provides a wide understanding of Vulnerability Assessment (VA) and Penetration Testing (PT) methodologies used to identify, analyze, and exploit security weaknesses in networks, systems, and applications...",
    "overview": "VAPT training provides a wide understanding of Vulnerability Assessment (VA) and Penetration Testing (PT) methodologies used to identify, analyze, and exploit security weaknesses in networks, systems, and applications. Key topics covered are Vulnerability Assessment Methodologies & Tools, Penetration Testing Phases & Techniques, Network Security Testing & Exploitation, Web Application Security & OWASP Top 10, Post-Exploitation and Privilege Escalation, and finally Reporting & Documentation of Findings. By the end of the course, learners will be equipped with practical skills to conduct comprehensive security assessments, making them ready for roles like Penetration testers, Security analysts, or Ethical Hackers.",
    "link": "/provided-course/vapt/",
    "icon": "/logos/vapt.svg"
  }
];

export const categories = ["All", "Cloud Security", "Penetration Testing", "Networking"];
