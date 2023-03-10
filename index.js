const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
/// app

const app = express();

// middlewares

app.use(express.json);
app.use(cors());

// endpoints

app.use("/api/user", userRoute);

// port

const port = process.env.PORT || 4000;

// route

app.get("/", (req, res) => {
  res.json({ message: "done" });
});

// mongo connect

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listening for requests
    app.listen(port, (req, res) => {
      console.log(`connected to db and server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
