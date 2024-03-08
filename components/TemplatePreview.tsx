"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { CiMobile1 } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiDotsHorizontal,
} from "react-icons/hi";
import { SlScreenDesktop } from "react-icons/sl";
import HeadingSection from "./HeadingSection";
import BodyText from "./BodyText";
import SignupForm from "./SignupForm";
import Image from "next/image";

interface Props {
  model: {
    name: string;
    slug: string;
    title: string;
    description: string;
    btnText: string;
    featured: boolean;
    icon: string;
    imageThumbnail: string;
    imageOrientation: string;
    imageLandingFull: string;
    modelUrl: string;
    previewUrl: string;
    lightBG: boolean;
    category: string;
  };
  config?: boolean;
}

const TemplatePreview = ({ model, config }: Props) => {
  const {
    name,
    slug,
    title,
    description,
    btnText,
    featured,
    icon,
    imageThumbnail,
    imageOrientation,
    imageLandingFull,
    modelUrl,
    previewUrl,
    lightBG,
    category,
  } = model;
  const [showLogin, setShowLogin] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [deviceMode, setDeviceMode] = useState("desktop");
  const [editMode, setEditMode] = useState(false);
  const showLoginPopup = () => {
    setShowLogin(true);
    setShowPreview(false);
  };
  const showSignupPopup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const activateEditMode = () => {
    setEditMode(true);
    console.log("editMode", editMode);
  };
  return (
    <>
      {showPreview && !config ? (
        <div className="w-screen flex min-h-screen cursor-default fixed left-0 top-0 z-[999999999] bg-[#000a13]">
          <div className="w-[70%] h-screen">
            <div className="px-16 py-10 flex justify-start items-center gap-12">
              <Link
                href={"/services/site-vitrines-et-applications/models"}
                className="text-white text-lg font-normal flex gap-3 items-center"
              >
                <HiArrowNarrowLeft />
                Retour
              </Link>
              <div className="flex justify-center items-center gap-5">
                <button
                  title="Desktop"
                  onClick={() => setDeviceMode("desktop")}
                  type="button"
                  className={`text-white p-3 ${
                    deviceMode === "mobile" ? "opacity-70" : ""
                  }`}
                >
                  <SlScreenDesktop size={30} />
                </button>
                <button
                  title="Mobile"
                  type="button"
                  onClick={() => setDeviceMode("mobile")}
                  className={`text-white p-3 ${
                    deviceMode === "desktop" ? "opacity-70" : ""
                  }`}
                >
                  <CiMobile1 size={30} />
                </button>
              </div>
            </div>
            <div className="h-screen px-2 py-5 flex justify-center items-start">
              <div
                className="pt-6 bg-gray-300 h-full max-h-[85%] rounded-lg relative"
                style={{
                  height: "887px",
                  width: deviceMode === "desktop" ? "1340px" : "450px",
                  transform: "translateY(-50px) scale(.8)",
                }}
              >
                <HiDotsHorizontal
                  className="absolute left-1 -top-3 text-gray-400"
                  size={50}
                />
                <iframe
                  data-test="template-preview-iframe-test-id"
                  frameBorder="0"
                  height="100%"
                  id="template-preview-iframe1"
                  scrolling="yes"
                  src={`${
                    editMode
                      ? previewUrl.replace("#googtrans(en|fr)", "") +
                        "?edit=true"
                      : previewUrl + "?edit=false"
                  }`}
                  title={name}
                  width={deviceMode === "mobile" ? "450px" : "100%"}
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-screen bg-[rgba(255,255,255,0.04)] px-20 py-48 flex flex-col justify-between items-start">
            <div>
              <h3 className="text-white capitalize font-normal montserrat text-5xl py-7">
                {name}
              </h3>
              <div className="text-white text-lg py-4 font-light opacity-70 mb-8">
                Lorsque vous commencez une période d’essai, vous pouvez
                continuer à personnaliser les styles, ajouter des
                fonctionnalités et bien plus encore.
              </div>
              <button
                type="button"
                onClick={showLoginPopup}
                className="text-xs font-bold text-blue-950 bg-white hover:bg-slate-200 px-9 py-4 rounded-full max-tablet:px-4 max-tablet:py-2 w-full"
              >
                COMMENCER AVEC CE DESIGN
              </button>
            </div>
            <div className="w-full flex justify-start pl-7">
              <Link
                href={previewUrl}
                target="_blank"
                className="group/link text-[12px] font-bold text-blue-400 hover:text-blue-300 flex items-center gap-2"
              >
                Voir le site de démonstration
                <HiArrowNarrowRight />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {showLogin && !config ? (
        <div className="w-screen min-h-screen cursor-default fixed left-0 top-0 z-[999999999] bg-[#000a13]">
          <div className="px-16 py-10 flex justify-between items-center">
            <Link
              href={"/services/site-vitrines-et-applications/models"}
              className="text-white text-lg font-normal flex gap-3 items-center"
            >
              <HiArrowNarrowLeft />
              Retour
            </Link>
            <button
              title="Se connecter"
              type="button"
              className="text-white text-lg font-normal"
            >
              Se connecter
            </button>
          </div>
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col max-w-3xl m-auto translate-y-[-40%]">
              <HeadingSection title="Créer votre compte" subtitle="" />
              <div className="scale-90 origin-left opacity-70">
                <BodyText text="En créant un compte, vous acceptez nos Conditions d’utilisation et reconnaissez avoir lu et compris la Politique de confidentialité" />
              </div>
              <div className="w-full flex justify-between items-center py-10 gap-4">
                <button
                  title="Google"
                  type="button"
                  className="text-white border border-gray-500 rounded-lg p-3 px-20 relative"
                >
                  <FaGoogle size={25} className="absolute left-5" />{" "}
                  <span className="text-white text-lg font-normal flex gap-3 items-center">
                    Continuer avec Google
                  </span>
                </button>
                <button
                  title="Email"
                  type="button"
                  onClick={showSignupPopup}
                  className="text-white border border-white rounded-lg p-3 px-20 relative"
                >
                  <FaRegEnvelope size={25} className="absolute left-5" />{" "}
                  <span className="text-white text-lg font-normal flex gap-3 items-center">
                    Continuer avec Email
                  </span>
                </button>
              </div>
              <div className="scale-75 origin-left opacity-40">
                <BodyText text="Connexion sécurisée avec reCAPTCHA soumise aux Conditions générales et à la Politique de confidentialité de Google" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {showSignup && !config ? (
        <div className="w-screen min-h-screen cursor-default fixed left-0 top-0 z-[999999999] bg-[#000a13]">
          <div className="px-16 py-10 flex justify-between items-center">
            <Link
              href={"/services/site-vitrines-et-applications/models"}
              className="text-white text-lg font-normal flex gap-3 items-center"
            >
              <HiArrowNarrowLeft />
              Retour
            </Link>
            <button
              title="Se connecter"
              type="button"
              className="text-white text-lg font-normal"
            >
              Se connecter
            </button>
          </div>
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col max-w-lg m-auto -translate-y-[50px]">
              <HeadingSection title="Créer votre compte" subtitle="" />
              <div className="w-full flex justify-between items-center py-10 gap-4 -translate-y-[30px]">
                <SignupForm modelSlug={slug} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {config ? (
        <div className="w-screen flex flex-row-reverse min-h-screen cursor-default fixed left-0 top-0 z-[999999999] bg-[#000a13]">
          <div className="w-[75%] h-screen">
            <div className="px-10 py-3 flex justify-between items-center gap-5">
              <button
                type="button"
                onClick={activateEditMode}
                className="text-xs font-bold text-blue-950 bg-white hover:bg-slate-200 px-4 py-2 rounded-lg max-tablet:px-4 max-tablet:py-2"
              >
                MODIFIER
              </button>
              <div className="text-white text-sm font-light text-center">
                Accueil
              </div>
              <div className="flex justify-center items-center gap-3">
                <button
                  title="Desktop"
                  onClick={() => setDeviceMode("desktop")}
                  type="button"
                  className={`text-white p-3 ${
                    deviceMode === "mobile" ? "opacity-70" : ""
                  }`}
                >
                  <SlScreenDesktop size={30} />
                </button>
                <button
                  title="Mobile"
                  type="button"
                  onClick={() => setDeviceMode("mobile")}
                  className={`text-white p-3 ${
                    deviceMode === "desktop" ? "opacity-70" : ""
                  }`}
                >
                  <CiMobile1 size={30} />
                </button>
              </div>
            </div>
            <div className="h-screen px-2 py-5 flex justify-center items-start">
              <div
                className="pt-6 bg-gray-300 h-full max-h-[85%] rounded-lg relative"
                style={{
                  height: "887px",
                  width: deviceMode === "desktop" ? "1340px" : "450px",
                  transform: "translate(-10px, -20px) scale(1)",
                }}
              >
                <div className="flex justify-between items-center absolute z-20 bottom-0 rounded-md translate-y-[130%] left-0 w-full px-6 py-4 bg-blue-800 text-white">
                  <span className="text-lg font-light">
                    Votre essai se termine dans 7 jours. Passez à un forfait
                    supérieur pour tirer le maximum de votre site.
                  </span>
                  <button
                    title="S'abonner"
                    type="button"
                    className="bg-white border rounded-lg py-2 px-6 relative"
                  >
                    <span className="text-black text-sm font-normal flex items-center">
                      S'abonner
                    </span>
                  </button>
                </div>
                <HiDotsHorizontal
                  className="absolute left-1 -top-3 text-gray-400"
                  size={50}
                />
                <iframe
                  data-test="template-preview-iframe-test-id"
                  frameBorder="0"
                  height="100%"
                  id="template-preview-iframe2"
                  scrolling="yes"
                  src={`${
                    editMode
                      ? previewUrl.replace("#googtrans(en|fr)", "") +
                        "?edit=true"
                      : previewUrl + "?edit=false"
                  }`}
                  title={name}
                  width={deviceMode === "mobile" ? "450px" : "100%"}
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-[25%] h-screen bg-[rgba(255,255,255,0.04)] px-10 py-5 flex flex-col justify-start items-start">
            <div className="flex flex-row gap-3 items-center max-mobile:pl-1">
              <Link href={"/"}>
                <Image
                  src="/logo_white.svg"
                  alt="MMO"
                  width={70}
                  height={30}
                  className="w-full h-full object-contain relative z-50"
                />
              </Link>
            </div>
            <div className="mt-24">
              <ul className="text-white font-light text-lg flex flex-col gap-y-4">
                <li>
                  <Link href={"#"} className="opacity-50 hover:opacity-100">
                    Site web
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="opacity-50 hover:opacity-100">
                    Vendre
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="opacity-50 hover:opacity-100">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="opacity-50 hover:opacity-100">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="opacity-50 hover:opacity-100">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="opacity-50 hover:opacity-100">
                    Scheduling
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-80">
              <ul className="text-white font-light text-sm flex flex-col gap-y-2">
                <li>
                  <Link href={"#"} className="opacity-30 hover:opacity-80">
                    Bibliothèque de ressources
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="opacity-30 hover:opacity-80">
                    Paramètres
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="opacity-30 hover:opacity-80">
                    Aide
                  </Link>
                </li>
                <li className="mt-8 bg-[rgba(255,255,255,.02)] hover:bg-[rgba(255,255,255,.06)] pl-8 pr-9 cursor-pointer py-3 rounded-md">
                  <div className="flex justify-start items-center gap-x-4">
                    <span className="bg-red-300 text-black font-bold text-2xl w-10 h-10 rounded-full flex justify-center items-center">
                      Y
                    </span>
                    <div className="flex flex-col justify-center items-start text-xs font-light gap-1">
                      <span className="font-normal">Youssef Bitar</span>
                      <span>bitardev2@gmail.com</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TemplatePreview;
