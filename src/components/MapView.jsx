import React from "react";
import { Box } from "@chakra-ui/core";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoData from "../data/world-110m.json";

const MapView = ({ countryInfo }) => {
  const { lat, long, iso2 } = countryInfo;
  const center = [Math.round(long), Math.round(lat)];

  return (
    <Box maxW="80%">
      <ComposableMap projectionConfig={{ scale: 450, center }}>
        <Geographies geography={geoData}>
          {
            ({ geographies }) =>
              geographies.map((geo) => {
                if (geo.properties.ISO_A2 === iso2) {
                  return <Geography key={geo.rsmKey} geography={geo} fill="#e67e22" />;
                }
                return <Geography key={geo.rsmKey} geography={geo} fill="#636e72" />;
              })
            // newline error was giving
          }
        </Geographies>
      </ComposableMap>
    </Box>
  );
};

export default MapView;
