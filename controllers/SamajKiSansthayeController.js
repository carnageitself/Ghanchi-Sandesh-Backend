const asyncHandler = require("../middleware/asyncHandler");
const SamajKiSansthaye = require("../models/SamajiKiSansthaye");

// @desc    Create a new SamajKiSansthaye
// @route   POST /api/samajiksansthaye
// @access  Private (You can modify access as needed)
const createSamajKiSansthaye = asyncHandler(async (req, res) => {
  const samajKiSansthaye = await SamajKiSansthaye.create(req.body);
  res.status(201).json({ success: true, data: samajKiSansthaye });
});

// @desc    Get all SamajKiSansthaye
// @route   GET /api/samajiksansthaye
// @access  Public
const getAllSamajKiSansthaye = asyncHandler(async (req, res) => {
  const samajikSansthaye = await SamajKiSansthaye.find();
  res.status(200).json({ success: true, data: samajikSansthaye });
});

// @desc    Get a single SamajKiSansthaye by ID
// @route   GET /api/samajiksansthaye/:id
// @access  Public
const getSamajKiSansthayeById = asyncHandler(async (req, res) => {
  const samajKiSansthaye = await SamajKiSansthaye.findById(req.params.id);
  if (!samajKiSansthaye) {
    return res.status(404).json({ success: false, message: "SamajKiSansthaye not found" });
  }
  res.status(200).json({ success: true, data: samajKiSansthaye });
});

// @desc    Update a SamajKiSansthaye by ID
// @route   PUT /api/samajiksansthaye/:id
// @access  Private (You can modify access as needed)
const updateSamajKiSansthayeById = asyncHandler(async (req, res) => {
  const samajKiSansthaye = await SamajKiSansthaye.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!samajKiSansthaye) {
    return res.status(404).json({ success: false, message: "SamajKiSansthaye not found" });
  }
  res.status(200).json({ success: true, data: samajKiSansthaye });
});

// @desc    Delete a SamajKiSansthaye by ID
// @route   DELETE /api/samajiksansthaye/:id
// @access  Private (You can modify access as needed)
const deleteSamajKiSansthayeById = asyncHandler(async (req, res) => {
  const samajKiSansthaye = await SamajKiSansthaye.findByIdAndRemove(req.params.id);
  if (!samajKiSansthaye) {
    return res.status(404).json({ success: false, message: "SamajKiSansthaye not found" });
  }
  res.status(204).json({ success: true, data: {} });
});

module.exports = {
  createSamajKiSansthaye,
  getAllSamajKiSansthaye,
  getSamajKiSansthayeById,
  updateSamajKiSansthayeById,
  deleteSamajKiSansthayeById,
};
