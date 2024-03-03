import Link from "next/link";
import React from "react";
interface Props {
  text?: string;
  url?: string;
  targetType?: string;
}
const ButtonSolid = ({ text = "Voir Plus", url = "/", targetType = "" }: Props) => {
  return (
    <Link
      href={url}
      target={targetType}
      className="text-xs font-bold text-blue-950 bg-white hover:bg-slate-200 px-9 py-4 rounded-full w-fit max-tablet:px-4 max-tablet:py-2"
    >
      {text}
    </Link>
  );
};

export default ButtonSolid;
