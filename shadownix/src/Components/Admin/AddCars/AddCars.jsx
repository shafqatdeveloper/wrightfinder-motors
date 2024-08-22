import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Spinner from "../../Loader/Spinner";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AddCarSchema } from "../Schemas";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  miles: "",
  title: "Clean",
  style: "2 Doors",
  engine: "Sports",
  transmission: "Automatic",
  power: "Keyless",
  fuelType: "Gas",
  seats: "Heated",
  driveline: "FWD",
  interiorColor: "Black",
  exteriorColor: "Black",
  description: "",
  price: "",
};

const AddCar = () => {
  const [features, setFeatures] = useState([
    { name: "CD/mp3" },
    { name: "Navigation System" },
    { name: "Bluetooth Wireless" },
    { name: "Comfort and Convenience" },
    { name: "Keyless Entry" },
    { name: "Keyless Start" },
    { name: "Air Conditioning" },
    { name: "Power Door Locks" },
    { name: "Power Windows" },
    { name: "Cruise Control" },
  ]);
  const [images, setImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleGalleryImagesSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const imageUrls = selectedFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setGalleryImages((prevGalleryImages) => [...prevGalleryImages, ...selectedFiles]);
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setGalleryImages(updatedImages.map(image => image.file));
  };


  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: AddCarSchema,
      onSubmit: async (values) => {
        setLoading(true);
        const form = new FormData();
        form.append("name", values.name);
        form.append("miles", values.miles);
        form.append("title", values.title);
        form.append("style", values.style);
        form.append("engine", values.engine);
        form.append("transmission", values.transmission);
        form.append("power", values.power);
        form.append("fuelType", values.fuelType);
        form.append("seats", values.seats);
        form.append("driveline", values.driveline);
        form.append("interiorColor", values.interiorColor);
        form.append("exteriorColor", values.exteriorColor);
        form.append("description", values.description);
        form.append("price", values.price);
        features.forEach((feature) => {
          form.append("features", feature.name);
        });
        galleryImages.forEach((file) => {
          form.append("images", file);
        });
        try {
          const response = await axios.post("/api/car/add", form);
          if (response.status == 201) {
            setGalleryImages([]);
            setImages([]);
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

  return (
    <div className="w-full h-full  flex flex-col items-center justify-center px-2">
      <h1 className="mt-5 mb-10 text-4xl text-global-dark-blue font-bold font-sans">
        Add Car
      </h1>
      <div className="bg-global-dark-blue w-full sm:w-2/3 md:w-2/4 p-3 h-full  my-5 rounded-md flex-col flex items-center justify-center gap-5">
        <form
          onSubmit={handleSubmit}
          className="rounded-md w-full text-white flex flex-col gap-6"
        >
          {/* Images */}
          <div className="flex items-center gap-3">
            <label htmlFor="galleryImages">Gallery Images</label>
            <input
              onChange={handleGalleryImagesSelect}
              type="file"
              accept="image/*"
              required
              multiple
            />
          </div>
          {images.length > 0 && (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
              {images.map((file, index) => (
                <div key={index} className="relative">
                  <img
                    src={file.url}
                    alt={`Selected ${index}`}
                    className="w-full object-center h-32"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <RxCross2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
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
                <option value={values.title}>Clean</option>
                <option value="Original">Original</option>
                <option value="Rebuild">Rebuild</option>
                <option value="Salvage">Salvage</option>
                <option value="Duplicate">Duplicate</option>
                <option value="Replacement">Replacement</option>
                <option value="Unknown">Unknown</option>
                <option value="N/a">N/a</option>
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
                <option value={values.style}>2 Doors</option>
                <option value="4 Doors">4 Doors</option>
                <option value="N/a">N/a</option>
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
                <option value={values.engine}>Sports</option>
                <option value="Non Sports">Non Sports</option>
                <option value="N/a">N/a</option>
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
                <option value={values.transmission}>Automatic</option>
                <option value="Stickshift">Stickshift</option>
                <option value="N/a">N/a</option>
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
                <option value={values.power}>Keyless</option>
                <option value="Remote">Remote</option>
                <option value="Key Entry">Key Entry</option>
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
                <option value={values.fuelType}>Gas</option>
                <option value="Diesel">Diesel</option>
                <option value="Other">Other</option>
                <option value="N/a">N/a</option>
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
                <option value={values.driveline}>4WD</option>
                <option value="2WD">2WD</option>
                <option value="FWD">FWD</option>
                <option value="BWD">BWD</option>
                <option value="N/a">N/a</option>
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
                <option value={values.seats}>Heated</option>
                <option value="Power Seats">Power</option>
                <option value="Leather">Leather</option>
                <option value="Clothes">Clothes</option>
                <option value="N/a">N/a</option>
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
                <option value={values.interiorColor}>Black</option>
                <option value="Gray">Gray</option>
                <option value="Ivory">Ivory</option>
                <option value="Multi-Color">Multi-Color</option>
                <option value="Beige">Beige</option>
                <option value="Brown">Brown</option>
                <option value="White">White</option>
                <option value="N/a">N/a</option>
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
                <option value={values.exteriorColor}>Black</option>
                <option value="Blue">Blue</option>
                <option value="Ivory">Ivory</option>
                <option value="Tan">Tan</option>
                <option value="Gray">Gray</option>
                <option value="Red">Red</option>
                <option value="Silver">Silver</option>
                <option value="White">White</option>
                <option value="Gold">Gold</option>
                <option value="Yellow">Yellow</option>
                <option value="Orange">Orange</option>
                <option value="Green">Green</option>
                <option value="N/a">N/a</option>
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
            <div className="w-60 sm:w-80 xl:w-96 bg-[#17A8E2] py-2 rounded-md hover:bg-[#3d9fc6] flex items-center justify-center h-16">
              {loading ? (
                <Spinner></Spinner>
              ) : (
                <button
                  type="submit"
                  className="w-full h-full text-white text-lg font-bold tracking-wider"
                >
                  ADD
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

export default AddCar;
