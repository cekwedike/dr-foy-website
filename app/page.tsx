import HeroSection from "@/components/home/HeroSection";
import HomeExperience from "@/components/home/HomeExperience";
import dynamic from "next/dynamic";

const AboutTeaserSection = dynamic(() => import("@/components/home/AboutTeaserSection"), {
  loading: () => <div className="bg-background py-16 md:py-24" />,
  ssr: true
});
const HorizontalBuildsSection = dynamic(() => import("@/components/home/HorizontalBuildsSection"), {
  loading: () => <div className="bg-background py-16 md:py-24" />,
  ssr: true
});
const MovementSection = dynamic(() => import("@/components/home/MovementSection"), {
  loading: () => <div className="bg-background py-16 md:py-24" />,
  ssr: true
});

export default function HomePage() {
  return (
    <HomeExperience>
      <HeroSection />
      <AboutTeaserSection />
      <HorizontalBuildsSection />
      <MovementSection />
    </HomeExperience>
  );
}
