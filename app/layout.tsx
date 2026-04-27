import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-space"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm"
});

export const metadata: Metadata = {
  title: "Dr. Tochukwu Macfoy | Physician · Creative Strategist · Culture Builder",
  description:
    "Dr. Tochukwu Macfoy trained as a physician and practiced in Lagos before building a creative empire across media, festivals, and music through Energize Central."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="bg-background text-text-primary font-body antialiased">
        <GrainOverlay />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}