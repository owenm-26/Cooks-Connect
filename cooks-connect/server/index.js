import mongoose from "mongoose";

mongoose 
    .connect("mongodb+srv://steventran:steventran132@cluster0.kz7frgd.mongodb.net/")
    .then(() => {
        console.log('Connected');
    })
    .catch((err) => {
        console.log('Could not connect to MongoDB and start the server');
        console.log(err);
    });
