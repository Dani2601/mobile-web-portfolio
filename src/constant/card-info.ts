import { Globe, Smartphone } from "lucide-react";
import { template } from "./color";
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
    color: template.primary,
    bg: template.primaryBackground,
    title: "Mobile",
    description: "iOS & Android",
  },
  {
    icon: Globe,
    color: template.secondary,
    bg: template.secondaryBackground,
    title: "Web",
    description: "React & Next.js",
  },
];