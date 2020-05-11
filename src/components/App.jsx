import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import CountriesDropdown from "./CountriesDropdown";

const App = () => {
  return (
    <ThemeProvider>
      Weather App
      <CountriesDropdown />
    </ThemeProvider>
  );
};

export default App;
