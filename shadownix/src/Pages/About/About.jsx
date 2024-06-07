import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import heroPic from "../../assets/hero-bg.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="mt-28 xmd:mt-20">
      <div className="w-full">
        <div className="w-full relative flex flex-col bg-[#210f1d] items-center py-10 gap-7 justify-center">
          <div className="w-32 h-20 blur-3xl left-3 top-5 bg-[#3c2163] absolute"></div>
          <div className="w-32 h-20 blur-3xl right-3 bottom-5 bg-[#3c2163] absolute"></div>
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-3xl sm:text-4xl font-extrabold tracking-wide font-sans"
          >
            About Us
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center text-white gap-3 font-medium text-lg"
          >
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <Link to={"/about"} className="text-[#17A8E2] font-medium">
              About Us
            </Link>
          </motion.span>
        </div>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center lg:my-5 px-3 sm:px-0 gap-8 lg:gap-0 justify-center place-items-center">
          <div className="mt-10 w-11/12 sm:w-3/4 self-center items-center">
            <div className="bg-[#3c2163] flex items-center justify-center rounded-full p-10">
              <motion.div
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  height={500}
                  width={500}
                  className="w-[24rem] sm:w-[30rem]"
                  src={heroPic}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="w-full sm:w-3/4 flex flex-col gap-4">
              <motion.h1
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl font-bold font-sans text-[#3c2163]"
              >
                ABOUT OUR COMPANY
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl font-extrabold text-[#3c2163] font-sans"
              >
                Best Solution For Cleaning Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className=""
              >
                Welcome to Rightway Motors, where passion for automobiles meets
                unparalleled service. Founded on a vision of redefining the car
                buying experience, we pride ourselves on offering more than just
                vehicles
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                At Rightway Motors, we believe in more than just selling cars;
                we believe in fostering relationships. Whether you seek the
                thrill of a high-performance machine, the elegance of a luxury
                cruiser, or the practicality of a family SUV, we are here to
                turn your automotive fantasies into reality. Step into our
                showroom and immerse yourself in a world of automotive
                excellence.
              </motion.p>
              <div className="grid grid-cols-2 sm:text-sm font-medium sm:grid-cols-2 gap-2">
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#17A8E2]" size={22} />
                  <h1>Exceptional Vehicle Selection</h1>
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#17A8E2]" size={22} />
                  <h1>Unmatched Customer Service</h1>
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#17A8E2]" size={22} />
                  <h1>Expertise and Knowledge</h1>
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#17A8E2]" size={22} />
                  <h1>Innovative and Convenient Services</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
