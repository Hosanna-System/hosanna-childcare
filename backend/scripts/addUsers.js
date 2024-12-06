import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/User.js"; // Assurez-vous que le chemin est correct
import dotenv from "dotenv";

dotenv.config();

const addUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const users = [
      {
        id: new mongoose.Types.ObjectId(),
        firstName: "Super",
        lastName: "Admin",
        email: "superadmin@example.com",
        password: await bcrypt.hash("password123", 10),
        role: "superadmin",
      },
      {
        id: new mongoose.Types.ObjectId(),
        firstName: "Admin",
        lastName: "User",
        email: "admin@example.com",
        password: await bcrypt.hash("password123", 10),
        role: "admin",
      },
      {
        id: new mongoose.Types.ObjectId(),
        firstName: "Monitor",
        lastName: "User",
        email: "monitor@example.com",
        password: await bcrypt.hash("password123", 10),
        role: "monitor",
      },
      {
        id: new mongoose.Types.ObjectId(),
        firstName: "Parent",
        lastName: "User",
        email: "parent@example.com",
        password: await bcrypt.hash("password123", 10),
        role: "parent",
      },
    ];

    await User.insertMany(users);
    console.log("Users added");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

addUsers();
