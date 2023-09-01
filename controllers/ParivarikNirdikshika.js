const asyncHandler = require("../middleware/asyncHandler"); // Import async handler
const ParivarikNirdikshika = require("../models/ParivarikNirdikshika"); // Import the ParivarikNirdikshika model

// @desc    Create a new ParivarikNirdikshika
// @route   POST /api/parivarik-nirdikshika
// @access  Public
const createParivarikNirdikshika = asyncHandler(async (req, res) => {
  const parivarikNirdikshika = await ParivarikNirdikshika.create(req.body);
  res.status(201).json({ success: true, data: parivarikNirdikshika });
});

// @desc    Get all ParivarikNirdikshikas
// @route   GET /api/parivarik-nirdikshika
// @access  Public
const getAllParivarikNirdikshikas = asyncHandler(async (req, res) => {
  const parivarikNirdikshikas = await ParivarikNirdikshika.find();
  res.status(200).json({ success: true, data: parivarikNirdikshikas });
});

// @desc    Get a single ParivarikNirdikshika by ID
// @route   GET /api/parivarik-nirdikshika/:id
// @access  Public
const getParivarikNirdikshikaById = asyncHandler(async (req, res) => {
  const parivarikNirdikshika = await ParivarikNirdikshika.findById(req.params.id);
  if (!parivarikNirdikshika) {
    return res.status(404).json({ success: false, message: "ParivarikNirdikshika not found" });
  }
  res.status(200).json({ success: true, data: parivarikNirdikshika });
});

// @desc    Update a ParivarikNirdikshika by ID
// @route   PUT /api/parivarik-nirdikshika/:id
// @access  Public
const updateParivarikNirdikshikaById = asyncHandler(async (req, res) => {
  const parivarikNirdikshika = await ParivarikNirdikshika.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!parivarikNirdikshika) {
    return res.status(404).json({ success: false, message: "ParivarikNirdikshika not found" });
  }
  res.status(200).json({ success: true, data: parivarikNirdikshika });
});

// @desc    Delete a ParivarikNirdikshika by ID
// @route   DELETE /api/parivarik-nirdikshika/:id
// @access  Public
const deleteParivarikNirdikshikaById = asyncHandler(async (req, res) => {
  const parivarikNirdikshika = await ParivarikNirdikshika.findByIdAndRemove(req.params.id);
  if (!parivarikNirdikshika) {
    return res.status(404).json({ success: false, message: "ParivarikNirdikshika not found" });
  }
  res.status(204).json({ success: true, data: {} });
});

module.exports = {
  createParivarikNirdikshika,
  getAllParivarikNirdikshikas,
  getParivarikNirdikshikaById,
  updateParivarikNirdikshikaById,
  deleteParivarikNirdikshikaById,
};
