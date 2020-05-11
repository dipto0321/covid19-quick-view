import React, { useState, useEffect, useCallback } from "react";
import _ from "underscore";
import { ThemeProvider, Heading, Flex, Box, Text } from "@chakra-ui/core";
import NovelCovid from "novelcovid";
import CountriesDropdown from "./CountriesDropdown";
import CovidReportView from "./CovidReportView";

const App = () => {
  const [country, setCountry] = useState("");
  const [covReport, setCovReport] = useState({});

  const handleCountry = (value) => {
    setCountry(value);
  };

  const updateCovidData = useCallback(() => {
    if (country !== "") {
      const track = new NovelCovid();
      const covProm = track.countries(country);
      covProm.then((res) => {
        setCovReport(res);
      });
    }
  }, [country]);
  useEffect(() => {
    updateCovidData();
  }, [updateCovidData]);

  return (
    <ThemeProvider>
      <Heading as="h1" p={5} textAlign="center" backgroundColor="#16a085" color="white">
        Covid-19 Quick Status
      </Heading>
      <CountriesDropdown handleCountry={handleCountry} />
      {covReport.message === undefined && !_.isEmpty(covReport) ? (
        <Flex w="80%" mx="auto" mt={5}>
          <Box w="70%">Map</Box>
          <CovidReportView covReport={covReport} />
        </Flex>
      ) : (
        <Text fontSize="md" textAlign="center" color="red.500" my={10}>
          {covReport.message}
        </Text>
      )}
    </ThemeProvider>
  );
};

export default App;
