"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
interface Props {
  templateName?: string;
}

const DemandeDevis = ({ templateName }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission
    setLoading(true);
    const reqBody = {
      firstName,
      lastName,
      companyName,
      phoneNumber,
      email,
      message,
      templateName,
    };
    console.log("reqBody", reqBody);

    try {
      const res = await fetch("/api/submitForm/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      if (res.ok) {
        console.log("Form submitted successfully");
        toast.success(
          "Votre demande a bien été envoyé, un de nos conseiller vas vous contacter!",
          { duration: 6000, position: "top-center" }
        );
        setTimeout(() => {
          router.push("/");
        }, 6000);
        // Reset form fields
        setLastName("");
        setFirstName("");
        setCompanyName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      toast.error(
        "votre demande n'a pas été envoyée avec succès, veuillez réessayer plus tard",
        { duration: 6000 }
      );
    }
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="divide-y w-full divide-gray-200">
        <form
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
          className="py-8 text-base leading-6 flex flex-col gap-x-10 gap-y-14 space-y-4 text-white sm:text-lg sm:leading-7 montserrat font-normal"
        >
          <div className="flex flex-col gap-8">
            <span className="text-white font-bold monteserrat text-4xl pt-4">
              Demade de devis
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
                placeholder="Téléphone"
              />
              <label
                htmlFor="phone_number"
                className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Téléphone
              </label>
            </div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              disabled={loading}
              className={`${
                loading
                  ? "disabled:opacity-50 disabled:pointer-events-none"
                  : ""
              } px-8 py-4 font-normal text-white bg-transparent hover:bg-[rgba(255,255,255,.05)] rounded-lg p-2 flex items-center gap-4 justify-center border border-[rgba(255,255,255,.1)]`}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              Envoyer
              <Oval
                visible={loading}
                height="30"
                width="30"
                color="#FFFFFF"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DemandeDevis;
