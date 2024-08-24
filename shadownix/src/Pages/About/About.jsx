import React from "react";
import { Link } from "react-router-dom";
import heroPic from "../../assets/hero-bg.png";
import { motion } from "framer-motion";
import Facts from "../../Components/Facts/Facts";
import WhyUs from "../../Components/WhySchooseUs/WhyUs";
import Contact from "../../Components/ContactUs/Contact";
const About = () => {
  return (
    <div className="flex bg-gray-300 flex-col gap-10">
      <div className="mt-28 mb-20 xmd:mt-20">
        <div className="w-full">
          <div className="w-full relative flex flex-col bg-[#210f1d] items-center py-10 gap-7 justify-center">
            <div className="w-32 h-20 blur-3xl left-3 top-5 bg-global-dark-purple absolute"></div>
            <div className="w-32 h-20 blur-3xl right-3 bottom-5 bg-global-dark-purple absolute"></div>
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
              <div className="bg-global-dark-RED flex items-center justify-center rounded-full py-0 px-10">
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
                  className="text-xl font-bold font-sans text-global-dark-RED"
                >
                  ABOUT OUR COMPANY
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl font-extrabold text-global-dark-purple font-sans"
                >
                  The Solution you have been Looking For
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 70 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className=""
                >
                  Welcome to <strong className="text-global-dark-purple">Wright Finder Motors</strong> a name that
                  is embodied the spirit of innovation, precision, discovery,
                  reliable, cost effective and compact cars. WFM was founded on
                  a vision of redefining the car buying experience. We believe
                  in fostering relationships. Whether you seek the thrill of a
                  high-performance machine, the elegance of a luxury cruiser, or
                  the practicality of a family SUV, we are here to turn your
                  automotive fantasies into reality. Step into our showroom and
                  immerse yourself in a world of automotive excellence. We pride
                  ourselves on offering more than just vehicles We are dedicated
                  to find the right solutions and guiding you towards your dream
                  car. At Wright Finder Motors we will make your dream come
                  true, Together in a smart choice
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Facts />
      <WhyUs />
      <Contact />
    </div>
  );
};

export default About;
