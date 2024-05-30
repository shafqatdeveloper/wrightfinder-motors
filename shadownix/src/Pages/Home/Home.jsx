import React from "react";
import Hero from "../../Components/Hero/Hero";
import Cars from "../../Components/ExploreCars/Cars";
import Facts from "../../Components/Facts/Facts";
import WhyUs from "../../Components/WhySchooseUs/WhyUs";

const Home = () => {
  return (
    <div className="bg-gray-200 flex flex-col gap-10 pt-24 pb-12 md:p-10">
      <Hero />
      <Cars />
      <Facts />
      <WhyUs />
    </div>
  );
};

export default Home;
