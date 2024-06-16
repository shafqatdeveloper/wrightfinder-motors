import express from "express";
import {
  EmailMessage,
  loggedInAdmin,
  loginUser,
  logout,
  registerAdmin,
  resetPassword,
  sendResetPasswordPin,
  updateAdmin,
} from "../Controllers/Admin.js";
import { isAuthenticatedAdmin } from "../Utils/Authentication.js";
const Router = express.Router();

Router.post("/register", registerAdmin);
Router.post("/login", loginUser);
Router.get("/authenticate", isAuthenticatedAdmin, loggedInAdmin);
Router.put("/update", isAuthenticatedAdmin, updateAdmin);
Router.get("/logout", isAuthenticatedAdmin, logout);
Router.post("/send-message", EmailMessage);
Router.post("/password/forget", sendResetPasswordPin);
Router.put("/password/reset", resetPassword);

// Router.get("/details/:id", isAuthenticatedUser, singleUserDetails);

export default Router;
