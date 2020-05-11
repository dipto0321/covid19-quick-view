import React from "react";
import { Box, List, ListItem, Text } from "@chakra-ui/core";

const CovidReportView = ({ covReport }) => {
  const {
    active,
    cases,
    casesPerOneMillion,
    continent,
    country,
    critical,
    deaths,
    deathsPerOneMillion,
    recovered,
    tests,
    todayCases,
    todayDeaths,
  } = covReport;
  return (
    <Box w="30%" backgroundColor="#ecf0f1" rounded="lg">
      <List py={2}>
        <ListItem>
          <Text color="#2980b9" as="b" mr={3}>
            Continent:
          </Text>
          {continent}
        </ListItem>
        <ListItem>
          <Text color="#2980b9" as="b" mr={3}>
            Country:
          </Text>
          {country}
        </ListItem>
        <ListItem>
          <Text color="#8e44ad" as="b" mr={3}>
            Tests:
          </Text>
          {tests}
        </ListItem>
        <ListItem>
          <Text color="#2980b9" as="b" mr={3}>
            Active:
          </Text>
          {active}
        </ListItem>
        <ListItem>
          <Text color="#2980b9" as="b" mr={3}>
            Cases:
          </Text>
          {cases}
        </ListItem>
        <ListItem>
          <Text color="#2980b9" as="b" mr={3}>
            Cases Per One Million:
          </Text>
          {casesPerOneMillion}
        </ListItem>
        <ListItem>
          <Text color="#2980b9" as="b" mr={3}>
            Today Cases:
          </Text>
          {todayCases}
        </ListItem>
        <ListItem>
          <Text color="#e74c3c" as="b" mr={3}>
            Deaths:
          </Text>
          {deaths}
        </ListItem>
        <ListItem>
          <Text color="#e74c3c" as="b" mr={3}>
            Deaths Per One Million:
          </Text>
          {deathsPerOneMillion}
        </ListItem>
        <ListItem>
          <Text color="#e74c3c" as="b" mr={3}>
            Today Deaths:
          </Text>
          {todayDeaths}
        </ListItem>
        <ListItem>
          <Text color="#c0392b" as="b" mr={3}>
            Critical:
          </Text>
          {critical}
        </ListItem>
        <ListItem>
          <Text color="#27ae60" as="b" mr={3}>
            recovered:
          </Text>
          {recovered}
        </ListItem>
      </List>
    </Box>
  );
};

export default CovidReportView;
