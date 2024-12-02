import express from "express";
import {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} from "../controllers/feedbackController.js";
import {
  protect,
  isAdmin,
  isSuperAdmin,
} from "../middlewares/authMiddleware.js";

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


export default router;
