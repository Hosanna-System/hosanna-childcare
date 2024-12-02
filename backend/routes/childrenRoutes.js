import express from "express";
import {
  getAllChildren,
  getChildById,
  createChild,
  updateChild,
  deleteChild,
} from "../controllers/childController.js";
import {
  protect,
  isSuperAdmin,
  isAdmin,
  isMonitor,
  isParent,
} from "../middlewares/authMiddleware.js";

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

export default router;
