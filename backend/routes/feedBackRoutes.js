const express = require("express");
const {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} = require("../controllers/feedbackController");
const {
  protect,
  isAdmin,
  isSuperAdmin,
} = require("../middlewares/authMiddleware");

const router = express.Router();

// Create new feedback
router.post("/", protect, createFeedback);

// Get all feedbacks
router.get("/", protect, isAdmin, getAllFeedbacks);

// Get feedback by ID
router.get("/:id", protect, getFeedbackById);

// Update feedback
router.put("/:id", protect, updateFeedback);

// Delete feedback
router.delete("/:id", protect, isSuperAdmin, deleteFeedback);

module.exports = router;
