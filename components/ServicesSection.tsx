import React from "react";
import HeadingSection from "./HeadingSection";
import ServiceCard from "./ServiceCard";
import { Services } from "@/constants";

const ServicesSection = () => {
  return (
    <div
      style={{ backgroundImage: "url(/abstract_mesh.svg)" }}
      className="py-24 w-screen h-screen bg-[rgba(255,255,255,0.03)] bg-center bg-no-repeat max-tablet:px-11 max-tablet:w-full max-tablet:h-auto max-tablet:pb-9"
    >
      <div className="max-w-7xl m-auto">
        <HeadingSection
          title="Ce que nous avons à offrir"
          subtitle="Nos services"
        />
        <div className="flex flex-wrap py-24 gap-8 max-tablet:flex-col">
          {Services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              serviceUrl={service.serviceUrl}
              btnText={service.btnText}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
