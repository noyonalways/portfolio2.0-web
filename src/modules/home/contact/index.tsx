import Container from "@/components/ui/container";
import { FlipWords } from "@/components/ui/flip-words";
import ShinyButton from "@/components/ui/shiny-button";
import { khula, poppins } from "@/utils/fonts";
import { LucideLinkedin, Mail, Phone } from "lucide-react";
import InitialAnimation from "./initial-animation";

interface IProps {}

const ContactSection = ({}: IProps) => {
  return (
    <section className="relative overflow-hidden pb-28 pt-32 bg-[url('/gradient-light.png')] dark:md:bg-bottom bg-no-repeat">
      <div className="absolute hidden lg:block h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div className="absolute hidden lg:block h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

      <div className="absolute hidden lg:block h-16 w-[600px] rotate-[40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-right-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div className="absolute hidden lg:block h-14 w-[600px] rotate-[40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-right-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

      <Container>
        <InitialAnimation>
          <div className="text-center space-y-6">
            <h3
              className={`text-xl md:text-3xl text-muted-foreground font-medium ${poppins.className}`}
            >
              Want to collaborate?
            </h3>
            <FlipWords
              words={["Let's have a chat!"]}
              className={`${khula.className} text-5xl md:text-6xl font-bold text-center`}
            />
          </div>

          <div className="flex py-8 space-x-2 md:space-x-4 justify-center">
            <a href="mailto:noyonrahman2003@gmail.com">
              <ShinyButton className="rounded-full px-4 md:px-6">
                <div className="flex items-center space-x-2">
                  <Mail />
                  <span className="capitalize">Email</span>
                </div>
              </ShinyButton>
            </a>
            <a href="tel:+8801706592962">
              <ShinyButton className="rounded-full px-4 md:px-6">
                <div className="flex items-center space-x-2">
                  <Phone />
                  <span className="capitalize">Phone</span>
                </div>
              </ShinyButton>
            </a>
            <a href="https://linkedin.com/in/noyonalways">
              <ShinyButton className="rounded-full px-4 md:px-6">
                <div className="flex items-center space-x-2">
                  <LucideLinkedin />
                  <span className="capitalize">Linkedin</span>
                </div>
              </ShinyButton>
            </a>
          </div>

          <div className="text-center max-w-xl mx-auto text-muted-foreground">
            <p
              className={`leading-relaxed text-sm md:text-base ${poppins.className}`}
            >
              © 2024 Noyon. All rights reserved. This website and its contents
              are lovingly crafted to showcase creativity, expertise, and
              passion for web development. Unauthorized use or duplication of
              any material without permission is strictly prohibited.
            </p>
          </div>
        </InitialAnimation>
      </Container>
    </section>
  );
};

export default ContactSection;
