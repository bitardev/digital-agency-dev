import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  icon: string;
}

const HeadingPageSection = ({ title, description, icon }: Props) => {
  return (
    <div className="flex justify-center items-center gap-11 w-full py-20 max-tablet:flex-col">
      <div
        className="flex justify-start items-center gap-9 w-full max-w-[40%] max-tablet:max-w-full"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <Image src={icon} alt={title} width={76} height={74} />
        <h4 className="text-4xl font-semibold text-white leading-snug max-tablet:text-3xl max-tablet:leading-tight">
          {title}
        </h4>
      </div>
      <div
        className="text-gray-400 leading-relaxed font-light text-md opacity-70 w-full max-w-[35%] max-tablet:max-w-full"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        {description}
      </div>
    </div>
  );
};

export default HeadingPageSection;
