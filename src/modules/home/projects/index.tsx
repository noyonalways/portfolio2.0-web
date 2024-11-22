import Container from "@/components/ui/container";
import ShinyButton from "@/components/ui/shiny-button";
import envConfig from "@/config/env.config";
import { khula } from "@/utils/fonts";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "./project-card";

interface IProps {}

export interface IProject {
  _id: string;
  title: string;
  slug: string;
  brief: string;
  cover: string;
  type: string;
  frontend: {
    technologies: string[];
    deploymentLink: string;
    github: string;
  };
  backend: {
    technologies: string[];
    deploymentLink: string;
    github: string;
  };
}

const ProjectSection = async ({}: IProps) => {
  const res = await fetch(
    `${envConfig.baseApi}/projects?fields=frontend,backend,title,brief,slug,cover,type` as string
  );
  const { data } = await res.json();

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10">
          <h1 className={`font-bold text-4xl md:text-5xl ${khula.className}`}>
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.map((project: IProject) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href={`/projects`}>
            <ShinyButton>
              <div className="flex space-x-2">
                <span className="capitalize text-base font-medium inline-block">
                  See More
                </span>
                <ChevronRight />
              </div>
            </ShinyButton>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
