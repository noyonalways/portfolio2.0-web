import Container from "@/components/ui/container";
import { FlipWords } from "@/components/ui/flip-words";
import ShinyButton from "@/components/ui/shiny-button";
import { khula } from "@/utils/fonts";
import { LucideLinkedin, Mail, Phone } from "lucide-react";

interface IProps {}

const ContactSection = ({}: IProps) => {
  return (
    <section className="pb-28 pt-32 border-t">
      <Container>
        <div>
          <div className="text-center space-y-6">
            <h3
              className={`text-xl md:text-3xl text-muted-foreground font-medium`}
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
            <p className="leading-relaxed text-sm md:text-base">
              © 2024 Noyon. All rights reserved. This website and its contents
              are lovingly crafted to showcase creativity, expertise, and
              passion for web development. Unauthorized use or duplication of
              any material without permission is strictly prohibited.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
