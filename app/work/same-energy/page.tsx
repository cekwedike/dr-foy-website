import WorkPageLayout from "@/components/WorkPageLayout";

export default function SameEnergyPage() {
  return (
    <WorkPageLayout
      heroImage="/images/dr-foy.jpg"
      title="Same Energy Global"
      subtitle="An agency built to help individuals and organisations scale."
      body={
        <div className="space-y-5">
          <p>
            Same Energy Global works with creatives, brands, and organisations who have the vision
            but need the strategy and systems to grow. The work spans artist management, content
            amplification, strategic distribution, and creative infrastructure.
          </p>
          <p>
            It is the foundation that Energize Music was built on. And it is the engine Dr. Foy has
            used to build partnerships with global brands like Coca-Cola, Airtel, and MasterCard,
            and to secure deals like Energize Music&apos;s alliance with The Orchard, a Sony Music
            subsidiary.
          </p>
          <p>Same Energy does not just inspire. It builds.</p>
        </div>
      }
    />
  );
}
