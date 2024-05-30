import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Spinner from "../../Loader/Spinner";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [features, setFeatures] = useState([]);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [miles, setMiles] = useState(0);
  const [mode, setMode] = useState("");
  const [wheels, setWheels] = useState("");
  const [style, setStyle] = useState("");
  const [equipments, setEquipments] = useState("");
  const [power, setPower] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFeatures = (e) => {
    if (e.key === "Enter") {
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
    const updatedFeatures = features.filter((t) => feature !== t);
    setFeatures(updatedFeatures);
  };

  const handleGalleryImagesSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setGalleryImages(selectedFiles);
    const files = Array.from(e.target.files);
    const imageUrls = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageUrls.push(e.target.result);
        if (imageUrls.length === files.length) {
          setImages(imageUrls);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddCar = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = new FormData();
    form.append("name", name);
    form.append("companyName", companyName);
    form.append("title", title);
    form.append("fuelType", fuelType);
    form.append("miles", miles);
    form.append("mode", mode);
    form.append("wheels", wheels);
    form.append("style", style);
    form.append("equipments", equipments);
    form.append("power", power);
    form.append("color", color);
    form.append("description", description);
    form.append("price", price);
    features.forEach((feature) => {
      form.append("features", feature.name);
    });
    galleryImages.forEach((file) => {
      form.append("images", file);
    });
    const response = await axios.post("/api/car/add", form);
    if (response.status == 201) {
      setName("");
      setCompanyName("");
      setTitle("");
      setFuelType("");
      setMiles(0);
      setMode("");
      setWheels("");
      setStyle("");
      setEquipments("");
      setPower("");
      setColor("");
      setDescription("");
      setPrice("");
      setGalleryImages([]);
      setImages([]);
      setFeatures([]);
      setLoading(false);
      alert("Upload Successfull");
    } else {
      setLoading(false);
      alert("Error");
    }
  };

  return (
    <div className="w-full h-full  flex flex-col items-center justify-center">
      <h1 className="mt-5 mb-10 text-4xl text-[#3c2163] font-bold font-sans">
        Add Car
      </h1>
      <div className="bg-[#3c2163] w-full sm:w-2/3 md:w-2/4 p-3 h-full  my-5 rounded-md flex-col flex items-center justify-center gap-5">
        <form className="rounded-md w-full text-white flex flex-col gap-6">
          {/* Images */}
          <div className="flex items-center gap-3">
            <label htmlFor="galleryImages">Gallery Images</label>
            <input
              onChange={handleGalleryImagesSelect}
              type="file"
              required
              multiple
            />
          </div>
          {images.length > 0 && (
            <div className="w-full grid grid-cols-3 gap-3">
              {images.map((file, index) => (
                <img
                  key={index}
                  src={file}
                  alt={`Selected ${index}`}
                  className="h-40 object-cover"
                />
              ))}
            </div>
          )}
          {/*  Car Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="carName">
              Car Name <span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Hyundai Tucson"
              />
            </div>
          </div>
          {/* Company Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="companyName">
              Company Name <span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                required
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Hyundai"
              />
            </div>
          </div>
          {/* Title such as Rebuild */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="title">
              Title<span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Rebuild"
              />
            </div>
          </div>
          {/* Fuel Type */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fuelType">
              Fuel Type<span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                type="text"
                required
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Petrol or Diesel"
              />
            </div>
          </div>
          {/* Miles */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="miles">
              Miles<span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                type="number"
                value={miles}
                required
                onChange={(e) => setMiles(e.target.value)}
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="74,200"
              />
            </div>
          </div>
          {/* Modes */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="mode">
              Mode<span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                type="text"
                value={mode}
                required
                onChange={(e) => setMode(e.target.value)}
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Auto"
              />
            </div>
          </div>
          {/* wheels */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="wheels">
              Wheels<span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                type="number"
                value={wheels}
                required
                onChange={(e) => setWheels(e.target.value)}
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="4"
              />
            </div>
          </div>
          {/* Style */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="style">Vehicle Style</label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                type="text"
                value={style}
                required
                onChange={(e) => setStyle(e.target.value)}
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="2 Doors"
              />
            </div>
          </div>
          {/* Equipments on Car */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="equipments">Equipments on Car</label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                type="text"
                required
                value={equipments}
                onChange={(e) => setEquipments(e.target.value)}
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Engine"
              />
            </div>
          </div>
          {/* Power */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="power">
              Power<span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                type="text"
                value={power}
                required
                onChange={(e) => setPower(e.target.value)}
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Power"
              />
            </div>
          </div>
          {/* Color */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="exteriorColor">
              Car Exterior Color
              <span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                type="text"
                value={color}
                required
                onChange={(e) => setColor(e.target.value)}
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Blue"
              />
            </div>
          </div>
          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="description">
              Description<span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <textarea
                type="text"
                rows={10}
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis assumenda fugit, voluptates architecto recusandae asperiores sit vero quas excepturi laboriosam id incidunt aliquam! Eum mollitia nisi dolor, ducimus obcaecati aperiam?"
              />
            </div>
          </div>
          {/* Price */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="price">
              Price<span className="text-lg text-red-400">*</span>
            </label>
            <div className="w-full bg-white rounded-md text-black">
              <input
                type="number"
                value={price}
                required
                onChange={(e) => setPrice(e.target.value)}
                className="bg-transparent outline-lime-50 focus:outline-none w-full rounded-md p-2"
                placeholder="12000$"
              />
            </div>
          </div>
        </form>
        {/* Features */}
        <div className="w-full pb-14">
          <label className="text-white pb-2" htmlFor="features">
            Features
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
                required
                className="outline-none p-2 rounded-md border-none bg-[#fff] dark:bg-dark-3 flex-shrink-0 w-full sm:w-auto"
                placeholder="Enter Features"
                onKeyUp={(e) => handleFeatures(e)}
              />
            </div>
          </div>
        </div>
        {/* Add Button */}
        <div className="w-full flex items-center justify-center mb-8">
          <div className="w-60 sm:w-80 xl:w-96 bg-[#17A8E2] py-2 rounded-md hover:bg-[#3d9fc6] flex items-center justify-center h-20">
            {loading ? (
              <Spinner></Spinner>
            ) : (
              <button
                disabled={
                  features.length === 0 ||
                  name === "" ||
                  companyName === "" ||
                  title === "" ||
                  fuelType === "" ||
                  miles === 0 ||
                  wheels === "" ||
                  style === "" ||
                  equipments === "" ||
                  power === "" ||
                  color === "" ||
                  description === "" ||
                  price === 0 ||
                  galleryImages.length === 0
                    ? true
                    : false
                }
                onClick={handleAddCar}
                className="w-full text-white text-lg font-bold tracking-wider"
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
