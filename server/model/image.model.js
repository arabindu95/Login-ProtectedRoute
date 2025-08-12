import mongoose from "mongoose";
const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

const imageModel = mongoose.model("Image", imageSchema);
export default imageModel;
