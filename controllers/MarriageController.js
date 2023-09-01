const asyncHandler = require("../middleware/asyncHandler");
const MarriageProfile = require("../models/MarriageModel");

// @desc    Create a new MarriageProfile
// @route   POST /api/marriage-profiles
// @access  Public
const createMarriageProfile = asyncHandler(async (req, res) => {
  const marriageProfile = await MarriageProfile.create(req.body);
  res.status(201).json({ success: true, data: marriageProfile });
});

// @desc    Get all MarriageProfiles
// @route   GET /api/marriage-profiles
// @access  Public
const getAllMarriageProfiles = asyncHandler(async (req, res) => {
  const marriageProfiles = await MarriageProfile.find();
  res.status(200).json({ success: true, data: marriageProfiles });
});

// @desc    Get a single MarriageProfile by ID
// @route   GET /api/marriage-profiles/:id
// @access  Public
const getMarriageProfileById = asyncHandler(async (req, res) => {
  const marriageProfile = await MarriageProfile.findById(req.params.id);
  if (!marriageProfile) {
    return res.status(404).json({ success: false, message: "MarriageProfile not found" });
  }
  res.status(200).json({ success: true, data: marriageProfile });
});

// @desc    Update a MarriageProfile by ID
// @route   PUT /api/marriage-profiles/:id
// @access  Public
const updateMarriageProfileById = asyncHandler(async (req, res) => {
  const marriageProfile = await MarriageProfile.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!marriageProfile) {
    return res.status(404).json({ success: false, message: "MarriageProfile not found" });
  }
  res.status(200).json({ success: true, data: marriageProfile });
});

// @desc    Delete a MarriageProfile by ID
// @route   DELETE /api/marriage-profiles/:id
// @access  Public
const deleteMarriageProfileById = asyncHandler(async (req, res) => {
  const marriageProfile = await MarriageProfile.findByIdAndRemove(req.params.id);
  if (!marriageProfile) {
    return res.status(404).json({ success: false, message: "MarriageProfile not found" });
  }
  res.status(204).json({ success: true, data: {} });
});

module.exports = {
  createMarriageProfile,
  getAllMarriageProfiles,
  getMarriageProfileById,
  updateMarriageProfileById,
  deleteMarriageProfileById,
};
