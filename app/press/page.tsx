"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pressMentions = [
  {
    publication: "Vanguard",
    headline: "Dr. Foy on building faith-rooted infrastructure for African creators",
    excerpt: "How Energize Central is combining media strategy, community, and distribution."
  },
  {
    publication: "Guardian Nigeria",
    headline: "Inside the movement behind Energize Fest and its cultural impact",
    excerpt: "A look at scale, creative direction, and what comes next for the ecosystem."
  },
  {
    publication: "This Day Live",
    headline: "From physician to culture architect: the Dr. Foy story",
    excerpt: "Why healthcare discipline became the foundation for long-term media execution."
  },
  {
    publication: "TurnTable Charts",
    headline: "Energize Music extends its reach with global distribution alignment",
    excerpt: "How label strategy and artist development are expanding gospel music exports."
  },
  {
    publication: "BusinessDay",
    headline: "Creative commerce and the business architecture of Same Energy Global",
    excerpt: "A business lens on community-led growth across culture and entertainment."
  },
  {
    publication: "Champion Newspapers",
    headline: "Energize Central's rise and what it signals for African media",
    excerpt: "Industry observers map the trajectory from local platforms to global influence."
  }
];

export default function PressPage() {
  return (
    <main className="bg-[#080808] pt-20">
      <section className="flex min-h-[40vh] items-center justify-center px-6 text-center">
        <h1 className="font-heading text-5xl text-white md:text-7xl">Press Room</h1>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 pb-20 md:grid-cols-2 md:px-10">
        {pressMentions.map((item, index) => (
          <motion.article
            key={item.publication}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4, boxShadow: "0 18px 30px rgba(0, 0, 0, 0.3)" }}
            className="border-l-2 border-l-gold bg-[#111111] p-6"
          >
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">{item.publication}</p>
            <h2 className="mt-3 font-heading text-3xl text-white">{item.headline}</h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-white/70">{item.excerpt}</p>
            <Link href="#" className="mt-5 inline-flex font-body text-sm text-gold">
              Read More →
            </Link>
          </motion.article>
        ))}
      </section>
    </main>
  );
}