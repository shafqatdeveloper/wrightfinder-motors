import React, { useEffect } from "react";
import AllCars from "../../../../Components/Admin/AllCars/AllCars";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminAllCars = () => {
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
        console.error("Error checking authentication:", error);
      } finally {
      }
    };

    checkAuthentication();
  }, []);
  return (
    <div className="w-full h-full pt-40 pb-10 bg-gray-200">
      <AllCars />
    </div>
  );
};

export default AdminAllCars;
