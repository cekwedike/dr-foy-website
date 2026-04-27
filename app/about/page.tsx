"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutHighlights, aboutNarrative, timeline } from "@/app/data/siteContent";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

const advisoryCards = [
  ["Energize Central", "Founder"],
  ["Elevate Africa", "Chief Storyteller"],
  ["Woodhall Capital", "Strategic Advisor"],
  ["Liberty Creative Circles", "African Creative Hub Lead"]
] as const;

export default function AboutPage() {
  return (
    <main className="bg-background pt-20">
      <section className="relative flex h-[56vh] min-h-[420px] items-center justify-center overflow-hidden">
        <Image src="/images/foy-the-great.png" alt="" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.22),rgba(14,19,24,0.9))]" />
        <h1 className="relative z-10 px-6 text-center font-heading text-[clamp(2.8rem,8vw,6.5rem)] text-ink">
          About Dr. Foy
        </h1>
      </section>

      <motion.section
        className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUpVariant} className="relative h-[580px] w-full overflow-hidden rounded-[30px]">
          <Image src="/images/dr-foy-1.png" alt="" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(45,191,177,0.15),transparent_58%)]" />
        </motion.div>
        <motion.div variants={fadeUpVariant}>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-teal">PHYSICIAN · STRATEGIST · BUILDER</p>
          <h2 className="font-heading mt-4 text-[clamp(2.1rem,5vw,4.1rem)] leading-[0.94] text-ink">
            Still a doctor.
            <span className="accent-gradient-text"> Now building culture infrastructure.</span>
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-[1.85] text-ink/80">
            {aboutNarrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
        <h2 className="text-center font-heading text-[clamp(2.2rem,5vw,4rem)] text-ink">Verified Trajectory</h2>
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-teal/50 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((entry, index) => {
              const rightAligned = index % 2 === 1;
              return (
                <motion.div
                  key={entry.title}
                  initial={{ opacity: 0, x: rightAligned ? 45 : -45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${rightAligned ? "md:ml-auto md:pr-12" : "md:pl-12"}`}
                >
                  <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-teal to-coral md:left-auto md:top-8 md:h-4 md:w-4 md:translate-x-0 md:translate-y-0" />
                  <div className="clay-panel p-6">
                    <p className="font-body text-sm uppercase tracking-[0.18em] text-coral">{entry.year}</p>
                    <p className="mt-2 font-heading text-2xl text-ink">{entry.title}</p>
                    <p className="mt-3 font-body text-base leading-relaxed text-ink/78">{entry.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-[clamp(2.1rem,4.5vw,3.85rem)] text-ink">
            Boards & Advisory
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">
            {advisoryCards.map(([org, role]) => (
              <div key={org} className="clay-panel p-6">
                <p className="font-heading text-2xl text-ink">{org}</p>
                <p className="mt-3 font-body text-base uppercase tracking-[0.06em] text-teal">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h3 className="font-body text-sm uppercase tracking-[0.22em] text-coral">Reference Highlights</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {aboutHighlights.map((item) => (
              <article key={item.label} className="clay-panel p-5">
                <p className="text-sm uppercase tracking-[0.12em] text-muted">{item.label}</p>
                <p className="mt-2 font-heading text-2xl text-teal">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/74">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
