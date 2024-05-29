import mongoose from "mongoose";

const CarModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  miles: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  wheels: {
    type: Number,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  equipments: {
    type: String,
    required: true,
  },
  power: {
    type: String,
    required: true,
  },
  color: {
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
  features: [{ type: String, required: true }],
  galleryImagesArray: [{ imageName: String }],
});
export const Car = mongoose.model("car", CarModel);
