const mongoose = require("mongoose");

const locationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is missing"],
    },
    lat: {
      type: Number,
      reqired: true,
      default: 0,
    },
    long: {
      type: Number,
      reqired: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
