import Link from "next/link";
import React from "react";

interface Props {
  currentPage: string;
  parentPage?: {
    name: string;
    url: string;
  };
}
const BreadcrumbHeader = ({ currentPage, parentPage }: Props) => {
  return (
    <div
      className="w-screen min-h-[300px] bg-cover flex flex-col justify-center items-center gap-4 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-[#000a13]"
      style={{ backgroundImage: "url(/bg_page.webp)" }}
    >
      <h2
        className="text-white montserrat text-5xl font-bold mt-16 max-mobile:text-3xl relative z-10"
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
        className="opacity-70 flex justify-center items-center gap-2 relative z-10"
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
        {parentPage ? (
          <li className="after:block after:content-['/'] after:text-sm after:text-white text-white flex justify-center items-center gap-2">
            <Link
              href={parentPage.url}
              className="text-sm text-white montserrat font-light"
            >
              {parentPage.name}
            </Link>
          </li>
        ) : (
          ""
        )}
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
