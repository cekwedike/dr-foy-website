"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const timelineEntries = [
  {
    place: "Military Hospital, Yaba",
    role: "Medical Practice",
    summary: "Where it started."
  },
  {
    place: "Cool TV / Wazobia TV",
    role: "Television Host & Content Creator",
    summary: "First step into media."
  },
  {
    place: "Viacom Nigeria / Paramount Africa",
    role: "Communications & Partnership Lead",
    summary: "MTV, BET, Nickelodeon, Comedy Central."
  },
  {
    place: "Dentsu Nigeria / Story Lab",
    role: "Content Director & Marketing Lead",
    summary: "Budweiser. Coca-Cola. Netflix."
  },
  {
    place: "Same Energy Global",
    role: "Founder",
    summary: "The community before the empire."
  },
  {
    place: "Energize Central",
    role: "Founder & CEO",
    summary: "Energize Music. Energize Fest. Energize Central Media."
  },
  {
    place: "The Orchard × Sony",
    role: "Distribution Partnership",
    summary: "2024. Lagos to the world."
  }
] as const;

const advisoryCards = [
  ["Design Week Lagos", "Board of Directors"],
  ["Woodhall Capital", "Strategic Advisor"],
  ["Liberty University Creative Circles", "African Creative Hub Lead"],
  ["Elevate Africa", "Chief Storyteller"]
] as const;

export default function AboutPage() {
  return (
    <main className="bg-[#080808] pt-20">
      <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden">
        <Image
          src="/images/foy-the-great.webp"
          alt="About Dr. Foy"
          fill
          priority
          quality={100}
          className="object-contain object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <h1 className="relative z-10 px-6 text-center font-heading text-5xl text-white md:text-7xl">
          About Dr. Foy
        </h1>
      </section>

      <motion.section
        className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:px-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="relative h-[580px] w-full overflow-hidden bg-[#120f0c]">
          <Image
            src="/images/dr-foy-1.webp"
            alt="Dr. Foy portrait"
            fill
            quality={100}
            className="object-contain object-center"
          />
        </div>
        <div>
          <p className="font-body text-xs uppercase tracking-[0.22em] text-gold">
            PHYSICIAN · STRATEGIST · BUILDER
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight text-white md:text-5xl">
            He never stopped being a doctor. He just kept going.
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-white/75">
            <p>
              Dr. Tochukwu Macfoy trained as a physician and practiced at the Military Hospital in
              Yaba, Lagos. The discipline, the precision, the commitment to people. That never
              left.
            </p>
            <p>
              What changed was the canvas. From medicine, he moved into media. He hosted
              television, produced content, and eventually took on the role of Communications,
              Partnership, and Special Project Lead at Viacom Nigeria, the parent company of MTV,
              BET, Nickelodeon, and Comedy Central.
            </p>
            <p>
              Then came Dentsu Nigeria, where he led content and marketing strategy, producing
              campaigns for Budweiser, Coca-Cola, and a show that landed on Netflix. From there, he
              built Same Energy Global and Energize Central from scratch.
            </p>
            <p>
              Today, Energize Music has a Sony distribution deal. Energize Fest draws thousands.
              And Dr. Foy continues to shape what African faith-rooted creativity looks and sounds
              like to the world.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <h2 className="text-center font-heading text-4xl text-white md:text-5xl">Career Timeline</h2>
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-gold/70 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {timelineEntries.map((entry, index) => {
              const rightAligned = index % 2 === 1;
              return (
                <motion.div
                  key={entry.place}
                  initial={{ opacity: 0, x: rightAligned ? 45 : -45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${rightAligned ? "md:ml-auto md:pr-12" : "md:pl-12"}`}
                >
                  <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-gold md:left-auto md:top-8 md:h-4 md:w-4 md:translate-x-0 md:translate-y-0" />
                  <div className="border border-gold/35 bg-[#111111] p-6">
                    <p className="font-heading text-2xl text-white">{entry.place}</p>
                    <p className="mt-2 font-body text-sm uppercase tracking-[0.1em] text-gold">
                      {entry.role}
                    </p>
                    <p className="mt-3 font-body text-sm text-white/70">{entry.summary}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-4xl text-white md:text-5xl">Boards & Advisory</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            {advisoryCards.map(([org, role]) => (
              <div
                key={org}
                className="border border-gold/60 bg-transparent p-6 transition-colors duration-300 hover:bg-gold/10"
              >
                <p className="font-heading text-2xl text-white">{org}</p>
                <p className="mt-3 font-body text-sm uppercase tracking-[0.08em] text-gold">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}