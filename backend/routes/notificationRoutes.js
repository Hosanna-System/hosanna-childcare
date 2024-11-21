const express = require("express");
const { protect, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();
const {
  createNotification,
  getNotificationsByUser,
  markAsRead,
  deleteNotification,
} = require("../controllers/notificationController");

// Route to create a new notification
router.post("/", protect, createNotification);

// Route to get all notifications for a user
router.get("/:userId", protect, getNotificationsByUser);

// Route to mark a notification as read
router.put("/:id/read", protect, markAsRead);

// Route to delete a notification
router.delete("/:id", protect, isAdmin, deleteNotification); // Only admins can delete notifications

module.exports = router;
