import React, { useState, useEffect, useCallback } from "react";
import { Image, Box, Heading, Container } from "@chakra-ui/react";
import Carousel from "../Carousel/Carousel";

const IndividualView = () => {
  const id = 2;
  const [museum, setMuseum] = useState({});
  const [imageMuseum, setImageMuseum] = useState([]);

  useEffect(() => {
    fetchApi();
  }, [id]);

  function fetchApi() {
    fetch(`${import.meta.env.VITE_API_CULTURA}/${id}`)
      .then((res) => res.json())
      .then((data) => setMuseum(data));
  }

  console.log("SOY MUSEUM", museum);

  useEffect(() => {
    getFetch();
  }, [id]);

  function getFetch() {
    fetch(`${import.meta.env.VITE_API_CULTURA_IMAGES}/${id}`)
      .then((res) => res.json())
      .then((data) => setImageMuseum(data.img));
  }

  // imageMuseum.forEach((element) => {
  //   console.log(element);
  // });

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
            <Image w="15%" src={museum.logo} alt="Logo museo" mr="10" />

            <Box>
              <Heading className="heading" as="h1" size="2xl">
                <Box>{museum.nombre}</Box>
              </Heading>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Carousel />
      </Box>
    </>
  );
};

export default IndividualView;
