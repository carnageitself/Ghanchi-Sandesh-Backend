const express = require("express");
const router = express.Router();
const {
  createParivarikNirdikshika,
  getAllParivarikNirdikshikas,
  getParivarikNirdikshikaById,
  updateParivarikNirdikshikaById,
  deleteParivarikNirdikshikaById,
} = require("../controllers/ParivarikNirdikshika"); // Import the controller functions

// Define your routes
router.post("/", createParivarikNirdikshika);
router.get("/", getAllParivarikNirdikshikas);
router.get("/:id", getParivarikNirdikshikaById);
router.put("/:id", updateParivarikNirdikshikaById);
router.delete("/:id", deleteParivarikNirdikshikaById);

module.exports = router;
