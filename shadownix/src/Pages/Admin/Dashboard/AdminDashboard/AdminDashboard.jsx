import React, { useEffect } from "react";
import Dashboard from "../../../../Components/Admin/Dashboard/Dashboard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        console.log(response.data);
        navigate("/admin/login");
      } else {
        return null;
      }
    }
  };

  return (
    <div className="mt-32 min-h-[70vh] flex flex-col items-center justify-center">
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
