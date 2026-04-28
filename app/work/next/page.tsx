import WorkPageLayout from "@/components/WorkPageLayout";

export default function NextPage() {
  return (
    <WorkPageLayout
      heroImage="/images/foy-the-energetic.jpg"
      title="NEXT"
      subtitle="New Era Xceptional Talent"
      body={
        <div className="space-y-5">
          <p>New Era Xceptional Talent.</p>
          <p>
            Africa has never lacked gifted Afrogospel artists. It has lacked the platform to find
            them, develop them, and release them to the world. NEXT is that platform.
          </p>
          <p>
            Presented by Energize Music, NEXT is Africa&apos;s first pan-African Afrogospel talent
            competition and creative incubator. Artists from Nigeria, Ghana, Kenya, Uganda, and
            South Africa submit original music. Judges select the top 50. The public votes to narrow
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
      }
    />
  );
}
