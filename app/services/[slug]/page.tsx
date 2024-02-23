import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import FAQSection from "@/components/pageDetail/FAQSection";
import FeaturesSection from "@/components/pageDetail/FeaturesSection";
import ImageTextCard from "@/components/pageDetail/ImageTextCard";
import { Services } from "@/constants";
import React from "react";
import urlSlug from "url-slug";

const page = ({ params }: { params: { slug: string } }) => {
  const service =
    Services.find((s) => urlSlug(s.title) === params.slug) ?? undefined;
  return (
    <>
      <BreadcrumbHeader
        parentPage={{ name: "Services", url: "/services" }}
        currentPage={service?.title || ""}
      />
      <div className="w-screen min-h-screen">
        {service?.pageDetailContentSettings.map((setting) => (
          <div key={setting.componentName}>
            {setting.componentName === "ImageTextSection" ? (
              <ImageTextCard
                imageOrientation={setting.imageSide}
                image={setting.image}
                title={setting.title}
                subtitle={setting.subtitle}
                description={setting.description}
                btnSolid={setting.btnSolid}
                btnText={setting.btnText}
                btnUrl={setting.btnUrl}
              />
            ) : (
              ""
            )}
            {setting.componentName === "FeaturesSection" ? (
              <FeaturesSection
                title={setting.title}
                subtitle={setting.subtitle}
                features={setting.numberdFeatures}
              />
            ) : (
              ""
            )}
            {setting.componentName === "FAQSection" ? (
              <FAQSection
                title={setting.title}
                subtitle={setting.subtitle}
                faq={setting.faq}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
