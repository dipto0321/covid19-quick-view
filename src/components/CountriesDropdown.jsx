import React from "react";
import { countries } from "countries-list";
import { Select, Box } from "@chakra-ui/core";

const CountriesDropdown = ({ handleCountry }) => {
  const countriesObject = Object.entries(countries);
  const handleOnChange = (value) => {
    handleCountry(value);
  };
  return (
    <Box w="25%" mx="auto">
      <Select
        placeholder="Select country"
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      >
        {countriesObject.map((countryObj) => (
          <option key={countryObj[0]} value={countryObj[0]}>
            {countryObj[1].name}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default CountriesDropdown;
