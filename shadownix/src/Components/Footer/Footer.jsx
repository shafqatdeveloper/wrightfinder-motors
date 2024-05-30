"use client";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const { ref: footerRef, inView: isFooterInView } = useInView({
    threshold: 0.2,
  });
  const footerMainControls = useAnimation();
  useEffect(() => {
    if (isFooterInView) {
      footerMainControls.start("visible");
    }
  }, [isFooterInView, footerMainControls]);
  return (
    <div className="w-full h-full bg-gray-300 px-5">
      <motion.div
        ref={footerRef}
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={footerMainControls}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 gap-4 text-black">
          <div>
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
                <Link target="_blank" to={"tel:9378388616"}>
                  937-838-8616
                </Link>
                <Link target="_blank" to={"tel:9374754737"}>
                  937-475-4737
                </Link>
                <Link target="_blank" to={"tel:9372706688"}>
                  937-270-6688
                </Link>
              </span>
            </div>
            <div className="flex items-center gap-3 my-5">
              <span className="bg-[#3c2163] rounded-md p-2.5">
                <FaWhatsapp size={22} color="white" />
              </span>
              <span className="flex flex-col font-medium font-sans">
                <Link target="_blank" to={"https://wa.me/9378388616"}>
                  937-838-8616
                </Link>
                <Link target="_blank" to={"https://wa.me/9374754737"}>
                  937-475-4737
                </Link>
                <Link target="_blank" to={"https://wa.me/9372706688"}>
                  937-270-6688
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
                <Link
                  target="_blank"
                  to={"https://facebook.com"}
                  className="bg-sky-500 rounded-md p-2.5 w-auto"
                >
                  <FaTwitter size={18} color="white" />
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="text-xl font-bold font-sans tracking-wide">
              Locate Us
            </h1>
            <div className="w-5 h-1 mt-0.5 bg-[#3c2163]"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48962.72431018159!2d-83.08010311817102!3d39.915205643510475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838859f1f27910f%3A0xef8a7153f0ac2f3!2sSouthwest%20Columbus%2C%20Columbus%2C%20OH%2C%20USA!5e0!3m2!1sen!2s!4v1716619878101!5m2!1sen!2s"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="mt-5"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <h1 className="text-center pt-5 pb-2 text-black">
          All Rights Reserved &copy;
          <span className="text-[#3c2163] font-semibold"> SHADOWNIX</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default Footer;
