const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const favicon = require("serve-favicon");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");
const swaggerSpec = swaggerJsdoc(require("./config/swagger.config.js"));

<<<<<<< HEAD
// Importation des routes
const chatRoutes = require("./routes/Chat.routes");
const activityRoutes = require("./routes/Activity.route");
const alertRoutes = require("./routes/Alert.route");

=======
>>>>>>> 956fd42 (fix: alert route GET ONLY)
dotenv.config({ path: path.resolve(__dirname, ".env") }); // .env is placed in the root directory of the project

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// CORS
app.use(
  cors({
    origin: process.env.VITE_FRONT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parser
app.use(bodyParser.json());

// Middleware for favicon
app.use(favicon(__dirname + "/public/favicon.ico"));

// Middleware pour servir la documentation Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

<<<<<<< HEAD
// Socket.IO - Configuration des événements
io.on("connection", (socket) => {
  console.log("Un utilisateur est connecté : ", socket.id);

  // Exemple : écouter les messages envoyés par un client
  socket.on("message", (data) => {
    console.log("Message reçu : ", data);

    // Diffuser le message à tous les autres clients
    io.emit("message", data);
  });

  // Gérer la déconnexion
  socket.on("disconnect", () => {
    console.log("Un utilisateur s'est déconnecté : ", socket.id);
  });
});

// Routes
chatRoutes(app);
activityRoutes(app);
alertRoutes(app);

=======
// Routes
// Import the routes
const alertRoutes = require('./routes/Alert.route.js');

// Set up routes
alertRoutes(app);

>>>>>>> 956fd42 (fix: alert route GET ONLY)
// ... Autres middlewares

// Si rien n'est trouvé
app.use(({ res }) => {
  return res.status(404).json({ message: "Route not found" });
});

module.exports = app;
