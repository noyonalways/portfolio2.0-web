import Container from "@/components/ui/container";
import { Spotlight } from "@/components/ui/spotlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import { khula, poppins } from "@/utils/fonts";
import ResumeDropdown from "./resume-dropdown";

interface IProps {}

const AboutSection = ({}: IProps) => {
  return (
    <section className="relative pb-10 pt-10 md:pt-0 md:h-screen">
      <div className="hidden md:block">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:top-40"
          fill="white"
        />
      </div>
      <div className="hidden md:block">
        <TextHoverEffect text="ABOUT" />
      </div>
      <div className="md:absolute md:top-0 md:translate-y-[90%] w-full">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-14 gap-y-8">
            <WobbleCard
              containerClassName="col-span-2"
              className="bg-[url('https://i.ibb.co.com/d5CqwWh/5fb8a140671d575b.png')] bg-cover bg-no-repeat bg-center h-[365px]"
            >
              {/* <Image
                src="https://i.ibb.co.com/d5CqwWh/5fb8a140671d575b.png"
                alt="About Me"
                width={500}
                height={500}
              /> */}
              <></>
            </WobbleCard>

            <div className="md:col-span-4 space-y-6">
              <div className="space-y-4">
                <h1
                  className={`font-bold text-4xl md:text-5xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10 ${khula.className}`}
                >
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
