/* eslint react/no-unescaped-entities */
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import ContactAddressCard from "@/components/ContactAddressCard";
import ContactForm from "@/components/ContactForm";
import HeadingPageSection from "@/components/HeadingPageSection";
import HeadingSection from "@/components/HeadingSection";
import MapCard from "@/components/MapCard";
import NosBranchesAffiliesSection from "@/components/NosBranchesAffiliesSection";
import { ContactAddresses, Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbHeader currentPage="Contactez-nous" />
      <div className="w-full max-w-screen-2xl px-20 m-auto max-tablet:px-11">
        <HeadingPageSection
          title="Nous vous répondrons dans une heure."
          description="Egestas diam in arcu cursus euismod quis viverra. Enim sed faucibus turpis in eu mi bibendum neque egestas. Bibendum ut tristique et egestas. Facilisi cras fermentum odio eu feugiat nibh ipsum."
          icon="/icon_24h.svg"
        />
        <div className="flex justify-between items-start w-full min-h-[500px] pt-11 max-tablet:flex-col">
          <div
            className="w-full max-w-[60%] pr-14 container max-tablet:max-w-full max-tablet:pr-0 max-desktop:pl-7 max-tablet:pl-0"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <ContactForm />
          </div>
          <div
            className="w-full h-full border-[1px] border-blue-500 rounded-xl px-11 flex flex-col gap-6 py-12 max-w-[40%] max-tablet:max-w-full max-tablet:mt-11 max-mobile:px-4 max-mobile:py-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="500"
            data-aos-offset="0"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <span className="text-white font-bold monteserrat text-4xl">
              Dites Hello!
            </span>
            <p className="text-white font-light text-md leading-relaxed opacity-70">
              Duis convallis convallis pretium nibh ipsumtellus id interdum
              velit laoreet.
            </p>
            <Image src="/bg_hello.webp" alt="Hello" width={511} height={200} />
            <span className="text-white font-bold monteserrat text-xl">
              Demandes de renseignements
            </span>
            <div className="grid grid-cols-2 text-white montserrat text-md font-light gap-7 max-mobile:grid-cols-none max-mobile:gap-4">
              <Link
                href="mailto:devis@mmo.agency"
                className="opacity-80 hover:opacity-100"
              >
                devis@mmo.agency
              </Link>
              <Link
                href="mailto:contact@mmo.agency"
                className="opacity-80 hover:opacity-100"
              >
                contact@mmo.agency
              </Link>
            </div>
            <div className="grid grid-cols-2 text-white montserrat text-md font-light gap-7 max-mobile:grid-cols-none max-mobile:gap-4">
              <div className="flex justify-start items-center gap-4">
                {Socials.map((social) => (
                  <Image
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div className="flex flex-col opacity-70">
                <span>Horaire de travail: 09h à 18h</span>
                <span>Lundi à Vendredi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-[rgba(255,255,255,0.02)] pt-20 mt-12 relative z-10">
        <NosBranchesAffiliesSection />
      </div>
    </>
  );
};

export default page;
