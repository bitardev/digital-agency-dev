"use client"
import Image from "next/image";
import React from "react";
import Countup from "react-countup";
const NumbersSection = () => {
  return (
    <div className="max-w-7xl m-auto max-tablet:px-11 max-tablet:mt-14">
      <div className="flex flex-col justify-center items-center">
        <div
          className="text-white cursor-default font-semibold text-4xl text-center max-w-[940px] m-auto leading-relaxed max-tablet:text-xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="500"
          data-aos-easing="ease-in-cubic"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          C’est temps de faire passer votre image de marketing numérique{" "}
          <Image
            src="/icon_graph.svg"
            alt="icon graph"
            width={36}
            height={30}
            className="inline -translate-y-1 max-tablet:w-5"
          />{" "}
          au niveau supérieur{" "}
          <Image
            src="/tiny_team.webp"
            alt="MMO Team"
            width={90}
            height={40}
            className="inline -translate-y-1 max-tablet:w-14"
          />{" "}
          Nous sommes toujours là pour vous aider à développer votre entreprise{" "}
          <Image
            src="/icon_play.svg"
            alt="icon play"
            width={36}
            height={36}
            className="inline cursor-pointer hover:opacity-90 max-tablet:w-6"
          />
        </div>
        <div className="w-full min-h-32 mt-28 flex justify-between items-center gap-14 max-tablet:flex-wrap">
          <div
            className="flex justify-start items-center gap-5 max-w-[25%] max-tablet:max-w-[50%]"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="250"
            data-aos-duration="500"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <span className="text-8xl max-tablet:text-6xl number-stroke font-black">
                <Countup end={10} />
            </span>
            <span className="text-white text-xl font-thin opacity-80">
              Ans <br />
              D’expériences
            </span>
          </div>
          <div
            className="flex justify-start items-center gap-5 max-w-[25%] max-tablet:max-w-[50%]"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="350"
            data-aos-duration="500"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <span className="text-8xl max-tablet:text-6xl number-stroke font-black flex items-center">
              12 <span className="text-white font-thin text-6xl">+</span>
            </span>
            <span className="text-white text-xl font-thin opacity-80">
              Outils <br />
              Avancés
            </span>
          </div>
          <div
            className="flex justify-start items-center gap-5 max-w-[25%] max-tablet:max-w-[50%]"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="450"
            data-aos-duration="500"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <span className="text-8xl max-tablet:text-6xl number-stroke font-black">52</span>
            <span className="text-white text-xl font-thin opacity-80">
              Clients <br />
              Satisfaits
            </span>
          </div>
          <div
            className="flex justify-start items-center gap-5 max-w-[25%] max-tablet:max-w-[50%]"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="550"
            data-aos-duration="500"
            data-aos-easing="ease-in-cubic"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <span className="text-8xl max-tablet:text-6xl number-stroke font-black">90</span>
            <span className="text-white text-xl font-thin opacity-80">
              Projets <br />
              Complets
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
