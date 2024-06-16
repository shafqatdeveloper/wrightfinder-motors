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
  resetPasswordPin: String,
});

// Hashing Password

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next(); // Make sure to return after calling next
  }
  this.password = await bcrypt.hash(this.password, 10);
  next(); // Call next after hashing
});

adminSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    update.password = await bcrypt.hash(update.password, 10);
  }
  next();
});

// adminSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   } else {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
// });

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
