import ExpertiseCard from "../card/expertise-card";
import { expertiseInfo } from "../../constant/expertise";

type ExpertiseProps = {};

export default function Expertise({}: ExpertiseProps) {
  return (
    <div className="py-12 bg-[#fcfdfe]">
      <div className="text-center mb-10 px-8">
        <h2 className="text-2xl font-bold mb-3">Technical Expertise</h2>
        <p className="text-sm text-[#64748B] px-4">
          Focused on building high-performance, cross-platform apps.
        </p>
      </div>
      <div className="flex flex-col gap-6 px-8">
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
