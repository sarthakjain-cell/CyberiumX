"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Faq.module.css';

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
    question: "Why should you choose CyberiumX?",
    answer: "Industry-Focused Learning, Live Mentor-Guided Sessions, Hands-On Experience, 24/7 Learning Support, Comprehensive Career Assistance, and Self-Paced Learning Options."
  },
  {
    question: "Who can enroll in CyberiumX programs?",
    answer: "Anyone with an interest in cybersecurity can join our programs. Whether you are a student, working professional, or freelancer, our courses are designed to accommodate learners of all levels."
  },
  {
    question: "Is the CyberiumX training program suitable for beginners?",
    answer: "Yes! Our courses cater to both beginners and advanced learners. We offer foundational training for newcomers and specialized courses for those looking to enhance their expertise."
  },
  {
    question: "What happens if I miss a live session?",
    answer: "If you are unable to attend a session, you can access the recorded lecture anytime. This ensures you never miss out on important lessons."
  },
  {
    question: "Can I pursue CyberiumX training while working or studying?",
    answer: "Yes! Our programs are designed to be flexible, allowing you to balance learning with your job, studies, or other commitments."
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer: "Yes! Upon successfully completing any program, you will be awarded a globally recognized certification that can add value to your resume and career prospects."
  },
  {
    question: "Do I get direct mentorship throughout the course?",
    answer: "Yes! Our expert mentors will guide you throughout your learning journey, offering feedback, answering questions, and providing insights into real-world cybersecurity challenges."
  },
  {
    question: "Is there support for interview preparation?",
    answer: "Yes! We conduct mock interviews, provide resume-building assistance, and offer career coaching to prepare you for real-world job opportunities."
  },
  {
    question: "How does CyberiumX help students find jobs and internships?",
    answer: "We provide job placement support, share exclusive job listings, and connect students with industry professionals, alumni, and hiring partners to help them advance in their careers."
  }
];

export default function ReviewsAndFaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      {/* Reviews Section */}
      <section className={styles.faqSection} style={{ paddingBottom: '2rem' }}>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={styles.title}>What Our Learners Say</h1>
          <p className={styles.subtitle}>
            Discover why students around the world choose CyberiumX for their cybersecurity education.
          </p>
        </motion.div>

        <div className={styles.reviewsGrid}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className={styles.reviewCard}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={styles.reviewHeader}>
                <div className={styles.avatar}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.reviewerName}>{review.name}</h4>
                  <div className={styles.stars}>
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className={styles.reviewText}>
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className={styles.faqSection} style={{ paddingTop: '2rem' }}>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={styles.title}>Frequently Asked Questions</h1>
        </motion.div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.faqAnswer}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
