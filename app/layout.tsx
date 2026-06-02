import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import BackgroundEffects from "@/components/layout/BackgroundEffects";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chandhana-gayathri.vercel.app";

export const metadata: Metadata = {
  title: "Chandhana Gayathri Gangaraju | Software Engineer",
  description:
    "Full Stack Developer, QA Automation Engineer, and AI/ML enthusiast. CSE Graduate 2024 — Cisco Apprentice. Building intelligent, scalable, world-class software.",
  keywords: [
    "Chandhana Gayathri Gangaraju",
    "Software Engineer",
    "Full Stack Developer",
    "QA Automation",
    "AI ML Engineer",
    "React Developer",
    "Next.js",
    "Cisco",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "Chandhana Gayathri Gangaraju", url: siteUrl }],
  creator: "Chandhana Gayathri Gangaraju",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Chandhana Gayathri Gangaraju | Software Engineer",
    description:
      "Full Stack Developer, QA Automation Engineer & AI/ML enthusiast. CSE 2024 | Cisco Apprentice.",
    siteName: "Chandhana Gayathri Gangaraju Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chandhana Gayathri Gangaraju — Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandhana Gayathri Gangaraju | Software Engineer",
    description:
      "Full Stack Developer, QA Automation Engineer & AI/ML enthusiast. CSE 2024 | Cisco Apprentice.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#05050f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {/* Background layers */}
        <BackgroundEffects />

        {/* Custom cursor (client-only) */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Toast notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(10, 10, 26, 0.95)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              color: "white",
              backdropFilter: "blur(12px)",
              borderRadius: "12px",
              fontSize: "14px",
            },
            success: {
              iconTheme: { primary: "#00d4ff", secondary: "#05050f" },
              duration: 5000,
            },
            error: {
              iconTheme: { primary: "#ef4444", secondary: "#05050f" },
              duration: 5000,
            },
          }}
        />
      </body>
    </html>
  );
}
