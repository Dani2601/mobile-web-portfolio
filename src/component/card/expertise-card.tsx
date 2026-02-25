import { type LucideIcon } from "lucide-react";
import { template } from "../../constant/color";
import TextBackground from "../text-background";

type ExpertiseCardProps = {
  icon: LucideIcon;
  color: string;
  title: string;
  language: string[];
};

export default function ExpertiseCard({
  icon: Icon,
  title,
  color,
  language,
}: ExpertiseCardProps) {
  return (
    <div className="bg-white flex flex-col rounded-2xl border shadow-sm p-6 gap-4">
      <div className="bg-white flex items-center  gap-3">
        <div
          style={{ background: template.mainBackground }}
          className="p-2 rounded-xl"
        >
          <Icon className="w-7 h-7" style={{ color }} />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {language.map((lang, index) => (
          <TextBackground
            key={index}
            label={lang}
            textColor="black"
            background="#f1f5f9"
          />
        ))}
      </div>
    </div>
  );
}
