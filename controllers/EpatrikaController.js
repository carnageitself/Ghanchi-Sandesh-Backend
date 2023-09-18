const asyncHandler = require("../middleware/asyncHandler");
const Epatrika = require("../models/Epatrika");

// @desc    Create a new Epatrika
// @route   POST /api/epatrika
// @access  Public
const createEpatrika = asyncHandler(async (req, res) => {
  const epatrika = await Epatrika.create(req.body);
  res.status(201).json({ success: true, data: epatrika });
});

// @desc    Get all Epatrikas
// @route   GET /api/epatrika
// @access  Public
const getAllEpatrikas = asyncHandler(async (req, res) => {
  const epatrikas = await Epatrika.find();
  res.status(200).json({ success: true, data: epatrikas });
});

// @desc    Get a single Epatrika by ID
// @route   GET /api/epatrika/:id
// @access  Public
const getEpatrikaById = asyncHandler(async (req, res) => {
  const epatrika = await Epatrika.findById(req.params.id);
  if (!epatrika) {
    return res.status(404).json({ success: false, message: "Epatrika not found" });
  }
  res.status(200).json({ success: true, data: epatrika });
});

// @desc    Update an Epatrika by ID
// @route   PUT /api/epatrika/:id
// @access  Public
const updateEpatrikaById = asyncHandler(async (req, res) => {
  const epatrika = await Epatrika.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!epatrika) {
    return res.status(404).json({ success: false, message: "Epatrika not found" });
  }
  res.status(200).json({ success: true, data: epatrika });
});

// @desc    Delete an Epatrika by ID
// @route   DELETE /api/epatrika/:id
// @access  Public
const deleteEpatrikaById = asyncHandler(async (req, res) => {
  const epatrika = await Epatrika.findByIdAndRemove(req.params.id);
  if (!epatrika) {
    return res.status(404).json({ success: false, message: "Epatrika not found" });
  }
  res.status(204).json({ success: true, data: {} });
});

module.exports = {
  createEpatrika,
  getAllEpatrikas,
  getEpatrikaById,
  updateEpatrikaById,
  deleteEpatrikaById,
};
