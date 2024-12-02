import express from "express";
const router = express.Router();
import {
  createChildcareCenter,
  getAllChildcareCenters,
  getChildcareCenterById,
  updateChildcareCenter,
  deleteChildcareCenter,
} from "../controllers/childcareCenterController.js";
import {
  protect,
  isSuperAdmin,
  isAdmin,
  isMonitor,
  isParent,
} from "../middlewares/authMiddleware.js";

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

export default router;
