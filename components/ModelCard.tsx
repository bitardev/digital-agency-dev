import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

interface Props {
  url: string;
  image: string;
}

const ModelCard = ({ url, image }: Props) => {
  return (
    <>
      <Link href={url} className="flex justify-center items-center">
        <MdOutlineArrowOutward
          size={35}
          className="absolute right-5 top-5 z-10 mix-blend-difference opacity-0 will-change-transform -translate-x-2 translate-y-2 group-hover/model:opacity-100 transition-all duration-700 ease-in-out group-hover/model:translate-x-0 group-hover/model:translate-y-0 max-mobile:opacity-100 max-mobile:-translate-x-1 max-mobile:translate-y-1"
          color="white"
        />
        <button
          type="button"
          className="absolute delay-500 text-blue-950 bg-white px-4 py-2 shadow-md text-xs font-bold rounded-full z-10 opacity-0 will-change-transform translate-y-4 group-hover/model:opacity-100 transition-all duration-700 ease-in-out group-hover/model:translate-y-0 max-mobile:opacity-100"
        >
          Prévisualiser
        </button>
        <Image
          src={image}
          alt="Gym"
          width={400}
          height={400}
          className="rounded-xl shadow-2xl w-full opacity-100 group-hover/service:opacity-60 transition-opacity duration-700 ease-in-out"
        />
      </Link>
    </>
  );
};

export default ModelCard;
