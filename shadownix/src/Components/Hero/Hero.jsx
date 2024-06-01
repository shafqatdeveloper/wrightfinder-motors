import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoMdThumbsUp } from "react-icons/io";
import HeroPic from "../../assets/hero-bg.png";

const Hero = () => {
  return (
    <div className="w-full pt-28 h-screen">
      <div className="px-2 sm:px-20 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0 sm:justify-between w-full h-full">
        <div className="">
          <div className="flex flex-col gap-3">
            <span className="bg-white rounded-full py-2 px-2 sm:px-4 flex items-center gap-2">
              <IoMdThumbsUp size={23} color="#3c2163" />
              <h1>100% Trusted car purchase platform in the World</h1>
            </span>
            <h1 className="uppercase text-4xl sm:text-4xl md:text-5xl font-sans font-extrabold">
              Find Your Best
            </h1>
            <h1 className="uppercase text-4xl sm:text-4xl md:text-6xl font-sans font-extrabold text-[#3c2163]">
              Dream Cars
            </h1>
            {/* <div className="w-full flex items-center sm:items-start sm:justify-start pt-3 sm:pt-0 justify-center">
              <Link
                to={"#explore-cars"}
                className="flex items-center gap-2 border-2 border-black rounded-md w-max py-2.5 sm:py-2 px-3 font-sans font-medium hover:border-[#17a8e2] transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#17a8e2]"
              >
                <button>Explore Now</button>
                <MdArrowDownward />
              </Link>
            </div> */}
          </div>
        </div>
        <div className="bg-[#3c2163] rounded-full p-10">
          <div>
            {/* <img
              height={500}
              width={500}
              className="w-[24rem] sm:w-[30rem]"
              src={HeroPic}
              alt="Hero Pic"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
