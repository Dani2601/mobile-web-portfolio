import { Menu } from "lucide-react";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <div className="sticky z-50 px-9 top-0 flex flex-row w-full pb-5 pt-14 items-center justify-between bg-white/10 backdrop-blur-md">
      <span className="text-xl">Aivan.</span>
      <Menu className="w-6 h-6" />
    </div>
  );
}
