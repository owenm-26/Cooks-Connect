const mongoose = require("mongoose");
require("dotenv").config();

<<<<<<< Updated upstream
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
=======
mongoose 
    .connect("mongodb+srv://steventran:cooksconnect123@cluster0.kz7frgd.mongodb.net/")
    .then(() => {
        console.log('Connected');
    })
    .catch((err) => {
        console.log('Could not connect to MongoDB and start the server');
        console.log(err);
    });
>>>>>>> Stashed changes
