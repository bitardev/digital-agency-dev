import { NavLinks, Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

interface Props {
  path: string;
}
const MobileMenu = ({ path }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="tablet:hidden">
      <button
        onClick={toggleMenu}
        title="Menu"
        className="text-white hover:opacity-80 transition-opacity mix-blend-difference pt-2"
      >
        <CiMenuFries size={35} color="white" />
      </button>
      <div
        className={`w-screen h-screen flex flex-col items-center justify-center bg-blue-500 fixed -top-5 z-10 left-0 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute right-4 top-5 flex justify-end items-center gap-5">
          <button
            type="button"
            title="light mode"
            className="bg-transparent hover:bg-[rgba(255,255,255,0.1)] rounded-md p-2"
          >
            <Image
              src="/icon_lightmode.svg"
              alt="lightmode"
              width={30}
              height={30}
              className="w-full h-full object-contain"
            />
          </button>
          <button
            type="button"
            title="Français"
            className="font-semibold text-xl text-white bg-transparent hover:text-white rounded-md p-2"
          >
            Fr
          </button>
          <button
            onClick={toggleMenu}
            title="Menu"
            className="text-white hover:opacity-80 transition-opacity"
          >
            <RxCross1 size={30} color="white" />
          </button>
        </div>
        <div className="">
          <ul className="space-y-2 flex flex-col gap-10 items-center justify-center max-mobile:gap-5">
            {NavLinks.map((nav) => (
              <li key={nav.name}>
                <Link
                  href={nav.link}
                  onClick={toggleMenu}
                  className={`uppercase text-5xl tracking-wide montserrat max-mobile:text-3xl ${
                    path === nav.name
                      ? "text-white font-bold"
                      : "text-gray-100 font-extralight"
                  } hover:text-white`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
            <li key="key_5">
              <Link
                href="/contact"
                onClick={toggleMenu}
                title="Contactez-nous"
                className="px-6 py-2 font-normal bg-white text-blue-950 bg-transparent hover:bg-[rgba(255,255,255,.05)] rounded-full p-2 flex items-center gap-2 justify-center border border-[rgba(255,255,255,.1)]"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-center items-center gap-10 absolute bottom-6 w-full left-0 max-mobile:gap-6">
            {Socials.map((social) => (
              <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                width={35}
                height={35}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
