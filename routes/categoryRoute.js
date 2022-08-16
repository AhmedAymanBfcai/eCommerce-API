const express = require("express");

const router = express.Router();

const {
  getCategories,
  createCategory,
} = require("./controllers/categoryController");

app.get("/", (req, res) => {
  res.send("Hi :)");
});

router.route("/").get(getCategories).post(createCategory);

module.exports = router;
