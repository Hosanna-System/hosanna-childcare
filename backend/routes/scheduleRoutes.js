import express from "express";
import {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateScheduleById,
  deleteScheduleById,
} from "../controllers/scheduleController.js";
import {
  protect,
  isAdmin,
  isSuperAdmin,
  isMonitor,
  isParent,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, isAdmin, createSchedule);
router.get("/", protect, isMonitor || isParent, getAllSchedules); 
router.get("/:id", protect, isMonitor || isParent, getScheduleById); // Monitor and Parent can get a single schedule
router.put("/:id", protect, isAdmin, updateScheduleById);
router.delete("/:id", protect, isSuperAdmin, deleteScheduleById);

export default router;
