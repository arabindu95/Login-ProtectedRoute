import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("please provide MONGODB_URI in the .env file");
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MONGODB connected successfully`);
  } catch (err) {
    console.log(`MONGODB connection error`, err.message);
    process.exit(1);
  }
};

export default connectDB;
