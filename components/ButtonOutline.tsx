import Link from "next/link";
import React from "react";
interface Props {
  text: string;
  url: string;
}
const ButtonOutline = ({ text, url }: Props) => {
  return (
    <Link
      href={url}
      className="text-xs font-bold text-white hover:bg-[rgba(255,255,255,0.1)] border border-white px-9 py-4 rounded-full w-fit max-tablet:px-4 max-tablet:py-2"
    >
      {text}
    </Link>
  );
};

export default ButtonOutline;
