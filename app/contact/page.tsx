import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import ContactAddressCard from "@/components/ContactAddressCard";
import HeadingPageSection from "@/components/HeadingPageSection";
import HeadingSection from "@/components/HeadingSection";
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
          <div className="w-full max-w-[60%] pr-14 container max-tablet:max-w-full max-tablet:pr-0">
            <div className="divide-y divide-gray-200">
              <form
                autoComplete="off"
                className="py-8 text-base leading-6 flex flex-col gap-x-10 gap-y-14 space-y-4 text-white sm:text-lg sm:leading-7 montserrat font-normal"
              >
                <div className="flex flex-col gap-8">
                  <span className="text-white font-bold monteserrat text-4xl pt-4">
                    Demade d'information
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
                  <div className="relative">
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      autoComplete="off"
                      autoCapitalize="off"
                      className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                      placeholder="Votre prénom"
                    />
                    <label
                      htmlFor="first_name"
                      className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Prénom
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      autoComplete="off"
                      autoCapitalize="off"
                      className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                      placeholder="Votre nom"
                    />
                    <label
                      htmlFor="last_name"
                      className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Nom
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="phone_number"
                      name="phone_number"
                      type="text"
                      autoComplete="off"
                      autoCapitalize="off"
                      className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                      placeholder="Votre numéro de téléphone"
                    />
                    <label
                      htmlFor="phone_number"
                      className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Votre numéro de téléphone
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      autoCapitalize="off"
                      inputMode="email"
                      className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    autoComplete="off"
                    autoCapitalize="off"
                    className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                    placeholder="Nom d’entreprise"
                  />
                  <label
                    htmlFor="company_name"
                    className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Nom d’entreprise
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    autoCapitalize="off"
                    placeholder="Message*"
                    className="w-full h-32 peer placeholder-transparent bg-transparent border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                  ></textarea>

                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:-top-0 transition-all peer-focus:-top-4.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Votre message
                  </label>
                </div>
                <div className="relative">
                  <button className="px-8 py-4 font-normal text-white bg-transparent hover:bg-[rgba(255,255,255,.05)] rounded-lg p-2 flex items-center gap-4 justify-center border border-[rgba(255,255,255,.1)]">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full h-full border-[1px] border-blue-500 rounded-xl px-11 flex flex-col gap-6 py-12 max-w-[40%] max-tablet:max-w-full max-tablet:mt-11">
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
            <div className="grid grid-cols-2 text-white montserrat text-md font-light gap-7">
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
            <div className="grid grid-cols-2 text-white montserrat text-md font-light gap-7">
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
                <span>Lundi à Samedi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-[rgba(255,255,255,0.02)] pt-20 mt-12 relative z-10">
        <div className="w-full max-w-screen-2xl m-auto min-h-[500px] px-20 max-tablet:px-11">
          <HeadingSection
            title="Nos branches affiliées"
            subtitle="Et tortor consequat id porta nibh venenatis cras sed felis. Pharetra diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Volutpat blandit aliquam etiam velit sceleris."
          />
          <div className="grid grid-flow-row grid-cols-4 gap-3 montserrat gap-x-12 pt-16 max-tablet:grid-cols-none max-tablet:gap-11">
            {ContactAddresses.map((item, index) => (
              <ContactAddressCard
                key={item.city}
                index={index}
                city={item.city}
                address={item.address}
                tel={item.tel}
                email={item.email}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-screen -mt-12 max-tablet:mt-12">
        <Image src="/map_paris.webp" alt="Map" width={1440} height={415} className="w-screen mix-blend-luminosity" />
      </div>
    </>
  );
};

export default page;
