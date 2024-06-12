import React from "react";
import PrivacyPolicy from "../../Components/Privacy/PrivacyPolicy";

const Privacy = () => {
  return (
    <div className="mt-32 h-full w-full flex items-center justify-center">
      <div className="w-full px-2 sm:px-0 sm:w-3/4">
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default Privacy;
