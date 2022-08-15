const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8000;

// Connect with DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Database connected successfully`);
  })
  .catch((err) => {
    console.log(`Database Error: ${err.message}`);
  });

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`You are in Dev mode at port: ${process.env.PORT}`);
}

app.get("/", (req, res) => {
  res.send("Hi :)");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
