// routes/auth.js
const express = require("express");
const router = express.Router();
const {
  login,
  register,
  forgotPassword,
  logout,
} = require("../controllers/authController");

// Login user
router.post("/login", login);

// Register user
router.post("/register", register);

// Logout user
router.get("/logout", logout);

// Forgot password
router.post("/forgot-password", forgotPassword);

module.exports = router;
