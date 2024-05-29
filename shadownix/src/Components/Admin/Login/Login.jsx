import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../../Loader/Spinner";

const Login = () => {
  const [isPasswsordVisible, setisPasswsordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailToLowercase = email.toLowerCase();
    const response = await axios.post("/api/admin/login", {
      email: emailToLowercase,
      password,
    });
    if (response.status === 200) {
      alert(response.data.message);
      console.log(response.data);
      navigate("/admin/dashboard");
    }
    setLoading(false);
  };
  return (
    <div className="w-[350px] bg-black rounded-md p-3">
      <form className="w-full p-2 flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl font-bold font-sans text-white">LOGIN</h1>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email" className="text-white">
            Email
            <span className="text-red-500 pl-1 text-lg">*</span>
          </label>
          <div className="w-full">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
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
              value={[password]}
              name="password"
              className="w-full py-3 px-1 rounded-md focus:outline-[#ffa837] outline-none"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setisPasswsordVisible(!isPasswsordVisible);
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
        <div className="w-full bg-[#17A8E2] rounded-md hover:bg-[#3c2163] text-white flex items-center justify-center mt-5">
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <button
              onClick={handleLogin}
              disabled={email === "" || password === "" ? true : false}
              className="w-full text-center  rounded-md py-3 hover:bg-[#]"
            >
              LOGIN
            </button>
          )}
        </div>
        <div className="text-white flex items-center justify-center">
          <button className="text-center text-sm">
            <Link to={"/admin/login/password/forget"}>Forgot Password?</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
