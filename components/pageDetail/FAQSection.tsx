import Image from "next/image";
import React from "react";
import HeadingSection from "../HeadingSection";
import Accordion from "../Accordion";

interface Props {
  title?: string;
  subtitle?: string;
  heading?: boolean;
  faq?: {
    question: string;
    answer: string;
  }[];
}
const FAQSection = ({ title, subtitle, faq = [], heading = true }: Props) => {
  return (
    <div className="w-full max-w-7xl m-auto py-20 max-tablet:px-11">
      {heading ? (
        <HeadingSection
          title={title || ""}
          subtitle={subtitle || ""}
          reverse={true}
          line={true}
          subtitleClassName="uppercase font-normal text-md text-blue-300"
        />
      ) : (
        ""
      )}
      <div className="py-20">
        <Accordion missionAndVision={faq} />
      </div>
    </div>
  );
};

export default FAQSection;
