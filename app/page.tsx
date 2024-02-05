import AboutSection from "@/components/AboutSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import HeroSection from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import ProjectBanner from "@/components/ProjectBanner";
import ServicesSection from "@/components/ServicesSection";
import { Projects } from "@/constants";

export default function Home() {
  return (
    <main className="w-screen relative max-tablet:overflow-x-hidden">
      <HeroSection />
      {Projects.map((project, index) => (
        <FeaturedProjectSection
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          btnText={project.btnText}
          projectUrl={project.projectUrl}
          projectNum={project.projectNum}
          imageOrientation={project.imageOrientation}
          lightBG={project.lightBG}
          lastProjet={index === Projects.length-1 ? true:false}
        />
      ))}
      <div className="-translate-y-[50%] max-tablet:translate-y-0">
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
