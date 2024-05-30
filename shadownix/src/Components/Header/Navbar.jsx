import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="w-full h-32 md:h-24 py-2 sm:py-0 z-30 bg-white shadow-lg gap-3 sm:gap-0 shadow-black/15 flex flex-col md:flex-row fixed top-0 md:items-center items-stretch justify-between px-2 sm:px-8 md:px-20">
      <div className="flex items-center gap-5 justify-between px-5 sm:px-10 md:px-0">
        <Link
          to={"/"}
          className="text-2xl text-center sm:text-start text-[#3c2163] font-bold font-sans tracking-wide"
        >
          <img
            src={Logo}
            alt="Shadow Nix"
            className="w-16 h-10 sm:w-28 sm:h-16 xl:w-32 xl:h-20"
          />
        </Link>
        <li className="flex items-center gap-3">
          <span className="border-[1.5px] border-[#3c2163] rounded-full p-1.5">
            <IoMdMail size={18} color="#3c2163" />
          </span>
          <span className="flex flex-col text-sm font-medium font-sans">
            <Link to={"mailto:shadownix4@gmail.com"}>shadownix4@gmail.com</Link>
          </span>
        </li>
      </div>
      <nav className="px-5 sm:px-10 md:px-0">
        <ul className="flex items-center justify-between gap-7">
          <li
            className={`${
              location.pathname === "/" &&
              "text-[#3c2163] border-b-2 border-b-[#3c2163]"
            } text-lg hover:scale-105 hover:border-b-2 hover:border-b-gray-500`}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={`${
              location.pathname === "/about" &&
              "text-[#3c2163] border-b-2 border-b-[#3c2163]"
            } text-lg hover:scale-105 hover:border-b-2 hover:border-b-gray-500`}
          >
            <Link to={"/about"}>About</Link>
          </li>
          <li className="flex items-center gap-3">
            <span className="border-[1.5px] border-[#3c2163] rounded-full p-1.5">
              <MdPhoneInTalk size={18} color="#3c2163" />
            </span>
            <span className="flex flex-col gap-0 text-sm font-medium font-sans">
              <Link to={"tel:9378388616"}>937-838-8616</Link>
              <Link to={"tel:9374754737"}>937-475-4737</Link>
              <Link to={"tel:9372706688"}>937-270-6688</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
