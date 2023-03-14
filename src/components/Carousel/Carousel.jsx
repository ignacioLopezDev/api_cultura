import React, { useState } from "react";
import { Image, Box } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Carousel = () => {
  const slide = [
    {
      id: 1,
      img: [
        "https://live.staticflickr.com/65535/51265684813_4c1d448d19_k.jpg",
        "https://live.staticflickr.com/65535/51351677557_4c7b71d2d0_k.jpg",
        "https://live.staticflickr.com/65535/51351671872_6e0a41c3b1_h.jpg",
      ],
    },
    {
      id: 2,
      img: [
        "https://live.staticflickr.com/373/19317977919_3d6442ded6_h.jpg",
        "https://live.staticflickr.com/287/19497880192_fb1c259a3e_h.jpg",
        "https://live.staticflickr.com/7516/15806598557_e8531dc32a_k.jpg",
      ],
    },
    {
      id: 3,
      img: [
        "https://live.staticflickr.com/7519/15992478485_149309e41a_h.jpg",
        "https://live.staticflickr.com/7478/15806471539_bce58ef029_h.jpg",
        "https://live.staticflickr.com/3814/19507357581_5fa3c4bb37_h.jpg",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box>
      <Image src={slide[0].img[currentIndex]} alt="image" w="100%" h="750px" />;
      <Box
        position="absolute"
        top="65%"
        left="5"
        rounded="md"
        p={2}
        bg="black"
        color="white"
      >
        <ArrowBackIcon onClick={prevSlide} boxSize={8} />
      </Box>
      <Box
        position="absolute"
        top="65%"
        right="5"
        rounded="md"
        p={2}
        bg="black"
        color="white"
      >
        <ArrowForwardIcon onClick={nextSlide} boxSize={8} />
      </Box>
    </Box>
  );
};

export default Carousel;
