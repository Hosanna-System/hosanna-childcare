const express = require("express");
const {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateScheduleById,
  deleteScheduleById,
} = require("../controllers/scheduleController");
const {
  protect,
  isAdmin,
  isSuperAdmin,
  isMonitor,
  isParent,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, isAdmin, createSchedule);
router.get("/", protect, isMonitor || isParent, getAllSchedules); 
router.get("/:id", protect, isMonitor || isParent, getScheduleById); // Monitor and Parent can get a single schedule
router.put("/:id", protect, isAdmin, updateScheduleById);
router.delete("/:id", protect, isSuperAdmin, deleteScheduleById);

module.exports = router;
