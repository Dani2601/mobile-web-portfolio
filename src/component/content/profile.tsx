import { ArrowRight, Globe, Smartphone } from "lucide-react";
import TextBackground from "../text-background";
import { template } from "../../constant/color";
import Button from "../button";
import profile from "../../assets/profile.png";

type ProfileProps = {};

export default function Header({}: ProfileProps) {
  return (
    <div>
      <div className="flex flex-col items-center px-8 space-y-4">
        <TextBackground
          label="Available for New Projects"
          textColor={template.primary}
          background={template.primaryBackground}
        />
        <div className="text-center gap-1 flex flex-col">
          <h1 className="text-4xl font-bold leading-[1.1] text-slate-900">
            Crafting{" "}
            <span className="underline" style={{ color: template.primary }}>
              Mobile
            </span>
          </h1>
          <h1 className="text-4xl font-bold leading-[1.1] text-slate-900">
            & Web Excellence
          </h1>
        </div>
        <div className="text-center">
          <p className="text-base text-[#64748B] leading-[1.7] italic px-6">
            Specializing in high-performance iOS & Android applications with
            React Native.
          </p>
        </div>
        <Button
          label={"View My Work"}
          className="!min-h-9 !py-2 !text-[16px] !h-11 !gap-3"
          bgColor={template.primary}
          icon={<ArrowRight className="w-4 h-4" color="white" />}
        />
      </div>
      <div className="flex items-center justify-center px-8">
        <div className="relative my-10">
          {/* Image container */}
          <div className="relative w-[224px] h-[224px] rounded-[2.5rem] overflow-hidden border-2 border-white/50 shadow-2xl">
            <img
              src={profile}
              alt="Phone Frame"
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          </div>

          {/* Bottom-left floating icon */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl p-3">
            <Globe className="w-6 h-6 text-cyan-500" />
          </div>

          {/* Top-right floating icon */}
          <div className="absolute -top-6 -right-6 bg-white shadow-lg rounded-2xl p-3">
            <Smartphone className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
