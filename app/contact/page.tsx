"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

export default function ContactPage() {
  return (
    <main className="bg-background pt-20">
      <section className="grid min-h-[calc(100vh-80px)] grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden bg-[var(--color-bg-deep)]">
          <Image src="/images/foy.jpg" alt="" fill priority className="object-cover object-top" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.2),rgba(14,19,24,0.82))]" />
          <div className="absolute bottom-10 left-8 right-8">
            <p className="font-heading text-[clamp(2.2rem,5vw,3.75rem)] text-ink">
              Let&apos;s build something that lasts.
            </p>
          </div>
        </div>

        <motion.div
          className="bg-surface px-6 py-14 md:px-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUpVariant} className="font-heading text-[clamp(2.5rem,5vw,4.1rem)] text-ink">
            Contact
          </motion.h1>
          <motion.div variants={fadeUpVariant} className="mt-8 space-y-3 font-body text-base leading-relaxed text-ink/88">
            <p>
              Email:{" "}
              <a href="mailto:hello@drfoylive.com" className="text-teal hover:underline">
                hello@drfoylive.com
              </a>
            </p>
            <p>
              Instagram:{" "}
              <Link href="https://instagram.com/drfoy" className="text-teal hover:underline">
                @drfoy
              </Link>
            </p>
            <p>
              LinkedIn:{" "}
              <Link href="https://linkedin.com" className="text-teal hover:underline">
                Tochukwu Macfoy
              </Link>
            </p>
          </motion.div>

          <motion.form variants={fadeUpVariant} className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="neu-inset w-full rounded-xl border border-teal/20 px-4 py-3.5 font-body text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="neu-inset w-full rounded-xl border border-teal/20 px-4 py-3.5 font-body text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none"
            />
            <textarea
              rows={6}
              placeholder="Message"
              className="neu-inset w-full rounded-xl border border-teal/20 px-4 py-3.5 font-body text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none"
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
