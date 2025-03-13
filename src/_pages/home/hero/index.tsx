import { AuroraBackground } from "@/components/ui/aurora-background";
import Container from "@/components/ui/container";
import { FlipWords } from "@/components/ui/flip-words";
import ShinyButton from "@/components/ui/shiny-button";
import { michroma, poppins } from "@/utils/fonts";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Designation from "./designation";
import InitialAnimation from "./initial-animation";

interface IProps {}

const HeroSection = ({}: IProps) => {
  return (
    <section>
      <AuroraBackground>
        <InitialAnimation>
          <Container>
            <div
              className={`flex md:justify-center items-center ${michroma.className}`}
            >
              <div>
                <div className={`${michroma.className}`}>
                  <FlipWords
                    words={["Hi I'm"]}
                    className="text-muted-foreground dark:text-muted-foreground"
                  />
                </div>
                {/* <div
                  className={`inline-block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] text-6xl lg:text-8xl font-bold ${michroma.className} mb-4`}
                >
                  <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] ">
                    <span className="font-bold leading-tight md:leading-none">
                      Noyon Rahman
                    </span>
                  </div>
                </div> */}
                <div
                  className={`inline-block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] text-6xl lg:text-8xl font-bold ${michroma.className} mb-4`}
                >
                  <div className="text-left block pointer-events-none whitespace-pre-wrap bg-clip-text leading-none text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500  dark:from-purple-400 dark:via-violet-500 dark:to-pink-400">
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

                <Link href={`#projects`} className="mt-4 inline-block">
                  <ShinyButton>
                    <div className="flex space-x-2">
                      <span className="capitalize text-base font-medium inline-block">
                        See Works
                      </span>
                      <ChevronRight />
                    </div>
                  </ShinyButton>
                </Link>
              </div>
            </div>
          </Container>
        </InitialAnimation>
      </AuroraBackground>
    </section>
  );
};

export default HeroSection;
