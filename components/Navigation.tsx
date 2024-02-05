"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "@/components/Transition";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [isActive, setIsActive] = useState(path);
  const [prevPath, setPrevPath] = useState("/");
  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);
  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
    }
  }, [path, isRouting]);

  return (
    <div className="fixed z-[51] top-0 left-0 w-full max-mobile:w-screen px-12 mt-5 max-h-[60px] flex justify-center max-tablet:px-0">
      {isRouting && <Transition />}
      <div
        className="flex justify-between w-full rounded-xl items-center max-tablet:px-5 backdrop-blur-xl bg-[rgba(0,10,19,0.5)]"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="flex flex-row gap-3 items-center px-6 max-mobile:pl-1">
          <Link href={"/"}>
            <Image
              src="/logo_white.svg"
              alt="MMO"
              width={80}
              height={40}
              className="w-full h-full object-contain relative z-50"
            />
          </Link>
        </div>
        <div className="px-6 py-8 gap-[36px] flex justify-end items-center max-tablet:hidden">
          {NavLinks.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className={`capitalize font-extralight ${
                path === nav.name ? "text-white" : "text-gray-400"
              } hover:text-white`}
            >
              {nav.title}
              {/* <nav.icon
            className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800" : "text-white"}`}
          /> */}
            </Link>
          ))}
          <button
            type="button"
            title="light mode"
            className="bg-transparent hover:bg-[rgba(255,255,255,0.1)] rounded-md p-2"
          >
            <Image
              src="/icon_lightmode.svg"
              alt="lightmode"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </button>
          <button
            type="button"
            title="Français"
            className="font-semibold text-gray-200 bg-transparent hover:text-white rounded-md p-2"
          >
            Fr
          </button>
          <Link
            href="/contact"
            title="Contactez-nous"
            className="px-6 py-2 font-normal text-white bg-transparent hover:bg-[rgba(255,255,255,.05)] rounded-full p-2 flex items-center gap-2 justify-center border border-[rgba(255,255,255,.1)]"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            Contactez-nous
          </Link>
        </div>
        <MobileMenu path={path} />
      </div>
    </div>
  );
};
export default Navigation;
