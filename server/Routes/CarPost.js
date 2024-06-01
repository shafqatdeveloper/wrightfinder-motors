import express from "express";
import upload from "../Config/Multer.js";
import {
  addCar,
  deleteCar,
  getCarDetails,
  getCars,
  markCarAsAvailable,
  markCarAsSold,
} from "../Controllers/CarPost.js";
import { isAuthenticatedAdmin } from "../Utils/Authentication.js";

const Router = express.Router();

Router.post("/car/add", upload.array("images", 25), addCar);
Router.delete("/admin/car/delete/:id", isAuthenticatedAdmin, deleteCar);
Router.put("/admin/car/mark/sold/:id", isAuthenticatedAdmin, markCarAsSold);
Router.put("/admin/car/mark/av/:id", isAuthenticatedAdmin, markCarAsAvailable);
Router.get("/cars", getCars);
Router.get("/car/details", getCarDetails);

export default Router;
