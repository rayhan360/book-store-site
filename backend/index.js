import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js"

const app = express();

// middleware for parsing request body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/books', bookRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
