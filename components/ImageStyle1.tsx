import Image from "next/image";
import React from "react";

const ImageStyle1 = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full p-4 max-tablet:p-0"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="1000"
      data-aos-offset="0"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="flex justify-center items-center relative before:absolute before:z-0 before:translate-x-[40px] before:-translate-y-[40px] before:rounded-l-[10px] before:rounded-r-[100px] before:rounded-bl-[10px] before:rounded-br-[10px] before:h-full before:w-full before:bg-gradient-to-b before:from-[rgba(255,255,255,0.1)] before:to-transparent">
        <Image
          src="/about_bg.webp"
          alt="About MMO"
          width={420}
          height={960}
          className="rounded-l-[10px] rounded-r-[80px] rounded-bl-[10px] rounded-br-[10px] relative z-10"
        />
      </div>
    </div>
  );
};

export default ImageStyle1;
