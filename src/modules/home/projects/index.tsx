import Container from "@/components/ui/container";
import { khula } from "@/utils/fonts";

interface IProps {}

const ProjectsSection = ({}: IProps) => {
  return (
    <section className="h-screen">
      <Container>
        <div>
          <h1 className={`font-bold text-5xl ${khula.className} pt-2`}>
            Recent Projects
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
