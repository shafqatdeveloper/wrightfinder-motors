import express from "express";
import {
  loggedInAdmin,
  loginUser,
  logout,
  registerAdmin,
  updateAdmin,
} from "../Controllers/Admin.js";
import { isAuthenticatedAdmin } from "../Utils/Authentication.js";
const Router = express.Router();

Router.post("/register", registerAdmin);
Router.post("/login", loginUser);
Router.get("/authenticate", isAuthenticatedAdmin, loggedInAdmin);
Router.put("/update", isAuthenticatedAdmin, updateAdmin);
Router.get("/logout", isAuthenticatedAdmin, logout);

// Router.get("/details/:id", isAuthenticatedUser, singleUserDetails);

export default Router;
