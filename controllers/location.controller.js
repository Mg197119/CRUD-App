const Location = require("../models/location.model.js");

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postLocation = async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;

    const location = await Location.findByIdAndDelete(id);

    if (!location) {
      return res.status(404).json({ message: "Location not found." });
    }

    res.status(200).json({ message: "Location Deleted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const putLocation = async (req, res) => {
  try {
    const { id } = req.params;

    const location = await Location.findByIdAndUpdate(id, req.body);
    if (!location) {
      return res.status(404).json({ message: "Message not found" });
    }
    const updatedLocation = await Location.findById(id);
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLocations,
  getLocation,
  postLocation,
  deleteLocation,
  putLocation,
};
