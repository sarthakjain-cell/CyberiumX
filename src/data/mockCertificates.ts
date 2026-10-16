export interface CertificateRecord {
  id: string;
  studentName: string;
  name: string; // compatibility alias
  courseName: string;
  course: string; // compatibility alias
  issueDate: string;
  grade: string;
  status: "VALID" | "REVOKED";
  credentialHash: string;
}

export const mockCertificates: CertificateRecord[] = [
  {
    id: "CX-2026-98765",
    studentName: "John Doe",
    name: "John Doe",
    courseName: "Certified Ethical Hacker (CEHv13 - AI)",
    course: "Certified Ethical Hacker (CEHv13 - AI)",
    issueDate: "15 August 2026",
    grade: "A+ (Distinction)",
    status: "VALID",
    credentialHash: "cx_0x8f19e4a3b8d29c417e29fba6"
  },
  {
    id: "CX-2026-12345",
    studentName: "Sarah Smith",
    name: "Sarah Smith",
    courseName: "Cisco Certified Network Associate (CCNA)",
    course: "Cisco Certified Network Associate (CCNA)",
    issueDate: "22 July 2026",
    grade: "A (Honors)",
    status: "VALID",
    credentialHash: "cx_0x4c27a9b1c7e53f889d10e6a2"
  },
  {
    id: "CX-2026-55555",
    studentName: "Michael Chang",
    name: "Michael Chang",
    courseName: "OffSec Certified Professional (OSCP+)",
    course: "OffSec Certified Professional (OSCP+)",
    issueDate: "10 June 2026",
    grade: "A+ (Elite)",
    status: "VALID",
    credentialHash: "cx_0x9b33e1a8d0f47c215e98bb44"
  },
  {
    id: "CX-2026-77889",
    studentName: "Priya Sharma",
    name: "Priya Sharma",
    courseName: "AWS Penetration Testing & Cloud Security",
    course: "AWS Penetration Testing & Cloud Security",
    issueDate: "05 May 2026",
    grade: "A",
    status: "VALID",
    credentialHash: "cx_0x1d44f8e2a6c99b337f55ea10"
  },
  {
    id: "CYB-2025-8942",
    studentName: "Alex Rivera",
    name: "Alex Rivera",
    courseName: "Certified Ethical Hacker (CEHv13 - AI)",
    course: "Certified Ethical Hacker (CEHv13 - AI)",
    issueDate: "12 November 2025",
    grade: "A+ (Distinction)",
    status: "VALID",
    credentialHash: "cx_0x7a82f3c0e1b99d45a322ea89"
  },
  {
    id: "CX-2025-0104",
    studentName: "David Miller",
    name: "David Miller",
    courseName: "Bug Bounty Hunting & Web Security",
    course: "Bug Bounty Hunting & Web Security",
    issueDate: "18 December 2025",
    grade: "A",
    status: "VALID",
    credentialHash: "cx_0x2e99b7a4c6d11f880e55bb72"
  }
];
