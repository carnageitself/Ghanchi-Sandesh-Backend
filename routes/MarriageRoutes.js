const express = require("express");
const router = express.Router();
const {
  createMarriageProfile,
  getAllMarriageProfiles,
  getMarriageProfileById,
  updateMarriageProfileById,
  deleteMarriageProfileById,
} = require("../controllers/MarriageController");

// @desc    Create a new MarriageProfile
// @route   POST /api/marriage-profiles
// @access  Public
router.post("/", createMarriageProfile);

// @desc    Get all MarriageProfiles
// @route   GET /api/marriage-profiles
// @access  Public
router.get("/", getAllMarriageProfiles);

// @desc    Get a single MarriageProfile by ID
// @route   GET /api/marriage-profiles/:id
// @access  Public
router.get("/:id", getMarriageProfileById);

// @desc    Update a MarriageProfile by ID
// @route   PUT /api/marriage-profiles/:id
// @access  Public
router.put("/:id", updateMarriageProfileById);

// @desc    Delete a MarriageProfile by ID
// @route   DELETE /api/marriage-profiles/:id
// @access  Public
router.delete("/:id", deleteMarriageProfileById);

module.exports = router;
