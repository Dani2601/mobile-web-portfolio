import ProjectCard from "../card/project-card";
import { projectsInfo } from "../../constant/project";

type ProjectProps = {};

export default function Project({}: ProjectProps) {
  return (
    <div className="py-12 bg-white">
      <div className="text-center px-8 mb-10">
        <h2 className="text-2xl font-bold mb-3">Featured Projects</h2>
        <p className="text-sm text-[#64748B] px-4">
          A selection of my recent mobile and web work.
        </p>
      </div>
      <div className="flex flex-col gap-6 px-8">
        {projectsInfo.map((card, index) => (
          <ProjectCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            language={card.language}
          />
        ))}
      </div>
    </div>
  );
}
