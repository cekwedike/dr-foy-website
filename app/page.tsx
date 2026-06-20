import HeroSection from "@/components/home/HeroSection";
import HeroBuildsBridge from "@/components/home/HeroBuildsBridge";
import HomeExperience from "@/components/home/HomeExperience";
import HorizontalBuildsSection from "@/components/home/HorizontalBuildsSection";
import MovementSection from "@/components/home/MovementSection";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata = createPageMetadata("home");

export default function HomePage() {
  return (
    <HomeExperience>
      <HeroSection />
      <HeroBuildsBridge />
      <HorizontalBuildsSection />
      <MovementSection />
    </HomeExperience>
  );
}
