const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} = require("../controllers/userController.js");
const { protect, isAdmin } = require("../middlewares/authMiddleware");

// Register a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get user profile
router.get("/profile", protect, getUserProfile);

// Update user profile
router.put("/profile", protect, updateUserProfile);

// Get all users
router.get("/", protect, isAdmin, getAllUsers);

// Delete user
router.delete("/:id", protect, isAdmin, deleteUser);

module.exports = router;
