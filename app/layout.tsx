import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Mr_Dafoe, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

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

const wordmarkScript = Mr_Dafoe({
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
        <SmoothScrollProvider>
          <GrainOverlay />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}