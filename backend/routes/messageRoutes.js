const express = require("express");
const { protect, isAdmin, isParent, isMonitor, isSuperAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();
const {
    createMessage,
    getMessagesForUser,
    markMessageAsRead,
    deleteMessage,
} = require("../controllers/messageController");

router.post("/", protect, createMessage);
router.get("/:userId", protect, getMessagesForUser);
router.put("/:messageId/read", protect, markMessageAsRead);
router.delete("/:messageId", protect, deleteMessage);

module.exports = router;