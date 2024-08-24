import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoMdThumbsUp } from "react-icons/io";
import HeroPic from "../../assets/hero-bg.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full pt-28 h-screen">
      <div className="px-2 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 lg:justify-between w-full h-full">
        <div className="">
          <div className="flex flex-col gap-3">
            <span className="bg-white rounded-full py-2 px-2 sm:px-4 flex items-center gap-2">
              <IoMdThumbsUp size={23} color="#ff6764" />
              <h1>100% Trusted car purchase platform in the World</h1>
            </span>
            <h1 className="uppercase text-4xl sm:text-4xl md:text-5xl font-sans font-extrabold">
              Find Your Best
            </h1>
            <h1 className="uppercase text-4xl sm:text-4xl md:text-6xl font-sans font-extrabold text-global-dark-RED">
              Dream Cars
            </h1>
          </div>
        </div>
        <div className="bg-global-dark-RED rounded-full py-0 px-10">
          <div>
            <motion.img
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              height={500}
              width={500}
              className="w-[24rem] sm:w-[30rem]"
              src={HeroPic}
              alt="Hero Pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
