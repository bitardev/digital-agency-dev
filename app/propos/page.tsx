import Accordion from "@/components/Accordion";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import HeadingSection from "@/components/HeadingSection";
import ImageStyle1 from "@/components/ImageStyle1";
import FeaturesSection from "@/components/pageDetail/FeaturesSection";
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
          <FeaturesSection features={FeaturesApropos} heading={false} />
        </div>
      </div>
    </>
  );
};

export default page;
