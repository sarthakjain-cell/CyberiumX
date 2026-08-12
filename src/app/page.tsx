import Hero from '@/components/Hero';
import AlumniMarquee from '@/components/AlumniMarquee';
import CareerQuiz from '@/components/CareerQuiz';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import AboutUs from '@/components/AboutUs';
import ServicesPreview from '@/components/ServicesPreview';
import CoursesGrid from '@/components/CoursesGrid';
import BlogPreview from '@/components/BlogPreview';

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
        <AlumniMarquee />
        <CareerQuiz />
        <AboutUs />
        <InteractiveTerminal />
        <ServicesPreview />
        <CoursesGrid />
        <BlogPreview />
      </main>
    </>
  );
}
