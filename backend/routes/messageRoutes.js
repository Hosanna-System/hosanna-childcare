import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createMessage,
  getMessagesForUser,
  markMessageAsRead,
  deleteMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/", protect, createMessage);
router.get("/:userId", protect, getMessagesForUser);
router.put("/:messageId/read", protect, markMessageAsRead);
router.delete("/:messageId", protect, deleteMessage);

export default router;
