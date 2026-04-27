import WorkPageLayout from "@/components/WorkPageLayout";

export default function SameEnergyPage() {
  return (
    <WorkPageLayout
      heroImage="/images/dr-foy.jpg"
      title="Same Energy Global"
      subtitle="Creative community built around structure, values, and execution."
      body={
        <div className="space-y-5">
          <p>
            Same Energy Global represents the community layer around Dr. Foy&apos;s broader culture
            and media work.
          </p>
          <p>
            It is designed for creators who want to pair inspiration with systems: better
            collaboration, clearer positioning, and stronger execution.
          </p>
          <p>
            The ethos aligns with his public emphasis on infrastructure in the creative economy,
            not just moments of visibility.
          </p>
        </div>
      }
    />
  );
}
