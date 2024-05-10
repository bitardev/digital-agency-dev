"use client";

import { Features } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import LinkArrow from "./LinkArrow";
import FeaturesCarousel from "./FeaturesCarousel";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="flex items-center min-h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          theme === "dark"
            ? "url(/background_black.webp)"
            : "url(/background_light2.webp)",
      }}
    >
      <div className="flex justify-between items-start w-full -mt-60 px-10 md:px-40 pb-56 md:pb-20 max-mobile:px-11">
        <div className="mt-40 flex flex-col gap-5 z-[10] max-w-[750px] max-mobile:mt-52">
          <h1
            className={`montserrat-alternates text-[55px] flex flex-col leading-tight ${
              theme === "light" ? "text-blue-950" : "text-white"
            } font-extrabold max-mobile:text-[30px]`}
          >
            <span className="mr-1" data-aos="fade-down">
              Des Solutions
            </span>
            <span
              className={`${
                theme === "light" ? "text-stroke-light" : "text-stroke"
              } text-[70px] capitalize -mt-4 max-mobile:text-[50px] max-mobile:mt-0`}
            >
              Créatives
            </span>
          </h1>
          <p
            className={`montserrat text-[14px] ${
              theme === "light" ? "text-blue-950 font-semibold" : "text-white"
            } font-light max-w-[245px]`}
          >
            Pourquoi mes clients me quittent pour mes concurrents ?
          </p>
          <LinkArrow url="#" text="Nous vous dirons" />
        </div>
        <div className="opacity-0 flex justify-center items-center pr-20 max-desktop:pr-0 max-desktop:pt-16 desktop:ml-16 max-tablet:absolute max-tablet:right-0 max-tablet:translate-x-[50%] max-tablet:mix-blend-lighten">
          <Image
            src={
              theme === "dark"
                ? "/abstract_3d_box2.gif"
                : "/abstract_3d_box2_light.gif"
            }
            alt="Abstract"
            width={500}
            height={500}
            className={`hidden mix-blend-${
              theme === "light"
                ? "darken transform translate-y-[30%] -translate-x-[20%]"
                : "lighten"
            } max-desktop:max-w-[350px] max-desktop:max-h-[350px]`}
          />
        </div>
      </div>
      <div className="absolute w-full px-40 bottom-0 max-tablet:px-10 max-tablet:w-screen">
        <div className="flex items-center justify-between gap-5 max-tablet:hidden">
          {Features.map((feature, index) => (
            <div
              key={feature.title}
              className="w-[20%] max-tablet:w-[100%]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="0"
              data-aos-delay={(index + 1) * 200}
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <div
                className={`${
                  feature.selected
                    ? "transform scale-[1.13] -translate-y-10 bg-gradient-to-b from-[#4892d6] to-transparent rounded-tl-[5px] rounded-tr-[60px]"
                    : "bg-[rgba(255,255,255,0.05)]"
                } w-full min-h-[320px] max-desktop:min-h-[230px] px-10 max-desktop:px-5 pt-12 max-desktop:pt-6 flex flex-col justify-start gap-[19px]`}
              >
                <div className="min-h-[62px]">
                  <Image
                    src={feature.src}
                    alt={feature.title}
                    width={54}
                    height={60}
                  />
                </div>
                <div className="px-1 flex flex-col gap-[19px]">
                  <span className="montserrat text-white font-bold text-lg">
                    {feature.title}
                  </span>
                  <span className="montserrat text-white font-light text-md max-desktop:text-sm">
                    {feature.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tablet:hidden">
          <FeaturesCarousel />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
