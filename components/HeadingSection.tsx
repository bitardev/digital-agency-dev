import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const HeadingSection = ({ title, subtitle }: Props) => {
  return (
    <div
      className="flex flex-col gap-4"
    >
      <h3
        className="text-white text-3xl font-bold montserrat max-mobile:text-xl"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-in-cubic"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        {title}
      </h3>
      <p
        className="text-white text-xl font-light montserrat max-tablet:text-lg max-mobile:text-sm"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="150"
        data-aos-duration="500"
        data-aos-easing="ease-in-cubic"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default HeadingSection;
