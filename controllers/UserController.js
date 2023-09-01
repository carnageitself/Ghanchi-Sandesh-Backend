const mongoose = require("mongoose");
const User = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ErrorHandler = require("../utils/Errorhandler.js");
const asyncHandler = require("../middleware/asyncHandler.js");

const sendEmail = require("../utils/sendEmail.js");
const crypto = require("crypto");
const sendToken = require("../utils/token.js");
const cloudinary = require("cloudinary");

// Register User
const registerUser = asyncHandler(async (req, res, next) => {
  const {
    fullName,
    email,
    password,
  } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new ErrorHandler("User already exists", 404));
  }



  const user = await User.create({
    fullName,
    email,
    password,
  });


  sendToken(user, 200, res);
});

// Login User
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please provide email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("User Not Found", 401));
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorHandler("Invalid Credentials", 401));
  }

  sendToken(user, 200, res);
});

// Get User Profile
const getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return next(new ErrorHandler("User Not Found", 404));
  }

  res.status(200).json({ user });
});

// Update User Profile
const updateYourProfile =asyncHandler(async (req, res, next) => {
  try {
    const { fullName, email, phoneNumber, gender, address, avatar } =
      req.body;

    const newUserData = {
      fullName,
     
      email,
      gender,
      address,
      phoneNumber,
    };

  

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    if (!user) {
      return next(new ErrorHandler("User Not Found", 404));
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Logout Function
const logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});


// UserProfileDetails


// Export the controller functions
module.exports = {
  registerUser,
  loginUser,
  getMe,
  updateYourProfile,
  logout
  // ... (export other functions)
};
