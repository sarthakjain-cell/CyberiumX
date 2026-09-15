import type { Metadata } from 'next';
import VerifyClient from './VerifyClient';

export const metadata: Metadata = {
  title: "Verify Certificate Authenticity | CyberiumX Credential Registry",
  description: "Official CyberiumX certificate verification portal. Validate student completion records, credential IDs, and ethical hacking credentials.",
  alternates: {
    canonical: "https://cyberiumx.com/verify",
  },
};

export default function VerifyPage() {
  return <VerifyClient />;
}
