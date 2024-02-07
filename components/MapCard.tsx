"use client";

import React from "react";
import { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import {
  darkModeStyle,
  style1,
  style2,
  style3,
  style4,
  style5,
  style6,
} from "@/constants/mapStyles";
import { ContactAddresses } from "@/constants";

interface Props {
  city: string;
}
const MapCard = ({ city }: Props) => {
  const addressObject = ContactAddresses.find((c) => c.city === city);
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <div className="text-white w-screen h-[50vh] bg-gray-800">
        <Map zoom={12} center={addressObject?.position} styles={style3}>
          <Marker
            position={addressObject?.position}
            title={addressObject?.address}
          />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapCard;
