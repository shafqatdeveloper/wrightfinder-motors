import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hashing Password

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// Generating JSON Web Token
adminSchema.methods.JWTTOKEN = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};

// Comparing Password

adminSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Admin = mongoose.model("admin", adminSchema);
export default Admin;
