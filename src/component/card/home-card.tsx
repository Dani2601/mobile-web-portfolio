import { type LucideIcon } from "lucide-react";
import type { PlatformType } from "../../context/PlatformContext";

type HomeCardProps = {
  icon: LucideIcon;
  color: string;
  bg: string;
  title: PlatformType;
  description: string;
  handleClick: (title: PlatformType) => void;
};

export default function HomeCard({
  icon: Icon,
  title,
  color,
  bg,
  description,
  handleClick,
}: HomeCardProps) {
  return (
    <div
      className="bg-white flex items-center justify-center rounded-2xl border border-surface shadow-sm p-4 gap-3 cursor-pointer transition hover:shadow-md"
      onClick={() => handleClick(title)}
    >
      <div className={`p-2 rounded-xl ${bg}`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>

      <div>
        <p className="font-bold text-text">{title}</p>
        <p className="text-xs text-text-muted">{description}</p>
      </div>
    </div>
  );
}
