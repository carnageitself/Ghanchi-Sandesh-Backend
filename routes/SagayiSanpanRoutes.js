const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/asyncHandler");
const {
  createSagayiSagpan,
  getAllSagayiSagpans,
  getSagayiSagpanById,
  updateSagayiSagpanById,
  deleteSagayiSagpanById,
} = require("../controllers/SagayiSapan");

// Create a new SagayiSagpan
router.post("/", asyncHandler(createSagayiSagpan));

// Get all SagayiSagpans
router.get("/", asyncHandler(getAllSagayiSagpans));

// Get a single SagayiSagpan by ID
router.get("/:id", asyncHandler(getSagayiSagpanById));

// Update a SagayiSagpan by ID
router.put("/:id", asyncHandler(updateSagayiSagpanById));

// Delete a SagayiSagpan by ID
router.delete("/:id", asyncHandler(deleteSagayiSagpanById));

module.exports = router;
