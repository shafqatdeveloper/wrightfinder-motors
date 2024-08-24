import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Details.css";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdEventSeat } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";
import driveLine from "../../assets/driveline.png";
import { FaCheckDouble } from "react-icons/fa";
import { IoDocument, IoPower } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { PiEngine } from "react-icons/pi";

const api_Url = import.meta.env.VITE_API_URL;

const Details = ({ car }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start  justify-center gap-5 sm:gap-8 px-2 sm:px-10">
        <div className="w-full md:w-3/5 md:pt-40">
          <Carousel
            className="h-[40vh]"
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
                    className="object-cover w-full h-[63vh] rounded-md"
                    src={`${api_Url}/uploads/${singlePic.imageName}`}
                    alt={`${api_Url}/uploads/${singlePic.imageName}`}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="w-full md:w-1/3 p-3 sticky top-5 rounded-md mt-44 md:mt-32 bg-white">
          <h1 className="text-xl font-bold font-sans py-3 text-global-dark-purple">
            {car.name}
          </h1>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="grid grid-cols-1 gap-5 font-semibold font-sans mt-6 capitalize text-gray-500">
            <div className="flex border-b-[1px] pb-1 items-center justify-between">
              <span className="flex items-center gap-2">
                <BsFillFuelPumpFill size={20} />
                Fuel Type
              </span>
              <h6 className=" text-lg">{car?.fuelType}</h6>
            </div>
            <div className="flex border-b-[1px] pb-1 items-center justify-between">
              <span className="flex items-center gap-2">
                <IoPower size={20} />
                Power
              </span>
              <h6 className=" text-lg">{car?.power}</h6>
            </div>
            <div className="flex border-b-[1px] pb-1 items-center justify-between">
              <span className="flex items-center gap-2">
                <PiEngine size={20} />
                Engine
              </span>
              <h6 className=" text-lg">{car?.engine}</h6>
            </div>
            <div className="flex border-b-[1px] pb-1 items-center justify-between">
              <span className="flex items-center gap-2">
                <MdEventSeat size={22} />
                Seats
              </span>
              <h6 className=" text-lg">{car?.seats}</h6>
            </div>
            <div className="flex border-b-[1px] pb-1 items-center justify-between">
              <span className="flex items-center gap-2">
                <img src={driveLine} alt="driveline" className="w-5 h-5" />
                Driveline
              </span>
              <h6 className=" text-lg">{car?.driveline}</h6>
            </div>
            <div className="flex border-b-[1px] pb-1 items-center justify-between">
              <span className="flex items-center gap-2">
                <SlSpeedometer size={22} />
                Miles
              </span>
              <h6 className=" text-lg">{car?.miles}</h6>
            </div>
            <div className="flex border-b-[1px] pb-1 items-center justify-between">
              <span className="flex items-center gap-2">
                <TbAutomaticGearbox size={22} />
                Trans.
              </span>
              <h6 className=" text-lg">{car?.transmission}</h6>
            </div>
            <div className="flex border-b-[1px] pb-1 items-center justify-between">
              <span className="flex items-center gap-2">
                <IoDocument size={22} />
                Title
              </span>
              <h6 className=" text-lg">{car?.title}</h6>
            </div>
            <div className="bg-gray-100 py-2 pl-1 pr-3 flex items-center justify-between rounded-md">
              <span className="text-lg font-bold tracking-wide font-sans">
                Price :
              </span>
              <span>
                <h1 className="text-lg font-bold text-global-dark-purple tracking-wide font-sans">
                  <span className="text-xl">$ </span>
                  {car?.price}
                </h1>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md mt-20 sm:my-20 md:my-10 flex items-center justify-center px-2 sm:px-12 md:px-20">
        <div className="w-full grid grid-cols-2 bg-white text-gray-500 rounded-md p-3 md:grid-cols-3 gap-3">
          {car.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="bg-global-dark-RED p-1.5 rounded-full">
                <FaCheckDouble size={13} color="white" />
              </span>
              <h1 className="font-medium font-sans text-global-dark-purple">
                {feature.name}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full rounded-md mt-20 sm:my-20 md:my-10 flex items-center justify-center px-2 sm:px-12 md:px-20">
        <div className="w-full bg-white px-2 sm:px-5 md:px-10 text-black rounded-md p-2 flex flex-col gap-3">
          <div className="py-5">
            <h1 className="text-3xl pb-2 font-sans font-extrabold ">
              Description of Car
            </h1>
            <div className="w-14 h-1 mt-0.5 bg-global-dark-purple"></div>
          </div>
          <p>{car?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
