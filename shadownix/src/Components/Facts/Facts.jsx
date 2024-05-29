import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { BsRainbow } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { FaRegHeart, FaCar, FaHeadphones } from "react-icons/fa";

const facts = [
  {
    icon: <FaRegHeart size={25} />,
    count: 300,
    description: "Happy Customers",
  },
  { icon: <FaCar size={25} />, count: 1000, description: "Cars Sold" },
  {
    icon: <FaHeadphones size={25} />,
    count: 900,
    description: "Deals Negotiated",
  },
];

const Facts = () => {
  const { ref: factsHeadingRef, inView: isFactsHeadingInView } = useInView({
    threshold: 0.2,
  });
  const factMainControls = useAnimation();
  useEffect(() => {
    if (isFactsHeadingInView) {
      factMainControls.start("visible");
    }
  }, [isFactsHeadingInView, factMainControls]);
  return (
    <motion.div
      ref={factsHeadingRef}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={factMainControls}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-20 h-full bg-[#201f1d] flex flex-col gap-10 sm:gap-14 items-center justify-center"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-center text-3xl font-extrabold font-sans sm:text-4xl text-white md:text-5xl">
          Facts By The Numbers
        </h1>
        <h1 className="text-lg sm:text-xl px-4 sm:px-0 text-white">
          Join over 300 satisfied customers and explore 150+ cars
        </h1>
        <span>
          <BsRainbow size={55} color="white" />
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
        {facts.map((fact, index) => {
          return (
            <div
              key={index}
              className="bg-gray-200 hover:-translate-y-2 duration-500 cursor-pointer transition-all rounded-md px-6 py-5 sm:py-4 sm:px-3 flex items-center gap-5"
            >
              <span className="bg-[#3c2163] hover:bg-[#17A8E2] duration-500 cursor-pointer transition-all p-6 sm:p-8 rounded-md text-white">
                {fact.icon}
              </span>
              <span className="flex flex-col gap-1 text-gray-500">
                <span className="text-2xl sm:text-3xl font-extrabold font-sans">
                  {fact.count}
                  <span className="text-3xl sm:text-4xl">+</span>
                </span>
                <span>{fact.description}</span>
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Facts;
