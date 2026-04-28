"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

type WorkPageLayoutProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  body: ReactNode;
  accentColor?: string;
  /** When set, replaces the default text hero title (use accessible content inside, e.g. Image alt). */
  heroTitle?: ReactNode;
};

export default function WorkPageLayout({
  title,
  subtitle,
  heroImage,
  body,
  accentColor = "#D9654A",
  heroTitle
}: WorkPageLayoutProps) {
  return (
    <main className="bg-background pt-20">
      <section className="relative flex h-[44vh] min-h-[280px] w-full items-center justify-center overflow-hidden md:h-[64vh] md:min-h-[440px]">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.38),rgba(14,19,24,0.9))]" />
        <Link
          href="/"
          className="neu-outline absolute left-4 top-4 z-20 rounded-full px-3.5 py-1.5 font-body text-xs font-medium text-ink md:left-10 md:top-8 md:px-4 md:py-2 md:text-sm"
          style={{ color: accentColor }}
        >
          ← Back Home
        </Link>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 px-6 text-center"
        >
          {heroTitle ? (
            <>
              <h1 className="sr-only">{title}</h1>
              <motion.div variants={fadeUpVariant} className="mx-auto w-full max-w-[min(92vw,36rem)]">
                {heroTitle}
              </motion.div>
            </>
          ) : (
            <motion.h1 variants={fadeUpVariant} className="font-heading text-[clamp(2.8rem,7vw,5.4rem)] text-ink">
              {title}
            </motion.h1>
          )}
          <motion.p variants={fadeUpVariant} className="mx-auto mt-4 max-w-3xl font-body text-lg text-ink/84 md:text-2xl">
            {subtitle}
          </motion.p>
        </motion.div>
      </section>

      <section className="bg-surface px-5 py-10 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-teal/30" />
          <article className="py-8 text-left font-body text-base leading-[1.72] text-ink/86 sm:text-xl md:py-12 md:text-2xl md:leading-[1.85]">
            {body}
          </article>
          <div className="h-px w-full bg-teal/30" />
        </div>
      </section>
    </main>
  );
}
