import { template } from "../../constant/color";
import { expertiseInfo2 } from "../../constant/expertise";

type AboutProps = {};

export default function About({}: AboutProps) {
  return (
    <div className="py-12 bg-[#fbfcfd] px-8">
      <div className="bg-white rounded-3xl p-6 shadow-sm border-2">
        <h2 className="text-2xl font-bold text-center mb-6">About Alex</h2>
        <div className="text-sm text-[#64748B] leading-[1.7] space-y-4">
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
        <div className="mt-6 pt-8 border-t grid grid-cols-2 gap-3 bg-[#fbfcfd]">
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
