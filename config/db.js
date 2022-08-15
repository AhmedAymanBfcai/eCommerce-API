const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://ahmed123:123ahmed@ahmedaymanbfcai.7prin.mongodb.net/suqshop?retryWrites=true&w=majority"
    )
    .then((conn) => {
      console.log(`Database Connected: ${conn.connection.host}`);
    });
  // .catch((err) => {
  //   console.error(`Database Error: ${err}`);
  //   process.exit(1);
  // });
};

module.exports = dbConnection;

// process.env.MONGO_URL;
