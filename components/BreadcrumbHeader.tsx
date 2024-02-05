import Link from "next/link";
import React from "react";

interface Props {
  currentPage: string;
}
const BreadcrumbHeader = ({ currentPage }: Props) => {
  return (
    <div
      className="w-screen min-h-[300px] bg-cover flex flex-col justify-center items-center gap-4"
      style={{ backgroundImage: "url(/bg_page.webp)" }}
    >
      <h2
        className="text-white montserrat text-5xl font-bold mt-16"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        {currentPage}
      </h2>
      <ul
        className="opacity-70 flex justify-center items-center gap-2"
        data-aos="fade-up"
        data-aos-duration="1400"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <li className="after:block after:content-['/'] after:text-sm after:text-white text-white flex justify-center items-center gap-2">
          <Link href="/" className="text-sm text-white montserrat font-light">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="#" className="text-sm text-white montserrat font-bold">
            {currentPage}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadcrumbHeader;
