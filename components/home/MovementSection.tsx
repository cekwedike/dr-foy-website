"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { homeMovementClosing } from "@/app/data/siteContent";
import { depthChild3D, depthReveal3D, staggerContainer } from "@/components/motion/tokens";

const ACCENT_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='16'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%232a3542'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='12' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

export default function MovementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const isContentInView = useInView(contentRef, {
    once: true,
    amount: 0.15
  });

  const animateState = prefersReducedMotion ? "visible" : isContentInView ? "visible" : "hidden";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-teal/20 bg-background"
      aria-labelledby="movement-closing-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_0%,rgba(45,191,177,0.08),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(217,101,74,0.06),transparent_50%)]"
      />

      <div className="page-container relative py-14 sm:py-16 md:py-24 lg:py-28">
        <motion.div
          ref={contentRef}
          className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 md:grid-cols-12 md:gap-12 lg:gap-14"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate={animateState}
          variants={staggerContainer}
        >
          <motion.div variants={depthReveal3D} className="md:col-span-5 lg:col-span-4">
            <div className="relative mx-auto aspect-[16/11] w-full max-w-lg overflow-hidden rounded-[20px] border border-teal/15 sm:aspect-[4/5] sm:max-w-none sm:rounded-[24px] md:mx-0">
              <Image
                src="/images/foy-1.jpg"
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={72}
                placeholder="blur"
                blurDataURL={ACCENT_BLUR}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,19,24,0.72),rgba(14,19,24,0.12)_55%)]" />
              <p className="absolute bottom-4 left-4 font-display text-[10px] uppercase tracking-[0.28em] text-teal/90 sm:bottom-5 sm:left-5">
                Energize Fest
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center md:col-span-7 lg:col-span-8">
            <motion.p
              variants={depthChild3D}
              className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-xs sm:tracking-[0.32em] md:text-sm"
            >
              {homeMovementClosing.eyebrow}
            </motion.p>
            <motion.div variants={depthChild3D} className="mt-3 h-px w-full max-w-md bg-teal/25 sm:mt-4" />

            <motion.h2
              id="movement-closing-heading"
              variants={depthReveal3D}
              className="mt-5 font-heading text-[clamp(2rem,8vw,4.6rem)] leading-[0.92] text-ink sm:mt-6"
            >
              {homeMovementClosing.title[0]}
              <span className="block accent-gradient-text">{homeMovementClosing.title[1]}</span>
            </motion.h2>

            <motion.p
              variants={depthChild3D}
              className="mt-4 max-w-2xl font-body text-[0.95rem] leading-relaxed text-ink/82 sm:mt-5 sm:text-base md:mt-6 md:text-lg md:leading-relaxed"
            >
              {homeMovementClosing.body}
            </motion.p>

            <motion.div
              variants={depthChild3D}
              className="mt-7 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4 md:mt-10"
            >
              {homeMovementClosing.ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="inline-flex w-fit border-b border-teal/55 pb-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal sm:text-sm"
                >
                  {cta.label}
                </Link>
              ))}
            </motion.div>

            <motion.div
              variants={depthChild3D}
              className="mt-8 flex flex-col gap-2.5 border-t border-teal/15 pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:pt-8 md:mt-12"
            >
              {homeMovementClosing.pillars.map((pillar) => (
                <Link
                  key={pillar.href}
                  href={pillar.href}
                  className="font-display text-[10px] uppercase tracking-[0.2em] text-ink/55 transition-colors hover:text-teal sm:text-[11px] sm:tracking-[0.22em]"
                >
                  {pillar.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
