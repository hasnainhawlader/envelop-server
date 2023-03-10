const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: true,
    },
  },
  { timeseries: true }
);
module.exports = mongoose.model("user", userSchema);
