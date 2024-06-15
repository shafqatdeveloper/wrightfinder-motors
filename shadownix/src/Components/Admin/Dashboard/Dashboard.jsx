import React, { useEffect, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaCar, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [adminInfo, setAdminInfo] = useState({
    name: "Shadow Nix",
    email: "shadownix4@gmail.com",
  });
  console.log(adminInfo);
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("/api/admin/authenticate", {
          withCredentials: true,
        });
        if (response.data.success) {
          setAdminInfo(response.data.loggedInAdmin);
          return;
        } else {
          navigate("/admin/login");
        }
      } catch (error) {
        navigate("/admin/login");
        console.error("Error checking authentication:");
      } finally {
      }
    };

    checkAuthentication();
  }, []);
  return (
    <div className="w-full h-full">
      <h1 className="text-center py-5 text-3xl font-sans font-bold">
        {adminInfo.name === "Shadow Nix" ? (
          <span>Shadow</span>
        ) : (
          <span>WFM</span>
        )}{" "}
        Panel
      </h1>
      <div className="w-full flex items-center justify-center py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            to={"/admin/dashboard/add-car"}
            className="flex flex-col hover:bg-[#3c2163] hover:text-white cursor-pointer duration-300 transition-all gap-6 items-center justify-center border-2 border-black rounded-md py-6 px-12 sm:px-10 sm:py-6"
          >
            <MdOutlineAddCircleOutline size={30} />
            <h1 className="font-bold text-lg tracking-wide font-sans">
              Add a New Car
            </h1>
            <button className="w-full text-white py-1 rounded-md bg-[#17A8E2]">
              Visit
            </button>
          </Link>
          <Link
            to={"/admin/dashboard/all-cars"}
            className="flex flex-col hover:bg-[#3c2163] hover:text-white cursor-pointer duration-300 transition-all gap-6 items-center justify-center border-2 border-black rounded-md py-6 px-12 sm:px-3 sm:py-6 "
          >
            <FaCar size={30} />
            <h1 className="font-bold text-lg tracking-wide font-sans">
              View All Cars
            </h1>
            <button className="w-full text-white py-1 rounded-md bg-[#17A8E2]">
              View
            </button>
          </Link>
          <Link
            to={"/admin/info"}
            className="flex flex-col hover:bg-[#3c2163] hover:text-white cursor-pointer duration-300 transition-all gap-6 items-center justify-center border-2 border-black rounded-md py-6 px-12 sm:px-3 sm:py-6 "
          >
            <FaUserAlt size={30} />
            <h1 className="font-bold text-lg tracking-wide font-sans">
              View Admin Information
            </h1>
            <button className="w-full text-white py-1 rounded-md bg-[#17A8E2]">
              Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
