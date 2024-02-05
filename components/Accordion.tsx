"use client";
import React, { useState } from "react";
import { RxMinus, RxPlus } from "react-icons/rx";

interface AccordionData {
  title: string;
  description: string;
}

const Accordion = ({
  missionAndVision,
}: {
  missionAndVision: AccordionData[];
}) => {
  const [currentActive, setCurrentActive] = useState<number | null>(0);
  return (
    <ul className="w-full">
      {missionAndVision.map((item, index) => (
        <li
          key={index}
          className="mb-5 pb-5 border-b border-b-gray-800 w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <button
            type="button"
            className={`flex flex-col justify-start items-start w-full ${
              currentActive === index ? "gap-8" : ""
            }`}
            onClick={() => setCurrentActive(index)}
          >
            <div className="flex justify-start items-center gap-10 w-full max-mobile:gap-5">
              <div
                className={`relative flex justify-center items-center transition-all ease-in-out duration-500 ${
                  currentActive === index ? "rotate-90" : ""
                }`}
              >
                <RxPlus
                  color="white"
                  size={30}
                  className={`transition-opacity ease-in-out duration-500 ${
                    currentActive === index ? "opacity-0" : ""
                  }`}
                />
                <RxMinus
                  color="white"
                  size={30}
                  className={`absolute opacity-0 transition-opacity ease-in-out duration-500 rotate-90 ${
                    currentActive === index ? "opacity-100" : ""
                  }`}
                />
              </div>
              <span className="text-lg text-white font-semibold montserrat leading-snug text-left max-mobile:text-sm">
                {item.title}
              </span>
            </div>
            <p
              className={`text-sm text-white font-normal montserrat leading-normal overflow-hidden text-left max-w-[445px] ${
                currentActive === index
                  ? "opacity-70 h-auto translate-y-0 transition-all ease-in-out duration-700"
                  : "h-0 opacity-0 -translate-y-2"
              }`}
            >
              {item.description}
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
