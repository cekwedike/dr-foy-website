import WorkPageLayout from "@/components/WorkPageLayout";

export default function EnergizeFestPage() {
  return (
    <WorkPageLayout
      heroImage="/images/foy-1.jpg"
      title="Energize Fest"
      subtitle="Lagos's biggest faith-centered December event. Built for families. Built to scale."
      body={
        <div className="space-y-5">
          <p>
            Energize Fest is the live event arm of the Energize Central ecosystem. It runs in
            December in Lagos as a direct, faith-rooted alternative to the typical December
            entertainment calendar.
          </p>
          <p>
            The festival has drawn over 3,000 attendees and featured performances from Greatman
            Takit, Prince Emmanuel, Tope Alabi, and Spirit of Prophecy. The Sun Nigeria called it
            arguably the largest family-centered Christmas show of its kind in Lagos.
          </p>
          <p>
            It is not just a concert. It is a gathering space where faith, culture, and celebration
            share the same room.
          </p>
        </div>
      }
    />
  );
}
