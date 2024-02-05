import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  icon: string;
  title: string;
  serviceUrl: string;
  btnText: string;
  index: number;
}
const ServiceCard = ({ icon, title, serviceUrl, btnText, index }: Props) => {
  return (
    <Link
      href={serviceUrl}
      className="group/service w-[30%] max-tablet:w-full min-h-[140px] flex flex-col justify-center items-center bg-[#F1FCFF] hover:bg-[#4892D6] pl-9 rounded-2xl relative max-mobile:px-4 max-mobile:min-h-[100px]"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay={index * 50}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="flex gap-6 justify-start items-center w-full">
        <Image src={icon} alt="" width={50} height={50} />
        <span className="text-[#2D3E51] group-hover/service:text-white font-semibold text-sm max-w-[70%] transition-colors">
          {title}
        </span>
      </div>
      <span className="text-[#2D3E51] text-xs font-medium py-1 px-2 opacity-0 group-hover/service:opacity-100 transition-opacity hover:bg-slate-200 bg-white w-fit rounded-full absolute bottom-3 right-3">
        {btnText}
      </span>
      <span className="w-2 h-2 rounded-full bg-white opacity-0 absolute right-3 top-3 group-hover/service:opacity-100" />
    </Link>
  );
};

export default ServiceCard;
