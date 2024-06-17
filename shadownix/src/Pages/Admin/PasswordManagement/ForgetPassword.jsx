import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { forgetPasswordSchema } from "../../../Components/Admin/Schemas";
import SmallLoader from "../../../Components/Loader/SmallLoader";
import OTPInput from "./OtpInput";
const ForgetPassword = () => {
  const initialEmail = {
    email: "",
  };
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialEmail,
      validationSchema: forgetPasswordSchema,
      onSubmit: async (values) => {
        setLoading(true);
        try {
          const email = values.email;
          const response = await axios.post("/api/admin/password/forget", {
            email,
          });

          if (response.status === 201) {
            setOtpSent(true);
            toast(response.data.message, {
              theme: "dark",
            });
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
      },
    });

  return (
    <div className="h-full mt-12 sm:mt-20 flex flex-col bg-gray-800 gap-5 items-center justify-center">
      <div className="text-center text-white text-3xl font-bold font-sans py-10">
        <h1>Forget Password</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-[350px]">
        <div className="flex w-full flex-col gap-1.5 relative">
          <label htmlFor="email" className="text-white">
            Email <span className="text-lg text-red-400">*</span>
          </label>
          <div
            className={`w-full ${
              errors.email && touched.email ? "border-2 border-red-500" : ""
            } bg-white rounded-md text-white relative`}
          >
            <div className="flex items-center">
              <input
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                disabled={otpSent ? true : false}
                className="bg-transparent text-black  focus:outline-none w-full rounded-md p-3.5"
                placeholder="Enter your email"
              />
              <div className="p-3.5 rounded-tr-md rounded-br-md bg-sky-600 text-black">
                {loading ? <SmallLoader /> : <button>Send</button>}
              </div>
            </div>
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm capitalize absolute top-full mt-1">
                {errors.email}
              </p>
            )}
          </div>
        </div>
      </form>

      <div className="py-8">
        <h2 className="text-lg font-semibold mb-4 text-white text-center">
          Enter OTP
        </h2>
        <OTPInput disable={otpSent} length={6} />
      </div>
    </div>
  );
};

export default ForgetPassword;
