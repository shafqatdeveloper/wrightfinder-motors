import express from "express";
import upload from "../Config/Multer.js";
import {
  addCar,
  deleteCar,
  getCarDetails,
  getCars,
} from "../Controllers/CarPost.js";
import { isAuthenticatedAdmin } from "../Utils/Authentication.js";

const Router = express.Router();

Router.post("/car/add", upload.array("images", 25), addCar);
Router.delete("/admin/car/delete/:id", isAuthenticatedAdmin, deleteCar);
Router.get("/cars", getCars);
Router.get("/car/details", getCarDetails);

export default Router;
