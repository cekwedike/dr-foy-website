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
};

export default function WorkPageLayout({
  title,
  subtitle,
  heroImage,
  body,
  accentColor = "#D9654A"
}: WorkPageLayoutProps) {
  return (
    <main className="bg-background pt-20">
      <section className="relative flex h-[64vh] min-h-[440px] w-full items-center justify-center overflow-hidden">
        <Image src={heroImage} alt="" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.38),rgba(14,19,24,0.9))]" />
        <Link
          href="/"
          className="neu-outline absolute left-5 top-6 z-20 rounded-full px-4 py-2 font-body text-sm font-medium text-ink md:left-10 md:top-8"
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
          <motion.h1 variants={fadeUpVariant} className="font-heading text-[clamp(2.8rem,7vw,5.4rem)] text-ink">
            {title}
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="mx-auto mt-4 max-w-3xl font-body text-lg text-ink/84 md:text-2xl">
            {subtitle}
          </motion.p>
        </motion.div>
      </section>

      <section className="bg-surface px-5 py-14 md:px-10 md:py-20">
        <div className="clay-band mx-auto max-w-5xl rounded-[28px] px-6 py-10 text-center font-body text-lg leading-[1.85] text-ink/86 sm:text-xl md:px-12 md:py-14 md:text-2xl">
          {body}
        </div>
      </section>
    </main>
  );
}
