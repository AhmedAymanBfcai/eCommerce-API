const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: string,
});

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
