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
    "Official portfolio of Dr. Tochukwu Macfoy, physician and creative strategist leading Energize Central across media, music, and live culture."
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