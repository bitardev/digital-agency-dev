import Link from "next/link";
import React from "react";
interface Props {
  text?: string;
  url?: string;
  targetType?: string;
  full?: boolean;
}
const ButtonSolid = ({
  text = "Voir Plus",
  url = "/",
  targetType = "",
  full = false,
}: Props) => {
  return (
    <Link
      href={url}
      target={targetType}
      className={`${
        full ? "w-full" : "w-fit"
      } text-xs font-bold text-blue-950 bg-white hover:bg-slate-200 px-9 py-4 rounded-full max-tablet:px-4 max-tablet:py-2`}
    >
      {text}
    </Link>
  );
};

export default ButtonSolid;
