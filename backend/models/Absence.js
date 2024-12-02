import mongoose from "mongoose";

const absenceSchema = new mongoose.Schema(
  {
    childId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child",
      required: true,
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reason: { type: String, required: true }, // Explanation for the absence
  },
  {
    timestamps: true,
  }
);

const Absence = mongoose.model("Absence", absenceSchema);

export default Absence;
