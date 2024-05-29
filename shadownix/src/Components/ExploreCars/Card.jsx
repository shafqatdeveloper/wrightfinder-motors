import React, { useEffect, useState } from "react";
import {
  TbAutomaticGearbox,
  TbManualGearbox,
  TbSteeringWheel,
} from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { SlSpeedometer } from "react-icons/sl";
import { MdLocalGasStation } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import driveLine from "../../assets/driveline.png";
import { Link } from "react-router-dom";

const Card = ({ car, delay = 0 }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, controls]);

  const api_Url = import.meta.env.VITE_API_URL;

  const variants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-white cursor-pointer hover:shadow-xl duration-200 transition-all rounded-md p-3 flex flex-col gap-4"
    >
      <div className="w-full overflow-hidden relative rounded-md h-full">
        <span className="absolute z-20 bg-white/85 rounded-md py-1.5 px-2.5 top-3 right-3 text-black">
          {car.title}
        </span>
        <img
          className="object-fill h-60 w-96 rounded-md hover:scale-125 duration-200 transition-all"
          src={`${api_Url}/uploads/${car.galleryImagesArray[0].imageName}`}
          alt={``}
        />
      </div>
      <h1 className="text-lg font-bold">{car.name}</h1>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <div className="grid grid-cols-3 gap-4 text-sm capitalize text-gray-500 font-semibold">
        <span className="flex items-center">
          <MdLocalGasStation size={20} />
          {car.fuelType}
        </span>
        <span className="flex items-center gap-1">
          <TbSteeringWheel size={20} />
          {car.power}
        </span>
        <span className="flex gap-1 items-center">
          <img src={driveLine} alt="driveline" width={15} height={15} />
          <h1 className="">{car.wheels}</h1>
        </span>
        <span className="flex w-52 gap-1 items-center">
          <SlSpeedometer size={20} />
          <h1 className="">{car.miles}</h1>
        </span>
        <span className="flex gap-1 items-center">
          {car.mode === "trans" ? (
            <TbManualGearbox size={21} />
          ) : (
            <TbAutomaticGearbox size={21} />
          )}
          <h1 className="">{car.mode}</h1>
        </span>
        <span className="flex gap-1 items-center">
          <IoDocument size={20} />
          <h1 className="">{car.title}</h1>
        </span>
      </div>
      <div className="bg-gray-100 py-2 pl-1 pr-3 flex items-center justify-between rounded-md">
        <span className="text-lg font-bold tracking-wide font-sans">
          Price :
        </span>
        <span>
          <h1 className="text-lg font-bold text-[#3c2163] tracking-wide font-sans">
            <span className="text-xl">$ </span>
            {car.price}
          </h1>
        </span>
      </div>
      <Link
        to={`/car/details/${car._id}`}
        className="w-full border-2 border-[#3c2163] text-white transition-all duration-300 rounded-md text-center py-2 text-lg font-medium tracking-wide font-sans bg-[#3c2163] hover:bg-[#17A8E2] hover:border-[#17A8E2]"
      >
        <button className="w-full">Explore</button>
      </Link>
    </motion.div>
  );
};

export default Card;
