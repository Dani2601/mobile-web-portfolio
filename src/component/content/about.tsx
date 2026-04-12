import { template } from "../../constant/color";
import { expertiseInfo2 } from "../../constant/expertise";
import { usePlatform } from "../../context/PlatformContext";

type AboutProps = {};

export default function About({}: AboutProps) {
  const { selected } = usePlatform();
  const isWeb = selected === "Web";

  return (
    <div className={`${isWeb ? "flex flex-row" : ""} py-12 bg-[#fbfcfd] px-8`}>
      <div
        className={`${isWeb ? "w-[50%] flex items-center justify-center" : "hidden"}`}
      >
        <div className="flex items-start gap-6">
          <div className="flex flex-col justify-between py-4 relative">
            {/* Vertical Line */}
            <div className="absolute left-[1.0px] top-0 w-1 h-full bg-[#e2ebfc]"></div>

            {[
              { icon: "💻", text: "Website Development" },
              { icon: "📱", text: "App Development" },
              { icon: "☁️", text: "Website Hosting" },
              { icon: "☁️", text: "Website Hosting" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 relative mb-10 last:mb-0"
              >
                {/* Circle on the line */}
                <div className="absolute -left-1 w-3.5 h-3.5 bg-[#2463eb] rounded-full border border-white"></div>

                <div className="text-3xl pl-5">{item.icon}</div>
                <p className="font-semibold text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${isWeb ? "w-[50%]" : ""} bg-white rounded-3xl p-6 shadow-sm border-2`}
      >
        <h2
          className={`${isWeb ? "text-xl" : "text-2xl"} font-bold text-center mb-6`}
        >
          About Alex
        </h2>
        <div
          className={`${isWeb ? "text-xs space-y-2" : "text-sm space-y-4"} text-[#64748B] leading-[1.7]`}
        >
          <p className="">
            I'm a Senior React Native Engineer with a passion for building
            seamless, high-performance mobile applications that feel truly
            native.
          </p>
          <p className="">
            With over 5 years of experience, I specialize in bridging the gap
            between design and code, ensuring that every interaction is fluid
            and every animation hits 60fps.
          </p>
          <p className="">
            My approach focuses on clean architecture, scalable component
            systems, and an obsessive attention to detail that users can feel in
            the final product.
          </p>
        </div>
        <div
          className={`${isWeb ? "hidden" : ""} mt-6 pt-8 border-t grid grid-cols-2 gap-3 bg-[#fbfcfd]`}
        >
          {expertiseInfo2.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-[#fcfdfe] rounded-2xl text-center"
            >
              <h4
                className="text-xl font-bold text-primary"
                style={{ color: template.primary }}
              >
                {item.value}
              </h4>
              <p className="text-[10px] uppercase text-[#64748B]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
