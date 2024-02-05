import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  text: string;
  url: string;
}
const LinkArrow = ({ text, url }: Props) => {
  return (
    <Link
      href={url}
      className="group/link text-[12px] font-bold text-blue-400 hover:text-blue-300 flex items-center gap-2"
      data-aos="fade-right" data-aos-delay="300"
    >
      {text}
      <Image src="/icon_arrow2.svg" alt="arrow" width={14} height={12} className="group-hover/link:translate-x-1 transition-transform ease-in-out" />
    </Link>
  );
};

export default LinkArrow;
