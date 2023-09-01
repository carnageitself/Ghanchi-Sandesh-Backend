const express = require("express");
const multer = require("multer");
const {
  createFamily,
  getAllFamilies,
  getFamilyById,
  deleteFamily,
  updateFamily,
} = require("../controllers/FamilyController.js");

const router = express.Router();
const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth.js");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50 MB

  },
});


router.get("/families", getAllFamilies);
router.get("/family/:id", getFamilyById);

router
  .route("/admin/families")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createFamily);

router
  .route("/admin/family/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteFamily)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateFamily);

module.exports = router;
