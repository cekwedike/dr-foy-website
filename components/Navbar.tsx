"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["600"],
  variable: "--font-cormorant-garamond"
});

const PALETTE = {
  background: "#0C0C0C",
  surface: "#161412",
  cream: "#F5F0E8",
  orange: "#E8572A",
  lime: "#C8F04D",
  borderScrolled: "rgba(232, 87, 42, 0.15)",
  borderTransparent: "rgba(232, 87, 42, 0)"
} as const;

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/press", label: "PRESS" },
  { href: "/contact", label: "CONTACT" }
];

const workLinks = [
  { href: "/work/energize-music", label: "Energize Music" },
  { href: "/work/energize-fest", label: "Energize Fest" },
  { href: "/work/same-energy", label: "Same Energy Global" },
  { href: "/work/speaking", label: "Speaking & Advisory" }
];

const mobileContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.12
    }
  }
};

const mobileItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.24, ease: "easeOut" } }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [desktopWorkOpen, setDesktopWorkOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileWorkOpen(false);
  };

  return (
    <motion.nav
      className={`${spaceGrotesk.variable} ${cormorantGaramond.variable} fixed inset-x-0 top-0 z-50 border-b`}
      initial={false}
      animate={{
        backgroundColor: scrolled ? PALETTE.background : "rgba(12, 12, 12, 0)",
        borderColor: scrolled ? PALETTE.borderScrolled : PALETTE.borderTransparent
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <Link
          href="/"
          aria-label="Dr. Foy Home"
          className="text-[20px] tracking-[0.15em]"
          style={{
            color: PALETTE.orange,
            fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', serif",
            fontStyle: "italic"
          }}
        >
          DR. FOY
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 2).map((item) => (
            <DesktopLink key={item.href} href={item.href} label={item.label} />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setDesktopWorkOpen(true)}
            onMouseLeave={() => setDesktopWorkOpen(false)}
          >
            <button
              type="button"
              aria-expanded={desktopWorkOpen}
              aria-label="Open work menu"
              className="text-xs uppercase tracking-[0.2em]"
              style={{
                color: PALETTE.cream,
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif"
              }}
            >
              WORK ▾
            </button>

            <AnimatePresence>
              {desktopWorkOpen ? (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 mt-5 w-72 border-l-2 px-5 py-4 shadow-2xl"
                  style={{
                    backgroundColor: PALETTE.surface,
                    borderLeftColor: PALETTE.orange
                  }}
                >
                  <div className="flex flex-col gap-3">
                    {workLinks.map((item) => (
                      <motion.div key={item.href} whileHover={{ x: 4 }} transition={{ duration: 0.18 }}>
                        <Link
                          href={item.href}
                          className="text-sm transition-colors duration-200"
                          style={{
                            color: PALETTE.cream,
                            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif"
                          }}
                          onMouseEnter={(event) => {
                            event.currentTarget.style.color = PALETTE.lime;
                          }}
                          onMouseLeave={(event) => {
                            event.currentTarget.style.color = PALETTE.cream;
                          }}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((item) => (
            <DesktopLink key={item.href} href={item.href} label={item.label} />
          ))}

          <motion.div
            whileHover={{ scale: 1.02, backgroundColor: PALETTE.orange, color: PALETTE.background }}
            transition={{ duration: 0.2 }}
            className="rounded-full"
            style={{ color: PALETTE.orange }}
          >
            <Link
              href="/contact"
              className="rounded-full border px-6 py-2 text-xs uppercase tracking-[0.2em] transition-colors duration-200"
              style={{
                borderColor: PALETTE.orange,
                color: "currentColor",
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif"
              }}
            >
              BOOK DR. FOY
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
          style={{ color: PALETTE.cream }}
          onClick={() => setMobileMenuOpen(true)}
        >
          <RxHamburgerMenu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.aside
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ backgroundColor: PALETTE.background }}
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="mb-10 flex items-start justify-end">
                <button
                  type="button"
                  aria-label="Close mobile menu"
                  className="p-2"
                  style={{ color: PALETTE.cream }}
                  onClick={closeMobileMenu}
                >
                  <RxCross2 size={28} />
                </button>
              </div>

              <motion.div
                className="flex flex-col gap-5"
                variants={mobileContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div variants={mobileItem}>
                  <MobileLink href="/" label="HOME" onNavigate={closeMobileMenu} />
                </motion.div>
                <motion.div variants={mobileItem}>
                  <MobileLink href="/about" label="ABOUT" onNavigate={closeMobileMenu} />
                </motion.div>

                <motion.div variants={mobileItem}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-sm uppercase tracking-[0.2em]"
                    style={{
                      color: PALETTE.cream,
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif"
                    }}
                    onClick={() => setMobileWorkOpen((prev) => !prev)}
                    aria-expanded={mobileWorkOpen}
                    aria-label="Toggle work links"
                  >
                    <span>WORK</span>
                    <span>{mobileWorkOpen ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileWorkOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="mt-3 border-l-2 pl-4"
                        style={{ borderLeftColor: PALETTE.orange }}
                      >
                        <div className="flex flex-col gap-3">
                          {workLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="text-sm transition-colors duration-200"
                              style={{
                                color: PALETTE.cream,
                                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif"
                              }}
                              onMouseEnter={(event) => {
                                event.currentTarget.style.color = PALETTE.lime;
                              }}
                              onMouseLeave={(event) => {
                                event.currentTarget.style.color = PALETTE.cream;
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={mobileItem}>
                  <MobileLink href="/press" label="PRESS" onNavigate={closeMobileMenu} />
                </motion.div>
                <motion.div variants={mobileItem}>
                  <MobileLink href="/contact" label="CONTACT" onNavigate={closeMobileMenu} />
                </motion.div>

                <motion.div variants={mobileItem} className="pt-4">
                  <motion.div
                    whileHover={{ backgroundColor: PALETTE.orange, color: PALETTE.background }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex rounded-full"
                    style={{ color: PALETTE.orange }}
                  >
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="inline-flex rounded-full border px-6 py-2 text-xs uppercase tracking-[0.2em]"
                      style={{
                        borderColor: PALETTE.orange,
                        color: "currentColor",
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif"
                      }}
                    >
                      BOOK DR. FOY
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}

type LinkProps = {
  href: string;
  label: string;
};

function DesktopLink({ href, label }: LinkProps) {
  return (
    <Link
      href={href}
      className="text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:text-[#E8572A]"
      style={{
        color: PALETTE.cream,
        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif"
      }}
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, label, onNavigate }: LinkProps & { onNavigate: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="text-sm uppercase tracking-[0.2em] transition-colors duration-200 hover:text-[#E8572A]"
      style={{
        color: PALETTE.cream,
        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif"
      }}
    >
      {label}
    </Link>
  );
}
