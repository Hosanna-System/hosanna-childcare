const express = require("express");
const router = express.Router();
const {
  createChildcareCenter,
  getAllChildcareCenters,
  getChildcareCenterById,
  updateChildcareCenter,
  deleteChildcareCenter,
} = require("../controllers/childcareCenterController");
const {
  protect,
  isSuperAdmin,
  isAdmin,
  isMonitor,
  isParent,
} = require("../middlewares/authMiddleware");

// Route pour obtenir tous les centres
router.get("/", protect, isSuperAdmin, getAllChildcareCenters);

// Route pour obtenir un centre par son ID
router.get("/:id", protect, isSuperAdmin, getChildcareCenterById);

// Route pour créer un centre
router.post("/", protect, isSuperAdmin, createChildcareCenter);

// Route pour mettre à jour un centre
router.put("/:id", protect, isSuperAdmin, updateChildcareCenter);

// Route pour supprimer un centre
router.delete("/:id", protect, isSuperAdmin, deleteChildcareCenter);

module.exports = router;
