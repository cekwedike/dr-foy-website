import AboutTeaserSection from "@/components/home/AboutTeaserSection";
import HeroSection from "@/components/home/HeroSection";
import HomeExperience from "@/components/home/HomeExperience";
import HorizontalBuildsSection from "@/components/home/HorizontalBuildsSection";
import MovementSection from "@/components/home/MovementSection";

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
