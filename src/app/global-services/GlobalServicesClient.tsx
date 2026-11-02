"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { globalCountryPages } from '@/data/globalPages';
import { courses as allOfficialCourses } from '@/data/courses';
import styles from './GlobalServices.module.css';

interface CourseItem {
  title: string;
  description: string;
  logo?: string;
  link?: string;
}

interface ServiceItem {
  title: string;
}

export default function GlobalServicesClient({
  courses,
  services,
  careers
}: {
  courses: CourseItem[];
  services: ServiceItem[];
  careers: string[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const regionParam = searchParams.get('region') || 'worldwide';
  const viewParam = searchParams.get('view') || 'services';
  const [selectedRegion, setSelectedRegion] = useState<string>(regionParam);
  const [showCoursesGrid, setShowCoursesGrid] = useState<boolean>(viewParam === 'courses');

  useEffect(() => {
    const r = searchParams.get('region') || 'worldwide';
    const v = searchParams.get('view') || 'services';
    setSelectedRegion(r);
    setShowCoursesGrid(v === 'courses');
  }, [searchParams]);

  const handleProseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href) return;
    if (href.startsWith('/global-services')) {
      e.preventDefault();
      if (href.includes('view=courses')) {
        setShowCoursesGrid(true);
      } else {
        setShowCoursesGrid(false);
      }
      router.push(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('/')) {
      e.preventDefault();
      router.push(href);
    }
  };

  const activeRegionPage = globalCountryPages.find(p => p.key === selectedRegion) || globalCountryPages[0];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div>
            <span className={styles.heroBadge}>Global Services</span>
            <h1 className={styles.heroTitle}>
              {selectedRegion === 'worldwide'
                ? 'Global Services'
                : showCoursesGrid
                ? `Cybersecurity Courses in ${activeRegionPage.country}`
                : activeRegionPage.title}
            </h1>
            <p className={styles.heroDesc} style={{ color: '#ff1616', fontWeight: 700, fontSize: '1.35rem' }}>
              {selectedRegion === 'worldwide'
                ? 'Cybersecurity Training & Security Services Worldwide'
                : `Official CyberiumX Training & Enterprise Security Solutions — ${activeRegionPage.country}`}
            </p>
          </div>
        </div>
      </section>

      {/* Regional Hub Selector (Matches Official Global Services Sub-Menu) */}
      <div style={{ marginTop: '2.5rem' }}>
        <div className={styles.regionTabsWrapper}>
          {globalCountryPages.map((region) => (
            <button
              key={region.key}
              type="button"
              className={`${styles.regionTab} ${selectedRegion === region.key && !showCoursesGrid ? styles.regionTabActive : ''}`}
              onClick={() => {
                setSelectedRegion(region.key);
                setShowCoursesGrid(false);
              }}
            >
              {region.key === 'worldwide' ? 'Worldwide Overview' : `Training & Services in ${region.country}`}
            </button>
          ))}
        </div>

        {selectedRegion !== 'worldwide' && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className={`${styles.regionTab} ${!showCoursesGrid ? styles.regionTabActive : ''}`}
              onClick={() => setShowCoursesGrid(false)}
            >
              {activeRegionPage.title}
            </button>
            <button
              type="button"
              className={`${styles.regionTab} ${showCoursesGrid ? styles.regionTabActive : ''}`}
              onClick={() => setShowCoursesGrid(true)}
            >
              Cybersecurity Courses in {activeRegionPage.country}
            </button>
          </div>
        )}
      </div>

      {selectedRegion === 'worldwide' ? (
        <>
          {/* Official Opening Section */}
          <section className={styles.contentSection} style={{ paddingTop: '1rem' }}>
            <div className={styles.officialProseCard}>
              <h2>Cybersecurity Training &amp; Security Services Worldwide</h2>
              <p>
                In today’s rapidly evolving digital world, cybersecurity has become a global priority. Businesses, governments, and individuals rely heavily on technology, making them increasingly vulnerable to cyber threats. From ransomware attacks to data breaches, organizations across the world are facing serious security challenges that require skilled professionals and strong security solutions.
              </p>
              <p>
                Recognizing the growing global demand for cybersecurity expertise, CyberiumX is proud to announce the expansion of its cybersecurity training and security services to multiple countries around the world. With a strong reputation for delivering practical and industry-focused cybersecurity education, CyberiumX is now providing training and security solutions to students and organizations in countries such as Australia, Canada, the United Kingdom, Germany, and many others.
              </p>
              <p>
                This global expansion marks a significant step in CyberiumX’s mission to empower individuals and businesses with the knowledge and tools needed to protect digital systems and build successful careers in cybersecurity.
              </p>

              <h4>The Growing Global Need for Cybersecurity</h4>
              <p>
                Cybercrime is increasing at an alarming rate across the globe. Organizations in almost every industry—including finance, healthcare, government, and technology—are constantly targeted by cyber attackers seeking to exploit vulnerabilities in networks and applications.
              </p>
              <p>
                Countries such as the United States, the United Kingdom, Canada, Australia, and Germany have witnessed a sharp rise in cyber attacks in recent years. As a result, the demand for skilled cybersecurity professionals has grown dramatically. Companies are actively searching for experts who can identify vulnerabilities, perform penetration testing, and strengthen their security infrastructure.
              </p>
              <p>
                However, despite the growing demand, there is still a global shortage of trained cybersecurity professionals. Many organizations struggle to find skilled experts who can effectively protect their digital environments.
              </p>
              <p>
                CyberiumX aims to bridge this gap by providing high-quality cybersecurity training and professional security services to learners and businesses worldwide.
              </p>

              <h4>Empowering the Next Generation of Cybersecurity Professionals</h4>
              <p>
                CyberiumX has built a strong reputation as a trusted cybersecurity training platform that focuses on practical, real-world skills. The training programs are designed to help students understand modern cyber threats and learn how to defend systems using industry-standard tools and techniques.
              </p>
              <p>
                With the expansion of its services to international markets, CyberiumX is now helping students from different countries gain access to expert-led cybersecurity education. Through flexible online training, learners can develop advanced cybersecurity skills from anywhere in the world.
              </p>
              <p>
                The goal of CyberiumX is not just to provide theoretical knowledge but to ensure that students gain hands-on experience that prepares them for real-world cybersecurity challenges.
              </p>
            </div>
          </section>

          {/* Global Cybersecurity Training Programs */}
          <section className={styles.contentSection} style={{ paddingTop: 0 }}>
            <div className={styles.sectionHeaderContainer}>
              <div className={styles.sectionBadge}>
                GLOBAL ACADEMY &amp; COURSES
              </div>
              <h2 className={styles.sectionTitle}>
                Global Cybersecurity <span className={styles.highlight}>Training Programs</span>
              </h2>
              <p className={styles.sectionDesc} style={{ maxWidth: '820px' }}>
                CyberiumX offers a wide range of <Link href="/courses" style={{ color: '#ff1616', textDecoration: 'underline' }}>cybersecurity courses</Link> designed for beginners, IT professionals, and aspiring ethical hackers. These training programs focus on practical learning and real-world scenarios to help students build strong technical expertise. Some of the most popular cybersecurity courses offered by CyberiumX include:
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {courses.map((item, idx) => (
                <div key={idx} className={styles.serviceCard}>
                  <div className={styles.cardHeaderRow}>
                    {item.logo && (
                      <div style={{
                        width: '52px',
                        height: '52px',
                        background: '#ffffff',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.35)',
                        flexShrink: 0
                      }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={item.logo} 
                          alt={`${item.title} Logo`} 
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        />
                      </div>
                    )}
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <div className={styles.cardFooter}>
                    <Link href={item.link || "/courses"} className={styles.cardLink}>
                      <span>Explore Course</span>
                      <span className={styles.arrow}>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Cybersecurity Services for Businesses & Supporting Global Careers */}
          <section className={styles.contentSectionAlt}>
            <div className={styles.officialProseCard}>
              <h4>Professional Cybersecurity Services for Businesses</h4>
              <p>
                In addition to cybersecurity training, CyberiumX also provides professional security services to organizations across the globe. Businesses today must take proactive steps to secure their digital infrastructure, and CyberiumX helps them achieve this goal through expert security assessments.
              </p>
              <p>Some of the key cybersecurity services offered by CyberiumX include:</p>
              <ul>
                {services.map((s, idx) => (
                  <li key={idx}><strong>{s.title}</strong></li>
                ))}
              </ul>
              <p>
                These services help organizations identify weaknesses in their systems and implement stronger security measures to protect sensitive data and digital assets.
              </p>

              <h4>Supporting Global Careers in Cybersecurity</h4>
              <p>
                One of the key objectives of CyberiumX’s global expansion is to support individuals who want to build successful careers in cybersecurity. The training programs are designed to help students develop the skills required for high-demand roles such as:
              </p>
              <ul>
                {careers.map((role, idx) => (
                  <li key={idx}><strong>{role}</strong></li>
                ))}
              </ul>
              <p>
                With cyber threats becoming more sophisticated, the need for skilled professionals continues to grow across the world. CyberiumX aims to empower students with the knowledge and expertise needed to thrive in this fast-growing industry.
              </p>

              <h4>Flexible Learning for International Students</h4>
              <p>
                CyberiumX offers flexible online training that allows students from different countries to learn at their own pace. Live sessions, practical labs, and mentorship support ensure that learners gain a comprehensive understanding of cybersecurity concepts and tools.
              </p>
              <p>
                This flexible learning model makes it possible for students from Australia, Canada, the UK, Germany, and other countries to access high-quality cybersecurity training without geographical limitations.
              </p>
              <p>
                CyberiumX believes that cybersecurity education should be accessible to everyone who wants to learn and contribute to securing the digital world. By expanding its training and security services internationally, the company aims to build a global community of skilled cybersecurity professionals who can help protect organizations from cyber threats.
              </p>
              <p>
                As cyber risks continue to evolve, the importance of cybersecurity awareness, training, and professional security services will only increase. CyberiumX remains committed to providing innovative training programs and reliable security solutions to individuals and businesses worldwide.
              </p>
              <p>
                The expansion of CyberiumX into international markets represents a major milestone in its journey to become a global cybersecurity education and security services provider. By offering advanced cybersecurity training and professional security solutions to countries such as Australia, Canada, the United Kingdom, Germany, and beyond, CyberiumX is helping individuals build successful careers and organizations strengthen their defenses against cyber threats.
              </p>
              <p>
                Whether you are an aspiring cybersecurity professional or a business seeking to improve your digital security, CyberiumX is dedicated to supporting your journey in the ever-evolving world of cybersecurity.
              </p>
            </div>
          </section>
        </>
      ) : showCoursesGrid ? (
        /* Country Courses View (Matches /cybersecurity-courses-in-* on official site) */
        <section className={styles.contentSection} style={{ paddingTop: '1rem' }}>
          <div className={styles.cardsGrid}>
            {allOfficialCourses.map((course) => (
              <div key={course.id} className={styles.serviceCard}>
                <div className={styles.cardHeaderRow}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    background: '#ffffff',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.35)',
                    flexShrink: 0
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={course.icon} 
                      alt={course.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                </div>
                <p className={styles.cardDescription}>{course.description}</p>
                <div className={styles.cardFooter}>
                  <Link href={course.link} className={styles.cardLink}>
                    <span>Know More</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* Official Country Training & Services View (USA, Australia, UK, Canada, Germany) */
        <section className={styles.contentSection} style={{ paddingTop: '1rem' }}>
          <div 
            className={styles.officialProseCard}
            onClick={handleProseClick}
            dangerouslySetInnerHTML={{ __html: activeRegionPage.contentHtml }}
          />
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2>Book a Demo</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Whether you are an aspiring cybersecurity professional or a business seeking to improve your digital security, CyberiumX is dedicated to supporting your journey.
          </p>
          <Link href="/contact-us" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}
