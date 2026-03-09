import ExpertiseCard from "../card/expertise-card";
import { expertiseInfo } from "../../constant/expertise";
import { usePlatform } from "../../context/PlatformContext";

type ExpertiseProps = {};

export default function Expertise({}: ExpertiseProps) {
  const { selected } = usePlatform();
  const isWeb = selected === "Web";

  return (
    <div className="py-12 bg-[#fcfdfe]">
      <div className={`${isWeb ? "mb-5" : "mb-10"} text-center px-8`}>
        <h2 className={`${isWeb ? "text-xl" : "text-2xl"} font-bold mb-3`}>
          Technical Expertise
        </h2>
        <p className={`${isWeb ? "text-xs" : "text-sm"} text-[#64748B] px-4`}>
          Focused on building high-performance, cross-platform apps.
        </p>
      </div>
      <div
        className={`grid gap-6 px-8 ${isWeb ? "grid-cols-3" : "grid-cols-1"}`}
      >
        {expertiseInfo.map((card, index) => (
          <ExpertiseCard
            key={index}
            icon={card.icon}
            color={card.color}
            title={card.title}
            language={card.language}
          />
        ))}
      </div>
    </div>
  );
}
