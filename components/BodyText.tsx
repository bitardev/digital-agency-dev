import React from "react";
interface Props {
  text: string;
}
const BodyText = ({ text }: Props) => {
  return (
    <div
      className="text-white text-lg font-normal opacity-70"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-cubic"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      {text}
    </div>
  );
};

export default BodyText;
