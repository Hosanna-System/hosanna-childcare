const express = require("express");
const { protect, isAdmin, isMonitor } = require("../middlewares/authMiddleware");

const router = express.Router();
const {
  createActivity,
  getActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
} = require("../controllers/activityController");

router
  .route("/") // Route pour obtenir toutes les activités
  .post(protect, isAdmin, createActivity) // Route pour créer une activité
  .get(protect, isMonitor, getActivities); // Route pour obtenir toutes les activités

router
  .route("/:id") // Route pour obtenir une activité par son ID
  .get(protect, isMonitor, getActivityById) // Route pour obtenir une activité par son ID
  .put(protect, isAdmin, updateActivity) // Route pour mettre à jour une activité
  .delete(protect, isAdmin, deleteActivity); // Route pour supprimer une activité

module.exports = router;
