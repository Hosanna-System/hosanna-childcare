const express = require("express");
const {
  getAllAbsences,
  getAbsenceById,
  createAbsence,
  updateAbsence,
  deleteAbsence,
} = require("../controllers/absenceController");
const {
  protect,
  isAdmin,
  isMonitor,
  isParent,
} = require("../middlewares/authMiddleware");

const router = express.Router();

// Routes pour récuperer toutes les absences
router.get("/", protect, isAdmin, getAllAbsences);

// Routes pour récuperer une absence par son ID
router.get("/:id", protect, isAdmin, getAbsenceById);

// Routes pour récuperer les absences d'un utilisateur
router.post("/", protect, isMonitor, createAbsence);

// Routes pour récuperer les absences d'un utilisateur
router.put("/:id", protect, isMonitor, updateAbsence);

// Routes pour récuperer les absences d'un utilisateur
router.delete("/:id", protect, isAdmin, deleteAbsence);

module.exports = router;
