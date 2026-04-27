"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
  accentColor = "#D4A017"
}: WorkPageLayoutProps) {
  return (
    <main className="bg-[#080808] pt-20">
      <section className="relative flex h-[60vh] min-h-[420px] w-full items-center justify-center overflow-hidden bg-[#120f0c]">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          quality={100}
          className="object-contain object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <Link
          href="/"
          className="absolute left-6 top-6 z-20 font-body text-sm font-medium md:left-10 md:top-8"
          style={{ color: accentColor }}
        >
          ← Back
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 px-6 text-center"
        >
          <h1 className="font-heading text-5xl text-white md:text-7xl">{title}</h1>
          <p className="mt-4 font-body text-base text-white/80 md:text-xl">{subtitle}</p>
        </motion.div>
      </section>

      <section className="bg-[#0d0d0d] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl text-center font-body text-lg leading-relaxed text-white/80">
          {body}
        </div>
      </section>
    </main>
  );
}
