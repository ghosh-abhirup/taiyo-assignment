import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { CountryDataProps } from "../../types";
import { Icon } from "leaflet";

const LeafletMap = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["leafletMap"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      return data;
    },
  });

  const customIcon = new Icon({
    iconUrl: require("../../img/placeholder.png"),
    iconSize: [38, 38], // size of the icon
  });

  if (isLoading) {
    return (
      <CircularProgress
        sx={{
          color: "white",
          fontSize: { xs: "20px", sm: "28px" },
        }}
      />
    );
  }

  return (
    <>
      {data && (
        <MapContainer center={[28.7041, 77.1025]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data?.map((countryData: CountryDataProps) => (
            <Marker
              position={[
                countryData.countryInfo.lat,
                countryData.countryInfo.long,
              ]}
              icon={customIcon}
              key={countryData.country}
            >
              <Popup>
                <p className="font-semibold text-base sm:text-lg">{`${countryData.country}`}</p>
                <p>{`Total number of active: ${countryData.active}`}</p>
                <p>{`Recovered: ${countryData.recovered}`}</p>
                <p>{`Deaths: ${countryData.deaths}`}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  );
};

export default LeafletMap;
