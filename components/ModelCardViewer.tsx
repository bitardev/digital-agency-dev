import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface Props {
  url: string;
  slug?: string;
  fullImage: string;
  thumbnailImage: string;
  index: number;
  previewUrl: string;
}

const ModelCardViewer = ({
  url,
  fullImage,
  thumbnailImage,
  index,
  slug,
  previewUrl,
}: Props) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <MdOutlineArrowOutward
          size={35}
          className="absolute right-5 top-5 z-10 mix-blend-difference opacity-0 will-change-transform -translate-x-2 translate-y-2 group-hover/model:opacity-100 transition-all duration-700 ease-in-out group-hover/model:translate-x-0 group-hover/model:translate-y-0 max-mobile:opacity-100 max-mobile:-translate-x-1 max-mobile:translate-y-1"
          color="white"
        />
        <Link
          href={`/templates/${slug}`}
          className="absolute delay-500 text-blue-950 bg-white px-4 py-2 shadow-md text-xs font-bold rounded-full z-10 opacity-0 will-change-transform translate-y-4 group-hover/model:opacity-100 transition-all duration-700 ease-in-out group-hover/model:translate-y-0 max-mobile:opacity-100"
        >
          Prévisualiser
        </Link>
        <PhotoView src={fullImage} key={index}>
          <Image
            src={thumbnailImage}
            alt="Gym"
            width={400}
            height={400}
            className="rounded-xl shadow-2xl w-full opacity-100 group-hover/service:opacity-60 transition-opacity duration-700 ease-in-out"
          />
        </PhotoView>
      </div>
    </>
  );
};

export default ModelCardViewer;
