import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import FAQSection from "@/components/pageDetail/FAQSection";
import FeaturesSection from "@/components/pageDetail/FeaturesSection";
import GalleryModels from "@/components/pageDetail/GalleryModels";
import ImageTextCard from "@/components/pageDetail/ImageTextCard";
import { Services } from "@/constants";
import React from "react";
import urlSlug from "url-slug";

export function generateStaticParams() {
  return [
    { slug: "site-gym", subSlug: "models" },
    { slug: "site-it", subSlug: "models" },
    { slug: "site-cafe", subSlug: "models" },
    { slug: "site-ai", subSlug: "models" },
    { slug: "site-app", subSlug: "models" },
    { slug: "site-blog-demo", subSlug: "models" },
    { slug: "site-business", subSlug: "models" },
    { slug: "site-charity", subSlug: "models" },
    { slug: "site-christmas", subSlug: "models" },
    { slug: "site-classic-app", subSlug: "models" },
    { slug: "site-classic-business", subSlug: "models" },
    { slug: "site-classic-saas", subSlug: "models" },
    { slug: "site-modern-saas", subSlug: "models" },
    { slug: "site-construction", subSlug: "models" },
  ];
}

const page = ({ params }: { params: { subSlug: string } }) => {
  const pageType = params.subSlug;
  return (
    <>
      {pageType === "models" ? (
        <div className="w-screen min-h-screen">
          <BreadcrumbHeader
            parentPage={{ name: "Services", url: "/services" }}
            servicePage={{
              name: "Site vitrine et applications",
              url: "/services/site-vitrine-et-applications",
            }}
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
