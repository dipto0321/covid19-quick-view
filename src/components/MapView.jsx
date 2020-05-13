import React from "react";
import { Box } from "@chakra-ui/core";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoData from "../data/world-110m.json";

const MapView = ({ countryInfo }) => {
  const { lat, long } = countryInfo;
  const center = [Math.round(long), Math.round(lat)];

  return (
    <Box maxW="80%">
      <ComposableMap projectionConfig={{ scale: 1000, center }}>
        <Geographies geography={geoData}>
          {
            ({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} fill="#636e72" />
              ))
            // newline error was giving
          }
        </Geographies>
      </ComposableMap>
    </Box>
  );
};

export default MapView;
