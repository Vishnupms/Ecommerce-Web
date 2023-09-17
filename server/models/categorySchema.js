import mongoose from "mongoose";

const categoryModel = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
  });

  export default mongoose.model('category',categoryModel)