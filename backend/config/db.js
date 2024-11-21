const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connecté : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Erreur de connexion : ${error.message}`.red.bold);
    process.exit(1); // Arrête l'application en cas d'erreur critique
  }
};

module.exports = connectDB;
