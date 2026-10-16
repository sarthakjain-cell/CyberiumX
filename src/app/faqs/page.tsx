import type { Metadata } from 'next';
import { officialFaqs } from '@/data/faqs';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: "FAQs | CyberiumX",
  description: "Official Frequently Asked Questions (FAQs) about CyberiumX ethical hacking courses, CEHv13, OSCP+, CCNA certification, live mentorship, and enrollment.",
  alternates: {
    canonical: "https://cyberiumx.com/faqs",
  },
};

export default function FaqPage() {
  return <FaqClient faqs={officialFaqs} />;
}
