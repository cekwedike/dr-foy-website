import Image from "next/image";
import WorkPageLayout from "@/components/WorkPageLayout";

const NEXT_LOGO_WHITE = "/images/NEXT%20Logo%20White.svg";
const NEXT_LOGO_BLACK = "/images/NEXT%20Logo_Black.png";

export default function NextPage() {
  return (
    <WorkPageLayout
      heroImage="/images/foy-the-energetic.jpg"
      title="NEXT"
      subtitle="New Era Xceptional Talent"
      heroTitle={
        <div className="relative mx-auto aspect-[5/2] w-[min(90vw,28rem)] md:aspect-[16/5] md:w-[min(72vw,36rem)]">
          <Image
            src={NEXT_LOGO_WHITE}
            alt=""
            fill
            priority
            className="object-contain object-center drop-shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
            sizes="(max-width: 768px) 90vw, 36rem"
          />
        </div>
      }
      body={
        <div className="space-y-10 md:space-y-14">
          <div className="grid gap-8 rounded-2xl border border-teal/25 bg-gradient-to-br from-ink/[0.06] via-surface to-teal/[0.04] p-6 shadow-neu sm:p-8 md:grid-cols-[minmax(0,14rem)_1fr] md:items-center md:gap-10 md:p-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-14">
            <div className="relative mx-auto aspect-[12/5] w-full max-w-[14rem] shrink-0 md:mx-0 md:max-w-none lg:max-w-[18rem]">
              <Image
                src={NEXT_LOGO_BLACK}
                alt=""
                fill
                className="object-contain object-left md:object-center"
                sizes="(max-width: 768px) 14rem, 18rem"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p className="font-display text-lg leading-snug tracking-[0.04em] text-ink sm:text-xl md:text-2xl">
                New Era Xceptional Talent.
              </p>
              <p>
                Africa has never lacked gifted Afrogospel artists. It has lacked the platform to find
                them, develop them, and release them to the world. NEXT is that platform.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <p>
              Presented by Energize Music, NEXT is Africa&apos;s first pan-African Afrogospel talent
              competition and creative incubator. Artists from across Africa submit original music. Judges select the top 50. The public votes to narrow
              it to the top 20. The top 10 go into the studio to record the ENERGIZE Afrogospel Album
              alongside some of the continent&apos;s most respected Afrogospel voices. The top 20
              headline block parties across all five nations. And in October, it all lands at a
              full-scale pan-African album launch concert.
            </p>
            <p>
              Every artist who enters also joins the Kingdom Creatives Academy, a long-term creative
              development community built specifically for Afrogospel artists. The competition ends.
              The growth does not.
            </p>
          </div>
        </div>
      }
    />
  );
}
