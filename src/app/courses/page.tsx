import CoursesGrid from '@/components/CoursesGrid';

export const metadata = {
  title: 'Best Online Cybersecurity Training | CyberiumX',
  description: 'Explore our cutting-edge cybersecurity courses including CEHv13, CCNA, and OSCP+.'
};

export default function CoursesPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <CoursesGrid />
    </div>
  );
}
