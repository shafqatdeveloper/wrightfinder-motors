import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminInfo = () => {
  const [adminInfo, setAdminInfo] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("/api/admin/authenticate", {
          withCredentials: true,
        });
        if (response.data.success) {
          setAdminInfo(response.data);
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
    <div className="h-[80vh] flex flex-col gap-5 items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold">{adminInfo?.loggedInAdmin?.name}</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Email: </span>
          <span>{adminInfo?.loggedInAdmin?.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Password: </span>
          <span>**********</span>
        </div>
      </div>
      <div className="pt-6">
        <Link
          to={"/admin/info/edit"}
          className="px-5 py-2 bg-[#3C2163] rounded-md text-white"
        >
          Edit Profile Info
        </Link>
      </div>
    </div>
  );
};

export default AdminInfo;
