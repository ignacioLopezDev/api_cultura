import React, { useState } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";

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

  const prevSlice = () => {
    const isFirstSlice = currentIndex === 0;
    const nextIndex = isFirstSlice ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-12 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slide[0].img[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl reounded-full p-2 bg-black/20 text-white cursor-pointer">
        <HiChevronLeft onClick={prevSlice} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl reounded-full p-2 bg-black/20 text-white cursor-pointer">
        <HiChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slide.map((element, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
