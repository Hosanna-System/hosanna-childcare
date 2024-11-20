const mongoose = require("mongoose");

const activityReportSchema = new mongoose.Schema(
  {
    childId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child",
      required: true,
    },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    photos: [{ type: String }], // Array of image URLs
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Monitor or admin
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ActivityReport", activityReportSchema);
