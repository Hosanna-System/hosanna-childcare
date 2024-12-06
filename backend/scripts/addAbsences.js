import mongoose from "mongoose";
import dotenv from "dotenv";
import Absence from "../models/Absence.js"; // Assurez-vous que le chemin est correct

dotenv.config();

const addAbsences = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const absences = [
            {
                childId: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
                startDate: new Date("2023-10-01"),
                endDate: new Date("2023-10-05"),
                reason: "Maladie",
            },
            {
                childId: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
                startDate: new Date("2023-10-10"),
                endDate: new Date("2023-10-12"),
                reason: "Vacances",
            },
            {
                childId: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
                startDate: new Date("2023-10-15"),
                endDate: new Date("2023-10-17"),
                reason: "Raison inconnue",
            },
            {
                childId: new mongoose.Types.ObjectId(), // Remplacez par un ID valide
                startDate: new Date("2023-10-20"),
                endDate: new Date("2023-10-22"),
                reason: "Raison inconnue",
            }
        ];

        await Absence.insertMany(absences);
        console.log("Absences added");
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

addAbsences();