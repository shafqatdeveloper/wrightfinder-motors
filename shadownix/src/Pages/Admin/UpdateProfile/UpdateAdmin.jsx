import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateAdmin = () => {
  const [adminInfo, setAdminInfo] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
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

  const handleUpdateAdmin = async (e) => {
    e.preventDefault();
    const response = await axios.put("/api/admin/update", {
      name,
      email,
      oldPassword,
      password,
    });
    toast(response.data.message, {
      theme: "dark",
    });
    if (response.data.success) {
      setName("");
      setEmail("");
      setPassword("");
      setOldPassword("");
    }
  };

  return (
    <div className="w-full h-full mt-48 md:mt-32 mb-20 flex flex-col gap-5 items-center justify-center">
      <h1 className="text-2xl font-bold tracking-wide">Update Profile</h1>
      <form
        onSubmit={handleUpdateAdmin}
        className="w-full sm:w-1/3 flex flex-col items-center px-5 gap-4"
      >
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Wright Finder Motors"
            className="outline-none focus:outline-none border-2 py-3 rounded-md px-1 border-global-dark-blue"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Wright Finder Motors"
            className="outline-none focus:outline-none border-2 py-3 rounded-md px-1 border-global-dark-blue"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="oldPassword">Old Password*</label>
          <input
            type="password"
            name="oldPassword"
            required
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="************"
            className="outline-none focus:outline-none border-2 py-3 rounded-md px-1 border-global-dark-blue"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            className="outline-none focus:outline-none border-2 py-3 rounded-md px-1 border-global-dark-blue"
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="px-12 py-3 bg-global-dark-blue rounded-md text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAdmin;
