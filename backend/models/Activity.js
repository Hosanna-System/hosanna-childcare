const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Name of the activity
    description: { type: String, required: false },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Activity", activitySchema);
