import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js"
import cors from 'cors'

const app = express();

// middleware for parsing request body
app.use(express.json());

// Middleware for handling cors policy
// app.use(cors());

app.use(cors({
    origin: "http://localhost:5000",
    methods: ['GET', 'POST', "PUT", "DELETE"],
    allowedHeaders: ['content-type']
}))

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
