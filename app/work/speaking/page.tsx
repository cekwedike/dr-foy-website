import Link from "next/link";
import WorkPageLayout from "@/components/WorkPageLayout";

export default function SpeakingPage() {
  return (
    <WorkPageLayout
      heroImage="/images/foy-3.jpg"
      title="Speaking & Advisory"
      subtitle="Strategy conversations at the edge of culture, media, and systems."
      body={
        <div>
          <div className="space-y-5">
            <p>
              Dr. Foy&apos;s speaking and advisory work focuses on one theme: how African creativity
              scales when structure meets vision.
            </p>
            <p>
              Public interviews and profile sources reference his contributions across strategy,
              communications, and ecosystem-building, including work connected to Elevate Africa
              and Woodhall Capital.
            </p>
            <p>
              His perspective is shaped by medicine, media operations, and live creative execution,
              making his sessions practical for founders, artists, and institutions.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex border-b border-teal/45 pb-1.5 font-body text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-teal"
          >
            Book Dr. Foy for Your Event
          </Link>
        </div>
      }
    />
  );
}
