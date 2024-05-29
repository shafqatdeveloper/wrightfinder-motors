import { Car } from "../Models/Car.js";

export const addCar = async (req, res) => {
  try {
    const {
      name,
      companyName,
      title,
      fuelType,
      miles,
      mode,
      wheels,
      style,
      equipments,
      power,
      color,
      description,
      price,
      features,
    } = req.body;
    const images = req.files;
    const uploadedFiles = images.map((file) => ({
      imageName: file.filename,
    }));
    const newCar = await Car.create({
      name,
      companyName,
      title,
      fuelType,
      miles,
      mode,
      wheels,
      style,
      equipments,
      power,
      color,
      description,
      price,
      features,
      galleryImagesArray: uploadedFiles,
    });
    res.status(201).json({
      success: true,
      newCar,
      message: "Car Added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Cars

export const getCars = async (req, res) => {
  try {
    const selectedBrand = req.query.brand;
    const query = buildQuery(selectedBrand);
    console.log(selectedBrand);
    const cars = await Car.find(query, {});
    res.status(201).json({
      success: true,
      cars,
      message: "Car Added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const buildQuery = (brand) => {
  let query = {};
  if (brand && brand === "All Brands") {
    query.companyName = {
      $regex: "",
      $options: "i",
    };
  } else if (brand) {
    query.companyName = {
      $regex: brand,
      $options: "i",
    };
  }
  return query;
};

// Get Car Details

export const getCarDetails = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    const car = await Car.findById(id);
    res.status(201).json({
      success: true,
      car,
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
