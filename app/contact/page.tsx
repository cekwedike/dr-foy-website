"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

export default function ContactPage() {
  return (
    <main className="bg-background pt-20">
      <section className="grid min-h-[calc(100vh-80px)] grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden bg-[var(--color-bg-deep)] md:min-h-[420px]">
          <Image src="/images/foy.jpg" alt="" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.2),rgba(14,19,24,0.82))]" />
          <div className="absolute bottom-6 left-5 right-5 md:bottom-10 md:left-8 md:right-8">
            <p className="font-heading text-[clamp(2.2rem,5vw,3.75rem)] text-ink">
              Let&apos;s build something that lasts.
            </p>
          </div>
        </div>

        <motion.div
          className="bg-surface px-6 py-9 md:px-12 md:py-14"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUpVariant} className="font-heading text-[clamp(2.5rem,5vw,4.1rem)] text-ink">
            Contact
          </motion.h1>
          <motion.div variants={fadeUpVariant} className="mt-6 space-y-2.5 font-body text-base leading-relaxed text-ink/88 md:mt-8 md:space-y-3">
            <p>For bookings and inquiries, use the form below.</p>
            <p>
              Instagram:{" "}
              <Link href="https://instagram.com/drfoy" className="text-teal hover:underline">
                @drfoy
              </Link>
            </p>
            <p>
              LinkedIn:{" "}
              <Link href="https://www.linkedin.com/in/tochukwu-macfoy-05947b103/" className="text-teal hover:underline">
                Tochukwu Macfoy
              </Link>
            </p>
          </motion.div>

          <motion.form variants={fadeUpVariant} className="mt-7 space-y-3.5 md:mt-10 md:space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="neu-inset w-full rounded-xl border border-teal/20 px-4 py-3 font-body text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none md:py-3.5"
            />
            <input
              type="email"
              placeholder="Email"
              className="neu-inset w-full rounded-xl border border-teal/20 px-4 py-3 font-body text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none md:py-3.5"
            />
            <textarea
              rows={6}
              placeholder="Message"
              className="neu-inset w-full rounded-xl border border-teal/20 px-4 py-3 font-body text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none md:py-3.5"
            />
            <button
              type="submit"
              className="cta-clay-wrap inline-block rounded-full transition-opacity hover:opacity-95"
            >
              <span className="cta-clay-inner inline-flex rounded-full px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                Submit
              </span>
            </button>
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
}
