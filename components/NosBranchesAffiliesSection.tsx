"use client";

import React, { useState } from "react";
import HeadingSection from "./HeadingSection";
import { ContactAddresses } from "@/constants";
import ContactAddressCard from "./ContactAddressCard";
import MapCard from "./MapCard";

const NosBranchesAffiliesSection = () => {
  const [selectedBranche, setSelectedBranche] = useState("Paris");
  return (
    <>
      <div className="w-full max-w-screen-2xl m-auto min-h-[500px] px-20 max-tablet:px-11 max-desktop:pl-28 relative z-10">
        <HeadingSection
          title="Nos branches affiliées"
          subtitle="Et tortor consequat id porta nibh venenatis cras sed felis. Pharetra diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Volutpat blandit aliquam etiam velit sceleris."
        />
        <div className="grid grid-flow-row grid-cols-4 gap-3 montserrat gap-x-12 pt-16 max-tablet:grid-cols-none max-tablet:gap-11">
          {ContactAddresses.map((item, index) => (
            <ContactAddressCard
              key={item.city}
              index={index}
              city={item.city}
              address={item.address}
              tel={item.tel}
              email={item.email}
              mouseEnter={() => setSelectedBranche(item.city)}
            />
          ))}
        </div>
      </div>
      <div
        className="w-screen -mt-6 max-tablet:mt-12"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <MapCard city={selectedBranche} />
      </div>
    </>
  );
};

export default NosBranchesAffiliesSection;
