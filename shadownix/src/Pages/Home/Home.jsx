import React from "react";
import Hero from "../../Components/Hero/Hero";
import Cars from "../../Components/ExploreCars/Cars";

const Home = () => {
  return (
    <div className="bg-gray-200 flex flex-col gap-10 pt-5 pb-12 lg:pt-0 ">
      <Hero />
      <Cars />
    </div>
  );
};

export default Home;
