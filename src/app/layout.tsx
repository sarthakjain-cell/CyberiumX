import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CyberBackground from "@/components/CyberBackground";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "CyberiumX | Elite Cyber Security Training & Global Services",
  description: "If you are aiming to become a cybersecurity expert, CyberiumX is the best Cyber Security training centre to boost your journey.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "CyberiumX | Elite Cyber Security Training & Global Services",
    description: "Master real-world hacking and penetration testing with our expert-led, practical training programs.",
    url: "https://cyberiumx.com",
    siteName: "CyberiumX",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberiumX | Elite Cyber Security Training & Global Services",
    description: "Master real-world hacking and penetration testing with our expert-led, practical training programs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`} suppressHydrationWarning>
        <CyberBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
