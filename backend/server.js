import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import logger from "./middlewares/loggingMiddleware.js";
import enableSecurity from "./middlewares/securityMiddleware.js";
import enableCors from "./middlewares/corsMiddleware.js";
import enableCompression from "./middlewares/compressionMiddleware.js";
//#region Importer les routes
import userRoutes from "./routes/userRoutes.js";
import childcareCenterRoutes from "./routes/childcareCenterRoutes.js";
import childrenRoutes from "./routes/childrenRoutes.js";
import absenceRoutes from "./routes/absenceRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";
import feedBackRoutes from "./routes/feedBackRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import scheduleRoutes from "./routes/scheduleRoutes.js";
//#endregion


const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middlewares globaux
app.use(logger);
app.use(json()); // Parse JSON
app.use(enableCors);
app.use(enableSecurity);
app.use(enableCompression);

// Connect to Database
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Routes
app.use("/api/users", userRoutes);
app.use("/api/childcarecenters", childcareCenterRoutes);
app.use("/api/children", childrenRoutes);
app.use("/api/absences", absenceRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/documents", documentRoutes);
app.use("api/feedbacks", feedBackRoutes);
app.use("api/messages", messageRoutes);
app.use("api/payments", paymentRoutes);
app.use("api/schedules", scheduleRoutes);

// Gestion des erreurs
app.use(errorHandler);

// Socket.IO
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Remplacez par votre URL cliente
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// Middleware pour la connexion Socket.IO
io.on("connection", (socket) => {
  console.log("Un utilisateur est connecté :", socket.id);

  // Écouter un message entrant
  socket.on("message", (data) => {
    console.log("Message reçu :", data);

    // Diffuser le message à tous les autres clients
    socket.broadcast.emit("message", data);
  });

  // Déconnexion
  socket.on("disconnect", () => {
    console.log("Un utilisateur est déconnecté");
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
