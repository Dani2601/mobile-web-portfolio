import { type LucideIcon } from "lucide-react";
import { template } from "../../constant/color";
import TextBackground from "../text-background";
import { usePlatform } from "../../context/PlatformContext";

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
  const { selected } = usePlatform();
  const isWeb = selected === "Web";

  return (
    <div className={`${isWeb ? 'p-5' : 'p-6'} bg-white flex flex-col rounded-2xl border shadow-sm gap-4`}>
      <div className="bg-white flex items-center gap-3">
        <div
          style={{ background: template.mainBackground }}
          className="p-2 rounded-xl"
        >
          <Icon
            className={`${isWeb ? "w-4 h-4" : "w-7 h-7"}`}
            style={{ color }}
          />
        </div>
        <h3 className={`${isWeb ? "text-sm" : "text-lg"}  font-bold`}>{title}</h3>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {language.map((lang, index) => (
          <TextBackground
            key={index}
            label={lang}
            textColor="black"
            background="#f1f5f9"
            className={`${isWeb ? "!text-[9px]" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
