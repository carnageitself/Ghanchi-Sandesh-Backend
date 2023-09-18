const asyncHandler = require("../middleware/asyncHandler");
const SamajikSeva = require("../models/SamajikSevaye");

// @desc    Create a new SamajikSeva
// @route   POST /api/samajikseva
// @access  Public
const createSamajikSevayein = asyncHandler(async (req, res) => {
  const samajikSeva = await SamajikSeva.create(req.body);
  res.status(201).json({ success: true, data: samajikSeva });
});

// @desc    Get all SamajikSeva
// @route   GET /api/samajikseva
// @access  Public
const getAllSamajikSevayein = asyncHandler(async (req, res) => {
  const samajikSeva = await SamajikSeva.find();
  res.status(200).json({ success: true, data: samajikSeva });
});

// @desc    Get a single SamajikSeva by ID
// @route   GET /api/samajikseva/:id
// @access  Public
const getSamajikSevayeinById = asyncHandler(async (req, res) => {
  const samajikSeva = await SamajikSeva.findById(req.params.id);
  if (!samajikSeva) {
    return res.status(404).json({ success: false, message: "SamajikSeva not found" });
  }
  res.status(200).json({ success: true, data: samajikSeva });
});

// @desc    Update a SamajikSeva by ID
// @route   PUT /api/samajikseva/:id
// @access  Public
const updateSamajikSevayeinById = asyncHandler(async (req, res) => {
  const samajikSeva = await SamajikSeva.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!samajikSeva) {
    return res.status(404).json({ success: false, message: "SamajikSeva not found" });
  }
  res.status(200).json({ success: true, data: samajikSeva });
});

// @desc    Delete a SamajikSeva by ID
// @route   DELETE /api/samajikseva/:id
// @access  Public
const deleteSamajikSevayeinById = asyncHandler(async (req, res) => {
  const samajikSeva = await SamajikSeva.findByIdAndRemove(req.params.id);
  if (!samajikSeva) {
    return res.status(404).json({ success: false, message: "SamajikSeva not found" });
  }
  res.status(204).json({ success: true, data: {} });
});

module.exports = {
  createSamajikSevayein,
  getAllSamajikSevayein,
  getSamajikSevayeinById,
  updateSamajikSevayeinById,
  deleteSamajikSevayeinById,
};
