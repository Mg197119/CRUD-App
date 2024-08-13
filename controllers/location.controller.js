const Location = require("../models/location.model.js");

/**
 * @description Get all locations from the database
 * @route GET /locations
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 */
const getLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @description Get a single location by ID
 * @route GET /locations/:id
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} req.params - Parameters from the request
 * @param {string} req.params.id - Location ID
 * @param {Object} res - Express response object
 * @returns {void}
 */
const getLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @description Create a new location
 * @route POST /locations
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} req.body - Data for creating a new location
 * @param {Object} res - Express response object
 * @returns {void}
 */
const postLocation = async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @description Delete a location by ID
 * @route DELETE /locations/:id
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} req.params - Parameters from the request
 * @param {string} req.params.id - Location ID
 * @param {Object} res - Express response object
 * @returns {void}
 */
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

/**
 * @description Update a location by ID
 * @route PUT /locations/:id
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} req.params - Parameters from the request
 * @param {string} req.params.id - Location ID
 * @param {Object} req.body - Data for updating the location
 * @param {Object} res - Express response object
 * @returns {void}
 */
const putLocation = async (req, res) => {
  try {
    const { id } = req.params;

    const location = await Location.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.status(200).json(location);
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
