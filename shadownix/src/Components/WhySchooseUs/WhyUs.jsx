import React from "react";
import { BsRainbow } from "react-icons/bs";
import collaborationIcon from "../../assets/collaboration.png";
import customerCentricityIcon from "../../assets/centralized.png";
import diversityAndInclusionIcon from "../../assets/diversity.png";
import innovationIcon from "../../assets/innovation.png";
import integrityIcon from "../../assets/integrity.png";
import professionalismIcon from "../../assets/expertise.png";

const features = [
  {
    name: "Collaboration",
    icon: collaborationIcon,
    description:
      "We believe in working together as a team to achieve our goals and support each other.",
  },
  {
    name: "Customer-centricity",
    icon: customerCentricityIcon,
    description:
      "We prioritize the needs and satisfaction of our customers above all else.",
  },
  {
    name: "Diversity and inclusion",
    icon: diversityAndInclusionIcon,
    description:
      "We embrace diversity and create an inclusive environment where all are valued and respected.",
  },
  {
    name: "Innovation",
    icon: innovationIcon,
    description:
      "We constantly seek new ideas and solutions to drive creativity and growth.",
  },
  {
    name: "Integrity",
    icon: integrityIcon,
    description:
      "We are committed to honesty, transparency, and ethical behavior in all our dealings.",
  },
  {
    name: "Professionalism",
    icon: professionalismIcon,
    description:
      "We maintain a high standard of professionalism in all aspects of our business, from customer service to vehicle maintenance and sales.",
  },
];

const WhyUs = () => {
  return (
    <div className="h-full my-10 flex flex-col gap-10 sm:gap-14 items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-center text-3xl font-extrabold font-sans sm:text-4xl md:text-5xl">
          Why Choosing us
        </h1>
        <span>
          <BsRainbow size={55} className="text-global-dark-purple" />
        </span>
      </div>
      <div className="w-full px-5 sm:px-0 sm:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="px-3 py-5 rounded-md bg-white flex flex-col gap-5 items-center"
            >
              <div className="w-full bg-[#ff3535] hover:bg-global-dark-RED cursor-pointer transition-all duration-300 py-2 rounded-md flex items-center justify-center">
                <img
                  className="w-10 h-10"
                  src={feature.icon}
                  alt={feature.name}
                />
              </div>
              <h1 className="text-lg font-bold tracking-wide font-sans">
                {feature.name}
              </h1>
              <div className="px-2">
                <p className="">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
