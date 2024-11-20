const mongoose = require("mongoose");

const childSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    profilePic: { type: String, required: false },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    allergies: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Child", childSchema);
