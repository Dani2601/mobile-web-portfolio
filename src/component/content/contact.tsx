import { Mail, Smartphone } from "lucide-react";
import Button from "../button";
import { template } from "../../constant/color";

type ContactProps = {};

export default function Contact({}: ContactProps) {
  return (
    <div className="py-12 bg-white px-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-3">Let's Talk</h2>
        <p className="text-sm text-[#64748B] max-w-xs mx-auto">
          Have a project in mind? Want to collaborate? I'd love to hear from
          you.
        </p>
      </div>
      <div className="space-y-8 max-w-sm mx-auto">
        <div className="p-6 rounded-3xl shadow-lg border-2">
          <div className="space-y-4 w-full">
            <div className="space-y-1.5">
              <p className="text-xs font-medium px-1">Name</p>
              <input
                className="w-full border px-3 py-1 shadow-sm rounded-xl text-sm h-10"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-medium px-1">Email</p>
              <input
                className="w-full border px-3 py-1 shadow-sm rounded-xl text-sm h-10"
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-medium px-1">Message</p>
              <textarea
                className="w-full border px-3 py-1 shadow-sm rounded-xl text-sm min-h-[60px]"
                placeholder="Project Details..."
                rows={4}
              />
            </div>
            <Button
              label={"Send Message"}
              className="!min-h-8 !py-2 !text-xs !h-10 mb-6 !w-full"
              bgColor={template.primary}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 px-2">
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
