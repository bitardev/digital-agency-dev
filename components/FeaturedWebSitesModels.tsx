import { SiteVitrineModels } from "@/constants";
import React from "react";
import WebsiteModelCard from "./WebsiteModelCard";

const FeaturedWebSitesModels = () => {
  return (
    <>
      {SiteVitrineModels.filter((s) => s.featured).map((model, index) => (
        <WebsiteModelCard
          key={index}
          title={model.title}
          image={model.imageThumbnail}
          description={model.description}
          btnText={model.btnText}
          projectUrl={model.previewUrl}
          projectNum={`0${index + 1}`}
          imageOrientation={model.imageOrientation}
          lightBG={model.lightBG}
        />
      ))}
    </>
  );
};

export default FeaturedWebSitesModels;
