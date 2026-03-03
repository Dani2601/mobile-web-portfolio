import { Globe, Smartphone } from "lucide-react";
import { template } from "./color";

export const cards = [
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
