import React, { type ReactNode } from "react";
import phoneImg from "../assets/iphone-15.png";

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative w-[420px] h-[800px] mx-auto mt-10">
      {/* Screen */}
      <div className="absolute inset-[20px] rounded-[40px] overflow-hidden z-10">
        <div
          className="h-full overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {children}
        </div>
      </div>

      {/* Phone case (ALWAYS ON TOP) */}
      <img
        src={phoneImg}
        alt="Phone Frame"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      />
    </div>
  );
}
