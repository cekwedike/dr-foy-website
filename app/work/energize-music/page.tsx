import WorkPageLayout from "@/components/WorkPageLayout";

export default function EnergizeMusicPage() {
  return (
    <WorkPageLayout
      heroImage="/images/foy-the-energetic.jpg"
      title="Energize Music"
      subtitle="A faith-rooted label engineered for global relevance."
      body={
        <div className="space-y-5">
          <p>
            Energize Music operates within the Energize Central ecosystem and positions itself as a
            high-standard home for faith and family-centered music.
          </p>
          <p>
            In 2024, multiple reports including Guardian coverage documented its strategic alliance
            with The Orchard, a Sony Music subsidiary, expanding international distribution
            capability.
          </p>
          <p>
            The model combines artist development, production discipline, and multimedia ambition
            across music, visuals, and format experimentation.
          </p>
        </div>
      }
    />
  );
}
