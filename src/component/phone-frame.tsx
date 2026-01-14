import React, { type ReactNode } from "react";
import phoneImg from "../assets/iphone-15.png";

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex justify-center mt-10 relative w-[380px] h-[800px]">
      {/* Phone image */}
      <img src={phoneImg} alt="Phone Frame" className="absolute top-0 left-0 w-full h-full" />

      {/* App screen content */}
      <div className="absolute top-[75px] left-[50px] w-[355px] h-[650px] overflow-y-auto"
      style={{
        scrollbarWidth: "none",
      }}>
        {children}
      </div>
    </div>
  );
}
