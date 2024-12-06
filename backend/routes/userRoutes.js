import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} from "../controllers/userController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get user profile
router.get("/profile", getUserProfile);

// Update user profile
router.put("/profile", protect, updateUserProfile);

// Get all users
router.get("/", getAllUsers);

// Delete user
router.delete("/:id", protect, isAdmin, deleteUser);

export default router;
