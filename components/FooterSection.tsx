import {
  AboutNav,
  ServicesNav,
  Socials,
  TermsConditionsNav,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollTopBtn from "./ScrollTopBtn";

const FooterSection = () => {
  return (
    <div className="w-screen">
      <ScrollTopBtn />
      <div className="max-w-screen-2xl m-auto flex flex-col px-20 justify-start max-tablet:px-0">
        <div className="flex justify-between items-start py-28 max-tablet:flex-col max-tablet:gap-14 max-tablet:px-11">
          <div
            className="flex flex-col gap-8"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <Image
              src="/logo_white.svg"
              alt="MMO Digital logo"
              width={100}
              height={50}
            />
            <p className="text-white text-sm font-light montserrat opacity-60 max-w-[300px] leading-7">
              Lorem ipsum dolor sit amet consectetur. Posuere gravida tincidunt
              ut nisl. Massa pharetra pulvinar sed egestas in quis volutpat.
            </p>
            <div className="flex justify-start items-center gap-6">
              {Socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.src}
                  alt={social.name}
                  width={25}
                  height={25}
                />
              ))}
            </div>
          </div>
          <div
            className="flex flex-col gap-8"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <h3 className="text-white opacity-80 font-semibold text-xl montserrat">
              Nos services
            </h3>
            <ul className="space-y-2 text-white font-medium mt-4">
              {ServicesNav.map((nav) => (
                <li key={nav.title}>
                  <Link
                    href={nav.url}
                    className="text-white text-sm font-light montserrat capitalize opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex flex-col gap-8"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="250"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <h3 className="text-white opacity-80 font-semibold text-xl montserrat">
              Qui sommes-nous
            </h3>
            <ul className="space-y-2 text-white font-medium mt-4">
              {AboutNav.map((nav) => (
                <li key={nav.title}>
                  <Link
                    href={nav.url}
                    className="text-white text-sm font-light montserrat capitalize opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex flex-col gap-8"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <h3 className="text-white opacity-80 font-semibold text-xl montserrat">
              Contactez-nous
            </h3>
            <ul className="space-y-2 text-white font-medium mt-4">
              <li>
                <Link
                  href="mailto:info@mmo.agency"
                  className="text-white text-md font-normal montserrat opacity-90 hover:opacity-100 transition-opacity"
                >
                  info@mmo.agency
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+212566556655"
                  className="text-white text-md font-normal montserrat opacity-90 hover:opacity-100 transition-opacity"
                >
                  +212 5 66 55 66 55
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center py-8 max-tablet:flex-col max-tablet:items-start max-tablet:gap-3 max-tablet:px-11 border-t border-t-[rgba(255,255,255,0.1)]">
          <span
            className="montserrat text-xs text-white font-medium opacity-50 uppercase"
            data-aos="fade-right"
            data-aos-delay="350"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            © {new Date().getFullYear()} by MMO Digital Agency
          </span>
          <ul
            className="flex gap-3 items-center justify-end"
            data-aos="fade-left"
            data-aos-delay="550"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            {TermsConditionsNav.map((nav) => (
              <li key={nav.title}>
                <Link
                  href={nav.url}
                  className="montserrat text-xs text-white font-medium opacity-50 hover:opacity-100 transition-opacity"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
