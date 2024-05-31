import { Car } from "../Models/Car.js";
import path from "path";
import sharp from "sharp";

export const addCar = async (req, res) => {
  try {
    const {
      name,
      miles,
      title,
      style,
      engine,
      transmission,
      seats,
      driveline,
      interiorColor,
      exteriorColor,
      description,
      price,
      features,
    } = req.body;
    const images = req.files;
    // console.log(images);
    // Process and optimize images using Sharp
    const uploadedFiles = await Promise.all(
      images.map(async (file) => {
        const __dirname = path.resolve();
        const filename = `optimized-${Date.now()}-${file.originalname}.webp`;
        const outputPath = path.join(__dirname, "public", "uploads", filename);
        await sharp(file.path)
          .resize(800)
          .toFormat("webp")
          .webp({ quality: 80 })
          .toFile(outputPath);

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
      // newCar,
      message: "Car Added",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
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
    res.status(500).json({
      success: false,
      message: error.message,
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
    res.status(500).json({
      success: false,
      message: error.message,
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
      await Car.findByIdAndDelete(carId);
      res.status(200).json({
        success: true,
        message: "Car deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
