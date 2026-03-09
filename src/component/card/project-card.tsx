import { template } from "../../constant/color";
import { usePlatform } from "../../context/PlatformContext";
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
  const { selected } = usePlatform();
  const isWeb = selected === "Web";

  return (
    <div className="bg-white flex flex-col h-full rounded-2xl border shadow-sm overflow-hidden">
      
      {/* Image */}
      <div className="w-full h-[180px]">
        <img
          src={image}
          alt="Project preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 py-4 gap-3">
        
        <h3 className={`${isWeb ? "text-sm" : "text-lg"} font-bold`}>
          {title}
        </h3>

        <p className="text-xs text-[#64748B]">
          {description}
        </p>

        {/* Languages */}
        <div className="flex flex-wrap gap-2">
          {language.map((lang, index) => (
            <TextBackground
              key={index}
              label={lang}
              textColor="black"
              background="#f1f5f9"
              className={`${isWeb ? "!text-[9px]" : "!text-[10px]"}`}
            />
          ))}
        </div>

        {/* Push button to bottom */}
        <div className="mt-auto">
          <Button
            label="View Project"
            className={`${isWeb ? "!h-8" : ""} !min-h-8 !py-2 !text-xs !h-10 !gap-3 w-full`}
            bgColor={template.primary}
          />
        </div>

      </div>
    </div>
  );
}