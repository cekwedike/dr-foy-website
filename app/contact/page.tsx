"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { depthChild3D, depthReveal3D, staggerContainer } from "@/components/motion/tokens";
import Tilt3D from "@/components/motion/Tilt3D";

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-background pt-20">
      <section className="grid min-h-[calc(100dvh-5rem)] grid-cols-1 lg:grid-cols-2">
        <div className="perspective-[1400px] relative min-h-[240px] overflow-hidden bg-[var(--color-bg-deep)] sm:min-h-[300px] lg:min-h-[420px]">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/foy.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.2),rgba(14,19,24,0.82))]" />
          <motion.div
            className="absolute bottom-6 left-5 right-5 md:bottom-10 md:left-8 md:right-8"
            initial={{ opacity: 0, rotateX: 18, y: 32 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-heading text-[clamp(2.2rem,5vw,3.75rem)] text-ink">
              Let&apos;s build something that lasts.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="min-w-0 bg-surface px-5 py-8 sm:px-6 sm:py-9 md:px-10 md:py-12 lg:px-12 lg:py-14"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={depthReveal3D} className="font-heading text-[clamp(2.5rem,5vw,4.1rem)] text-ink">
            Contact
          </motion.h1>
          <motion.div
            variants={depthChild3D}
            className="mt-6 space-y-2.5 font-body text-base leading-relaxed text-ink/88 md:mt-8 md:space-y-3"
          >
            <p>For bookings and inquiries, use the form below.</p>
            <p>
              Instagram:{" "}
              <Link href="https://instagram.com/drfoy" className="text-teal hover:underline">
                @drfoy
              </Link>
            </p>
            <p>
              LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com/in/tochukwu-macfoy-05947b103/"
                className="text-teal hover:underline"
              >
                Tochukwu Macfoy
              </Link>
            </p>
          </motion.div>

          <motion.div variants={depthChild3D} className="mt-7 md:mt-10">
            <Tilt3D intensity={8} lift={10}>
              <motion.form className="neu-inset space-y-3.5 rounded-2xl border border-teal/15 p-5 md:space-y-4 md:p-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl border border-teal/20 bg-background/40 px-4 py-3 font-body text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none md:py-3.5"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-teal/20 bg-background/40 px-4 py-3 font-body text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none md:py-3.5"
                />
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full rounded-xl border border-teal/20 bg-background/40 px-4 py-3 font-body text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none md:py-3.5"
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
            </Tilt3D>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
