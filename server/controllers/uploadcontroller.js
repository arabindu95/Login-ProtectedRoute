import cloudinary from "../config/cloudinary.js";
import userModel from "../model/user.model.js";
import fs from "fs";

export const uploadImage = async (req, res) => {
  try {
    const file = req.file;

    //condition(i) if file doesnot exist
    if (!file) {
      return res.status(401).json({
        message: "no file",
        error: true,
        success: false,
      });
    }

    //condition (ii) file size
    if (file.size > 5 * 1024 * 1024) {
      fs.unlinkSync(file.path);
      return res.status(400).json({
        message: " file size maximum 2mb",
        error: true,
        success: false,
      });
    }

    // upload to cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "all images",
    });

    //delete image to localfile
    fs.unlinkSync(file.path);

    // Update avatar in user model
    const updatedUser = await userModel.findByIdAndUpdate(
      req.userId,
      {
        avatar: result.secure_url,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "image upload successfully",
      avatar: updatedUser.avatar,
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
