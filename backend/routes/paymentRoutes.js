import express from "express";
import {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
} from "../controllers/paymentController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

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

export default router;
