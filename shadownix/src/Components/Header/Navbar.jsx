import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="w-full h-52 xsm:h-32 xmd:h-24 py-2 md:py-0 z-30 bg-white shadow-lg gap-3 sm:gap-0 shadow-black/15 flex flex-col xmd:flex-row fixed top-0 xmd:items-center items-stretch justify-between px-2 sm:px-8 xmd:px-20">
      <div className="flex flex-col xsm:flex-row pt-2 xsm:pt-0 items-center gap-5 justify-between px-5 sm:px-10 md:px-0">
        <Link
          to={"/"}
          className="text-2xl text-center sm:text-start text-global-dark-blue font-bold font-sans tracking-wide"
        >
          <img
            src={Logo}
            alt="Shadow Nix"
            className="w-16 h-10 sm:w-20 sm:h-14 xl:w-28 xl:h-20"
          />
        </Link>
        <li className="flex items-center gap-3 text-sm sm:text-lg">
          <span className="border-[1.5px] border-global-dark-blue rounded-full p-1.5">
            <IoMdMail size={18} color="#3c2163" />
          </span>
          <span className="flex flex-col text-sm font-medium font-sans">
            <Link to={"mailto:wrightfindermotors@gmail.com"}>
              wrightfindermotors@gmail.com
            </Link>
          </span>
        </li>
      </div>
      <nav className="px-5 sm:px-10 md:px-0">
        <ul className="flex flex-col xsm:flex-row items-center justify-between gap-7">
          <li
            className={`${location.pathname === "/" &&
              "text-global-dark-blue border-b-2 border-b-global-dark-blue"
              } text-lg hover:scale-105 hover:border-b-2 hover:border-b-gray-500`}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={`${location.pathname === "/about" &&
              "text-global-dark-blue border-b-2 border-b-global-dark-blue"
              } text-lg hover:scale-105 hover:border-b-2 hover:border-b-gray-500`}
          >
            <Link to={"/about"}>About</Link>
          </li>
          <li className="flex items-center gap-3">
            <span className="border-[1.5px] border-global-dark-blue rounded-full p-1.5">
              <MdPhoneInTalk size={18} color="#3c2163" />
            </span>
            <span className="hidden xsm:!flex flex-col gap-0 text-sm font-medium font-sans">
              <Link to={"tel:+19378388616"}>+1937-838-8616</Link>
              <Link to={"tel:+19374754737"}>+1937-475-4737</Link>
              <Link to={"tel:+19372706688"}>+1937-270-6688</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
