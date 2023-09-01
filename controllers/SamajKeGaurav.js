const SamajKeGaurav = require('../models/SamajKeGaurav'); // Import your model
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Create a new SamajKeGaurav
// @route   POST /api/samajkegaurav
// @access  Public
const createSamajKeGaurav = asyncHandler(async (req, res) => {
  const samajKeGaurav = await SamajKeGaurav.create(req.body);
  res.status(201).json({ success: true, data: samajKeGaurav });
});

// @desc    Get all SamajKeGaurav records
// @route   GET /api/samajkegaurav
// @access  Public
const getAllSamajKeGaurav = asyncHandler(async (req, res) => {
  const samajKeGauravList = await SamajKeGaurav.find();
  res.status(200).json({ success: true, data: samajKeGauravList });
});

// @desc    Get a single SamajKeGaurav by ID
// @route   GET /api/samajkegaurav/:id
// @access  Public
const getSamajKeGauravById = asyncHandler(async (req, res) => {
  const samajKeGaurav = await SamajKeGaurav.findById(req.params.id);
  if (!samajKeGaurav) {
    return res.status(404).json({ success: false, message: 'SamajKeGaurav not found' });
  }
  res.status(200).json({ success: true, data: samajKeGaurav });
});

// @desc    Update a SamajKeGaurav by ID
// @route   PUT /api/samajkegaurav/:id
// @access  Public
const updateSamajKeGauravById = asyncHandler(async (req, res) => {
  const samajKeGaurav = await SamajKeGaurav.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!samajKeGaurav) {
    return res.status(404).json({ success: false, message: 'SamajKeGaurav not found' });
  }
  res.status(200).json({ success: true, data: samajKeGaurav });
});

// @desc    Delete a SamajKeGaurav by ID
// @route   DELETE /api/samajkegaurav/:id
// @access  Public
const deleteSamajKeGauravById = asyncHandler(async (req, res) => {
  const samajKeGaurav = await SamajKeGaurav.findByIdAndRemove(req.params.id);
  if (!samajKeGaurav) {
    return res.status(404).json({ success: false, message: 'SamajKeGaurav not found' });
  }
  res.status(204).json({ success: true, data: {} });
});

module.exports = {
  createSamajKeGaurav,
  getAllSamajKeGaurav,
  getSamajKeGauravById,
  updateSamajKeGauravById,
  deleteSamajKeGauravById,
};
