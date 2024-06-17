import React, { useEffect, useState } from "react";
import SmallLoader from "../../../Components/Loader/SmallLoader";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const OTPInput = ({ length = 6, disable }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //   console.log("Otp", otp);
  //   console.log("New Pass", newPassword);
  const navigate = useNavigate();
  const handleChange = (e, index) => {
    const value = e.target.value;
    // if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text");

    const newOtp = pasteData.split("").slice(0, length);
    setOtp(newOtp);

    // Focus the last filled input
    const lastIndex = newOtp.findIndex((char) => char === "");
    if (lastIndex !== -1) {
      document.getElementById(`otp-input-${lastIndex}`).focus();
    } else {
      document.getElementById(`otp-input-${length - 1}`).focus();
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put("/api/admin/password/reset", {
        otp,
        newPassword,
      });

      if (response.status === 201) {
        setOtp(Array(length).fill(""));
        setNewPassword("");
        const toastMessage =
          response.data.message + "You are being redirected to Login Page";

        toast(toastMessage, {
          theme: "dark",
          autoClose: 2,
        });
        setTimeout(() => {
          navigate("/admin/login");
        }, 3000);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast(error.response.data.message, {
            theme: "dark",
          });
        } else {
          toast(error.response.data.message || "An error occurred", {
            theme: "dark",
          });
        }
      } else if (error.request) {
        toast("No response received from server", {
          theme: "dark",
        });
      } else {
        toast(error.message, {
          theme: "dark",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (disable) {
        const message = "Changes you made may not be saved.";
        e.returnValue = message;
        return message;
      }
    };

    if (disable) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    } else {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [disable]);

  return (
    <div className="w-[350px] flex items-center justify-center">
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleResetPassword}
      >
        <div className="flex items-center justify-between">
          {Array.from({ length }).map((_, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              disabled={!disable ? true : false}
              maxLength="1"
              required
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
            />
          ))}
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label htmlFor="newPassword" className="text-white">
            New Password <span className="text-lg text-red-400">*</span>
          </label>
          <div className={`w-full bg-white rounded-md text-white relative`}>
            <input
              value={newPassword}
              name="newPassword"
              onChange={(e) => setNewPassword(e.target.value)}
              type="text"
              required
              disabled={!disable ? true : false}
              className="bg-transparent text-black outline-lime-50 focus:outline-none w-full rounded-md p-3.5"
              placeholder="Enter new Password"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="px-6 py-3.5 rounded-md font-bold font-sans bg-sky-600 text-black">
            {loading ? (
              <SmallLoader />
            ) : (
              <button type="submit" disabled={!disable ? true : false}>
                Reset
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default OTPInput;
