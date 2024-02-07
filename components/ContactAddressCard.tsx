"use client";

import Link from "next/link";
import React from "react";
interface Props {
  index: number;
  city: string;
  address: string;
  tel: string;
  email: string;
  mouseEnter: () => void
}

const ContactAddressCard = ({
  index,
  city,
  address,
  tel,
  email,
  mouseEnter
}: Props) => {
  return (
    <div
      className="max-w-[300px] max-tablet:max-w-full flex-auto justify-between flex flex-col gap-10 border-[1px] px-10 py-14 border-sky-600 rounded-xl shadow-xl bg-gradient-to-b from-transparent to-black"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(index + 1) * 250}
      data-aos-offset="0"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
      onMouseEnter={mouseEnter}
    >
      <div className="flex flex-col gap-10">
        <span className="text-lg font-bold text-sky-500">{city}</span>
        <span className="text-sm text-white opacity-70 font-light leading-relaxed w-full max-w-[180px]">
          {address}
        </span>
      </div>
      <div className="flex flex-col gap-1 text-white font-semibold">
        <Link href={`tel:${tel}`} className="opacity-80 hover:opacity-100">
          {tel}
        </Link>
        <Link href={`mailto:${email}`} className="opacity-80 hover:opacity-100">
          {email}
        </Link>
      </div>
    </div>
  );
};

export default ContactAddressCard;
