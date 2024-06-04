import mongoose from "mongoose";

const CarModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  miles: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  power: {
    type: String,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
  driveline: {
    type: String,
    required: true,
  },
  interiorColor: {
    type: String,
    required: true,
  },
  exteriorColor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: [{ name: String }],
  galleryImagesArray: [{ imageName: String }],
  available: {
    type: Boolean,
    default: true,
  },
});
export const Car = mongoose.model("car", CarModel);
