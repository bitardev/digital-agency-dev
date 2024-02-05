import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  title: string;
  description: string;
  serviceUrl: string;
  btnText: string;
  index: number;
}
const ServiceCardBig = ({
  image,
  title,
  description,
  serviceUrl,
  btnText,
  index,
}: Props) => {
  return (
    <div
      className="w-full max-w-[46%] min-h-[350px] even:mt-24 max-tablet:mt-10 max-tablet:max-w-full"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay={index * 50}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <Link
        href={serviceUrl}
        className="relative py-12 text-white flex flex-col justify-center items-center gap-14 group/service"
      >
        <div className="relative w-full flex justify-center items-center">
          <MdOutlineArrowOutward
            size={35}
            className="absolute right-5 top-5 z-10 mix-blend-difference opacity-0 will-change-transform -translate-x-2 translate-y-2 group-hover/service:opacity-100 transition-all duration-700 ease-in-out group-hover/service:translate-x-0 group-hover/service:translate-y-0 max-mobile:opacity-100 max-mobile:-translate-x-1 max-mobile:translate-y-1"
            color="white"
          />
          <button
            type="button"
            className="absolute text-blue-950 bg-white px-4 py-2 shadow-md text-xs font-bold rounded-full z-10 opacity-0 will-change-transform translate-y-4 group-hover/service:opacity-100 transition-all duration-700 ease-in-out group-hover/service:translate-y-0 max-mobile:opacity-100"
          >
            {btnText}
          </button>
          <Image
            src={image}
            alt={title}
            width={520}
            height={407}
            className="rounded-xl shadow-2xl w-full opacity-100 group-hover/service:opacity-60 transition-opacity duration-700 ease-in-out"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h5 className="text-white text-3xl font-bold text-center px-5 max-mobile:text-xl max-mobile:px-0">
            {title}
          </h5>
          <p className="text-white text-sm font-light text-center opacity-70 max-w-[320px]">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCardBig;
