import { Menu } from "lucide-react";
import { usePlatform } from "../../context/PlatformContext";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const { selected } = usePlatform();

  return (
    <div
      className={`sticky z-50 px-9 top-0 flex flex-row w-full pb-5 items-center justify-between ${
        selected === "Mobile"
          ? "bg-white/10 backdrop-blur-md pt-14"
          : "bg-white pt-7 border-b-2"
      }`}
    >
      <span className="text-xl">Aivan.</span>
      {selected !== "Mobile" && (
        <div className="flex flex-row gap-6">
          <p>Home</p>
          <p>Project</p>
          <p>Skill</p>
          <p>Contact</p>
        </div>
      )}
      <Menu className="w-6 h-6" />
    </div>
  );
}
