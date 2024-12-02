// routes/auth.js
import express from "express";
import {
  login,
  register,
  forgotPassword,
  logout,
} from "../controllers/authController.js";

const router = express.Router();

// Login user
router.post("/login", login);

// Register user
router.post("/register", register);

// Logout user
router.get("/logout", logout);

// Forgot password
router.post("/forgot-password", forgotPassword);

export default router;
