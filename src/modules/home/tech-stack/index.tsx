import Container from "@/components/ui/container";
import { Cover } from "@/components/ui/cover";
import Marquee from "@/components/ui/marquee";
import envConfig from "@/config/env.config";
import { khula } from "@/utils/fonts";
import TechCard from "./tech-card";

export interface ISkill {
  _id: string;
  name: string;
  description: string;
  icon: string;
}

export default async function TechStack() {
  const res = await fetch(
    `${envConfig.baseApi}/skills?limit=20&fields=name,description,icon` as string
  );
  const { data } = await res.json();

  return (
    <section className="py-20 relative">
      <Container>
        <div className="">
          <div className="mb-10 flex justify-center">
            <Cover
              className={`font-bold text-4xl md:text-5xl text-center ${khula.className} pt-2`}
            >
              Tech Stack
            </Cover>
          </div>
          <Marquee pauseOnHover className="[--duration:20s]">
            {data?.map((skill: ISkill) => (
              <TechCard key={skill.name} {...skill} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {data?.map((skill: ISkill) => (
              <TechCard key={skill.name} {...skill} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </Container>
    </section>
  );
}
