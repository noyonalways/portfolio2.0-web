import Container from "@/components/ui/container";
import { Spotlight } from "@/components/ui/spotlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { khula, poppins } from "@/utils/fonts";
import Image from "next/image";
import ResumeDropdown from "./resume-dropdown";

interface IProps {}

const AboutSection = ({}: IProps) => {
  return (
    <section className="relative pb-10 pt-10 md:pt-0">
      <div className="hidden md:block">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:top-40"
          fill="white"
        />
      </div>
      <div className="hidden md:block">
        <TextHoverEffect text="ABOUT" />
      </div>
      <div className="md:absolute md:top-0 md:translate-y-1/2 w-full">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-2">
              <Image
                className="w-full"
                src="https://i.ibb.co.com/d5CqwWh/5fb8a140671d575b.png"
                alt="About Me"
                width={500}
                height={500}
              />
            </div>
            <div className="md:col-span-4 space-y-6">
              <div className="space-y-4">
                <h1 className={`font-bold text-5xl ${khula.className}`}>
                  About Me
                </h1>
                <p
                  className={`${poppins.className} text-muted-foreground leading-relaxed`}
                >
                  I&lsquo;m Noyon Rahman, specializing in building responsive
                  and dynamic web applications with expertise in React.js,
                  TypeScript, Redux-Toolkit, Next.js, Mongoose, Express.js,
                  Tailwind CSS, and Docker. Passionate about delivering
                  high-performance solutions, I am always eager to learn and
                  explore new tools and languages to stay at the forefront of
                  modern web development.
                </p>
                <p
                  className={`${poppins.className} text-muted-foreground leading-relaxed`}
                >
                  When I&lsquo;m not coding, you can usually find me reading,
                  hiking, or enjoying a good cup of coffee. I&lsquo;m also a big
                  fan of traveling and exploring new places whenever I get the
                  chance.
                </p>
              </div>

              <div>
                <ResumeDropdown />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutSection;
