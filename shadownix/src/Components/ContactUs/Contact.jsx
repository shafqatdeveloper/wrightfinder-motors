import axios from "axios";
import React, { useState } from "react";
import Spinner from "../Loader/Spinner";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { sendMessage } from "../Admin/Schemas";
const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: sendMessage,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const name = values.name;
        const email = values.email;
        const subject = values.subject;
        const message = values.message;
        const response = await axios.post("/api/admin/send-message", {
          name,
          email,
          subject,
          message,
        });
        if (response.status == 200) {
          setLoading(false);
          resetForm();
          toast(response.data.message, {
            theme: "dark",
          });
        } else {
          setLoading(false);
          toast(response.data.message, {
            theme: "dark",
          });
        }
      } catch (error) {
        setLoading(false);
        toast(error.message, {
          theme: "dark",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-full py-12 bg-[#210F1D] flex flex-col items-center justify-center gap-6">
      <h1 className="text-center text-3xl font-extrabold font-sans sm:text-4xl text-white md:text-5xl">
        Contact Us
      </h1>
      <div className="w-full sm:w-2/4">
        <form onSubmit={handleSubmit} className="w-full p-4">
          <div className="w-full flex flex-col gap-6">
            <div className="flex w-full items-center flex-col md:flex-row gap-6 md:gap-3">
              <div className="flex w-full flex-col gap-1.5 relative">
                <label htmlFor="name" className="text-white">
                  Name <span className="text-lg text-red-400">*</span>
                </label>
                <div
                  className={`w-full ${
                    errors.name && touched.name ? "border-2 border-red-500" : ""
                  } bg-white rounded-md text-white relative`}
                >
                  <input
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="bg-transparent text-black outline-lime-50 focus:outline-none w-full rounded-md p-3.5"
                    placeholder="Enter your name"
                  />
                  {errors.name && touched.name && (
                    <p className="text-red-500 text-sm capitalize absolute top-full mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex w-full flex-col gap-1.5 relative">
                <label htmlFor="email" className="text-white">
                  Email <span className="text-lg text-red-400">*</span>
                </label>
                <div
                  className={`w-full ${
                    errors.email && touched.email
                      ? "border-2 border-red-500"
                      : ""
                  } bg-white rounded-md text-white relative`}
                >
                  <input
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    className="bg-transparent text-black outline-lime-50 focus:outline-none w-full rounded-md p-3.5"
                    placeholder="Enter your email"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-sm capitalize absolute top-full mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-1.5">
              <label htmlFor="subject" className="text-white">
                Subject <span className="text-lg text-red-400">*</span>
              </label>
              <div
                className={`w-full ${
                  errors.subject && touched.subject
                    ? "border-2 border-red-500"
                    : ""
                } bg-white rounded-md text-white relative`}
              >
                <input
                  value={values.subject}
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  className="bg-transparent text-black outline-lime-50 focus:outline-none w-full rounded-md p-3.5"
                  placeholder="Enter subject"
                />
                {errors.subject && touched.subject && (
                  <p className="text-red-500 text-sm capitalize absolute top-full mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col gap-1.5">
              <label htmlFor="message" className="text-white">
                Message <span className="text-lg text-red-400">*</span>
              </label>
              <div
                className={`w-full ${
                  errors.message && touched.message
                    ? "border-2 border-red-500"
                    : ""
                } bg-white rounded-md text-white relative`}
              >
                <textarea
                  value={values.message}
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="bg-transparent text-black outline-lime-50 focus:outline-none w-full rounded-md p-3.5"
                  placeholder="Enter your message"
                  rows={5}
                />
                {errors.message && touched.message && (
                  <p className="text-red-500 text-sm capitalize absolute top-full mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center my-8">
            <div className=" bg-[#17A8E2] h-12 rounded-md hover:bg-[#3d9fc6] flex items-center justify-center w-32">
              {loading ? (
                <Spinner></Spinner>
              ) : (
                <button
                  type="submit"
                  className="w-full h-full text-white text-lg font-bold tracking-wider"
                >
                  SEND
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
