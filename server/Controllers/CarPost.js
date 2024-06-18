import { Car } from "../Models/Car.js";
import path from "path";
import sharp from "sharp";
import fs from "fs";

// Add Car
export const addCar = async (req, res) => {
  try {
    const {
      name,
      miles,
      title,
      style,
      engine,
      transmission,
      power,
      fuelType,
      seats,
      driveline,
      interiorColor,
      exteriorColor,
      description,
      price,
      features,
    } = req.body;
    const images = req.files;

    const carAlreadyExists = await Car.findOne({ name, price, miles });
    if (carAlreadyExists) {
      res.status(200).json({
        success: true,
        message: "Car Already Exists",
      });
    } else {
      const uploadedFiles = await Promise.all(
        images.map(async (file) => {
          const __dirname = path.resolve();
          const filename = `optimized-${Date.now()}-${file.originalname}.webp`;
          const outputPath = path.join(
            __dirname,
            "public",
            "uploads",
            filename
          );
          await sharp(file.path)
            .resize(800)
            .toFormat("webp")
            .webp({ quality: 90 })
            .toFile(outputPath);
          const deletePath = path.join(
            __dirname,
            "public",
            "uploads",
            file.filename
          );
          fs.unlinkSync(deletePath);
          return {
            imageName: filename,
          };
        })
      );

      const featuresArray =
        Array.isArray(features) && features.length > 1
          ? features.map((feat) => ({
              name: feat,
            }))
          : features;

      const newCar = await Car.create({
        name,
        miles,
        title,
        style,
        engine,
        transmission,
        power,
        fuelType,
        seats,
        driveline,
        interiorColor,
        exteriorColor,
        description,
        price,
        features:
          Array.isArray(features) && features.length > 1
            ? featuresArray
            : { name: features },
        galleryImagesArray: uploadedFiles,
      });

      res.status(201).json({
        success: true,
        newCar,
        message: "Car Added",
      });
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: `Internal Server Error ${error.message}`,
    });
  }
};

// Edit Car

export const editCar = async (req, res) => {
  try {
    const {
      name,
      miles,
      title,
      style,
      engine,
      transmission,
      power,
      fuelType,
      seats,
      driveline,
      interiorColor,
      exteriorColor,
      description,
      price,
      features,
    } = req.body;

    const id = req.query.id;
    const featuresArray =
      Array.isArray(features) && features.length > 1
        ? features.map((feat) => ({
            name: feat.name,
          }))
        : features;
    const car = await Car.findById(id);
    if (!car) {
      res.status(401).json({
        success: false,
        message: "Car not Exist",
      });
    } else {
      await Car.findByIdAndUpdate(
        id,
        {
          name,
          miles,
          title,
          style,
          engine,
          transmission,
          power,
          fuelType,
          seats,
          driveline,
          interiorColor,
          exteriorColor,
          description,
          price,
          features: featuresArray,
        },
        { runValidators: true }
      );
      res.status(201).json({
        success: true,
        message: "Car Updated",
      });
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get All Cars

export const getCars = async (req, res) => {
  try {
    // const selectedBrand = req.query.brand;
    // console.log(selectedBrand);
    // const query = buildQuery(selectedBrand);
    const cars = await Car.find();
    res.status(201).json({
      success: true,
      cars,
      message: "Car Added",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// const buildQuery = (brand) => {
//   let query = {};
//   if (brand && brand === "All Brands") {
//     query.companyName = {
//       $regex: "",
//       $options: "i",
//     };
//   } else if (brand) {
//     query.companyName = {
//       $regex: brand,
//       $options: "i",
//     };
//   }
//   return query;
// };

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
    res.status(501).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//  Delete A Car

export const deleteCar = async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    } else {
      Promise.all(
        car.galleryImagesArray.map(async (file) => {
          const __dirname = path.resolve();
          const delPath = path.join(
            __dirname,
            "public",
            "uploads",
            file.imageName
          );
          fs.unlinkSync(delPath);
        })
      );
      await Car.findByIdAndDelete(carId);
      res.status(200).json({
        success: true,
        message: "Car deleted successfully",
      });
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const markCarAsSold = async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    } else {
      if (car.available === false) {
        res.status(401).json({
          success: true,
          message: "Car Already marked as SOLD",
        });
      } else {
        car.available = false;
        await car.save();
        res.status(200).json({
          success: true,
          message: "Car Marked as SOLD",
        });
      }
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const markCarAsAvailable = async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    } else {
      if (car.available === true) {
        res.status(401).json({
          success: true,
          message: "Car Already marked as AV",
        });
      } else {
        car.available = true;
        await car.save();
        res.status(200).json({
          success: true,
          message: "Car Marked as AV",
        });
      }
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
