import React from "react";
import ButtonSolid from "./ButtonSolid";
import Link from "next/link";
import Image from "next/image";

const BookDemo = () => {
  return (
    <div className="py-24 w-screen bg-[rgba(0,0,0,0.2)] px-20 max-tablet:px-11 max-tablet:w-full">
      <div className="max-w-7xl m-auto flex justify-center flex-col items-center py-10 gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <span
            className="text-white font-light montserrat text-3xl uppercase max-tablet:text-center max-tablet:text-2xl"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            Avez-vous un projet en tête ?
          </span>
          <span
            className="text-white font-semibold montserrat text-2xl uppercase max-tablet:text-center max-tablet:text-xl"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            Mettons-nous au travail.
          </span>
        </div>
        <Link
          href="/contact"
          className="text-xs font-bold text-blue-950 bg-white hover:bg-slate-200 px-9 py-4 rounded-full w-fit flex justify-center items-center gap-2"
          data-aos="fade"
          data-aos-offset="200"
          data-aos-delay="250"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          Réservez une démo
          <Image src="/icon_arrow.svg" alt="arrow" width={14} height={13} />
        </Link>
      </div>
    </div>
  );
};

export default BookDemo;
