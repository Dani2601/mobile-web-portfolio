import { Database, Globe, Smartphone } from "lucide-react";
import { template } from "./color";

export const expertiseInfo = [
  {
    icon: Smartphone,
    color: template.primary,
    title: "Mobile Development",
    language: [
      "React Native",
      "Expo",
      "iOS",
      "Android",
      "React Navigation",
      "Reanimated",
    ],
  },
  {
    icon: Globe,
    color: template.secondary,
    title: "Frontend Web",
    language: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "HTML5/CSS3",
    ],
  },
  {
    icon: Database,
    color: "#00c951",
    title: "Backend & API",
    language: [
      "Node.js",
      "Firebase",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "Supabase",
    ],
  },
];

export const expertiseInfo2 = [
  {
    value: "5+",
    label: "Years Exp",
  },
  {
    value: "50+",
    label: "Apps Shipped",
  },
  {
    value: "20+",
    label: "Global Brands",
  },
  {
    value: "100%",
    label: "Quality Rate",
  },
];
