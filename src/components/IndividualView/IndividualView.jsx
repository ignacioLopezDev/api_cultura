import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";

const individualView = () => {
  const id = 2;

  const [museum, setMuseum] = useState({});

  function fetchApi() {
    fetch(`${import.meta.env.VITE_API_CULTURA}/${id}`)
      .then((res) => res.json())
      .then((data) => setMuseum(data));
  }

  useEffect(() => {
    fetchApi();
  }, [id]);

  console.log("SOY MUSEUM", museum);

  return (
    <div className="mx-auto w-full bg-beiges">
      <div className="flex flex-row items-center relative">
        <div className="rounded-full drop-shadow-3xl lg:h-64 lg:w-64 md:h-40 md:w-40 sm:h-24 sm:w-24 h-20 w-20 lg:p-8 sm:p-2">
          <img className="" src={museum.logo} />
        </div>
        <div className="max-w-screen-2xl h-full items-center mx-auto w-full">
          <h1 className="font-yeseva-one p-4">
            {museum.nombre}
          </h1>
        </div>
      </div>
      <Carousel />
      <div>
        <h2 className="font-yeseva-one"></h2>
      </div>
    </div>
  );
};

export default individualView;
