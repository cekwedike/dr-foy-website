import WorkPageLayout from "@/components/WorkPageLayout";

export default function EnergizeMusicPage() {
  return (
    <WorkPageLayout
      heroImage="/images/foy-the-energetic.jpg"
      title="Energize Music"
      subtitle="The record label Dr. Foy built to be, in his own words, the label of the future."
      body={
        <div className="space-y-5">
          <p>
            Energize Music is the record label arm of the Energize Central ecosystem. It produces
            faith-rooted music with serious commercial ambition. The label has managed artists like
            Ty Bello and Greatman Takit. Their most recent album reached the top of the gospel
            charts nationally and globally on Apple Music.
          </p>
          <p>
            In 2024, Energize Music signed a strategic alliance with The Orchard, a Sony Music
            subsidiary, securing global distribution reach. Lanre Masha, The Orchard&apos;s Director
            of African Operations, cited Energize&apos;s track record in Christian and clean family
            music as the reason for the deal.
          </p>
          <p>
            The label sits inside a wider Energize Central machine that spans TV, film, podcasts,
            gaming, and social media. Music is the entry point. The bigger vision is a full African
            creative ecosystem.
          </p>
        </div>
      }
    />
  );
}
