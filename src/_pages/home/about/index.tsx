import Container from "@/components/ui/container";
import { Spotlight } from "@/components/ui/spotlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { about } from "@/constants/about";
import { khula, poppins } from "@/utils/fonts";
import Image from "next/image";
import ResumeDropdown from "./resume-dropdown";

interface IProps {}

const AboutSection = ({}: IProps) => {
  return (
    <section className="relative md:pt-10 md:pb-56 2xl:pb-28 pt-20 ">
      <div className="md:block hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:top-40"
          fill="white"
        />
      </div>
      <div className="md:block hidden">
        <TextHoverEffect text="ABOUT" />
      </div>
      <div className="md:absolute md:top-0 lg:translate-y-[90%] w-full">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-14 gap-y-8">
            {/* <WobbleCard
              containerClassName="col-span-2"
              className="bg-[url('https://i.ibb.co.com/d5CqwWh/5fb8a140671d575b.png')] bg-cover bg-no-repeat bg-center h-[365px]"
            >
            </WobbleCard> */}

            <div className="col-span-2 ">
              <Image
                src={about.image.url}
                alt={about.image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

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
                  {about.description.para1}
                </p>
                <p
                  className={`${poppins.className} text-muted-foreground leading-relaxed`}
                >
                  {about.description.para2}
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
