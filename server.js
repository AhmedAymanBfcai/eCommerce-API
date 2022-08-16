const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8000;

const dbConnection = require("./config/db");
dbConnection();

// const categoryRoute = require("routes/categoryRoute");

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`You are in Dev mode at port: ${process.env.PORT}`);
}

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
