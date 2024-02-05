import Accordion from "@/components/Accordion";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import HeadingSection from "@/components/HeadingSection";
import ImageStyle1 from "@/components/ImageStyle1";
import { FeaturesApropos, MissionAndVision } from "@/constants";
import Image from "next/image";
import React from "react";
import { RxPlus, RxMinus } from "react-icons/rx";

const page = () => {
  return (
    <>
      <BreadcrumbHeader currentPage="A propos" />
      <div className="w-full max-w-screen-2xl px-20 py-32 m-auto max-tablet:px-6">
        <div className="justify-between w-full grid grid-cols-2 max-tablet:grid-cols-none">
          <div className="flex flex-col justify-center items-start w-full p-4 gap-20">
            <div className="tablet:hidden">
              <ImageStyle1 />
            </div>
            <HeadingSection
              title="Ce que nous faisons"
              subtitle="Mission & Vision"
            />
            <div className="flex flex-col justify-center items-start w-full">
              <Accordion missionAndVision={MissionAndVision} />
            </div>
          </div>
          <div className="max-tablet:hidden">
            <ImageStyle1 />
          </div>
        </div>
      </div>
      <div className="w-screen py-32 bg-[rgba(255,255,255,0.02)]">
        <div className="w-full px-20 max-w-screen-2xl m-auto max-tablet:px-11">
          <HeadingSection
            title="Pourquoi nous choisir"
            subtitle="Lorem ispum dolor"
          />
          <div className="grid grid-cols-4 text-white pt-20 gap-6 max-tablet:grid-cols-none">
            {FeaturesApropos.map((feature, index) => (
              <div
                key={index}
                className={`${
                  feature.selected ? "bg-[rgba(255,255,255,0.02)]" : ""
                } flex flex-col gap-5 px-10 py-12 rounded-xl montserrat text-white transition-colors ease-in-out duration-500 hover:bg-[rgba(255,255,255,0.02)]`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={(index + 1) * 250}
                data-aos-offset="0"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                <Image
                  src={feature.src}
                  alt={feature.title}
                  width={60}
                  height={60}
                />
                <div className="flex items-center gap-3">
                  <span className="text-4xl text-sky-500 font-bold">
                    0{index + 1}
                  </span>
                  <span className="font-bold text-lg">{feature.title}</span>
                </div>
                <div className="text-sm font-light leading-relaxed opacity-70">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
