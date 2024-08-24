import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Spinner from "../../Loader/Spinner";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { AddCarSchema } from "../Schemas";
import {
  drivelines,
  engines,
  exteriorColors,
  fuelTypes,
  interiorColors,
  powers,
  seatOptions,
  styles,
  titles,
  transmissions,
} from "./EditCarOptions";

const EditCar = ({ car, id }) => {
  const initialValues = {
    name: car.name,
    miles: car.miles,
    title: car.title,
    style: car.style,
    engine: car.engine,
    transmission: car.transmission,
    power: car.power,
    fuelType: car.fuelType,
    seats: car.seats,
    driveline: car.driveline,
    interiorColor: car.interiorColor,
    exteriorColor: car.exteriorColor,
    description: car.description,
    price: car.price,
  };

  const [features, setFeatures] = useState(car.features);
  const [loading, setLoading] = useState(false);
  const [removedPhotos, setRemovedPhotos] = useState([]);


  const handleRemovePhoto = (e, photoName) => {
    e.preventDefault()
    setRemovedPhotos((prev) => [...prev, photoName]);
    car.galleryImagesArray = car.galleryImagesArray.filter(
      (photo) => photo.imageName !== photoName
    );
  };


  const handleFeatures = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let feature = e.target.value.replace(/\s+/g, " ").trim();
      if (feature.length > 1) {
        const featureObjects = feature.split(",").map((featureItem) => {
          return { name: featureItem.trim() };
        });

        setFeatures((prevFeatures) => [
          ...prevFeatures,
          ...featureObjects.filter(
            (featureObj) =>
              !prevFeatures.some((f) => f.name === featureObj.name)
          ),
        ]);
      }
      e.target.value = "";
    }
  };

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

  const handleDeleteFeature = (feature) => {
    const updatedFeatures = features.filter((t) => feature !== t.name);
    setFeatures(updatedFeatures);
  };
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: AddCarSchema,
      onSubmit: async (values) => {
        setLoading(true);
        try {
          const response = await axios.put(`/api/car/edit?id=${id}`, {
            ...values,
            features,
            removedPhotos,
          });
          if (response.status == 201) {
            setFeatures([]);
            setLoading(false);
            toast(response.data.message, {
              theme: "dark",
            });
            location.reload();
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

  const api_Url = import.meta.env.VITE_API_URL;
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center px-2">
      <h1 className="mt-5 mb-10 text-4xl text-global-dark-purple font-bold font-sans">
        Edit Car
      </h1>
      <div className="bg-global-dark-purple w-full sm:w-2/3 md:w-2/4 p-3 h-full  my-5 rounded-md flex-col flex items-center justify-center gap-5">
        <form
          onSubmit={handleSubmit}
          className="rounded-md w-full text-white flex flex-col gap-6"
        >
          {/* Images */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
            {car.galleryImagesArray.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={`${api_Url}/uploads/${photo.imageName}`}
                  alt={photo.imageName}
                  className="w-full object-cover rounded-md h-32"
                />
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full"
                  onClick={(e) => handleRemovePhoto(e, photo.imageName)}
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>

          {/*  Car Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name">
              Car Name <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.name && touched.name ? "border-2 border-red-500" : ""
                } bg-white rounded-md text-black`}
            >
              <input
                value={values.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Car/ Model/ Year"
              />
            </div>
            {errors.name && touched.name ? (
              <p className="text-red-500 text-sm capitalize">{errors.name}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="miles">
              Miles <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.miles && touched.miles ? "border-2 border-red-500" : ""
                } bg-white rounded-md text-black`}
            >
              <input
                value={values.miles}
                name="miles"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="2100"
              />
            </div>
            {errors.miles && touched.miles ? (
              <p className="text-red-500 text-sm capitalize">{errors.miles}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="title">
              Title <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.title && touched.title ? "border-2 border-red-500" : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="title"
                id="title"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.title}>{values.title}</option>
                {titles.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.title && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.title && touched.title ? (
              <p className="text-red-500 text-sm capitalize">{errors.title}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="style">
              Style of Car <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.style && touched.style ? "border-2 border-red-500" : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="style"
                id="style"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.style}>{values.style}</option>
                {styles.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.style && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.style && touched.style ? (
              <p className="text-red-500 text-sm capitalize">{errors.style}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="engine">
              Engine<span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.engine && touched.engine ? "border-2 border-red-500" : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="engine"
                id="engine"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.engine}>{values.engine}</option>
                {engines.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.engine && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.engine && touched.engine ? (
              <p className="text-red-500 text-sm capitalize">{errors.engine}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="transmission">
              Transmission <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.transmission && touched.transmission
                ? "border-2 border-red-500"
                : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="transmission"
                id="transmission"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.transmission}>
                  {values.transmission}
                </option>
                {transmissions.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.transmission && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.transmission && touched.transmission ? (
              <p className="text-red-500 text-sm capitalize">
                {errors.transmission}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="power">
              Power <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.power && touched.power ? "border-2 border-red-500" : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="power"
                id="power"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.power}>{values.power}</option>
                {powers.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.power && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.power && touched.power ? (
              <p className="text-red-500 text-sm capitalize">{errors.power}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fuelType">
              Fuel Type <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.fuelType && touched.fuelType
                ? "border-2 border-red-500"
                : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="fuelType"
                id="fuelType"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.fuelType}>{values.fuelType}</option>
                {fuelTypes.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.fuelType && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.fuelType && touched.fuelType ? (
              <p className="text-red-500 text-sm capitalize">
                {errors.fuelType}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="driveline">
              Driveline <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.driveline && touched.driveline
                ? "border-2 border-red-500"
                : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="driveline"
                id="driveline"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.driveline}>{values.driveline}</option>
                {drivelines.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.driveline && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.driveline && touched.driveline ? (
              <p className="text-red-500 text-sm capitalize">
                {errors.driveline}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="seats">
              Seats <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.seats && touched.seats ? "border-2 border-red-500" : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="seats"
                id="seats"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.seats}>{values.seats}</option>
                {seatOptions.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.seats && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.seats && touched.seats ? (
              <p className="text-red-500 text-sm capitalize">{errors.seats}</p>
            ) : null}
          </div>
          {/* Interior Features */}
          <div className="w-full pb-14">
            <label className="text-white pb-2" htmlFor="features">
              Interior Features
            </label>
            <div className="w-full bg-[#fff] text-black p-2 rounded-md mt-3 shadow-md">
              <div className="top-0 gap-1 grid grid-cols-1">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-gray-200 p-1.5 rounded-sm flex gap-2 items-center justify-between`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="">
                        {String(feature.name).length > 50
                          ? String(feature.name).substring(0, 50)
                          : feature.name}
                      </span>
                      {String(feature.name).length > 50 && <span>...</span>}
                    </div>
                    <div className="bg-gray-300">
                      <RxCross2
                        onClick={() => handleDeleteFeature(feature.name)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
                <input
                  type="text"
                  className="outline-none p-2 rounded-md border-none bg-[#fff] dark:bg-dark-3 flex-shrink-0 w-full sm:w-auto"
                  placeholder="Enter Features"
                  onKeyDown={(e) => handleFeatures(e)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="interiorColor">
              Interior Color <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.interiorColor && touched.interiorColor
                ? "border-2 border-red-500"
                : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="interiorColor"
                id="interiorColor"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.interiorColor}>
                  {values.interiorColor}
                </option>
                {interiorColors.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.interiorColor && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.interiorColor && touched.interiorColor ? (
              <p className="text-red-500 text-sm capitalize">
                {errors.interiorColor}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="exteriorColor">
              Exterior Color <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.exteriorColor && touched.exteriorColor
                ? "border-2 border-red-500"
                : ""
                } bg-white rounded-md text-black`}
            >
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="exteriorColor"
                id="exteriorColor"
                className="focus:outline-none w-full rounded-md bg-gray-100 py-2"
              >
                <option value={values.exteriorColor}>
                  {values.exteriorColor}
                </option>
                {exteriorColors.map((item, index) => (
                  <option
                    key={index}
                    className={`${item === values.exteriorColor && "hidden"}`}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.exteriorColor && touched.exteriorColor ? (
              <p className="text-red-500 text-sm capitalize">
                {errors.exteriorColor}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="Description">
              Car Description <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.description && touched.description
                ? "border-2 border-red-500"
                : ""
                } bg-white rounded-md text-black`}
            >
              <textarea
                rows={20}
                value={values.description}
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Enter Your Car Description Here"
              />
            </div>
            {errors.description && touched.description ? (
              <p className="text-red-500 text-sm capitalize">
                {errors.description}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="price">
              Price <span className="text-lg text-red-400">*</span>
            </label>
            <div
              className={`w-full ${errors.price && touched.price ? "border-2 border-red-500" : ""
                } bg-white rounded-md text-black`}
            >
              <input
                value={values.price}
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="12000"
              />
            </div>
            {errors.price && touched.price ? (
              <p className="text-red-500 text-sm capitalize">{errors.price}</p>
            ) : null}
          </div>
          <div className="w-full flex items-center justify-center mb-8">
            <div className="w-60 sm:w-80 xl:w-96 bg-global-dark-RED py-2 rounded-md hover:bg-red-600 flex items-center justify-center h-16">
              {loading ? (
                <Spinner></Spinner>
              ) : (
                <button
                  type="submit"
                  className="w-full h-full text-white text-lg font-bold tracking-wider"
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Add Button */}
      </div>
    </div>
  );
};

export default EditCar;
