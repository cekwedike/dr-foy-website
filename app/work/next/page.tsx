import WorkPageLayout from "@/components/WorkPageLayout";

export default function NextPage() {
  return (
    <WorkPageLayout
      heroImage="/images/foy-the-energetic.jpg"
      title="NEXT"
      subtitle="New Era Xceptional Talent"
      body={
        <div className="space-y-5">
          <p>
            Africa&apos;s boldest Afrogospel talent search. Built by Energize Music to find,
            develop, and launch the next generation of faith-rooted artists across the continent.
          </p>
          <p>
            NEXT is not just a competition. It is a full incubator. Artists across Africa submit
            their music. Judges select the top 50. The public votes to narrow it to the top 20. The
            top 20 headline pan-African Afrogospel block parties. The top 10 go into the studio to
            create the ENERGIZE Afrogospel Album alongside established Afrogospel musicians. The
            journey ends with a major album launch concert.
          </p>
          <p>
            Every phase is content. Every phase builds the artist. And when the competition closes,
            the development does not stop.
          </p>
          <p>
            NEXT is Energize Music&apos;s statement that African faith-rooted talent deserves serious
            infrastructure, not just a moment in the spotlight.
          </p>
        </div>
      }
    />
  );
}
