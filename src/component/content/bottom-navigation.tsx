import { navItems } from "../../constant/bottom-navigation-items";

type BottomNavProps = {};

export default function BottomNav({}: BottomNavProps) {
  return (
    <div className="sticky z-50 px-12 bottom-0 flex flex-row w-full pb-7 pt-4 items-center justify-between bg-white/10 backdrop-blur-md">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1"
            >
              <div className="p-2 rounded-xl">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
  );
}
