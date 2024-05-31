import React, { useEffect } from "react";
import Dashboard from "../../../../Components/Admin/Dashboard/Dashboard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("/api/admin/authenticate", {
          withCredentials: true,
        });
        if (response.data.success) {
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

  const handleLogout = async (e) => {
    e.preventDefault();
    const confirmLogout = confirm("Are You Sure to Logout");
    if (confirmLogout) {
      const response = await axios.get("/api/admin/logout");
      if (response.data.success) {
        toast(response.data.message, {
          theme: "dark",
        });
        navigate("/admin/login");
      } else {
        toast(response.data.message, {
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="pt-40 sm:pt-32 bg-gray-200 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white rounded-md px-6 py-2"
        >
          LOGOUT
        </button>
      </div>
      <Dashboard />
    </div>
  );
};

export default AdminDashboard;
