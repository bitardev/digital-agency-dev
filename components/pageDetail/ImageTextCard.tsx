import Image from "next/image";
import React from "react";
import HeadingSection from "../HeadingSection";
import BodyText from "../BodyText";
import ButtonOutline from "../ButtonOutline";
import ButtonSolid from "../ButtonSolid";

interface Props {
  imageOrientation?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  btnUrl?: string;
  btnText?: string;
  btnSolid?: boolean;
}
const ImageTextCard = ({
  imageOrientation,
  image,
  title,
  subtitle,
  description,
  btnUrl,
  btnText,
  btnSolid,
}: Props) => {
  return (
    <div className="w-full max-w-7xl m-auto py-20">
      <div
        className={`w-full max-w-screen-xl flex justify-center gap-40 items-center max-tablet:flex-col max-tablet:gap-10 ${
          imageOrientation === "left" ? "" : "flex-row-reverse"
        }`}
      >
        <div
          className="flex justify-center items-center w-full max-w-[60%] relative max-tablet:max-w-full max-tablet:px-11"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <Image
            src={image || ""}
            alt={title || ""}
            width={645}
            height={565}
            className="rounded-tl-md rounded-tr-[100px] rounded-bl-md rounded-br-md shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-9 w-full max-w-[40%] justify-center h-full max-tablet:max-w-full max-tablet:px-11">
          <HeadingSection
            title={title || ""}
            subtitle={subtitle || ""}
            reverse={true}
            line={true}
            subtitleClassName="uppercase font-normal text-md text-blue-300"
          />
          <BodyText text={description || ""} textClass="text-gray-300" />
          {btnText && btnSolid ? (
            <ButtonSolid url={btnUrl} text={btnText} />
          ) : (
            ""
          )}
          {btnText && !btnSolid ? (
            <ButtonOutline url={btnUrl} text={btnText} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageTextCard;
