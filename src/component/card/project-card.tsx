import { template } from "../../constant/color";
import Button from "../button";
import TextBackground from "../text-background";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  language: string[];
};

export default function ProjectCard({
  image,
  title,
  description,
  language,
}: ProjectCardProps) {
  return (
    <div className="bg-white flex flex-col rounded-2xl border shadow-sm gap-4 overflow-hidden">
      <div className="w-full h-[180px]">
        <img
          src={image}
          alt="Project preview"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-row flex-wrap px-6 gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-xs text-[#64748B] mb-2">{description}</p>
        {language.map((lang, index) => (
          <TextBackground
            key={index}
            label={lang}
            textColor="black"
            background="#f1f5f9"
            className="!text-[10px]"
          />
        ))}
      </div>
      <Button
        label={"View Project"}
        className="!min-h-8 !py-2 !text-xs !h-10 !gap-3 mx-6 mb-6"
        bgColor={template.primary}
      />
    </div>
  );
}
