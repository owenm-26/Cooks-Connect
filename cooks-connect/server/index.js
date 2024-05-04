const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./router"); // Import the router correctly
require("dotenv").config();

const app = express();
app.use(cors());

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

app.use("/api", router);

// Start your server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
