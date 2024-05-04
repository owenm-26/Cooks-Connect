const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB and start the server");
    console.log(err);
  });
