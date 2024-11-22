import { AuroraBackground } from "@/components/ui/aurora-background";
import Container from "@/components/ui/container";
import { FlipWords } from "@/components/ui/flip-words";
import ShinyButton from "@/components/ui/shiny-button";
import { michroma, poppins } from "@/utils/fonts";
import { ChevronRight } from "lucide-react";
import Designation from "./designation";
import InitialAnimation from "./initial-animation";

interface IProps {}

const HeroSection = ({}: IProps) => {
  return (
    <section>
      <AuroraBackground
        className={`dark:bg-[url('/bg-gradient.png')] bg-cover bg-center `}
      >
        <InitialAnimation>
          <Container>
            <div
              className={`flex justify-center items-center ${michroma.className}`}
            >
              <div>
                <div className={`${michroma.className}`}>
                  <FlipWords
                    words={["Hi I'm"]}
                    className="text-muted-foreground dark:text-muted-foreground"
                  />
                </div>
                <div
                  className={`inline-block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] text-6xl lg:text-8xl font-bold ${michroma.className} mb-4`}
                >
                  <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] ">
                    <span className="font-bold leading-tight md:leading-none">
                      Noyon Rahman
                    </span>
                  </div>
                </div>
                <Designation />
                <p
                  className={`${poppins.className} mt-4 max-w-xl text-muted-foreground leading-relaxed`}
                >
                  I&lsquo;m Noyon, a web developer passionate about crafting
                  beautiful, functional, and user-friendly websites using modern
                  technologies.
                </p>
                <ShinyButton className="mt-4">
                  <span className="capitalize text-base font-medium inline-block">
                    See Works
                  </span>
                  <ChevronRight className="inline" />
                </ShinyButton>
              </div>
            </div>
          </Container>
        </InitialAnimation>
      </AuroraBackground>
    </section>
  );
};

export default HeroSection;
