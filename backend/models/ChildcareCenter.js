import mongoose from "mongoose";

const childcareCenterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Nom du centre
    address: { type: String, required: true }, // Adresse complète
    email: { type: String, required: true, unique: true }, // Email de contact
    phone: { type: String, required: true }, // Numéro de téléphone
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Administrateur du centre
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }, // Statut du centre (actif/inactif)
  },
  {
    timestamps: true,
  }
);

const ChildcareCenter = mongoose.model("ChildcareCenter", childcareCenterSchema);

export default ChildcareCenter;
