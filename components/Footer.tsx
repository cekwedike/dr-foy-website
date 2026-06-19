"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import BrandWordmark from "@/components/BrandWordmark";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" }
];

const workLinks = [
  { href: "/work/energize-music", label: "Energize Music" },
  { href: "/work/energize-fest", label: "Energize Fest" },
  { href: "/work/next", label: "NEXT" },
  { href: "/work/same-energy", label: "Same Energy" },
  { href: "/work/speaking", label: "Speaking" }
];

const socials = [
  { href: "https://instagram.com/drfoy", label: "Instagram", icon: FiInstagram },
  { href: "https://linkedin.com/in/tochukwu-macfoy-05947b103/", label: "LinkedIn", icon: FiLinkedin },
  { href: "https://www.youtube.com/@drfoy?sub_confirmation=1", label: "YouTube", icon: FiYoutube }
];

function FooterLinkColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-display text-[9px] uppercase tracking-[0.24em] text-teal/85 sm:text-[10px] sm:tracking-[0.28em]">
        {title}
      </p>
      <div className="mt-2 flex flex-col gap-1.5 sm:gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-body text-[0.82rem] text-ink/78 transition-colors hover:text-teal sm:text-sm"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-teal/15 bg-[var(--color-bg-deep)]">
      <div className="page-container py-7 sm:py-8 md:py-9">
        <motion.div
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-col gap-6 sm:gap-7 md:flex-row md:items-start md:justify-between md:gap-10"
        >
          <motion.div variants={fadeUpVariant} className="min-w-0 shrink-0">
            <Link href="/" aria-label="Dr Tochukwu MacFoy home">
              <BrandWordmark className="text-[clamp(1.1rem,3.8vw,1.55rem)] text-coral" />
            </Link>
            <p className="mt-1.5 font-display text-[9px] uppercase tracking-[0.22em] text-teal/80 sm:text-[10px] sm:tracking-[0.26em]">
              Physician · Strategist · Culture Builder
            </p>
          </motion.div>

          <div className="grid min-w-0 flex-1 grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 sm:gap-x-8 md:max-w-2xl md:justify-self-end lg:max-w-3xl lg:gap-x-10">
            <motion.div variants={fadeUpVariant}>
              <FooterLinkColumn title="Site">
                {siteLinks.map((item) => (
                  <FooterLink key={item.href} href={item.href} label={item.label} />
                ))}
              </FooterLinkColumn>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <FooterLinkColumn title="Energize">
                {workLinks.map((item) => (
                  <FooterLink key={item.href} href={item.href} label={item.label} />
                ))}
              </FooterLinkColumn>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="col-span-2 sm:col-span-1">
              <FooterLinkColumn title="Connect">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="text-ink/65 transition-colors hover:text-teal"
                      >
                        <Icon size={17} aria-hidden />
                      </a>
                    );
                  })}
                </div>
                <Link
                  href="/contact"
                  className="mt-1 inline-flex font-body text-[0.82rem] text-ink/72 underline decoration-teal/30 underline-offset-[3px] transition-colors hover:text-teal sm:text-sm"
                >
                  Contact
                </Link>
              </FooterLinkColumn>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          className="mt-5 flex flex-col gap-1.5 border-t border-teal/10 pt-4 text-xs text-muted sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-4"
        >
          <p className="font-body">© {year} Dr. Tochukwu Macfoy</p>
          <p className="font-display text-[9px] uppercase tracking-[0.2em] text-ink/35 sm:text-[10px]">
            Faith-rooted culture · Built to last
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
