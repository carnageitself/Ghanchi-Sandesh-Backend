const express = require('express');
const router = express.Router();
const {
  createSamajKeGaurav,
  getAllSamajKeGaurav,
  getSamajKeGauravById,
  updateSamajKeGauravById,
  deleteSamajKeGauravById,
} = require('../controllers/SamajKeGaurav');

// Create a new SamajKeGaurav
router.post('/', createSamajKeGaurav);

// Get all SamajKeGaurav records
router.get('/', getAllSamajKeGaurav);

// Get a single SamajKeGaurav by ID
router.get('/:id', getSamajKeGauravById);

// Update a SamajKeGaurav by ID
router.put('/:id', updateSamajKeGauravById);

// Delete a SamajKeGaurav by ID
router.delete('/:id', deleteSamajKeGauravById);

module.exports = router;
