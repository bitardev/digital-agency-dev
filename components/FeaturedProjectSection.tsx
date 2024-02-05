import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonSolid from "./ButtonSolid";
interface Props {
  image: string;
  title: string;
  description: string;
  imageOrientation: string; //left || right
  btnText: string;
  projectUrl: string;
  projectNum: string;
  lightBG: boolean;
  lastProjet: boolean;
}
const FeaturedProjectSection = ({
  image,
  title,
  description,
  imageOrientation,
  btnText,
  projectUrl,
  projectNum,
  lightBG,
  lastProjet,
}: Props) => {
  return (
    <div
      className={`w-screen h-screen flex justify-center items-center max-tablet:py-28 max-tablet:h-auto ${
        lightBG ? "bg-[rgba(255,255,255,0.01)]" : ""
      } ${lastProjet ? "pb-48" : ""}`}
    >
      <div
        className={`w-full max-w-screen-xl flex justify-center gap-40 items-center max-tablet:flex-col max-tablet:gap-10 ${
          imageOrientation === "left" ? "" : "flex-row-reverse"
        }`}
      >
        <div
          className="flex justify-center items-center w-full max-w-[60%] relative max-tablet:max-w-full max-tablet:px-11"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <Image
            src={image}
            alt={title}
            width={645}
            height={565}
            className="rounded-tl-md rounded-tr-[100px] rounded-bl-md rounded-br-md shadow-2xl"
          />
          <span className="text-white opacity-10 text-[200px] font-extrabold absolute -bottom-12 left-0 leading-none max-mobile:text-[100px] translate-x-[-60%]">
            {projectNum}
          </span>
        </div>
        <div
          className="flex flex-col gap-9 w-full max-w-[40%] justify-center h-full max-tablet:max-w-full max-tablet:px-11"
          data-aos="fade-down"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="text-white opacity-80 font-bold montserrat text-3xl max-mobile:text-xl">
            {title}
          </h2>
          <p className="text-white text-sm montserrat font-light opacity-80">
            {description}
          </p>
          <ButtonSolid url={projectUrl} text={btnText} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectSection;
