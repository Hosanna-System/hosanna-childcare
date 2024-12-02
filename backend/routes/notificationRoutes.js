import express from "express";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createNotification,
  getNotificationsByUser,
  markAsRead,
  deleteNotification,
} from "../controllers/notificationController.js";

const router = express.Router();

// Route to create a new notification
router.post("/", protect, createNotification);

// Route to get all notifications for a user
router.get("/:userId", protect, getNotificationsByUser);

// Route to mark a notification as read
router.put("/:id/read", protect, markAsRead);

// Route to delete a notification
router.delete("/:id", protect, isAdmin, deleteNotification); // Only admins can delete notifications

export default router;
