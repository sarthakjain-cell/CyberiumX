import type { Metadata } from 'next';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: "Reviews & Frequently Asked Questions | CyberiumX",
  description: "Read verified student reviews and find answers to common questions about CyberiumX ethical hacking courses, CEH, OSCP certification, and enrollment.",
  alternates: {
    canonical: "https://cyberiumx.com/faq",
  },
};

const reviews = [
  {
    name: "Zeeshan Ahmed",
    review: "I highly recommend the CyberiumX Ethical Hacking course to anyone aspiring to build a career in cybersecurity. The course is well-structured, covering everything from network security to ethical hacking techniques. The hands-on labs and simulations provided essential practical experience, making it an invaluable learning opportunity in this field."
  },
  {
    name: "Nelson Fadeh",
    review: "The CyberiumX Bug Bounty course went beyond my expectations. The content was current and relevant, and the instructors were not only highly knowledgeable but also deeply passionate about cybersecurity. The real-world scenarios integrated into the course offered practical experience in identifying and mitigating security threats."
  },
  {
    name: "Max J",
    review: "Enrolling in the CyberiumX OSCP+ course was a game-changer for my career. The well-structured curriculum covered every key aspect of cybersecurity, while the hands-on labs provided invaluable practical experience. With expert instructors guiding the way, I now feel confident in tackling the ever-evolving challenges of the cybersecurity landscape."
  },
  {
    name: "Addae Prince",
    review: "The CEH training material was exceptional! It was packed with valuable knowledge, and I was thrilled to learn various techniques for identifying and exploiting system vulnerabilities.What an incredible learning journey! Thank you, CyberiumX."
  },
  {
    name: "Aarav",
    review: "I recently attended the Crash Course on Ethical Hacking Practicals offered by CyberiumX, and it exceeded all my expectations. This intensive course was packed with real-world scenarios, practical exercises, and hands-on labs that provided me with a strong foundation in ethical hacking."
  },
  {
    name: "Shikha",
    review: "I recently completed the eJPT (eLearnSecurity Junior Penetration Tester) course through CyberiumX, and I must say, the experience was phenomenal. From start to finish, the course was thoughtfully structured, providing a perfect blend of theoretical knowledge and hands-on practical exercises."
  },
  {
    name: "Andreas Samson",
    review: "Before starting the CEH training, I had some knowledge of Kali Linux, Networking, Wireshark, Nmap and other tools. However, CEH provided me with advanced training on these tools and introduced me to many more, such as Metasploit, Burp Suite, Hashcat Netcat, Zenmap, Nessus, and others."
  },
  {
    name: "Pearl",
    review: "As someone new to cybersecurity, I was nervous about where to start. CyberiumX made the learning process easy and enjoyable. The step-by-step guidance and 24/7 support are amazing. It’s the best investment I’ve made for my career!"
  },
  {
    name: "Duvalier Miafo",
    review: "I recently completed the Certified Ethical Hacking (CEH) course from CyberiumX, and it was an outstanding experience! The course provided a deep dive into ethical hacking methodologies, tools, and techniques, making it perfect for both beginners and professionals looking to strengthen their cybersecurity skills."
  },
  {
    name: "Ajit",
    review: "The OSCP training by CyberiumX provided a highly detailed and immersive learning experience. It introduced me to a wide range of advanced penetration testing tools, many of which were entirely new to me, significantly enhancing my technical proficiency. The hands-on labs and real-world scenarios ensured a practical, skill-oriented approach to learning."
  }
];

const faqs = [
  {
    question: "What is CyberiumX all about?",
    answer: "CyberiumX is an online learning platform focused on cybersecurity training. Our goal is to empower individuals with the knowledge and skills required to build successful careers in the cybersecurity industry. We provide structured courses, hands-on training, and mentorship programs to help learners stay ahead in the field."
  },
  {
    question: "Are the courses suitable for beginners?",
    answer: "Yes, CyberiumX offers courses for all skill levels, from absolute beginners to advanced cybersecurity professionals. Each course is designed to guide learners step-by-step through practical concepts."
  },
  {
    question: "What format are the courses delivered in?",
    answer: "Our courses consist of pre-recorded video lessons, hands-on practical assignments, downloadable resources, and live Q&A sessions to ensure interactive and flexible learning."
  },
  {
    question: "Do I get a certificate upon course completion?",
    answer: "Yes, CyberiumX provides a Certificate of Completion for every course finished, which you can showcase on your resume or LinkedIn profile to demonstrate your cybersecurity expertise."
  },
  {
    question: "How long do I have access to the course content?",
    answer: "Once enrolled, you get lifetime access to the course materials, including future updates, allowing you to learn at your own pace whenever you want."
  },
  {
    question: "Can I get a refund if I am not satisfied?",
    answer: "Yes, we offer a hassle-free money-back guarantee within the specified refund period. Please check our Refund Policy page for full details."
  },
  {
    question: "How can I get help if I run into issues during a course?",
    answer: "Our dedicated support team and student community are available 24/7 to assist you. You can post questions in the discussion forum or reach out to instructors directly."
  }
];

export default function FaqPage() {
  return <FaqClient reviews={reviews} faqs={faqs} />;
}
