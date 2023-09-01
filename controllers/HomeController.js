const asyncHandler = require("../middleware/asyncHandler.js");
const Home = require("../models/Home");

// Create a new home
const createHome = asyncHandler(async (req, res) => {
  const home = await Home.create(req.body);
  res.status(201).json({ success: true, data: home });
});

// Get all homes
const getAllHomes = asyncHandler(async (req, res) => {
  const homes = await Home.find();
  res.status(200).json({ success: true, data: homes });
});

// Get a single home by ID
const getHomeById = asyncHandler(async (req, res) => {
  const home = await Home.findById(req.params.id);
  if (!home) {
    return res.status(404).json({ success: false, message: "Home not found" });
  }
  res.status(200).json({ success: true, data: home });
});

// Update a home by ID
const updateHomeById = asyncHandler(async (req, res) => {
  const home = await Home.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!home) {
    return res.status(404).json({ success: false, message: "Home not found" });
  }
  res.status(200).json({ success: true, data: home });
});

// Delete a home by ID
const deleteHomeById = asyncHandler(async (req, res) => {
  const home = await Home.findByIdAndRemove(req.params.id);
  if (!home) {
    return res.status(404).json({ success: false, message: "Home not found" });
  }
  res.status(204).json({ success: true, data: {} });
});

module.exports = {
  createHome,
  getAllHomes,
  getHomeById,
  updateHomeById,
  deleteHomeById,
};
