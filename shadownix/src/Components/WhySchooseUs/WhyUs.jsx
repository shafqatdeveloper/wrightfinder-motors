import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { BsRainbow } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { FaCar, FaCheckCircle, FaHandsHelping } from "react-icons/fa";

const features = [
  {
    name: "Unmatched Quality",
    icon: <FaCheckCircle size={25} />,
    description:
      "Experience top-notch quality with our meticulously inspected and certified cars, ensuring you drive away with peace of mind.",
  },
  {
    name: "Exceptional Service",
    icon: <FaHandsHelping size={25} />,
    description:
      "Our dedicated team provides personalized assistance and exceptional customer service, making your car buying experience seamless and enjoyable.",
  },
  {
    name: "Wide Selection",
    icon: <FaCar size={25} />,
    description:
      "Choose from over 150 cars from 25 renowned brands, including 30 luxury models, ensuring you find the perfect vehicle for your needs.",
  },
];

const WhyUs = () => {
  const { ref: whyUsHeadingRef, inView: isWhyUsHeadingInView } = useInView({
    threshold: 0.2,
  });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isWhyUsHeadingInView) {
      mainControls.start("visible");
    }
  }, [isWhyUsHeadingInView, mainControls]);
  return (
    <motion.div
      ref={whyUsHeadingRef}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-full flex flex-col gap-10 sm:gap-14 items-center justify-center"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-center text-3xl font-extrabold font-sans sm:text-4xl md:text-5xl">
          Why Choose Us
        </h1>
        <h1 className="text-lg px-5 sm:px-0 sm:text-xl capitalize">
          We have proven record of happy customers
        </h1>
        <span>
          <BsRainbow size={55} color="#3c2163" />
        </span>
      </div>
      <div className="grid grid-cols-1 px-4 sm:px-10 md:grid-cols-3 gap-7 md:gap-10">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="flex flex-col cursor-pointer gap-3 hover:text-white duration-500 transition-all hover:bg-[#17A8E2] bg-white rounded-md px-3 py-5"
            >
              <span className="bg-[#3c2163] text-white py-5 flex items-center justify-center rounded-md">
                {feature.icon}
              </span>
              <span className="text-center text-xl font-bold font-sans">
                {feature.name}
              </span>
              <span className="">{feature.description}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WhyUs;
