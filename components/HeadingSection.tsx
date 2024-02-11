import React from "react";

interface Props {
  title: string;
  subtitle: string;
  reverse?: boolean;
  line?: boolean;
  subtitleColor?: string;
  subtitleClassName?: string;
}

const HeadingSection = ({ title, subtitle, reverse, subtitleColor, line, subtitleClassName = 'text-xl font-light' }: Props) => {
  return (
    <div
      className={`flex flex-col gap-4 ${reverse ? "flex-col-reverse":""}`}
    >
      <h3
        className="text-white text-3xl font-bold montserrat max-mobile:text-xl"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {title}
      </h3>
      <p
        className={`text-white montserrat max-tablet:text-lg relative max-mobile:text-sm ${line ? "flex items-center justify-start gap-3 before:block before:bg-blue-300 before:content-[''] before:w-8 before:h-0.5":""} ${subtitleClassName}`}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default HeadingSection;
