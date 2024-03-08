"use client";
import { SiteVitrineModels } from "@/constants";
import { groupBy } from "@/utils/helpers";
import React, { useState } from "react";
import ModelCardViewer from "../ModelCardViewer";
import { PhotoProvider } from "react-photo-view";
import { CiZoomIn, CiZoomOut } from "react-icons/ci";

const GalleryModels = () => {
  const results = groupBy(SiteVitrineModels, (i) => i.category);
  let categories = [];
  for (let key in results) {
    categories.push(key);
  }
  categories.unshift("All");
  const [currentCategory, setCurrentCategory] = useState("All");
  return (
    <div className="w-full max-w-7xl m-auto py-20 min-h-screen">
      <div className="flex justify-center items-center gap-3 flex-wrap px-5">
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            onClick={() => setCurrentCategory(c)}
            className={`text-xs font-bold  ${
              currentCategory === c
                ? "bg-white border hover:bg-[rgba(255,255,255,0.85)]"
                : "text-white border hover:bg-[rgba(255,255,255,0.1)]"
            } border-white px-6 py-2 rounded-full w-fit max-tablet:px-4 max-tablet:py-2`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="w-full max-w-7xl p-5 pb-10 mx-auto mb-10 gap-5 grid grid-cols-3 py-20 max-tablet:grid-cols-1 max-tablet:gap-10">
        <PhotoProvider
          className="cursor-default"
          toolbarRender={({ onScale, scale }) => {
            return (
              <>
                <div className="flex justify-center gap-3 items-center mr-3">
                  <CiZoomIn
                    onClick={() => onScale(scale + 1)}
                    size={30}
                    className="cursor-pointer"
                  />
                  <CiZoomOut
                    onClick={() => onScale(scale - 1)}
                    size={30}
                    className="cursor-pointer"
                  />
                </div>
              </>
            );
          }}
        >
          {SiteVitrineModels.filter((s) =>
            currentCategory === "All"
              ? s.category !== "All"
              : s.category === currentCategory
          ).map((model, index) => (
            <div className="relative group/model" key={`m_${index}`}>
              <ModelCardViewer
                url={model.modelUrl}
                thumbnailImage={model.imageThumbnail}
                fullImage={model.imageLandingFull}
                index={index}
                slug={model.slug}
                previewUrl={model.previewUrl}
              />
            </div>
          ))}
        </PhotoProvider>
      </div>
    </div>
  );
};

export default GalleryModels;
