import { Features } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import LinkArrow from "./LinkArrow";
import FeaturesCarousel from "./FeaturesCarousel";

const HeroSection = () => {
  return (
    <div
      className="flex items-center min-h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url(/background.webp)",
      }}
    >
      <div className="flex justify-between items-start w-full -mt-60 px-10 md:px-40 pb-56 md:pb-20">
        <div className="mt-40 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="montserrat-alternates text-[55px] flex flex-col leading-tight text-white font-extrabold">
            <span className="mr-1" data-aos="fade-down">
              Des Solutions
            </span>
            <span
              className="text-stroke text-[70px] capitalize text-stroke -mt-4"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Créatives
            </span>
          </h1>
          <p
            className="montserrat text-[14px] text-white font-light max-w-[238px]"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Pourquoi mes clients me quittent pour mes concurrents ?
          </p>
          <LinkArrow url="#" text="Nous vous dirons" />
        </div>
        <div className="flex justify-center items-center pr-20 max-tablet:absolute max-tablet:right-0 max-tablet:translate-x-[50%] max-tablet:mix-blend-lighten">
          <Image
            src="/abstract_3d_box2.gif"
            alt="Abstract"
            width={500}
            height={500}
            className="mix-blend-lighten"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          />
        </div>
      </div>
      <div className="absolute w-full px-40 bottom-0 max-tablet:px-10 max-tablet:w-screen">
        <div className="flex items-center justify-between gap-5 max-tablet:hidden">
          {Features.map((feature, index) => (
            <div
              key={feature.title}
              className="w-[20%] max-tablet:w-[100%]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="0"
              data-aos-delay={(index + 1) * 200}
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <div
                className={`${
                  feature.selected
                    ? "transform scale-[1.13] -translate-y-10 bg-gradient-to-b from-[#4892d6] to-transparent rounded-tl-[5px] rounded-tr-[60px]"
                    : "bg-[rgba(255,255,255,0.05)]"
                } w-full min-h-[320px] px-10 pt-12 flex flex-col justify-start gap-[19px]`}
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
          ))}
        </div>
        <div className="tablet:hidden">
          <FeaturesCarousel />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
