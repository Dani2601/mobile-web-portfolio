import { type ReactNode } from "react";
import laptopImg from "../assets/macbook.png";

interface LaptopFrameProps {
  children: ReactNode;
}

export default function LaptopFrame({ children }: LaptopFrameProps) {
  return (
    <div className="relative w-[840px] h-[500px] mx-auto">
      {/* Screen */}
      <div className="absolute inset-x-[75px] inset-y-[15px] pb-[40px] rounded-[20px] overflow-hidden z-10">
        <div
          className="h-full overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {children}
        </div>
      </div>

      {/* Laptop case (ALWAYS ON TOP) */}
      <img
        src={laptopImg}
        alt="Phone Frame"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      />
    </div>
  );
}
