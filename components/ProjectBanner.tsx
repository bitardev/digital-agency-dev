import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonSolid from "./ButtonSolid";
import ButtonOutline from "./ButtonOutline";

const ProjectBanner = () => {
  return (
    <div className="w-screen flex justify-center items-center max-tablet:w-full max-tablet:px-11">
      <div
        style={{
          backgroundImage: "url(/banner2.webp)",
        }}
        className="w-full max-w-7xl m-auto h-[262px] shadow-2xl bg-no-repeat rounded-[50px] bg-cover flex justify-between items-center px-14 max-tablet:h-auto max-tablet:flex-col-reverse max-tablet:pt-5 max-tablet:pb-8"
        data-aos="zoom-out"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="w-full max-w-[50%] flex flex-col justify-center items-start gap-4 max-tablet:max-w-full max-tablet:text-center">
          <h3 className="text-white font-bold montserrat max-w-md text-xl max-tablet:text-sm">
            Nous aidons les entreprises à atteindre leurs objectifs et à
            résoudre leurs problèmes.
          </h3>
          <div className="flex items-center justify-start gap-4 w-full max-tablet:justify-center max-tablet:py-2">
            <ButtonSolid url="/projets" text="Afficher toutes les projets" />
            <ButtonOutline url="/contact" text="Contactez-nous" />
          </div>
        </div>
        <div className="w-full max-w-[50%] flex justify-end max-tablet:justify-center max-tablet:max-w-[50%] max-tablet:m-auto">
          <Image src="/graph2.svg" alt="graph" width={424} height={268} />
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
