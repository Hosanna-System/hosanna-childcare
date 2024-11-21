require("dotenv").config();
const express = require("express");
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require("mongoose");
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');
const logger = require('./middlewares/loggingMiddleware');
const enableSecurity = require('./middlewares/securityMiddleware');
const enableCors = require('./middlewares/corsMiddleware');
const enableCompression = require('./middlewares/compressionMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middlewares globaux
app.use(logger); 
app.use(express.json()); // Parse JSON
app.use(enableCors);
app.use(enableSecurity);
app.use(enableCompression);

// Connect to Database
mongoose
  .connect(process.env.MONGO_URI, {
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
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/childcarecenters", require("./routes/childcareCenterRoutes"));
app.use("/api/children", require("./routes/childrenRoutes"));
app.use("/api/absences", require("./routes/absenceRoutes"));
app.use("/api/activities", require("./routes/activityRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));
app.use("/api/documents", require("./routes/documentRoutes"));
app.use("api/feedbacks", require("./routes/feedBackRoutes"));
app.use("api/messages", require("./routes/messageRoutes"));
app.use("api/payments", require("./routes/paymentRoutes"));
app.use("api/schedules", require("./routes/scheduleRoutes"));

// Gestion des erreurs
app.use(errorHandler);

// Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // Remplacez par votre URL cliente
        methods: ['GET', 'POST'],
    },
});

// Middleware pour la connexion Socket.IO
io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté :', socket.id);

    // Écouter un message entrant
    socket.on('message', (data) => {
        console.log('Message reçu :', data);

        // Diffuser le message à tous les autres clients
        socket.broadcast.emit('message', data);
    });

    // Déconnexion
    socket.on('disconnect', () => {
        console.log('Un utilisateur est déconnecté');
    });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
