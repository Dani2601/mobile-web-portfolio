import Button from "../component/button";
import CardTemplate from "../component/card-template";
import PhoneFrame from "../component/phone-frame";
import { template } from "../constant/color";
import { Smartphone, Globe, ArrowRight } from "lucide-react";

export default function Landing() {
  const cards = [
    { 
      icon: Smartphone, 
      color: template.primary, 
      bg: template.primaryBackground, 
      title: "Mobile", 
      description: "iOS & Android" 
    },
    { 
      icon: Globe, 
      color: template.secondary, 
      bg: template.secondaryBackground,
      title: "Web", 
      description: "React & Next.js" 
    },
  ];

  return (
    <div className="flex flex-row justify-between min-h-screen">
      <div className="w-[50%] flex flex-col justify-center items-start p-12 space-y-9">
        <p className="text-sm font-semibold py-1 px-4 rounded-full tracking-wide"
          style={{ backgroundColor: template.primaryBackground, color: template.primary }}
        >
          Alex Rivera • Mobile & Web Engineer
        </p>
        <div>
          <p className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            I Build 
            <span style={{ color: template.primary }}> Fluid</span>
          </p>
          <p className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Digital Experiences
          </p>
        </div>
        <p className="text-xl leading-relaxed max-w-xl text-[#64748B]">
          A React Native specialist focused on high-performance mobile apps and modern web interfaces. See my interactive resume on the device.
        </p>
        <div className="flex flex-wrap gap-4">
          {cards.map((card, index) => (
            <CardTemplate 
              key={index} 
              icon={card.icon} 
              color={card.color}
              bg={card.bg}
              title={card.title} 
              description={card.description} 
            />
          ))}
        </div>
        <Button 
          label={"Let's Talk"} 
          bgColor={template.primary} 
          icon={
            <ArrowRight className="w-4 h-4" color="white" />
          }
        />
      </div>
      <div className=" w-[50%] flex flex-col justify-center items-center">
        <PhoneFrame>
          <div className="p-4">
            <p className="text-gray-700">This is inside the phone frame.</p>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
