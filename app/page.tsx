import AboutSection from "@/components/AboutSection";
import FeaturedWebSitesModels from "@/components/FeaturedWebSitesModels";
import HeroSection from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import ProjectBanner from "@/components/ProjectBanner";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="w-screen relative max-tablet:overflow-x-hidden">
      <HeroSection />
      <FeaturedWebSitesModels />
      <div className="-translate-y-[20%] max-tablet:translate-y-0">
        <ProjectBanner />
      </div>
      <div className="h-9" />
      <NumbersSection />
      <div className="h-28" />
      <ServicesSection />
      <AboutSection />
    </main>
  );
}
