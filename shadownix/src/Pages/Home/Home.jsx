import React, { Suspense, lazy } from "react";
import Hero from "../../Components/Hero/Hero";
import Cars from "../../Components/ExploreCars/Cars";
const Facts = lazy(() => import("../../Components/Facts/Facts"));
const WhyUs = lazy(() => import("../../Components/WhySchooseUs/WhyUs"));

const Home = () => {
  return (
    <div className="bg-gray-200 flex flex-col gap-10 pt-24 pb-12 md:p-10">
      {/* <Hero /> */}
      <Cars />
      <Suspense fallback={<div>Loading...</div>}>
        <Facts />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <WhyUs />
      </Suspense>
    </div>
  );
};

export default Home;
