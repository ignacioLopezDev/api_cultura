import React, { useState, useEffect } from "react";
import { Image, Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

const IndividualView = () => {
  const id = "27";
  const [museum, setMuseum] = useState({});
  const [museumApiInt, setMuseumApiInt] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(import.meta.env.VITE_API_CULTURA);
      const responseJson = await response.json();
      for (let index = 0; index < responseJson.results.length; index++) {
        const element = responseJson.results[index];
        if (id == element.id) {
          // console.log(element);
          setMuseum(element);
        }
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApiInt = async () => {
      const res = await fetch("../../src/mock/apicultura.json");
      const resJson = await res.json();
      for (let i = 0; i < resJson.results.length; i++) {
        const e = resJson.results[i];
        if (id == e.id) {
          // console.log("SOY E", e);
          setMuseumApiInt(e);
        }
      }
    };
    fetchApiInt();
  }, []);

  return (
    <div>
      <SimpleGrid columns={2} spacingX="10px">
        <Box
          align="left"
          p="20px"
          height="80px"
          direction={{ base: "column", sm: "row" }}
        >
          <Image
            borderRadius="full"
            maxW={{ base: "100%", sm: "200px" }}
            src={museumApiInt.logo}
            alt="Logo museo"
            objectFit="cover"
          />
        </Box>
        <Stack height="80px" align="left">
          <Heading as="h1" textAlign="left">
            {museum.nombre}
          </Heading>
        </Stack>
      </SimpleGrid>
    </div>
  );
};

export default IndividualView;
