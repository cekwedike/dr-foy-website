import WorkPageLayout from "@/components/WorkPageLayout";

export default function SameEnergyPage() {
  return (
    <WorkPageLayout
      heroImage="/images/dr-foy.jpg"
      title="Same Energy Global"
      subtitle="The community where everything started."
      body={
        <div className="space-y-5">
          <p>
            Same Energy Global was founded by Dr. Foy as a home for visionary creatives who want to
            work at the intersection of faith, culture, and media. The core belief is that
            inspiration without infrastructure is just a feeling.
          </p>
          <p>
            Energize Music is the label that grew out of this community. Energize Fest is the live
            event it produced. Energize Central Media is its storytelling arm. Same Energy is the
            root of the whole tree.
          </p>
          <p>
            Dr. Foy has been described as the force that revolutionized Christian entertainment
            through artist management, content amplification, and distribution. Same Energy Global
            is where that work lives and grows.
          </p>
        </div>
      }
    />
  );
}
