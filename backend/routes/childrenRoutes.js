const express = require("express");
const {
  getAllChildren,
  getChildById,
  createChild,
  updateChild,
  deleteChild,
} = require("../controllers/childController");
const {
  protect,
  isSuperAdmin,
  isAdmin,
  isMonitor,
  isParent,
} = require("../middlewares/authMiddleware");

const router = express.Router();

// Route pour obtenir tous les enfants
router.get("/", protect, isSuperAdmin || isAdmin || isMonitor, getAllChildren);

// Route pour obtenir un enfant par son ID
router.get("/:id", protect, getChildById);

// Route pour créer un enfant
router.post("/", protect, createChild);

// Route pour mettre à jour un enfant
router.put("/:id", protect, updateChild);

// Route pour supprimer un enfant
router.delete("/:id", protect, isSuperAdmin || isAdmin, deleteChild);

module.exports = router;
