import type { Metadata } from 'next';
import styles from './AboutPage.module.css';
import StandOut from '@/components/StandOut';
import TrustBadge from '@/components/TrustBadge';

export const metadata: Metadata = {
  title: "About Us | CyberiumX",
  description: "At CyberiumX, we are impassioned about Cyber Security and devoted to providing valuable information and resources to help individuals and organizations stay safe in the digital world.",
  alternates: {
    canonical: "https://cyberiumx.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Official About Us Hero & Overview */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div>
            <span className={styles.heroBadge}>About Us</span>
            <h1 className={styles.heroTitle}>About CyberiumX</h1>
            <div className={styles.heroDesc} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
              <p>
                At CyberiumX, we are impassioned about Cyber Security and devoted to providing valuable information and resources to help individuals and organizations stay safe in the digital world. Our goal is to demystify Cyber Security and empower our readers with the knowledge they need to protect themselves against evolving threats. CyberiumX is a trusted leader in Cyber Security training. Our mission is to equip Cyber Security professionals with practical skills and in-depth knowledge to help create a safer digital world. We provide top-quality training, certifications, degree programs, cyber ranges, and essential resources tailored to meet the needs of every Cyber Security professional.
              </p>
              <p>
                CyberiumX online training platform has instructors who are all recognized as certified experts and respected leaders in their fields. As the industry constantly evolves, so does the CyberiumX curriculum. Over the years, the course curriculum has grown to hold different courses, ranging from foundational courses for starters to highly advanced courses for seasoned security professionals. Having started its journey and mission, CyberiumX has rapidly grown over the years.
              </p>
              <p>
                CyberiumX has been implementing several technology-motivated training programs that provide Cyber Security Certifications and Courses Online. In addition to providing custom security programs, we offer comprehensive IT security training services in the areas of Cyber Security.
              </p>
              <p>
                We help the candidates in gaining knowledge in the pursuit of excellence. Cost-effectiveness, flexibility, and value-based delivery of courses make our services prominent in academia and the industry of Information Security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What makes CyberiumX training Stand Out? */}
      <StandOut />

      {/* Why Choose Us */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>
          Why <span style={{ color: '#ff1616' }}>Choose Us</span>
        </h2>
        
        <div className={styles.bentoGrid}>
          {/* Pillar 1 */}
          <div className={styles.bentoCard}>
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className={styles.valueTitle}>Expert-Led Training</h3>
            <ul className={styles.valueDesc} style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>Highly qualified, certified, and experienced corporate trainers</li>
              <li>Specialized in Information Security, Technical Education, and Advanced Technology Training</li>
              <li>Hands-on learning with real-world case studies and practical labs</li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className={styles.bentoCard}>
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <h3 className={styles.valueTitle}>Globally Recognized Certifications</h3>
            <ul className={styles.valueDesc} style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>Courses follow internationally recognized curriculum standards</li>
              <li>Registered and authorized certifications from global councils and authorities</li>
              <li>Industry-recognized credentials to boost your career worldwide</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className={styles.bentoCard}>
            <div className={styles.valueIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3 className={styles.valueTitle}>Strong Industry Presence</h3>
            <ul className={styles.valueDesc} style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>Trusted name in the Indian IT sector and international markets</li>
              <li>Vast global alumni network across various industries</li>
              <li>Commitment to equipping individuals with cutting-edge cybersecurity skills</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Vision & Our Mission */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Our Vision</div>
            <p className={styles.timelineDesc}>
              CyberiumX was established with the vision of offering practical training to students while continuously exploring new ways to enhance their technical and professional growth. Our goal is to empower individuals with the knowledge needed to secure their digital environment against the growing threats of cybercrime while providing in-depth technical insights into Cyber Security. By personalizing instruction to suit each learner’s unique needs, we ensure an effective and engaging learning experience. With the continuous support of our mentors and students, we strive to grow and achieve new milestones.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Our Mission</div>
            <p className={styles.timelineDesc}>
              Our mission is to empower individuals with Cyber Security knowledge and deliver training worldwide. We focus on addressing uncommon challenges by offering unique solutions. Our commitment lies in maintaining quality assurance with a professional approach, ensuring we meet the specific needs and interests of different market segments. We are committed to creating a supportive learning environment where every student feels confident in unlocking their full potential.
            </p>
          </div>

        </div>
      </section>

      {/* Justdial Accreditation & Awards */}
      <TrustBadge />

    </div>
  );
}
