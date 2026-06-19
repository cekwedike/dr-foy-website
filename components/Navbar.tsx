"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import BrandWordmark from "@/components/BrandWordmark";

const PALETTE = {
  background: "#0E1318",
  surface: "#1B232C",
  ink: "#F2E8DC",
  coral: "#D9654A",
  teal: "#2DBFB1",
  borderScrolled: "rgba(45, 191, 177, 0.22)",
  borderTransparent: "rgba(45, 191, 177, 0)"
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
  { href: "/work/next", label: "NEXT" },
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
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

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
      className="fixed inset-x-0 top-0 z-50 border-b"
      initial={false}
      animate={{
        backgroundColor: scrolled ? PALETTE.background : "rgba(12, 12, 12, 0)",
        borderColor: scrolled ? PALETTE.borderScrolled : PALETTE.borderTransparent
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full items-center justify-between gap-2 px-4 py-3 sm:px-5 sm:py-4 2xl:px-12 2xl:py-6">
        <Link
          href="/"
          aria-label="Dr Tochukwu MacFoy home"
          className="min-w-0 max-w-[min(48vw,11rem)] shrink sm:max-w-[min(40vw,13rem)] 2xl:max-w-[18rem]"
        >
          <BrandWordmark className="block leading-none text-[clamp(0.68rem,2vw,1.2rem)] text-coral" />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 2xl:flex 2xl:gap-6">
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
              aria-label="Open Energize Central menu"
              className="shrink-0 whitespace-nowrap text-xs uppercase tracking-[0.12em] 2xl:text-sm 2xl:tracking-[0.18em]"
              style={{
                color: PALETTE.ink,
                fontFamily: "var(--font-space), 'Space Grotesk', sans-serif"
              }}
            >
              <span className="2xl:hidden">ENERGIZE ▾</span>
              <span className="hidden 2xl:inline">ENERGIZE CENTRAL ▾</span>
            </button>

            <AnimatePresence>
              {desktopWorkOpen ? (
                <motion.div
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -6, opacity: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 mt-3 w-72 border border-teal/20 bg-surface/95 px-5 py-4 backdrop-blur-sm"
                >
                  <div className="flex flex-col gap-3">
                    {workLinks.map((item) => (
                      <motion.div key={item.href} whileHover={{ x: 4 }} transition={{ duration: 0.18 }}>
                        <Link
                          href={item.href}
                          className="text-base transition-colors duration-200"
                          style={{
                            color: PALETTE.ink,
                            fontFamily: "var(--font-space), 'Space Grotesk', sans-serif"
                          }}
                          onMouseEnter={(event) => {
                            event.currentTarget.style.color = PALETTE.teal;
                          }}
                          onMouseLeave={(event) => {
                            event.currentTarget.style.color = PALETTE.ink;
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

          <Link
            href="/contact"
            className="inline-flex shrink-0 whitespace-nowrap border border-ink/30 px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors duration-200 hover:border-teal hover:text-teal 2xl:px-5 2xl:py-2.5 2xl:text-sm 2xl:tracking-[0.16em]"
            style={{
              color: PALETTE.ink,
              fontFamily: "var(--font-space), 'Space Grotesk', sans-serif"
            }}
          >
            <span className="2xl:hidden">Book</span>
            <span className="hidden 2xl:inline">Book Dr. Foy</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="shrink-0 2xl:hidden"
          style={{ color: PALETTE.ink }}
          onClick={() => setMobileMenuOpen(true)}
        >
          <RxHamburgerMenu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.aside
            className="fixed inset-0 z-[60] 2xl:hidden"
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
                  style={{ color: PALETTE.ink }}
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
                    className="flex w-full items-center justify-between text-left text-base uppercase tracking-[0.18em]"
                    style={{
                      color: PALETTE.ink,
                      fontFamily: "var(--font-space), 'Space Grotesk', sans-serif"
                    }}
                    onClick={() => setMobileWorkOpen((prev) => !prev)}
                    aria-expanded={mobileWorkOpen}
                    aria-label="Toggle work links"
                  >
                    <span>ENERGIZE CENTRAL</span>
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
                        style={{ borderLeftColor: PALETTE.teal }}
                      >
                        <div className="flex flex-col gap-3">
                          {workLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="text-base transition-colors duration-200"
                              style={{
                                color: PALETTE.ink,
                                fontFamily: "var(--font-space), 'Space Grotesk', sans-serif"
                              }}
                              onMouseEnter={(event) => {
                                event.currentTarget.style.color = PALETTE.teal;
                              }}
                              onMouseLeave={(event) => {
                                event.currentTarget.style.color = PALETTE.ink;
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
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="inline-flex border border-ink/30 px-6 py-2.5 text-sm uppercase tracking-[0.16em] text-ink transition-colors hover:border-teal hover:text-teal"
                    style={{
                      fontFamily: "var(--font-space), 'Space Grotesk', sans-serif"
                    }}
                  >
                    Book Dr. Foy
                  </Link>
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
      className="shrink-0 whitespace-nowrap text-xs uppercase tracking-[0.12em] transition-colors duration-200 hover:text-teal 2xl:text-sm 2xl:tracking-[0.18em]"
      style={{
        color: PALETTE.ink,
        fontFamily: "var(--font-space), 'Space Grotesk', sans-serif"
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
      className="text-base uppercase tracking-[0.18em] transition-colors duration-200 hover:text-teal"
      style={{
        color: PALETTE.ink,
        fontFamily: "var(--font-space), 'Space Grotesk', sans-serif"
      }}
    >
      {label}
    </Link>
  );
}
