import Button from "../component/button";
import HomeCard from "../component/card/home-card";
import PhoneContent from "../component/phone-content";
import PhoneFrame from "../component/phone-frame";
import { cards } from "../constant/card-info";
import { ArrowRight } from "lucide-react";
import LaptopFrame from "../component/laptop-frame";
import { usePlatform } from "../context/PlatformContext";
import LaptopContent from "../component/laptop-content";

export default function Landing() {
  const { selected, setSelected } = usePlatform();

  return (
    <div className="flex flex-row justify-between min-h-screen bg-background">
      <div className="w-[50%] flex flex-col justify-center items-start p-12 space-y-9">
        <p className="text-sm font-semibold py-1 px-4 rounded-full tracking-wide bg-primary/90 text-primary">
          Alex Rivera • Mobile & Web Engineer
        </p>

        <div>
          <p className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-text">
            I Build
            <span className="text-primary"> Fluid</span>
          </p>

          <p className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-text">
            Digital Experiences
          </p>
        </div>

        <p className="text-xl leading-relaxed max-w-xl text-text-muted">
          A React Native specialist focused on high-performance mobile apps and
          modern web interfaces. See my interactive resume on the device.
        </p>

        <div className="flex flex-wrap gap-4">
          {cards.map((card, index) => (
            <HomeCard
              key={index}
              icon={card.icon}
              color={card.color}
              bg={card.bg}
              title={card.title}
              description={card.description}
              handleClick={(e) => setSelected(e)}
            />
          ))}
        </div>

        <Button
          label={"Let's Talk"}
          className="bg-primary"
          icon={<ArrowRight className="w-4 h-4 text-white" />}
        />
      </div>

      <div className="w-[50%] flex flex-col justify-center items-center">
        {selected === "Mobile" ? (
          <PhoneFrame>
            <PhoneContent />
          </PhoneFrame>
        ) : (
          <LaptopFrame>
            <LaptopContent />
          </LaptopFrame>
        )}
      </div>
    </div>
  );
}
