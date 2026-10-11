import CoursesGrid from '@/components/CoursesGrid';

export const metadata = {
  title: 'Best Online Cybersecurity Training | CyberiumX',
  description: 'Explore our cutting-edge cybersecurity courses including CEHv13, CCNA, and OSCP+.'
};

export default function CoursesPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', paddingBottom: '2rem' }} className="fade-in-up">Best Online Cybersecurity Training</h1>
      </div>
      <CoursesGrid />
    </div>
  );
}
