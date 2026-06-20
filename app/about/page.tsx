"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutNarrative, homeContent } from "@/app/data/siteContent";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

const advisoryRoles = [
  { org: "Energize Central", role: "Founder" },
  { org: "Elevate Africa", role: "Chief Storyteller" },
  { org: "Woodhall Capital", role: "Strategic Advisor" },
  { org: "Liberty Creative Circles", role: "African Creative Hub Lead" }
] as const;

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <main className="overflow-x-clip bg-[var(--color-bg-deep)] pt-20">
      <section
        ref={heroRef}
        className="relative flex min-h-[44vh] items-end overflow-hidden sm:min-h-[48vh] md:min-h-[56vh]"
      >
        <motion.div
          className="absolute inset-0"
          style={prefersReducedMotion ? undefined : { scale: heroScale }}
        >
          <Image
            src="/images/foy-the-great.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top md:object-[center_30%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.15),rgba(14,19,24,0.92)_78%)]" />

        <div className="page-container relative z-10 pb-10 pt-16 sm:pb-12 sm:pt-20 md:pb-16">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-xs sm:tracking-[0.34em]">
              Physician · Strategist · Culture Builder
            </p>
            <h1 className="mt-3 font-heading text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.92] text-ink sm:mt-4">
              About Dr. Foy
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="page-container py-12 sm:py-14 md:py-20">
        <motion.div
          className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-teal/20">
              <Image
                src="/images/dr-foy-1.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-teal/60 via-teal/25 to-transparent" />
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="md:col-span-7 lg:col-span-8">
            <p className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-[11px] sm:tracking-[0.32em]">
              The story
            </p>
            <div className="mt-3 h-px w-16 bg-teal/30 sm:mt-4" />
            <h2 className="mt-5 font-heading text-[clamp(1.85rem,4.5vw,3.25rem)] leading-[0.95] text-ink sm:mt-6">
              Still a doctor.
              <span className="block accent-gradient-text">Now building culture infrastructure.</span>
            </h2>
            <div className="mt-6 space-y-4 font-body text-[0.95rem] leading-[1.72] text-ink/82 sm:mt-7 sm:space-y-5 sm:text-base md:text-lg md:leading-[1.8]">
              {aboutNarrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-teal/15 bg-background">
        <div className="page-container py-12 sm:py-14 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariant} className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-[11px] sm:tracking-[0.32em]">
              Advisory & leadership
            </motion.p>
            <motion.h2
              variants={fadeUpVariant}
              className="mt-3 font-heading text-[clamp(1.75rem,4vw,3rem)] leading-[0.95] text-ink sm:mt-4"
            >
              Where he serves
            </motion.h2>

            <motion.div variants={fadeUpVariant} className="mt-8 border-t border-teal/20 sm:mt-10">
              {advisoryRoles.map((item, index) => (
                <article
                  key={item.org}
                  className="group grid grid-cols-[2.5rem_1fr] items-start gap-x-3 border-b border-teal/15 py-5 transition-colors hover:bg-teal/[0.03] sm:grid-cols-[3.5rem_1fr_auto] sm:gap-x-6 sm:py-6 md:py-7"
                >
                  <span className="font-display text-[11px] uppercase tracking-[0.2em] text-ink/35 sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-[clamp(1.15rem,3vw,1.65rem)] leading-tight text-ink transition-colors group-hover:text-teal/90">
                      {item.org}
                    </h3>
                  </div>
                  <p className="col-start-2 font-display text-[10px] uppercase tracking-[0.18em] text-teal sm:col-start-3 sm:self-center sm:text-[11px] sm:tracking-[0.22em]">
                    {item.role}
                  </p>
                </article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-teal/15 bg-background">
        <div className="page-container py-10 sm:py-12 md:py-14">
          <motion.div
            className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpVariant}
          >
            <p className="max-w-xl font-heading text-[clamp(1.35rem,3.5vw,2rem)] leading-snug text-ink/90">
              African faith-rooted creativity deserves serious infrastructure. He is building it.
            </p>
            <Link
              href={homeContent.cta.href}
              className="inline-flex shrink-0 border-b border-teal/55 pb-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal sm:text-sm"
            >
              {homeContent.cta.label}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
