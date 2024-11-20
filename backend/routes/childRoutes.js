const express = require("express");
const {
  getAllChildren,
  getChildById,
  createChild,
  updateChild,
  deleteChild,
} = require("../controllers/childController");

const router = express.Router();

// Get all children
router.get("/", getAllChildren);

// Get a single child by ID
router.get("/:id", getChildById);

// Create a new child
router.post("/", createChild);

// Update a child by ID
router.put("/:id", updateChild);

// Delete a child by ID
router.delete("/:id", deleteChild);

module.exports = router;
