"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutNarrative } from "@/app/data/siteContent";
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
      <section className="relative flex h-[42vh] min-h-[280px] items-center justify-center overflow-hidden md:h-[56vh] md:min-h-[420px]">
        <Image
          src="/images/foy-the-great.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.22),rgba(14,19,24,0.9))]" />
        <h1 className="relative z-10 px-6 text-center font-heading text-[clamp(2.8rem,8vw,6.5rem)] text-ink">
          About Dr. Foy
        </h1>
      </section>

      <motion.section
        className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 py-10 md:grid-cols-2 md:gap-10 md:px-10 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUpVariant} className="relative h-[360px] w-full overflow-hidden rounded-[24px] md:h-[580px] md:rounded-[30px]">
          <Image src="/images/dr-foy-1.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(45,191,177,0.15),transparent_58%)]" />
        </motion.div>
        <motion.div variants={fadeUpVariant}>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-teal">PHYSICIAN · STRATEGIST · BUILDER</p>
          <h2 className="font-heading mt-4 text-[clamp(2.1rem,5vw,4.1rem)] leading-[0.94] text-ink">
            Still a doctor.
            <span className="accent-gradient-text"> Now building culture infrastructure.</span>
          </h2>
          <div className="mt-5 space-y-4 text-base leading-[1.72] text-ink/80 md:mt-6 md:space-y-5 md:text-lg md:leading-[1.85]">
            {aboutNarrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <section className="bg-surface px-5 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-[clamp(2.1rem,4.5vw,3.85rem)] text-ink">
            Boards & Advisory
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-4 md:gap-5">
            {advisoryCards.map(([org, role]) => (
              <div key={org} className="clay-panel p-5 md:p-6">
                <p className="font-heading text-2xl text-ink">{org}</p>
                <p className="mt-3 font-body text-base uppercase tracking-[0.06em] text-teal">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
