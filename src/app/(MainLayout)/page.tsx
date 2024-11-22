import AboutSection from "@/modules/home/about";
import ContactSection from "@/modules/home/contact";
import HeroSection from "@/modules/home/hero";
import ProjectsSection from "@/modules/home/projects";
import TechStack from "@/modules/home/tech-stack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
