import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";


const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
          });
    })


