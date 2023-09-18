const express = require('express');
const router = express.Router();
const {
  createSamajikSevayein,
  getAllSamajikSevayein,
  getSamajikSevayeinById,
  updateSamajikSevayeinById,
  deleteSamajikSevayeinById,
} = require('../controllers/SamajhKiSevayeController');

// Routes for SamajikSeva
router.post('/samajiksevayen', createSamajikSevayein);
router.get('/samajiksevayen', getAllSamajikSevayein);
router.get('/samajiksevayen/:id', getSamajikSevayeinById);
router.put('/samajiksevayen/:id', updateSamajikSevayeinById);
router.delete('/samajiksevayen/:id', deleteSamajikSevayeinById);

module.exports = router;
