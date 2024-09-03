import React, { useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation();
  return (
    <div className="w-full">
      {/* Desktop Navbar */}
      <div className="w-full h-24 py-2 md:py-0 z-30  gap-3 bg-white sm:gap-0 shadow-md shadow-black/15 hidden md:!flex flex-col sm:!flex-row fixed top-0 sm:!items-center items-stretch justify-between px-2 sm:px-8 xmd:px-20">
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
            <span className="border-[1.5px] border-global-dark-purple rounded-full p-1.5">
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
                "text-global-dark-blue border-b-2 border-b-global-dark-purple"
                } text-lg hover:scale-105 hover:border-b-2 hover:border-b-gray-500`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`${location.pathname === "/about" &&
                "text-global-dark-blue border-b-2 border-b-global-dark-purple"
                } text-lg hover:scale-105 hover:border-b-2 hover:border-b-gray-500`}
            >
              <Link to={"/about"}>About</Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="border-[1.5px] border-global-dark-purple rounded-full p-1.5">
                <MdPhoneInTalk size={18} color="#3c2163" />
              </span>
              <span className="flex flex-col gap-0 text-sm font-medium font-sans">
                <Link to={"tel:+19378388616"}>+1937-838-8616</Link>
                <Link to={"tel:+19374754737"}>+1937-475-4737</Link>
                <Link to={"tel:+19372706688"}>+1937-270-6688</Link>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile Navbar */}
      <div className="w-full flex items-center justify-between md:!hidden bg-white shadow-md shadow-black/15 fixed z-30 top-0 left-0 py-1.5 px-3">
        <Link
          to={"/"}
          className="text-2xl text-center sm:text-start text-global-dark-blue font-bold font-sans tracking-wide"
        >
          <img
            src={Logo}
            alt="Shadow Nix"
            className="w-16 h-12"
          />
        </Link>
        <div className="pr-1">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isMobileMenuOpen && 'bg-global-dark-purple rounded-full text-white transition-all duration-200'} p-2`}
          >
            <RiMenu3Fill size={22} />
          </button>

        </div>
      </div>
      <div className={isMobileMenuOpen ? 'fixed z-30 top-[58px] left-0 pb-8 h-auto w-full bg-global-dark-purple text-white transition-all duration-300' : 'fixed z-30 top-[58px] left-[-100%] h-auto pb-8 w-full bg-global-dark-purple text-white transition-all duration-300'}>
        <div className="">
          <ul className="flex flex-col">
            <Link to={'/'} onClick={() => setIsMobileMenuOpen(false)}
              className={`${location.pathname === "/" &&
                " bg-global-dark-blue "
                } text-lg py-2.5 pl-3 pt-3`}
            >
              Home
            </Link>
            <Link to={'/about'} onClick={() => setIsMobileMenuOpen(false)}
              className={`${location.pathname === "/about" &&
                "bg-global-dark-blue"
                } text-lg py-2.5 pl-3`}
            >
              About
            </Link>
            <li onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-sm py-2.5 pl-3">
              <span className="border-[1.5px] border-white rounded-full p-1.5">
                <IoMdMail size={18} color="white" />
              </span>
              <span className="flex flex-col text-sm font-medium font-sans">
                <Link to={"mailto:wrightfindermotors@gmail.com"}>
                  wrightfindermotors@gmail.com
                </Link>
              </span>
            </li>
            <li className="flex items-center gap-3 pl-3">
              <span className="border-[1.5px] border-white rounded-full p-1.5">
                <MdPhoneInTalk size={18} color="white" />
              </span>
              <span className="flex flex-col gap-0 text-sm font-medium font-sans">
                <Link to={"tel:+19378388616"}>+1937-838-8616</Link>
                <Link to={"tel:+19374754737"}>+1937-475-4737</Link>
                <Link to={"tel:+19372706688"}>+1937-270-6688</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
