const express = require("express");
const {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

const router = express.Router();

// Get all services
router.get("/", getAllServices);

// Get a single service by ID
router.get("/:id", getServiceById);

// Create a new service
router.post("/", createService);

// Update an existing service
router.put("/:id", updateService);

// Delete a service
router.delete("/:id", deleteService);

module.exports = router;
