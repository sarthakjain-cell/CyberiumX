import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Cyber Security Training Centre | CyberiumX",
  description: "If you are aiming to become a cybersecurity expert, CyberiumX is the best Cyber Security training centre to boost your journey.",
  openGraph: {
    title: "CyberiumX | Elite Cyber Security Training",
    description: "Master real-world hacking and penetration testing with our expert-led, practical training programs.",
    url: "https://cyberiumx.com",
    siteName: "CyberiumX",
    images: [
      {
        url: "https://cyberiumx.com/wp-content/uploads/2026/02/cyberiumx-og.jpg", // Optimized OG Image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberiumX | Elite Cyber Security Training",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
