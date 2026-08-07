import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import CoursesGrid from '@/components/CoursesGrid';
import Footer from '@/components/Footer';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CyberiumX",
    "url": "https://cyberiumx.com",
    "logo": "https://cyberiumx.com/logo.png",
    "description": "Elite Cyber Security Training Centre offering real-world hacking and penetration testing courses.",
    "sameAs": [
      "https://www.linkedin.com/company/cyberiumx",
      "https://twitter.com/cyberiumx"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <AboutUs />
        <CoursesGrid />
      </main>
      <Footer />
    </>
  );
}
