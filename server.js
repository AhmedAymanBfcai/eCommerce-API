const express = require("express");
const app = express();
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.PORT}`);
}

app.get("/", (req, res) => {
  res.send("Hi :)");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
