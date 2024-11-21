const express = require("express");
const {
  createDocument,
  getAllDocuments,
  getDocumentById,
  updateDocumentById,
  deleteDocumentById,
} = require("../controllers/documentController");
const {
  protect,
  isAdmin,
  isSuperAdmin,
} = require("../middlewares/authMiddleware");

const router = express.Router();

// Route to create a new document
router.post("/", protect, isAdmin, createDocument);

// Route to get all documents
router.get("/", protect, getAllDocuments);

// Route to get a document by ID
router.get("/:id", protect, getDocumentById);

// Route to update a document by ID
router.put("/:id", protect, isAdmin, updateDocumentById);

// Route to delete a document by ID
router.delete("/:id", protect, isSuperAdmin, deleteDocumentById);

module.exports = router;
