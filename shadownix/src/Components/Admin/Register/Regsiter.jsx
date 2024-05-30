import React, { useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import Spinner from "../../Loader/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswsordVisible, setIsPasswsordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("/api/admin/authenticate", {
          withCredentials: true,
        });
        if (response.data.success) {
          navigate("/admin/dashboard");
        } else {
          return;
        }
      } catch (error) {
        console.error("Error checking authentication:");
      } finally {
      }
    };

    checkAuthentication();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailToLowerCase = email.toLowerCase();
      const response = await axios.post("/api/admin/register", {
        name,
        email: emailToLowerCase,
        password,
      });
      if (response.status === 200) {
        alert("Registered");
        navigate("/admin/dashboard");
      } else {
        alert(response.data.message);
        console.log(response.data);
      }
    } catch (error) {
      if (error.response) {
        alert(
          error.response.data.message || "An error occurred during Registration"
        );
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-20 pt-36 sm:pt-20 w-full flex items-center justify-center">
      <div className="bg-black p-3 rounded-md">
        <form className="w-full p-2 flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-bold font-sans text-white">REGISTER</h1>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-white">
              Name
              <span className="text-red-500 pl-1 text-lg">*</span>
            </label>
            <div className="w-full">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Shadow Nix"
                name="name"
                className="w-full py-3 px-1 rounded-md focus:outline-[#ffa837] outline-none"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-white">
              Email
              <span className="text-red-500 pl-1 text-lg">*</span>
            </label>
            <div className="w-full">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="shadownix@gmail.com"
                name="email"
                className="w-full py-3 px-1 rounded-md focus:outline-[#ffa837] outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full relative">
            <div className="w-full ">
              <label htmlFor="password" className="text-white">
                Password
                <span className="text-red-500 pl-1 text-lg">*</span>
              </label>
              <input
                type={isPasswsordVisible ? "text" : "password"}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                className="w-full py-3 px-1 rounded-md focus:outline-[#ffa837] outline-none"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsPasswsordVisible(!isPasswsordVisible);
                }}
                className="absolute top-10 right-4"
              >
                {isPasswsordVisible ? (
                  <BiHide color="#ffa837" size={22} />
                ) : (
                  <BiShow color="#ffa837" size={22} />
                )}
              </button>
            </div>
          </div>
          <div className="w-full h-16 flex items-center justify-center bg-[#ffa837] text-white rounded-md py-3 hover:bg-[#bb833a]">
            {loading ? (
              <Spinner></Spinner>
            ) : (
              <button
                onClick={handleRegister}
                disabled={
                  email === "" || password === "" || name === "" ? true : false
                }
                className="w-full text-xl font-bold text-center"
              >
                REGISTER
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
