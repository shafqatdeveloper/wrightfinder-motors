import React from "react";
import Dashboard from "../../../../Components/Admin/Dashboard/Dashboard";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
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
