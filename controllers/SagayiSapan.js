const asyncHandler = require("../middleware/asyncHandler");
const SagayiSagpan = require("../models/SagayiSagpan");

// @desc    Create a new SagayiSagpan
// @route   POST /api/sagayi-sagpan
// @access  Public
const createSagayiSagpan = asyncHandler(async (req, res) => {
  const sagayiSagpan = await SagayiSagpan.create(req.body);
  res.status(201).json({ success: true, data: sagayiSagpan });
});

// @desc    Get all SagayiSagpans
// @route   GET /api/sagayi-sagpan
// @access  Public
const getAllSagayiSagpans = asyncHandler(async (req, res) => {
  const sagayiSagpans = await SagayiSagpan.find();
  res.status(200).json({ success: true, data: sagayiSagpans });
});

// @desc    Get a single SagayiSagpan by ID
// @route   GET /api/sagayi-sagpan/:id
// @access  Public
const getSagayiSagpanById = asyncHandler(async (req, res) => {
  const sagayiSagpan = await SagayiSagpan.findById(req.params.id);
  if (!sagayiSagpan) {
    return res.status(404).json({ success: false, message: "SagayiSagpan not found" });
  }
  res.status(200).json({ success: true, data: sagayiSagpan });
});

// @desc    Update a SagayiSagpan by ID
// @route   PUT /api/sagayi-sagpan/:id
// @access  Public
const updateSagayiSagpanById = asyncHandler(async (req, res) => {
  const sagayiSagpan = await SagayiSagpan.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!sagayiSagpan) {
    return res.status(404).json({ success: false, message: "SagayiSagpan not found" });
  }
  res.status(200).json({ success: true, data: sagayiSagpan });
});

// @desc    Delete a SagayiSagpan by ID
// @route   DELETE /api/sagayi-sagpan/:id
// @access  Public
const deleteSagayiSagpanById = asyncHandler(async (req, res) => {
  const sagayiSagpan = await SagayiSagpan.findByIdAndRemove(req.params.id);
  if (!sagayiSagpan) {
    return res.status(404).json({ success: false, message: "SagayiSagpan not found" });
  }
  res.status(204).json({ success: true, data: {} });
});

module.exports = {
  createSagayiSagpan,
  getAllSagayiSagpans,
  getSagayiSagpanById,
  updateSagayiSagpanById,
  deleteSagayiSagpanById,
};
