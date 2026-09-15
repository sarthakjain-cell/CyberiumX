import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CyberBackground from "@/components/CyberBackground";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberiumx.com"),
  title: {
    default: "CyberiumX | Elite Cyber Security Training & Global Services",
    template: "%s | CyberiumX",
  },
  description: "CyberiumX is an elite cyber security training institute and global services provider offering hands-on ethical hacking, penetration testing, CEH, OSCP, and 7X-Security protection.",
  keywords: [
    "Cyber Security Training",
    "Ethical Hacking Course",
    "CEH Training",
    "OSCP Certification",
    "Penetration Testing",
    "Vulnerability Assessment",
    "Web Security",
    "CyberiumX",
    "Bug Bounty Training"
  ],
  authors: [{ name: "CyberiumX Team", url: "https://cyberiumx.com" }],
  creator: "CyberiumX",
  publisher: "CyberiumX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cyberiumx.com",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "CyberiumX | Elite Cyber Security Training & Global Services",
    description: "Master real-world hacking and penetration testing with our expert-led, practical training programs and enterprise security services.",
    url: "https://cyberiumx.com",
    siteName: "CyberiumX",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CyberiumX Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberiumX | Elite Cyber Security Training & Global Services",
    description: "Master real-world hacking and penetration testing with our expert-led, practical training programs.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CyberiumX",
    "url": "https://cyberiumx.com",
    "logo": "https://cyberiumx.com/logo.png",
    "description": "Elite Cyber Security Training Centre and Enterprise Global Security Provider.",
    "sameAs": [
      "https://www.linkedin.com/company/cyberiumx",
      "https://www.instagram.com/cyberiumx",
      "https://twitter.com/cyberiumx"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`} suppressHydrationWarning>
        <CyberBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
