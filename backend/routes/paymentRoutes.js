const express = require("express");
const {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
} = require("../controllers/paymentController");
const { protect, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

// Create a new payment
router.post("/", protect, isAdmin, createPayment); 

// Get all payments
router.get("/", protect, isAdmin, getAllPayments); 

// Get a single payment by ID
router.get("/:id", protect, isAdmin, getPaymentById);

// Update a payment by ID
router.put("/:id", protect, isAdmin, updatePaymentById);

// Delete a payment by ID
router.delete("/:id", protect, isAdmin, deletePaymentById);

module.exports = router;
