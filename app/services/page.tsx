import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import HeadingPageSection from "@/components/HeadingPageSection";
import ServiceCardBig from "@/components/ServiceCardBig";
import { Services } from "@/constants";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbHeader currentPage="Services" />
      <div className="w-full max-w-screen-2xl px-20 m-auto max-tablet:px-11">
        <HeadingPageSection
          title="Ce que nous avons à offrir"
          description="Egestas diam in arcu cursus euismod quis viverra. Enim sed faucibus turpis in eu mi bibendum neque egestas. Bibendum ut tristique et egestas. Facilisi cras fermentum odio eu feugiat nibh ipsum."
          icon="/icon_services.svg"
        />
        <div className="w-full flex justify-between items-start gap-2 flex-wrap pb-40 max-tablet:flex-col">
          {Services.map((service, index) => (
            <ServiceCardBig
              key={service.title}
              title={service.title}
              image={service.image}
              description={service.description}
              btnText={service.btnText}
              serviceUrl={service.serviceUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
