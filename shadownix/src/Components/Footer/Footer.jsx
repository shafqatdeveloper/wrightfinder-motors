"use client";
// import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
// import { useInView } from "react-intersection-observer";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import "./footer.css";

const Footer = () => {
  // const { ref: footerRef, inView: isFooterInView } = useInView({
  //   threshold: 0.2,
  // });
  // const footerMainControls = useAnimation();
  // useEffect(() => {
  //   if (isFooterInView) {
  //     footerMainControls.start("visible");
  //   }
  // }, [isFooterInView, footerMainControls]);
  return (
    <div className="w-full h-full bg-gray-300 px-5">
      <div
      // ref={footerRef}
      // variants={{
      //   hidden: { opacity: 0, y: -75 },
      //   visible: { opacity: 1, y: 0 },
      // }}
      // initial="hidden"
      // animate={footerMainControls}
      // transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 gap-4 text-black">
          <div className="flex flex-col gap-1">
            <Link
              to={"/"}
              className="text-2xl text-center sm:text-start text-[#3c2163] font-bold font-sans tracking-wide"
            >
              <img
                src={Logo}
                alt="Shadow Nix"
                className="w-32 h-20 sm:w-40 sm:h-24 xl:w-48 xl:h-32"
              />
            </Link>
          </div>
          <div>
            <h1 className="text-xl font-bold font-sans tracking-wide">
              Contact Us
            </h1>
            <div className="w-5 h-1 mt-0.5 bg-[#3c2163]"></div>
            <div className="flex items-center gap-3 my-5">
              <span className="bg-[#3c2163] rounded-md p-2.5">
                <MdPhoneInTalk size={22} color="white" />
              </span>
              <span className="flex flex-col font-medium font-sans">
                <Link target="_blank" to={"tel:+19378388616"}>
                  +1937-838-8616
                </Link>
                <Link target="_blank" to={"tel:+19374754737"}>
                  +1937-475-4737
                </Link>
                <Link target="_blank" to={"tel:+19372706688"}>
                  +1937-270-6688
                </Link>
              </span>
            </div>
            <div className="flex items-center gap-3 my-5">
              <span className="bg-[#3c2163] rounded-md p-2.5">
                <FaWhatsapp size={22} color="white" />
              </span>
              <span className="flex flex-col font-medium font-sans">
                <Link target="_blank" to={"https://wa.me/+19378388616"}>
                  +1937-838-8616
                </Link>
                <Link target="_blank" to={"https://wa.me/+19374754737"}>
                  +1937-475-4737
                </Link>
                <Link target="_blank" to={"https://wa.me/+19372706688"}>
                  +1937-270-6688
                </Link>
              </span>
            </div>
            <div className="flex items-center gap-3 my-5">
              <span className="bg-[#3c2163] rounded-md p-2.5">
                <IoMdMail size={22} color="white" />
              </span>
              <span className="flex flex-col font-medium font-sans">
                <Link
                  target="_blank"
                  to={"mailto:wrightfindermotors@gmail.com"}
                >
                  wrightfindermotors@gmail.com
                </Link>
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-sans tracking-wide">
                Connect with Us
              </h1>
              <div className="w-5 h-1 mt-0.5 bg-[#3c2163]"></div>
              <div className="flex items-center mt-5 gap-5">
                <Link
                  target="_blank"
                  to={"https://facebook.com"}
                  className="bg-blue-500 rounded-md p-2.5 w-auto"
                >
                  <FaFacebook size={18} color="white" />
                </Link>
                <Link
                  target="_blank"
                  to={"https://instagram.com"}
                  className="bg-red-500 rounded-md p-2.5 w-auto"
                >
                  <FaInstagram size={18} color="white" />
                </Link>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h1 className="text-xl font-bold font-sans tracking-wide">
              Locate Us
            </h1>
            <div className="w-5 h-1 mt-0.5 bg-[#3c2163]"></div>
            <div className="mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196147.20641391812!2d-84.36697126591616!3d39.81147557059361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884080d5aedd1403%3A0xa640e392f20e4ce4!2sDayton%2C%20OH%2C%20USA!5e0!3m2!1sen!2s!4v1718465629106!5m2!1sen!2s"
                style={{ border: 0, width: "100%", height: "350px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-10 text-lg font-medium text-gray-700">
          <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-8 w-full justify-center">
            <Link className="w-max" to={"/privacy-policy"}>
              Privacy Policy
            </Link>
            <Link className="w-max" to={"/terms-and-conditions"}>
              Terms & Conditions
            </Link>
            <Link className="w-max " to={"/cookie-policy"}>
              Cookies Policy
            </Link>
          </div>
        </div>
        <h1 className="text-center pt-5 pb-2 text-black">
          All Rights Reserved &copy;
          <span className="text-[#3c2163] font-semibold">
            {" "}
            WrightfinderMotors
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
