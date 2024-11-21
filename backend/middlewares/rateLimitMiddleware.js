// Pour prévenir les attaques DDoS et limiter les abus d’API.
// Définition du middleware rateLimit pour limiter le nombre de requêtes par IP
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite à 100 requêtes par IP
  message: "Trop de requêtes, veuillez réessayer plus tard.",
});

module.exports = limiter;
