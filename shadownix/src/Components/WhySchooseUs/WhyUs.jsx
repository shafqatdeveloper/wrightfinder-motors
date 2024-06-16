// import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { BsRainbow } from "react-icons/bs";
// import { useInView } from "react-intersection-observer";
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
  // const { ref: whyUsHeadingRef, inView: isWhyUsHeadingInView } = useInView({
  //   threshold: 0.2,
  // });
  // const mainControls = useAnimation();
  // useEffect(() => {
  //   if (isWhyUsHeadingInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isWhyUsHeadingInView, mainControls]);
  return (
    <div
      // ref={whyUsHeadingRef}
      // variants={{
      //   hidden: { opacity: 0, y: -75 },
      //   visible: { opacity: 1, y: 0 },
      // }}
      // initial="hidden"
      // animate={mainControls}
      // transition={{ duration: 0.8, delay: 0.2 }}
      className="h-full flex flex-col gap-10 sm:gap-14 items-center justify-center"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-center text-3xl font-extrabold font-sans sm:text-4xl md:text-5xl">
          Why Choosing us
        </h1>
        <span>
          <BsRainbow size={55} color="#3c2163" />
        </span>
      </div>
      <div className="w-full sm:w-2/4 md:w-3/5 px-2 sm:px-0 flex flex-col gap-5 md:gap-7">
        <div className="flex items-center text-justify gap-2">
          <h1>
            <strong>1. Collaboration: </strong>
            We believe in working together as a team to achieve our goals and
            support each other.
          </h1>
        </div>
        <div className="flex items-center text-justify gap-2">
          <h1>
            <strong>2. Customer-centricity: </strong>
            We prioritize the needs and satisfaction of our customers above all
            else.
          </h1>
        </div>
        <div className="flex items-center text-justify gap-2">
          <h1>
            <strong>3. Diversity and inclusion: </strong>We embrace diversity
            and create an inclusive environment where all voices are valued and
            respected.
          </h1>
        </div>
        <div className="flex items-center text-justify gap-2">
          <h1>
            <strong>4. Innovation: </strong>
            We constantly seek new ideas and solutions to drive creativity and
            growth.
          </h1>
        </div>
        <div className="flex items-center text-justify gap-2">
          <h1>
            <strong>5. Integrity: </strong>
            We are committed to honesty, transparency, and ethical behavior in
            all our dealings.
          </h1>
        </div>
        <div className="flex items-center text-justify gap-2">
          <h1>
            <strong>6. Professionalism: </strong>
            We maintain a high standard of professionalism in all aspects of our
            business, from customer service to vehicle maintenance and sales.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
