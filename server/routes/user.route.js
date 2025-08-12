import express from "express";
const userRouter = express.Router();
import { registerUserController } from "../controllers/usercontroller.js";
import { logincontroller } from "../controllers/usercontroller.js";
import { logoutcontroller } from "../controllers/usercontroller.js";
import { auth } from "../middleware/auth.js";
import { uploadImage } from "../controllers/uploadcontroller.js";
import { upload } from "../middleware/multer.js";
import { updateUserDetails } from "../controllers/user.updateController.js";

userRouter.post("/register", registerUserController);
userRouter.post("/login", logincontroller);
userRouter.post("/upload", auth, upload.single("image"), uploadImage);
userRouter.get("/logout", auth, logoutcontroller);
userRouter.post("/update", auth, updateUserDetails);

export default userRouter;
