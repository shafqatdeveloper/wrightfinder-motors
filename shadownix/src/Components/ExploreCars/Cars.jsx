"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  SiMercedes,
  SiHonda,
  SiToyota,
  SiFerrari,
  SiAudi,
  SiAcura,
  SiTesla,
  SiFord,
  SiHyundai,
  SiKia,
  SiNissan,
  SiRam,
  SiSubaru,
  SiJeep,
} from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";
import Card from "./Card";
import { BsRainbow } from "react-icons/bs";
import axios from "axios";
import { FaCar } from "react-icons/fa";

const brands = [
  { name: "All Brands", icon: <FaCar /> },
  { name: "ford", icon: <SiFord /> },
  { name: "mercedez", icon: <SiMercedes /> },
  { name: "honda", icon: <SiHonda /> },
  { name: "toyota", icon: <SiToyota /> },
  { name: "ferrari", icon: <SiFerrari /> },
  { name: "audi", icon: <SiAudi /> },
  { name: "acura", icon: <SiAcura /> },
  { name: "tesla", icon: <SiTesla /> },
  { name: "hyundai", icon: <SiHyundai /> },
  { name: "kia", icon: <SiKia /> },
  { name: "nissan", icon: <SiNissan /> },
  { name: "ram", icon: <SiRam /> },
  { name: "subaru", icon: <SiSubaru /> },
  { name: "jeep", icon: <SiJeep /> },
];

const Cars = () => {
  const [selectedBrand, setselectedBrand] = useState(brands[0]);
  const [selectedBrandName, setSelectedBrandName] = useState("All Brands");
  const [cars, setCars] = useState([]);
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    const fetchCars = async () => {
      const response = await axios.get(`/api/cars?brand=${selectedBrandName}`);
      console.log(response.data);
      setCars(response.data.cars);
    };
    fetchCars();
  }, [selectedBrandName]);

  useEffect(() => {
    if (isHeadingInView) {
      mainControls.start("visible");
    }
  }, [isHeadingInView]);
  return (
    <div
      id="explore-cars"
      className="flex flex-col items-center justify-center w-full h-full"
    >
      <motion.div
        ref={headingRef}
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col justify-center gap-16"
      >
        <div className="flex flex-col justify-center items-center w-full gap-6">
          <h1 className="text-center text-3xl font-extrabold font-sans sm:text-4xl md:text-5xl">
            Explore Most Popular Cars
          </h1>
          <span>
            <BsRainbow size={55} color="#3c2163" />
          </span>
        </div>
        <div className="grid grid-cols-2 xmd:grid-cols-3 sm:grid-cols-4 place-items-center justify-center items-center md:grid-cols-5 xl:grid-cols-7 gap-2.5 sm:gap-8 px-2 sm:px-0 ">
          {brands.map((brand, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setselectedBrand(brand);
                  setSelectedBrandName(brand.name);
                }}
                className={`flex items-center gap-3 cursor-pointer hover:bg-[#3c2163] hover:text-white transition-all duration-300  rounded-md w-32 justify-center py-3 ${
                  selectedBrandName === brand.name
                    ? "bg-[#3c2163] text-white"
                    : "bg-white"
                }`}
              >
                <span className="scale-120">{brand.icon}</span>
                <h6 className="capitalize font-sans font-medium">
                  {brand.name}
                </h6>
              </div>
            );
          })}
        </div>
      </motion.div>
      {cars && cars.length > 0 ? (
        <div className="px-2 sm:px-10 md:px-20 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {cars.map((car, index) => {
              return <Card car={car} key={index} delay={index * 0.05} />;
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cars;
