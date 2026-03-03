type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <div className="bg-[#f8fafb] py-10 border-t-2">
      <div className="mx-auto px-6 flex flex-col items-center text-center gap-6">
        <div>
          <span className="text-xl font-bold">Aivan.</span>
          <p className="text-[10px] mt-1 uppercase font-bold text text-[#64748B]">
            React Native Specialist
          </p>
        </div>
        <div className="flex gap-6">
          {["Twitter", "Github", "LinkedIn"].map((item, index) => (
            <a key={index} className="text-xs text-[#64748B] cursor-pointer">
              {item}
            </a>
          ))}
        </div>
        <p className="text-[10px] text-[#64748B]">
          © 2026 Aivan Vitalista. <br />
          Built for high-performance.
        </p>
      </div>
    </div>
  );
}
