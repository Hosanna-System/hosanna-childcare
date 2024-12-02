import mongoose from "mongoose";

const childSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: { type: String, required: true },
    birthdate: { type: Date, required: true },
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

const Child = mongoose.model("Child", childSchema);

export default Child;
