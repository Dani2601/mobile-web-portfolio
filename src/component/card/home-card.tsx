import { type LucideIcon } from "lucide-react";
import type { Type } from "../../pages/landing";

type HomeCardProps = {
  icon: LucideIcon;
  color: string;
  bg: string;
  title: Type;
  description: string;
  handleClick: (title: Type) => void;
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
    <div className="bg-white flex items-center justify-center rounded-2xl border shadow-sm p-4 gap-3 cursor-pointer"
      onClick={() => handleClick(title)}>
      <div style={{ background: bg }} className="p-2 rounded-xl">
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}
