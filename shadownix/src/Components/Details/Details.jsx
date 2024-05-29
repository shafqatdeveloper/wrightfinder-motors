import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Details.css";
import {
  TbAutomaticGearbox,
  TbManualGearbox,
  TbSteeringWheel,
} from "react-icons/tb";
import { MdLocalGasStation } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";
import driveLine from "../../assets/driveline.png";
import { FaCheckDouble } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

const api_Url = import.meta.env.VITE_API_URL;

const Details = ({ car }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-5 sm:gap-8 px-2 sm:px-10">
        <div className="w-full md:w-3/5">
          <Carousel
            className="h-[40vh]"
            showArrows={false}
            autoPlay={true}
            swipeable={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            interval={3000}
          >
            {car.galleryImagesArray.map((singlePic, index) => {
              return (
                <div key={index} className="w-full bg-white p-3 rounded-md">
                  <img
                    height={300}
                    width={400}
                    className="object-cover w-full h-[60vh] rounded-md"
                    src={`${api_Url}/uploads/${singlePic.imageName}`}
                    alt={`${api_Url}/uploads/${singlePic.imageName}`}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="w-full md:w-1/3 p-3 sticky top-5 rounded-md mt-44 md:mt-32 bg-white">
          <h1 className="text-xl font-bold font-sans py-3 text-[#3c2163]">
            {car.name}
          </h1>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="grid grid-cols-1 gap-5 mt-6 text-sm capitalize text-gray-500 font-semibold">
            <span className="flex border-b-[1px] pb-1 items-center justify-between">
              <MdLocalGasStation size={22} />
              {car.fuelType}
            </span>
            <span className="flex border-b-[1px] pb-1 items-center justify-between">
              <TbSteeringWheel size={22} />
              {car.power}
            </span>
            <span className="flex border-b-[1px] pb-1 items-center justify-between">
              <img src={driveLine} alt="driveline" width={20} height={20} />
              <h1 className="">{car.wheels}</h1>
            </span>
            <span className="flex border-b-[1px] pb-1 items-center justify-between">
              <SlSpeedometer size={22} />
              <h1 className="">{car.miles}</h1>
            </span>
            <span className="flex border-b-[1px] pb-1 items-center justify-between">
              {car.mode === "trans" ? (
                <TbManualGearbox size={22} />
              ) : (
                <TbAutomaticGearbox size={22} />
              )}
              <h1 className="">{car.mode}</h1>
            </span>
            <span className="flex border-b-[1px] pb-1 items-center justify-between">
              <IoDocument size={22} />
              <h1 className="">{car.title}</h1>
            </span>
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
          </div>
        </div>
      </div>
      <div className="w-full rounded-md mt-20 sm:my-20 md:my-10 flex items-center justify-center px-2 sm:px-12 md:px-20">
        <div className="w-full grid grid-cols-2 bg-white text-gray-500 rounded-md p-2  md:grid-cols-3 gap-3">
          {car.features.map((feature) => {
            return (
              <span className="flex items-center gap-2">
                <span className="bg-[#3c2163] p-1.5 rounded-full">
                  <FaCheckDouble size={13} color="white" />
                </span>
                <h1 className="font-medium font-sans text-[#3c2163]">
                  {feature}
                </h1>
              </span>
            );
          })}
        </div>
      </div>
      <div className="w-full rounded-md mt-20 sm:my-20 md:my-10 flex items-center justify-center px-2 sm:px-12 md:px-20">
        <div className="w-full bg-white px-2 sm:px-5 md:px-10 text-black rounded-md p-2 flex flex-col gap-3">
          <div className="py-5">
            <h1 className="text-3xl pb-2 font-sans font-extrabold ">
              Description of Car
            </h1>
            <div className="w-14 h-1 mt-0.5 bg-[#3c2163]"></div>
          </div>
          <p>{car.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
