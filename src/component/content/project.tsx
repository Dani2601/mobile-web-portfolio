import ProjectCard from "../card/project-card";
import { projectsInfo } from "../../constant/project";
import { usePlatform } from "../../context/PlatformContext";

type ProjectProps = {};

export default function Project({}: ProjectProps) {
  const { selected } = usePlatform();
  const isWeb = selected === "Web";

  return (
    <div className="py-12 bg-white">
      <div className={`${isWeb ? "mb-5" : "mb-8"} text-center px-8`}>
        <h2 className={`${isWeb ? "text-xl" : "text-2xl"} font-bold mb-3`}>
          Featured Projects
        </h2>
        <p className={`${isWeb ? "text-xs" : "text-sm"} text-[#64748B] px-4`}>
          A selection of my recent mobile and web work.
        </p>
      </div>
      <div
        className={`grid gap-6 px-8 ${isWeb ? "grid-cols-3" : "grid-cols-1"}`}
      >
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
