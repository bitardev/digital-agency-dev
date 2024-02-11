import React from "react";
interface Props {
  text: string;
  textClass?: string;
}
const BodyText = ({ text, textClass = 'text-white' }: Props) => {
  return (
    <div
      className={`text-lg font-normal max-mobile:text-sm ${textClass}`}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      {text}
    </div>
  );
};

export default BodyText;
