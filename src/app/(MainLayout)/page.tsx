import AboutSection from "@/modules/home/about";
import BlogSection from "@/modules/home/blogs";
import ContactSection from "@/modules/home/contact";
import HeroSection from "@/modules/home/hero";
import ProjectSection from "@/modules/home/projects";
import TechStack from "@/modules/home/tech-stack";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
