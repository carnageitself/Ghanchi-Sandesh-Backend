const express = require("express");
const {
  createSamajKiSansthaye,
  getAllSamajKiSansthaye,
  getSamajKiSansthayeById,
  updateSamajKiSansthayeById,
  deleteSamajKiSansthayeById,
} = require("../controllers/SamajKiSansthayeController");
const router = express.Router();

// Create a new SamajKiSansthaye
router.post("/samajiksansthaye", createSamajKiSansthaye);

// Get all SamajKiSansthaye
router.get("/samajiksansthaye", getAllSamajKiSansthaye);

// Get a single SamajKiSansthaye by ID
router.get("/samajiksansthaye/:id", getSamajKiSansthayeById);

// Update a SamajKiSansthaye by ID
router.put("/samajiksansthaye/:id", updateSamajKiSansthayeById);

// Delete a SamajKiSansthaye by ID
router.delete("/samajiksansthaye/:id", deleteSamajKiSansthayeById);

module.exports = router;
