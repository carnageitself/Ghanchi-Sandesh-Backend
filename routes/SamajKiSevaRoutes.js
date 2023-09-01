const express = require('express');
const router = express.Router();
const {
  createSamajikSeva,
  getAllSamajikSeva,
  getSamajikSevaById,
  updateSamajikSevaById,
  deleteSamajikSevaById,
} = require('../controllers/SamajKiSeva');

// Routes for SamajikSeva
router.post('/samajikseva', createSamajikSeva);
router.get('/samajikseva', getAllSamajikSeva);
router.get('/samajikseva/:id', getSamajikSevaById);
router.put('/samajikseva/:id', updateSamajikSevaById);
router.delete('/samajikseva/:id', deleteSamajikSevaById);

module.exports = router;
