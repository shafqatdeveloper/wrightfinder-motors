import React from "react";
import CookiePolicy from "../../Components/Cookie/CookiePolicy";

const Cookie = () => {
  return (
    <div className="mt-12 md:mt-24 h-full w-full flex items-center justify-center">
      <div className="w-full px-2 sm:px-0 sm:w-3/4">
        <CookiePolicy />
      </div>
    </div>
  );
};

export default Cookie;
