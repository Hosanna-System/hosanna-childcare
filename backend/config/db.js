import mongoose from "mongoose";
import colors from "colors";

// Connexion à la base de données
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connecté : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Erreur de connexion : ${error.message}`.red.bold);
    process.exit(1); // Arrête l'application en cas d'erreur critique
  }
};

export default connectDB;