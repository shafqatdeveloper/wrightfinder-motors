import Admin from "../Models/Admin.js";

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
        // console.log(isPasswordMatched);
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
