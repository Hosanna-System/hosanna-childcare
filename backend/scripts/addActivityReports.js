import mongoose from "mongoose";
import dotenv from "dotenv";
import ActivityReport from "../models/ActivityReport.js"; // Assurez-vous que le chemin est correct

dotenv.config();

const addActivityReports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const activityReports = [
      {
        childId: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
        date: new Date(),
        description: "Child participated in outdoor activities.",
        photos: ["url1.jpg", "url2.jpg"],
        createdBy: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
      },
      {
        childId: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
        date: new Date(),
        description: "Child attended a music class.",
        photos: ["url3.jpg", "url4.jpg"],
        createdBy: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
      },
      {
        childId: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
        date: new Date(),
        description: "Child played with other children.",
        photos: ["url5.jpg", "url6.jpg"],
        createdBy: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
      },
      {
        childId: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
        date: new Date(),
        description: "Child learned to paint.",
        photos: ["url7.jpg", "url8.jpg"],
        createdBy: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
      }
    ];

    await ActivityReport.insertMany(activityReports);
    console.log("Activity reports added");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

addActivityReports();
