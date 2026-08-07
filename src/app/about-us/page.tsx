import AboutUs from '@/components/AboutUs';

export const metadata = {
  title: 'About Us | CyberiumX',
  description: 'Learn more about CyberiumX and our mission to secure the digital world.'
};

export default function AboutUsPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ textAlign: 'center', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3.5rem' }} className="fade-in-up">About Our Mission</h1>
      </div>
      <AboutUs />
    </div>
  );
}
