const express = require("express");
const {
  registerUser,
  updateYourProfile,
  loginUser,
  getMe,
} = require("../controllers/UserController");
const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(isAuthenticatedUser, getMe);
router.route("/upd/profile").put(isAuthenticatedUser, updateYourProfile);

module.exports = router;
