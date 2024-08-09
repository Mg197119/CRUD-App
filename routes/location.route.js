const express = require("express");
const Location = require("../models/location.model.js");
const { getLocations } = require("../controllers/location.controller.js");
const {
  getLocation,
  postLocation,
  deleteLocation,
  putLocation,
} = require("../controllers/location.controller.js");

const router = express.Router();

router.get("/", getLocations);

router.get("/:id", getLocation);

router.post("/", postLocation);

router.delete("/:id", deleteLocation);

router.put("/:id", putLocation);

module.exports = router;
