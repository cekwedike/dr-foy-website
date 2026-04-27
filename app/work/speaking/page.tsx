import Link from "next/link";
import WorkPageLayout from "@/components/WorkPageLayout";

export default function SpeakingPage() {
  return (
    <WorkPageLayout
      heroImage="/images/foy-3.webp"
      title="Speaking & Advisory"
      subtitle="Where culture meets commerce."
      body={
        <div>
          <p>
            Dr. Foy has spoken at conferences including Reinvent 2024, Niyo Fest, Social Media
            Week Lagos, and Design Week Lagos where he sits on the Board of Directors. He advises
            Woodhall Capital and serves as Chief Storyteller at Elevate Africa. He also leads the
            African Creative Hub at Liberty University&apos;s Creative Circles. His perspective sits
            at the intersection of medicine, media, faith, and business.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-gold px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#080808]"
          >
            Book Dr. Foy for Your Event
          </Link>
        </div>
      }
    />
  );
}
