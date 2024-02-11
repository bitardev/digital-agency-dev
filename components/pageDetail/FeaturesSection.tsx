import Image from "next/image";
import React from "react";
import HeadingSection from "../HeadingSection";

interface Props {
  title?: string;
  subtitle?: string;
  heading?: boolean;
  features?: {
    icon: string;
    title: string;
    description: string;
  }[];
}
const FeaturesSection = ({
  title,
  subtitle,
  features = [],
  heading = true,
}: Props) => {
  return (
    <div className="w-full max-w-7xl m-auto py-20">
      {heading ? (
        <HeadingSection
          title={title || ""}
          subtitle={subtitle || ""}
          reverse={true}
          line={true}
          subtitleClassName="uppercase font-normal text-md text-blue-300"
        />
      ) : (
        ""
      )}
      <div className="grid grid-cols-4 text-white pt-20 gap-6 max-tablet:grid-cols-none">
        {features.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 px-10 py-12 rounded-xl montserrat text-white bg-[rgba(255,255,255,0.02)] transition-colors ease-in-out duration-500 hover:bg-[rgba(255,255,255,0.02)]"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={(index + 1) * 250}
            data-aos-offset="0"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <Image src={icon} alt={title} width={60} height={60} />
            <div className="flex items-center gap-3">
              <span className="text-4xl text-sky-500 font-bold">
                0{index + 1}
              </span>
              <span className="font-bold text-lg">{title}</span>
            </div>
            <div className="text-sm font-light leading-relaxed opacity-70">
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
