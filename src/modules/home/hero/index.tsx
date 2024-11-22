import { AuroraBackground } from "@/components/ui/aurora-background";
import Container from "@/components/ui/container";
import { michroma } from "@/utils/fonts";
import InitialAnimation from "./initial-animation";

interface IProps {}

const HeroSection = ({}: IProps) => {
  return (
    <section>
      <AuroraBackground
        className={`dark:bg-[url('/bg-gradient.png')] bg-cover bg-center`}
      >
        <InitialAnimation>
          <Container>
            <div className="flex justify-center items-center ">
              <div>
                <p className={`${michroma.className} dark:text-white`}>
                  Hi I&rsquo;m
                </p>
                <div
                  className={`inline-block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] text-6xl lg:text-8xl font-bold ${michroma.className}`}
                >
                  <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] ">
                    <span className="font-bold leading-tight md:leading-none">
                      Noyon Rahman
                    </span>
                  </div>
                </div>
                <h3 className={`${michroma.className} dark:text-white`}>
                  __Web Developer
                </h3>
              </div>
            </div>
          </Container>
        </InitialAnimation>
      </AuroraBackground>
    </section>
  );
};

export default HeroSection;
