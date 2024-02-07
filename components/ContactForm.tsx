"use client";
import React, { FormEvent, FormEventHandler, useState } from "react";

const ContactForm = () => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const formData = new FormData(form);
  //     const formJson = Object.fromEntries(formData.entries());
  //     const {
  //       company_name,
  //       email,
  //       first_name,
  //       last_name,
  //       message,
  //       phone_number,
  //     } = formJson;
  //     console.log(company_name);
  //     window.location.assign(`mailto:user@example.com`);
  //   };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="divide-y divide-gray-200">
        {/* onSubmit={handleSubmit} */}
        {/* Bonjour, 
        Je permets de vous contacter au sujet d'un développement d'une application web.
        Je vous remercie par avance pour toute l'aide que vous pourrez m'apporter sur ce sujet, et vous souhaite une excellente fin de journée.
        Très cordialement */}
        <form
          action={`mailto:bitardev2@gmail.com?subject=Demade d'information&body=${message}`}
          method="post"
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
              defaultValue={message}
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
            <button
              type="submit"
              className="px-8 py-4 font-normal text-white bg-transparent hover:bg-[rgba(255,255,255,.05)] rounded-lg p-2 flex items-center gap-4 justify-center border border-[rgba(255,255,255,.1)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
