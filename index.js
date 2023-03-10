const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
/// app

const app = express();

// middlewares

app.use(express.json);
app.use(cors());

// port

const port = process.env.PORT || 4000;

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
