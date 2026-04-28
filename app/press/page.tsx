"use client";

import Link from "next/link";
import { verifiedSources } from "@/app/data/siteContent";

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
    <main className="bg-background pt-20">
      <section className="flex min-h-[26vh] items-center justify-center px-6 text-center md:min-h-[40vh]">
        <h1 className="font-heading text-[clamp(2.8rem,7vw,6rem)] text-ink">Press Room</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 md:pb-20">
        <p className="max-w-3xl font-body text-base leading-relaxed text-ink/78 md:text-lg">
          Dr. Foy has been featured in Nigeria&apos;s leading business and culture press. Here&apos;s what
          they&apos;ve said.
        </p>
        <div className="mt-7 h-px w-full bg-teal/25 md:mt-10" />

        <div className="divide-y divide-teal/20">
        {pressMentions.map((item, index) => (
          <article
            key={item.publication}
            className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-8 md:py-8"
          >
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
          </article>
        ))}
        </div>
      </section>
    </main>
  );
}
