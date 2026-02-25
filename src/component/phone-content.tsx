import { ArrowRight, Database, Globe, Menu, Smartphone } from "lucide-react";
import TextBackground from "./text-background";
import { template } from "../constant/color";
import Button from "./button";
import ExpertiseCard from "./card/expertise-card";
import ProjectCard from "./card/project-card";
import profile from "../assets/profile.png";
import flinflow from "../assets/flinflow.png";
import travel from "../assets/travel.png";
import connect from "../assets/connect.png";

export default function PhoneContent() {
  const expertiseInfo = [
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
  const projectsInfo = [
    {
      image: flinflow,
      title: "FinFlow - Finance Tracker",
      description:
        "A comprehensive personal finance application allowing users to track expenses,",
      language: [
        "React Native",
        "Firebase",
        "Victory Charts",
        "Redux Toolkit",
      ],
    },
    {
      image: travel,
      title: "Wanderlust Travel",
      description: "Travel discovery and booking platform featuring immersive destination guides, hotel",
      language: [
        "React Native",
        "Expo",
        "Google Maps API",
        "Stripe",
      ],
    },
    {
      image: connect,
      title: "Connect Social",
      description: "Real-time social networking app with instant messaging, feed updates, story sharing, an",
      language: [
        "React Native",
        "Socket.io",
        "Node.js",
        "MongoDB",
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full px-8">
      {/* Header */}
      <div className="sticky z-50 top-0 flex flex-row w-full pb-5 pt-14 items-center justify-between bg-white/10 backdrop-blur-md">
        <span className="text-xl">Aivan.</span>
        <Menu className="w-6 h-6" />
      </div>
      {/* Profile */}
      <div className="flex flex-col items-center space-y-4">
        <TextBackground
          label="Available for New Projects"
          textColor={template.primary}
          background={template.primaryBackground}
        />
        <div className="text-center gap-1 flex flex-col">
          <h1 className="text-4xl font-bold leading-[1.1] text-slate-900">
            Crafting
            <span className="underline" style={{ color: template.primary }}>
              {" "}
              Mobile
            </span>
          </h1>
          <h1 className="text-4xl font-bold leading-[1.1] text-slate-900">
            & Web Excellence
          </h1>
        </div>
        <div className="text-center">
          <p className="text-base text-[#64748B] leading-[1.7] italic px-6">
            Specializing in high-performance iOS & Android applications with
            React Native.
          </p>
        </div>
        <Button
          label={"View My Work"}
          className="!min-h-9 !py-2 !text-[16px] !h-11 !gap-3"
          bgColor={template.primary}
          icon={<ArrowRight className="w-4 h-4" color="white" />}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="relative my-10">
          {/* Image container */}
          <div className="relative w-[224px] h-[224px] rounded-[2.5rem] overflow-hidden border-2 border-white/50 shadow-2xl">
            <img
              src={profile}
              alt="Phone Frame"
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          </div>

          {/* Bottom-left floating icon */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl p-3">
            <Globe className="w-6 h-6 text-cyan-500" />
          </div>

          {/* Top-right floating icon */}
          <div className="absolute -top-6 -right-6 bg-white shadow-lg rounded-2xl p-3">
            <Smartphone className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </div>
      {/* Technichal Expertise */}
      <div className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">Technical Expertise</h2>
          <p className="text-sm text-[#64748B] px-4">
            Focused on building high-performance, cross-platform apps.
          </p>
        </div>
        <div className="flex flex-col gap-6">
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
      {/* Featured Projects */}
      <div className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">Featured Projects</h2>
          <p className="text-sm text-[#64748B] px-4">
            A selection of my recent mobile and web work.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {projectsInfo.map((card, index) => (
            <ProjectCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              language={card.language}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
