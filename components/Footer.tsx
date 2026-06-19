"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import BrandWordmark from "@/components/BrandWordmark";
import { homeContent } from "@/app/data/siteContent";
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
  { href: "/work/same-energy", label: "Same Energy Global" },
  { href: "/work/speaking", label: "Speaking & Advisory" }
];

const socials = [
  { href: "https://instagram.com/drfoy", label: "Instagram", icon: FiInstagram },
  { href: "https://linkedin.com/in/tochukwu-macfoy-05947b103/", label: "LinkedIn", icon: FiLinkedin },
  { href: "https://www.youtube.com/@drfoy?sub_confirmation=1", label: "YouTube", icon: FiYoutube }
];

function FooterLinkColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-[11px] sm:tracking-[0.32em]">
        {title}
      </p>
      <div className="mt-3 h-px w-10 bg-teal/30 sm:mt-4" />
      <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  const className =
    "font-body text-sm text-ink/82 transition-colors hover:text-teal sm:text-[0.95rem] md:text-base";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-x-clip border-t border-teal/20 bg-[var(--color-bg-deep)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(45,191,177,0.07),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(217,101,74,0.05),transparent_50%)]"
      />

      <div className="page-container relative py-12 sm:py-14 md:py-16 lg:py-20">
        <motion.div
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-md">
              <Link href="/" aria-label="Dr Tochukwu MacFoy home">
                <BrandWordmark className="text-[clamp(1.35rem,4.5vw,2.1rem)] text-coral" />
              </Link>
              <p className="mt-3 font-display text-[10px] uppercase tracking-[0.26em] text-teal/90 sm:mt-4 sm:text-[11px] sm:tracking-[0.3em]">
                Physician · Strategist · Culture Builder
              </p>
              <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-muted sm:mt-4 sm:text-[0.95rem]">
                Building infrastructure for African faith-rooted creativity.
              </p>
              <Link
                href={homeContent.cta.href}
                className="mt-6 inline-flex border-b border-teal/55 pb-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal sm:mt-7 sm:text-sm"
              >
                {homeContent.cta.label}
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:gap-14 xl:gap-16">
              <motion.div variants={fadeUpVariant}>
                <FooterLinkColumn title="Site">
                  {siteLinks.map((item) => (
                    <FooterLink key={item.href} href={item.href} label={item.label} />
                  ))}
                </FooterLinkColumn>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="col-span-2 md:col-span-1">
                <FooterLinkColumn title="Energize Central">
                  {workLinks.map((item) => (
                    <FooterLink key={item.href} href={item.href} label={item.label} />
                  ))}
                </FooterLinkColumn>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="col-span-2 md:col-span-1">
                <FooterLinkColumn title="Connect">
                  <div className="flex flex-col gap-3">
                    {socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
                          className="group inline-flex items-center gap-2.5 font-body text-sm text-ink/82 transition-colors hover:text-teal sm:text-[0.95rem] md:text-base"
                        >
                          <Icon
                            size={16}
                            className="text-teal/70 transition-colors group-hover:text-teal"
                            aria-hidden
                          />
                          {social.label}
                        </a>
                      );
                    })}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex border-b border-teal/35 pb-1 font-body text-sm text-ink/75 transition-colors hover:border-teal/60 hover:text-teal sm:mt-5 sm:text-[0.95rem]"
                  >
                    Contact form
                  </Link>
                </FooterLinkColumn>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="mt-10 flex flex-col gap-3 border-t border-teal/15 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-7 md:mt-14"
          >
            <p className="font-body text-xs text-muted sm:text-sm">
              © {year} Dr. Tochukwu Macfoy. All rights reserved.
            </p>
            <p className="font-display text-[10px] uppercase tracking-[0.24em] text-ink/40 sm:text-[11px]">
              Faith-rooted culture · Built to last
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
