export interface CertificateRecord {
  id: string;
  courseId: number;
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
    courseId: 1,
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
    id: "CYB-2025-8942",
    courseId: 1,
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
    id: "CX-2026-12345",
    courseId: 2,
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
    courseId: 3,
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
    id: "CX-2026-44102",
    courseId: 4,
    studentName: "Liam Johnson",
    name: "Liam Johnson",
    courseName: "Microsoft Azure Course",
    course: "Microsoft Azure Course",
    issueDate: "14 May 2026",
    grade: "A (Honors)",
    status: "VALID",
    credentialHash: "cx_0x3e18a7b9c2d44f661a88ee31"
  },
  {
    id: "CX-2026-77889",
    courseId: 5,
    studentName: "Priya Sharma",
    name: "Priya Sharma",
    courseName: "AWS Penetration Testing & Security",
    course: "AWS Penetration Testing & Security",
    issueDate: "05 May 2026",
    grade: "A+ (Distinction)",
    status: "VALID",
    credentialHash: "cx_0x1d44f8e2a6c99b337f55ea10"
  },
  {
    id: "CX-2026-66201",
    courseId: 6,
    studentName: "Elena Rostova",
    name: "Elena Rostova",
    courseName: "Amazon Web Services (AWS) Course",
    course: "Amazon Web Services (AWS) Course",
    issueDate: "28 April 2026",
    grade: "A",
    status: "VALID",
    credentialHash: "cx_0x5b22c8d1e4a99f772e33dd65"
  },
  {
    id: "CX-2026-77305",
    courseId: 7,
    studentName: "Marcus Vance",
    name: "Marcus Vance",
    courseName: "eJPTv2 Course",
    course: "eJPTv2 Course",
    issueDate: "19 April 2026",
    grade: "A+ (Distinction)",
    status: "VALID",
    credentialHash: "cx_0x6c77a1d9e3b44f228a99cc12"
  },
  {
    id: "CX-2026-88410",
    courseId: 8,
    studentName: "Aarav Patel",
    name: "Aarav Patel",
    courseName: "Ethical Hacking",
    course: "Ethical Hacking",
    issueDate: "02 April 2026",
    grade: "A (Honors)",
    status: "VALID",
    credentialHash: "cx_0x7d88b2e0f4c55a339b11dd23"
  },
  {
    id: "CX-2026-99515",
    courseId: 9,
    studentName: "Chloe Dubois",
    name: "Chloe Dubois",
    courseName: "Kali Linux Course",
    course: "Kali Linux Course",
    issueDate: "20 March 2026",
    grade: "A",
    status: "VALID",
    credentialHash: "cx_0x8e99c3f1a5d66b440c22ee34"
  },
  {
    id: "CX-2026-10620",
    courseId: 10,
    studentName: "Noah Williams",
    name: "Noah Williams",
    courseName: "Networking For Ethical Hackers",
    course: "Networking For Ethical Hackers",
    issueDate: "15 March 2026",
    grade: "A",
    status: "VALID",
    credentialHash: "cx_0x9f00d4a2b6e77c551d33ff45"
  },
  {
    id: "CX-2025-0104",
    courseId: 11,
    studentName: "David Miller",
    name: "David Miller",
    courseName: "Bug Bounty Course",
    course: "Bug Bounty Course",
    issueDate: "18 December 2025",
    grade: "A+ (Elite)",
    status: "VALID",
    credentialHash: "cx_0x2e99b7a4c6d11f880e55bb72"
  },
  {
    id: "CX-2026-12725",
    courseId: 12,
    studentName: "Sophia Martinez",
    name: "Sophia Martinez",
    courseName: "VAPT",
    course: "VAPT",
    issueDate: "25 February 2026",
    grade: "A+ (Distinction)",
    status: "VALID",
    credentialHash: "cx_0xa111e5b3c7f88d662e44aa56"
  }
];

// Helper to look up official certificate by course ID
export function getCertificateByCourseId(courseId: number): CertificateRecord | undefined {
  return mockCertificates.find(c => c.courseId === courseId);
}

// Helper to look up official certificate by ID or search term
export function findCertificate(searchQuery: string): CertificateRecord | undefined {
  const trimmed = searchQuery.trim();
  if (!trimmed) return undefined;

  const cleanQuery = trimmed.toUpperCase().replace(/[\s-]/g, '');
  const rawUpper = trimmed.toUpperCase();

  // 1. Exact match on Credential ID (with or without hyphens)
  const exactIdMatch = mockCertificates.find((c) => {
    const cleanId = c.id.toUpperCase().replace(/[\s-]/g, '');
    return cleanId === cleanQuery || c.id.toUpperCase() === rawUpper;
  });
  if (exactIdMatch) return exactIdMatch;

  // 2. Exact match on Course ID (e.g. "12", "Course 12", "CBX-12", "CX-12")
  const numMatch = trimmed.match(/^(\d{1,2})$/) || trimmed.match(/^(?:CBX|CX|COURSE)[-\s]?(\d{1,2})$/i);
  if (numMatch) {
    const targetCourseId = parseInt(numMatch[1], 10);
    const byCourseId = mockCertificates.find(c => c.courseId === targetCourseId);
    if (byCourseId) return byCourseId;
  }

  // 3. Exact or partial match on Student Name
  const nameMatch = mockCertificates.find((c) => {
    const studentNameUpper = (c.studentName || c.name || '').toUpperCase();
    return studentNameUpper === rawUpper || studentNameUpper.includes(rawUpper);
  });
  if (nameMatch) return nameMatch;

  // 4. Exact or partial match on Course Title
  const courseMatch = mockCertificates.find((c) => {
    const courseNameUpper = (c.courseName || c.course || '').toUpperCase();
    return courseNameUpper.includes(rawUpper);
  });
  if (courseMatch) return courseMatch;

  // 5. Partial match on Credential ID substring (only if query is at least 4 chars)
  if (cleanQuery.length >= 4) {
    const partialIdMatch = mockCertificates.find((c) => {
      const cleanId = c.id.toUpperCase().replace(/[\s-]/g, '');
      return cleanId.includes(cleanQuery);
    });
    if (partialIdMatch) return partialIdMatch;
  }

  return undefined;
}
