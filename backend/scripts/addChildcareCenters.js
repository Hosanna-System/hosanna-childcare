import mongoose from "mongoose";
import dotenv from "dotenv";
import ChildcareCenter from "../models/ChildcareCenter.js";
import User from "../models/User.js";

dotenv.config();

const addChildcareCenters = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const adminUser = await User.findOne({ email: "admin@example.com" });

    if (!adminUser) {
      throw new Error("Admin user not found");
    }

    const centers = [
      {
        name: "Happy Kids Childcare",
        address: "123 Main St, Anytown, USA",
        email: "contact@happykids.com",
        phone: "123-456-7890",
        adminId: adminUser._id,
      },
      {
        name: "Little Stars Daycare",
        address: "456 Elm St, Othertown, USA",
        email: "info@littlestars.com",
        phone: "987-654-3210",
        adminId: adminUser._id,
      },
      {
        name: "Sunshine Preschool",
        address: "789 Oak St, Anycity, USA",
        email: "infos@sunshine-preshcool.com",
        phone: "456-789-1230",
        adminId: adminUser._id,
      },
    ];

    await ChildcareCenter.insertMany(centers);
    console.log("Childcare centers added");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

addChildcareCenters();
