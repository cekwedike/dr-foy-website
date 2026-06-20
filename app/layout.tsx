import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Ephesis, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import InitialPreloader from "@/components/InitialPreloader";
import Navbar from "@/components/Navbar";
import ClientProviders from "@/components/providers/ClientProviders";
import { siteBuildCreditMeta } from "@/app/data/siteCredits";
import { createPageMetadata, getSiteUrl, SITE_NAME } from "@/app/lib/site-metadata";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e1318"
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: SITE_NAME,
  ...createPageMetadata("home"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/images/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  other: siteBuildCreditMeta
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
      <body className="overflow-x-clip bg-background font-body text-ink antialiased">
        <ClientProviders>
          <InitialPreloader />
          <Navbar />
          <div className="site-shell relative z-[1]">{children}</div>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
