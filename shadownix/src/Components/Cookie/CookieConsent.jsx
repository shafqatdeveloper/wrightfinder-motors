import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);
  const acceptCookieConsent = () => {
    setCookies("cookieConsent", true, { path: "/" });
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-gray-800 text-white p-4 md:p-6">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-2 md:flex-row items-center justify-between">
        <p className="mb-2 md:mb-0">
          We use Cookies to enhance your User Experience. Do you agree to our
          use of Cookies?
        </p>
        <div className="flex items-center">
          <Link to={"/cookie-policy"} className="underline text-blue-400 mr-4">
            Learn more.
          </Link>
          <button
            onClick={acceptCookieConsent}
            className="bg-gray-600 text-white px-10 py-2 rounded  transition duration-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
