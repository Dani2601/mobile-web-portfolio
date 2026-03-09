import { Mail, Smartphone } from "lucide-react";
import Button from "../button";
import { template } from "../../constant/color";
import { usePlatform } from "../../context/PlatformContext";

type ContactProps = {};

export default function Contact({}: ContactProps) {
  const { selected } = usePlatform();
  const isWeb = selected === "Web";

  return (
    <div className="py-12 bg-white">
      <div className={`${isWeb ? "mb-5" : "mb-8"} text-center px-8`}>
        <h2 className={`${isWeb ? "text-xl" : "text-2xl"} font-bold mb-3`}>
          Let's Talk
        </h2>
        <p
          className={`${isWeb ? "text-xs" : "text-sm"} text-[#64748B] max-w-xs mx-auto`}
        >
          Have a project in mind? Want to collaborate? I'd love to hear from
          you.
        </p>
      </div>
      <div
        className={`${isWeb ? "flex flex-row" : "max-w-sm mx-auto"} px-8 space-y-8`}
      >
        <div
          className={`${isWeb ? "w-[50%]" : ""} p-6 rounded-3xl shadow-lg border-2`}
        >
          <div className="space-y-4 w-full">
            <div className="space-y-1.5">
              <p className="text-xs font-medium px-1">Name</p>
              <input
                className={`${isWeb ? "text-xs h-8" : "text-sm h-10"} w-full border px-3 py-1 shadow-sm rounded-xl`}
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-medium px-1">Email</p>
              <input
                className={`${isWeb ? "text-xs h-8" : "text-sm h-10"} w-full border px-3 py-1 shadow-sm rounded-xl`}
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-medium px-1">Message</p>
              <textarea
                className={`${isWeb ? "text-xs min-h-[50px]" : "text-sm min-h-[60px]"} w-full border px-3 py-1 shadow-sm rounded-xl`}
                placeholder="Project Details..."
                rows={isWeb ? 3 : 4}
              />
            </div>
            <Button
              label={"Send Message"}
              className={`${isWeb ? "!h-8" : "!h-10"} !min-h-9 !py-2 !text-xs mb-6 !w-full`}
              bgColor={template.primary}
            />
          </div>
        </div>
        <div
          className={`${isWeb ? "w-[50%] flex flex-col px-8" : "grid grid-cols-1"}  gap-4 px-2`}
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#eaeffd] p-2 rounded-full">
              <Mail className="w-5 h-5" color={template.primary} />
            </div>
            <p className="text-xs font-medium">hello@alexrivera.dev</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#eaeffd] p-2 rounded-full">
              <Smartphone className="w-5 h-5" color={template.primary} />
            </div>
            <p className="text-xs font-medium">+63 912 345 6789</p>
          </div>
        </div>
      </div>
    </div>
  );
}
