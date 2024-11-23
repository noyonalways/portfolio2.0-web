import Container from "@/components/ui/container";
import envConfig from "@/config/env.config";
import { ProjectCard } from "@/modules/home/projects/project-card";
import TopSection from "@/modules/projects/top-section";
import { IProject } from "@/types";

interface IProps {}

const Projects = async ({}: IProps) => {
  const res = await fetch(`${envConfig.baseApi}/projects` as string);
  const { data } = await res.json();
  return (
    <section className="md:pt-10 pb-10">
      <Container>
        <TopSection />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {data?.map((project: IProject) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
