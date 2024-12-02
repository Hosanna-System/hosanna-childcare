import express from "express";
import { protect, isAdmin, isMonitor } from "../middlewares/authMiddleware.js";

const router = express.Router();
import {
  createActivity,
  getActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
} from "../controllers/activityController.js";

router
  .route("/") // Route pour obtenir toutes les activités
  .post(protect, isAdmin, createActivity) // Route pour créer une activité
  .get(protect, isMonitor, getActivities); // Route pour obtenir toutes les activités

router
  .route("/:id") // Route pour obtenir une activité par son ID
  .get(protect, isMonitor, getActivityById) // Route pour obtenir une activité par son ID
  .put(protect, isAdmin, updateActivity) // Route pour mettre à jour une activité
  .delete(protect, isAdmin, deleteActivity); // Route pour supprimer une activité

export default router;
