import AboutSection from "@/modules/home/about";
import ContactSection from "@/modules/home/contact";
import HeroSection from "@/modules/home/hero";
import ProjectsSection from "@/modules/home/projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
