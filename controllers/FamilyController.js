const ErrorHandler = require("../utils/Errorhandler");
const Family = require("../models/FamilyModel.js");
const asyncHandler = require("../middleware/asyncHandler.js");

// Create a new family record
const createFamily = asyncHandler(async (req, res, next) => {
  try {
    const {
      name,
      fatherName,
      mainAddress,
      currentAddress,
      workingAddress,
      dob,
      gotra,
      qualification,
      profession,
      mobile,
      phone,
      email,
      other,
      familyMembers,
    } = req.body;

    const newFamily = await Family.create({
      name,
      fatherName,
      mainAddress,
      currentAddress,
      workingAddress,
      dob,
      gotra,
      qualification,
      profession,
      mobile,
      phone,
      email,
      other,
      familyMembers,
    });

    res.status(201).json(newFamily);

  } catch (error) {
    next(new ErrorHandler("Error creating family record", 500));
  }
});

// Get all family records
const getAllFamilies = asyncHandler(async (req, res, next) => {
  try {
    const families = await Family.find();

    res.json(families);

  } catch (error) {
    next(new ErrorHandler("Error getting family records", 500));
  }
});

// Get a single family record by ID
const getFamilyById = asyncHandler(async (req, res, next) => {
  try {
    const family = await Family.findById(req.params.id);
    if (!family) {
      throw new ErrorHandler("Family not found", 404);
    }
    res.json(family);
  } catch (error) {
    next(error);
  }
});

//delete Family
const deleteFamily = asyncHandler(async (req, res, next) => {
  try {
    const deletedFamily = await Family.findByIdAndDelete(req.params.id);
    if (!deletedFamily) {
      throw new ErrorHandler("Family not found", 404);
    }
    res.json({ message: "Family deleted successfully" });
  } catch (error) {
    next(error);
  }
});

// Update Family
const updateFamily = asyncHandler(async (req, res, next) => {
  try {
    const updatedFamily = await Family.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedFamily) {
      throw new ErrorHandler("Family not found", 404);
    }
    res.json(updatedFamily);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  createFamily,
  getAllFamilies,
  getFamilyById,
  deleteFamily,
  updateFamily,
};
