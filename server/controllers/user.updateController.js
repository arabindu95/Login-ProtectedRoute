import userModel from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const updateUserDetails = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;

    if (!req.userId) {
      return res.status(400).json({
        message: "unautorized",
        error: true,
        success: false,
      });
    }

    //updates objet variable
    const updates = {};

    //condition
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (mobile) updates.mobile = mobile;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updates.password = hashedPassword;
    }

    const updateUser = await userModel.findByIdAndUpdate(req.userId, updates, {
      new: true,
    });

    res.status(200).json({
      message: "update successfully",
      error: false,
      success: true,
      user: {
        name: updateUser.name,
        email: updateUser.email,
        mobile: updateUser.mobile,
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
