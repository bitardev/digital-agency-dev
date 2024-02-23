import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import FAQSection from "@/components/pageDetail/FAQSection";
import FeaturesSection from "@/components/pageDetail/FeaturesSection";
import GalleryModels from "@/components/pageDetail/GalleryModels";
import ImageTextCard from "@/components/pageDetail/ImageTextCard";
import { Services } from "@/constants";
import React from "react";
import urlSlug from "url-slug";

const page = ({ params }: { params: { subSlug: string } }) => {
  const pageType = params.subSlug;
  return (
    <>
      {pageType === "models" ? (
        <div className="w-screen min-h-screen">
          <BreadcrumbHeader
            parentPage={{ name: "Services", url: "/services" }}
            servicePage={{ name: "Site vitrine et applications", url: "/services/site-vitrine-et-applications" }}
            currentPage={"Modèles"}
          />
          <GalleryModels />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default page;
