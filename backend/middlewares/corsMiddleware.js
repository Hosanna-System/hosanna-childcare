// Pour gérer les politiques de contrôle des accès cross-origin.
// CORS (Cross-Origin Resource Sharing) est un mécanisme qui utilise des en-têtes HTTP pour permettre aux applications d’un domaine d’accéder aux ressources d’un autre domaine.
const cors = require("cors");

const enableCors = cors({
  origin: process.env.CLIENT_URL || "*", // URL de votre frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});
module.exports = enableCors;
