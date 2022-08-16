const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      string,
      required: [true, "Category required"],
      unique: [true, "Category must be unique"],
      minlength: [3, "Too short categgory name"],
      maxlength: [32, "Too long category name"],
    },
    // A and B => shopping.com/a-and-b
    slug: {
      type: String,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
