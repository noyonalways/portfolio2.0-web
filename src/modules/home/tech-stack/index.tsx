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
    `${envConfig.baseApi}/skills?fields=name,description,icon` as string
  );
  const { data } = await res.json();

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20">
      {/* <h1 className={`font-bold text-5xl ${khula.className} mb-10`}>
        Tech Stack
      </h1> */}

      <div className="mb-10">
        <Cover
          className={`font-bold text-4xl md:text-5xl ${khula.className} pt-2`}
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </section>
  );
}
