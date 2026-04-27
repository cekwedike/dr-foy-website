import WorkPageLayout from "@/components/WorkPageLayout";

export default function EnergizeFestPage() {
  return (
    <WorkPageLayout
      heroImage="/images/foy-1.jpg"
      title="Energize Fest"
      subtitle="A family-first cultural festival built for joy and scale."
      body={
        <div className="space-y-5">
          <p>
            Energize Fest is the live expression of the Energize Central mission: create
            faith-rooted experiences that are both culturally relevant and family-safe.
          </p>
          <p>
            Coverage by The Sun reported over 3,000 attendees and positioned the event as a major
            December family entertainment format in Lagos.
          </p>
          <p>
            Beyond performance, the festival is designed as community architecture where music,
            storytelling, and celebration reinforce shared values.
          </p>
        </div>
      }
    />
  );
}
