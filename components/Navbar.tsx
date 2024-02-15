import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div
        className="flex flex-col backdrop-blur-lg bg-[rgba(0,10,19,0.02)] px-2 py-5 rounded-lg items-center gap-5 fixed top-[120px] right-[20px] max-tablet:hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <span className="h-[96px] w-[2px] bg-white opacity-20"></span>
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={25}
            height={25}
          />
        ))}
        <span className="h-[96px] w-[2px] bg-white opacity-20"></span>
      </div>
      <div
        className="flex flex-col items-center gap-5 fixed bottom-[80px] left-[-75px] max-tablet:hidden"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <span className="h-[96px] w-[2px] bg-white opacity-20 transform translate-x-1"></span>
        <Link
          href={"#"}
          className="transform -rotate-90 py-20 text-white font-bold relative"
        >
          <div className="backdrop-blur-lg bg-[rgba(0,10,19,0.02)] rounded-lg px-5 py-3">
            Commander maintenant
          </div>
          <span className="absolute top-[40%] -right-6 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </Link>
        <span className="h-[96px] w-[2px] bg-white opacity-20 transform translate-x-1"></span>
      </div>
    </div>
  );
};

export default Navbar;
