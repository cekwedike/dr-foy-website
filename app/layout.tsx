import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Ephesis, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-space"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm"
});

const wordmarkScript = Ephesis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wordmark"
});

export const metadata: Metadata = {
  title: "Dr. Tochukwu Macfoy | Physician · Creative Strategist · Culture Builder",
  description:
    "Official portfolio of Dr. Tochukwu Macfoy, physician and creative strategist leading Energize Central across media, music, and live culture.",
  applicationName: "Dr. Tochukwu Macfoy",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/images/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/images/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Dr. Tochukwu Macfoy",
    description:
      "Physician and creative strategist leading Energize Central across media, music, and live culture.",
    images: [{ url: "/images/hero-section.jpg", width: 1200, height: 630, alt: "Dr. Tochukwu Macfoy" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Tochukwu Macfoy",
    description:
      "Physician and creative strategist leading Energize Central across media, music, and live culture.",
    images: ["/images/hero-section.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${wordmarkScript.variable}`}
    >
      <body className="bg-background font-body text-ink antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}