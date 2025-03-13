import AboutSection from "@/_pages/home/about";
import BlogSection from "@/_pages/home/blogs";
import ContactSection from "@/_pages/home/contact";
import HeroSection from "@/_pages/home/hero";
import Profession from "@/_pages/home/profession";
import ProjectSection from "@/_pages/home/projects";
import TechStack from "@/_pages/home/tech-stack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Profession />
      <AboutSection />
      <TechStack />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
