import React, { useState, useEffect } from "react";
import { Image, Box, Heading, Container } from "@chakra-ui/react";

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
    <>
      <Box>
        <Container maxWidth="container.xl">
          <Box
            py="20"
            flexDirection="row"
            display="flex"
            flexWrap="nowrap"
            justifyContent="center"
            alignItems="center"
          >
            <Image w="15%" src={museumApiInt.logo} alt="Logo museo" mr="10" />

            <Box>
              <Heading className="heading" as="h1" size="2xl">
                <Box>{museum.nombre}</Box>
              </Heading>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box></Box>
    </>
  );
};

export default IndividualView;
