"use client";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Features } from "@/constants";
import Image from "next/image";

const FeaturesCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={`mySwiper`}
      >
        {Features.map((feature, index) => (
          <SwiperSlide key={feature.title}>
            <div
              className="w-full max-w-[90%] py-2 m-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(index + 1) * 200}
              data-aos-easing="ease-in-out"
            >
              <div
                className={`transform scale-[1.03] translate-y-0 bg-gradient-to-b from-[#4892d6] to-transparent rounded-tl-[5px] rounded-tr-[60px] w-full min-h-[320px] px-10 pt-12 flex flex-col justify-start gap-[19px]`}
              >
                <div className="min-h-[62px]">
                  <Image
                    src={feature.src}
                    alt={feature.title}
                    width={54}
                    height={60}
                  />
                </div>
                <div className="px-1 flex flex-col gap-[19px]">
                  <span className="montserrat text-white font-bold text-lg">
                    {feature.title}
                  </span>
                  <span className="montserrat text-white font-light text-md">
                    {feature.text}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturesCarousel;
