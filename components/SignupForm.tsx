"use client";
import React, { FormEvent, FormEventHandler, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import BodyText from "./BodyText";

interface Props {
  modelSlug: string;
  telephone?: boolean;
  onReturn: (arg0: string) => void;
}
const SignupForm = ({ modelSlug, telephone, onReturn }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleRetourButtonClick = (buttonName: string) => {
    onReturn(buttonName);
  };
  return (
    <>
      <div className="divide-y divide-gray-200 w-full">
        <form
          action={`/templates/config/${modelSlug}`}
          autoComplete="off"
          className="py-8 w-full text-base leading-6 flex flex-col gap-x-10 gap-y-14 space-y-4 text-white sm:text-lg sm:leading-7 montserrat font-normal"
        >
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 w-full">
            <div className="relative">
              <input
                id="first_name"
                name="first_name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="off"
                autoCapitalize="off"
                className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                placeholder="Votre prénom"
              />
              <label
                htmlFor="first_name"
                className="absolute left-0 -top-4 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
              >
                Prénom
              </label>
            </div>
            <div className="relative">
              <input
                id="last_name"
                name="last_name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="off"
                autoCapitalize="off"
                className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                placeholder="Votre nom"
              />
              <label
                htmlFor="last_name"
                className="absolute left-0 -top-4 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
              >
                Nom
              </label>
            </div>
            <div className="relative">
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                autoComplete="off"
                autoCapitalize="off"
                className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                placeholder="Votre numéro de téléphone"
              />
              <label
                htmlFor="phone_number"
                className="absolute left-0 -top-4 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
              >
                Votre numéro de téléphone
              </label>
            </div>
            {telephone ? (
              ""
            ) : (
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
                  className="absolute left-0 -top-4 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
            )}
            <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  autoCapitalize="off"
                  className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-800 text-white focus:outline-none focus:border-sky-950"
                  placeholder="Mot de passe"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-4 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                >
                  Mot de passe
                </label>
              </div>
          </div>
          <div className="scale-75 origin-left opacity-40">
            <BodyText text="En créant un compte, vous acceptez nos Conditions d’utilisation et reconnaissez avoir lu et compris la Politique de confidentialité" />
          </div>
          <div className="relative flex justify-between items-center">
            <button
              type="button"
              onClick={() => handleRetourButtonClick("Button1")}
              className="px-8 py-4 font-normal text-white bg-transparent hover:bg-[rgba(255,255,255,.05)] rounded-lg p-2 flex items-center gap-4 justify-center border border-[rgba(255,255,255,.1)]"
            >
              <HiArrowNarrowLeft />
              Retour
            </button>
            <button
              type="submit"
              className="px-8 py-4 font-semibold text-black bg-white hover:bg-[rgba(255,255,255,.85)] rounded-lg p-2 flex items-center gap-4 justify-center border border-[rgba(255,255,255,.1)]"
            >
              Continuer
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
