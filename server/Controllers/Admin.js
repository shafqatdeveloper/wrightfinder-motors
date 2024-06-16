import Admin from "../Models/Admin.js";
import { sendMessage } from "../Utils/SendEmail.js";
import crypto from "crypto";
import { SendResetPasswordPin } from "../Utils/SendResetPin.js";

// Register an Admin
export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const adminExist = await Admin.findOne({ email });
    if (adminExist) {
      res.status(401).json({
        success: false,
        message: "Admin Already Exists",
      });
    } else {
      const NewAdmin = await Admin.create({
        name,
        email,
        password,
      });
      const token = NewAdmin.JWTTOKEN();
      res
        .status(200)
        .cookie("token", token, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        })
        .json({
          success: true,
          message: "Admin Registered",
          NewAdmin,
        });
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Admin
export const updateAdmin = async (req, res) => {
  const { name, email, password, oldPassword } = req.body;
  console.log(req.admin._id);
  try {
    const adminExist = await Admin.findById(req.admin._id);
    if (!adminExist) {
      res.status(401).json({
        success: false,
        message: "Admin Not Exist",
      });
    } else {
      const isPasswordMatched = await adminExist.comparePassword(oldPassword);
      if (!isPasswordMatched) {
        res.status(401).json({
          success: false,
          message: "Invalid Credentials",
        });
      } else {
        await Admin.findByIdAndUpdate(adminExist, { name, email, password });
        res.json({
          success: true,
          message: "Admin Information Updated",
        });
      }
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: error.message,
    });
  }
};

// Login Admin

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(401).json({
        success: false,
        message: "Both Email and Password are compulsory",
      });
    } else {
      const loggingInAdmin = await Admin.findOne({ email });
      if (!loggingInAdmin) {
        res.status(403).json({
          success: false,
          message: "Invalid Email or Password",
        });
      } else {
        const isPasswordMatched = await loggingInAdmin.comparePassword(
          password
        );
        if (!isPasswordMatched) {
          res.status(404).json({
            success: false,
            message: "Invalid Email or Password",
          });
        } else {
          const token = loggingInAdmin.JWTTOKEN();
          res
            .status(200)
            .cookie("token", token, {
              expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
              httpOnly: true,
            })
            .json({
              success: true,
              message: "Logged In Successfully",
              loggingInAdmin,
            });
        }
      }
    }
  } catch (error) {
    res.status(503).json({
      success: false,
      message: error.message,
    });
  }
};

// Logout Admin
export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged Out",
      });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// Logged In Admin Details
export const loggedInAdmin = async (req, res) => {
  try {
    const loggedInAdmin = await Admin.findById(req.admin);
    if (!loggedInAdmin) {
      res.status(402).json({
        success: false,
        message: "Admin not found",
      });
    } else {
      res.status(200).json({
        success: true,
        loggedInAdmin,
      });
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: error.message,
    });
  }
};

// Send Messge to Admin

export const EmailMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const options = {
      name,
      email,
      subject,
      message,
    };
    await sendMessage(options);
    res.status(200).json({
      success: true,
      message: "Message Sent",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: error.message,
    });
  }
};

const generateOTP = () => {
  return crypto.randomBytes(3).toString("hex").toUpperCase();
};

export const sendResetPasswordPin = async (req, res) => {
  try {
    const { email } = req.body;
    const emailExists = await Admin.findOne({ email });
    console.log(emailExists);
    if (!emailExists) {
      console.log("401");
      res.status(401).json({
        success: false,
        message: "Invalid Email",
      });
    } else {
      const OTP = generateOTP();
      const options = {
        OTP,
        email,
      };
      await SendResetPasswordPin(options);
      emailExists.resetPasswordPin = OTP;
      await emailExists.save();
      res.status(201).json({
        success: true,
        message: `OTP sent to ${email}`,
      });
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { otp, newPassword } = req.body;
    const otpString = Array.isArray(otp) ? otp.join("") : otp;
    const validatedOtp = await Admin.findOne({ resetPasswordPin: otpString });
    if (!validatedOtp) {
      res.status(401).json({
        success: false,
        message: "Invalid OTP",
      });
    } else {
      const checkPreviousPass = await validatedOtp.comparePassword(newPassword);
      if (checkPreviousPass) {
        res.status(401).json({
          success: false,
          message:
            "Can't Use Previously using Password. Enter a Different Passowrd",
        });
      } else {
        validatedOtp.password = newPassword;
        validatedOtp.resetPasswordPin = undefined;
        await validatedOtp.save();
        res.status(201).json({
          success: false,
          message: "Password Updated",
        });
      }
    }
  } catch (error) {
    res.status(501).json({
      success: false,
      message: error.message,
    });
  }
};
