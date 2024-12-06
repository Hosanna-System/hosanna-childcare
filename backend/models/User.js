import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, require: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    profilePicture: { type: String, default: "" },
    role: {
      type: String,
      enum: ["parent", "monitor", "admin", "superadmin"],
      default: "parent",
    }, // Ajout du rôle superadmin
    childcareCenterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChildcareCenter",
    }, // Association avec un centre
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
