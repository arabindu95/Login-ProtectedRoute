import UserModel from "../model/user.model.js";
import bcrypt from "bcryptjs";
import generateAccessToken from "../utils/generateAccessToken.js";

//************** REGISTER_CONTROLLER ***************//
export const registerUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: `provide name , email, password`,
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: `the email already exist, please try another email`,
        error: true,
        success: false,
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const payload = {
      name,
      email,
      password: hashpassword,
    };
    const newUser = new UserModel(payload);
    const save = await newUser.save();

    return res.status(201).json({
      message: `User registered successfully`,
      error: false,
      success: true,
      data: save,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

//***************LOGIN_CONTROLLER******************//
export const logincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "please enter your email",
        error: true,
        success: true,
      });
    }
    if (!password) {
      return res.status(400).json({
        message: "please enter your password",
        error: true,
        success: true,
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: " user not registered",
        error: true,
        success: false,
      });
    }

    if (user.status !== "Active") {
      return res.status(400).json({
        message: " please cheack your password",
        error: true,
        success: false,
      });
    }

    const cheackPassword = await bcrypt.compare(password, user.password);
    if (!cheackPassword) {
      return res.status(400).json({
        message: "cheack your password",
        error: true,
        success: false,
      });
    }

    //jwt//
    const accessToken = await generateAccessToken(user._id);

    const cookieOption = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };

    res.cookie("accessToken", accessToken, cookieOption);

    return res.json({
      message: " login  successfully",
      error: false,
      success: true,
      data: {
        ...user._doc,
        accessToken,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

//***************** LOG_OUT__CONTROLLER ********************//
export const logoutcontroller = async (req, res) => {
  try {
    const cookieOption = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    res.clearCookie("accessToken", cookieOption);

    return res.status(200).json({
      message: "you are successfully logout",
      error: false,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
