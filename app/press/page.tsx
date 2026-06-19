"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { verifiedSources } from "@/app/data/siteContent";
import Tilt3D from "@/components/motion/Tilt3D";
import { depthChild3D, depthReveal3D, staggerContainer } from "@/components/motion/tokens";

const pressMentions = [
  {
    publication: "BusinessDay",
    headline: "Nigeria stands at the frontier of global cultural influence",
    excerpt:
      "A deep conversation on why Nigeria's creative economy still lacks the infrastructure to match its global ambition, and what Energize Central is doing to fix that."
  },
  {
    publication: "The Guardian Nigeria",
    headline: "Energize Music enters strategic partnership with Orchard",
    excerpt:
      "The story of Energize Music's 2024 partnership with The Orchard, Sony Music's distribution arm, and what it means for gospel and family music reaching a global audience."
  },
  {
    publication: "The Sun Nigeria",
    headline: "Energize Central becomes face of family entertainment",
    excerpt:
      "How Energize Fest pulled over 3,000 people and became Lagos's biggest faith-centered December event, headlined by artists like Greatman Takit, Tope Alabi, and Prince Emmanuel."
  },
  {
    publication: "TurnTable Charts",
    headline: "Industry digest on Energize Music × Orchard",
    excerpt:
      "An industry breakdown of the Energize Music and Orchard deal, including direct quotes from the label's Head of Music on the quality standard every artist is held to."
  }
];

export default function PressPage() {
  return (
    <main className="overflow-x-clip bg-background pt-20">
      <section className="perspective-[1400px] flex min-h-[22vh] items-center justify-center px-5 text-center sm:min-h-[28vh] sm:px-6 md:min-h-[40vh]">
        <motion.h1
          className="text-balance font-heading text-[clamp(2.4rem,7vw,6rem)] text-ink"
          initial={{ opacity: 0, rotateX: 28, y: 48 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Press Room
        </motion.h1>
      </section>

      <section className="page-container pb-12 md:pb-20">
        <motion.p
          className="max-w-3xl font-body text-base leading-relaxed text-ink/78 md:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={depthReveal3D}
        >
          Dr. Foy has been featured in Nigeria&apos;s leading business and culture press. Here&apos;s what
          they&apos;ve said.
        </motion.p>
        <motion.div
          className="mt-7 h-px w-full bg-teal/25 md:mt-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="divide-y divide-teal/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerContainer}
        >
          {pressMentions.map((item, index) => (
            <motion.article key={item.publication} variants={depthChild3D}>
              <Tilt3D className="py-6 md:py-8" intensity={6} lift={8}>
                <div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-4 md:grid-cols-[minmax(0,11rem)_1fr] md:gap-8 lg:grid-cols-[minmax(0,13rem)_1fr]">
                  <p className="font-body text-sm uppercase tracking-[0.18em] text-teal">{item.publication}</p>
                  <div>
                    <h2 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.08] text-ink">
                      {item.headline}
                    </h2>
                    <p className="mt-2 font-body text-base leading-relaxed text-ink/78">{item.excerpt}</p>
                    <Link
                      href={verifiedSources[index]?.href ?? "#"}
                      target={verifiedSources[index]?.href ? "_blank" : undefined}
                      rel={verifiedSources[index]?.href ? "noreferrer" : undefined}
                      className="mt-4 inline-flex font-body text-sm uppercase tracking-[0.12em] text-coral transition-colors hover:text-teal"
                    >
                      View Source
                    </Link>
                  </div>
                </div>
              </Tilt3D>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
