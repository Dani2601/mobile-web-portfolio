import { Globe, Smartphone } from "lucide-react";
import type { PlatformType } from "../context/PlatformContext";

type CardInfo = {
  icon: any;
  color: string;
  bg: string;
  title: PlatformType;
  description: string;
};

export const cards: CardInfo[] = [
  {
    icon: Smartphone,
    color: "text-primary",
    bg: "bg-surface",
    title: "Mobile",
    description: "iOS & Android",
  },
  {
    icon: Globe,
    color: "text-secondary",
    bg: "bg-surface-muted",
    title: "Web",
    description: "React & Next.js",
  },
];