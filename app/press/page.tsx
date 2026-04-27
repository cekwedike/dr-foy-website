"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { verifiedSources } from "@/app/data/siteContent";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

const pressMentions = [
  {
    publication: "BusinessDay",
    headline: "Nigeria stands at the frontier of global cultural influence",
    excerpt:
      "Interview feature covering Dr. Foy's view on infrastructure, financing, IP ownership, and scaling the creative economy."
  },
  {
    publication: "The Guardian Nigeria",
    headline: "Energize Music enters strategic partnership with Orchard",
    excerpt:
      "Coverage of the Orchard (Sony Music subsidiary) alliance and Energize Music's distribution ambitions."
  },
  {
    publication: "The Sun Nigeria",
    headline: "Energize Central becomes face of family entertainment",
    excerpt:
      "Report citing over 3,000 attendees and positioning Energize Fest as a major family-centered December format."
  },
  {
    publication: "TurnTable Charts",
    headline: "Industry digest on Energize Music × Orchard",
    excerpt:
      "Additional industry summary of the strategic alliance and its implications for gospel/family music distribution."
  }
];

export default function PressPage() {
  return (
    <main className="bg-background pt-20">
      <section className="flex min-h-[40vh] items-center justify-center px-6 text-center">
        <h1 className="font-heading text-[clamp(2.8rem,7vw,6rem)] text-ink">Press Room</h1>
      </section>

      <motion.section
        className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 pb-20 md:grid-cols-2 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {pressMentions.map((item, index) => (
          <motion.article
            key={item.publication}
            variants={fadeUpVariant}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -3 }}
            className="clay-band relative rounded-2xl border-l-[3px] border-teal p-6"
          >
            <p className="font-body text-sm uppercase tracking-[0.18em] text-teal">{item.publication}</p>
            <h2 className="mt-3 font-heading text-3xl text-ink">{item.headline}</h2>
            <p className="mt-3 font-body text-base leading-relaxed text-ink/78">{item.excerpt}</p>
            <Link
              href={verifiedSources[index]?.href ?? "#"}
              target={verifiedSources[index]?.href ? "_blank" : undefined}
              rel={verifiedSources[index]?.href ? "noreferrer" : undefined}
              className="mt-5 inline-flex font-body text-base text-coral transition-colors hover:text-teal"
            >
              Open Source →
            </Link>
          </motion.article>
        ))}
      </motion.section>
    </main>
  );
}
