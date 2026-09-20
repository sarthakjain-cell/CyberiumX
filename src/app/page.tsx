import Hero from '@/components/Hero';
import AlumniMarquee from '@/components/AlumniMarquee';
import CareerQuiz from '@/components/CareerQuiz';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import AboutUs from '@/components/AboutUs';
import ServicesPreview from '@/components/ServicesPreview';
import CoursesPreview from '@/components/CoursesPreview';
import BlogPreview from '@/components/BlogPreview';
import StandOut from '@/components/StandOut';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CyberiumX",
    "url": "https://cyberiumx.com",
    "logo": "https://cyberiumx.com/logo.png",
    "description": "Elite Cyber Security Training Centre offering real-world hacking and penetration testing courses.",
    "sameAs": [
      "https://www.linkedin.com/company/cyberiumx/",
      "https://www.facebook.com/cyberiumxtraining",
      "https://www.instagram.com/cyber_iumx",
      "https://youtube.com/@cyberiumx",
      "https://wa.me/+919318492128",
      "https://x.com/cyber_iumx",
      "https://jsdl.in/DT-23VTC9S887W"
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
        <StandOut />
        <CoursesPreview />
        <Testimonials />
        <ServicesPreview />
        <InteractiveTerminal />
        <BlogPreview />
      </main>
    </>
  );
}
