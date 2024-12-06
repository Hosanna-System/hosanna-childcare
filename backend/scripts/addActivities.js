import mongoose from "mongoose";
import Activity from "../models/Activity.js"; // Assurez-vous que le chemin est correct
import dotenv from "dotenv";

dotenv.config();

const addActivities = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const activities = [
      {
        id: new mongoose.Types.ObjectId(),
        name: "Morning Exercise",
        description: "Light exercises to start the day",
        startTime: "08:00",
        endTime: "09:00",
        createdBy: "60d0fe4f5311236168a109ca", // Replace with a valid user ID
      },
      {
        id: new mongoose.Types.ObjectId(),
        name: "Art Class",
        description: "Drawing and painting session",
        startTime: "10:00",
        endTime: "11:30",
        createdBy: "60d0fe4f5311236168a109cb", // Replace with a valid user ID
      },
      {
        id: new mongoose.Types.ObjectId(),
        name: "Lunch Break",
        description: "Lunch time for kids",
        startTime: "12:00",
        endTime: "13:00",
        createdBy: "60d0fe4f5311236168a109cc", // Replace with a valid user ID
      },
      {
        id: new mongoose.Types.ObjectId(),
        name: "Story Time",
        description: "Reading stories to children",
        startTime: "14:00",
        endTime: "15:00",
        createdBy: "60d0fe4f5311236168a109cd", // Replace with a valid user ID
      },
    ];

    await Activity.insertMany(activities);
    console.log("Activities added");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

addActivities();
