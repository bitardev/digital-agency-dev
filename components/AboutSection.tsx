import React from "react";
import HeadingSection from "./HeadingSection";
import BodyText from "./BodyText";
import Image from "next/image";
import LinkArrow from "./LinkArrow";

const AboutSection = () => {
  return (
    <div className="py-24 w-screen min-h-screen max-tablet:w-full max-tablet:h-auto">
      <div className="max-w-7xl m-auto max-tablet:px-11">
        <HeadingSection
          title="Quelque mots à propos MMO"
          subtitle="Ce qui nous rend spécial"
        />
        <div className="h-24" />
        <BodyText text="Lorem ipsum dolor sit amet consectetur. Volutpat metus pellentesque gravida vel turpis pharetra sit leo. Eget elit dictumst at at ut sed nunc at quam. Gravida pulvinar fames vitae viverra metus cursus. Sodales ut sit convallis risus. Gravida at neque ut est pharetra id. Eget sapien tristique id proin. Augue ut elit volutpat luctus elit vitae." />
        <div className="flex justify-center items-center px-20 mix-blend-plus-lighter -translate-y-[10%] max-tablet:translate-y-0 max-tablet:px-0">
          <Image
            src="/mmo_bg.webp"
            alt="à propos MMO"
            width={966}
            height={544}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          />
        </div>
        <div className="flex justify-center -translate-y-[50px] max-tablet:translate-y-0">
          <LinkArrow url="/propos" text="Découvrir plus à propos MMO" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
