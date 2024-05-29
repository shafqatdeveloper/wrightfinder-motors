import jwt from "jsonwebtoken";
import Admin from "../Models/Admin.js";

export const isAuthenticatedAdmin = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json({
      success: false,
      message: "Please Login First",
    });
  } else {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decodedData.id);
    const decoded = jwt.decode(token, { complete: true });
    next();
  }
};
