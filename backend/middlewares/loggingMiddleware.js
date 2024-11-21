// Pour enregistrer les requêtes HTTP dans les journaux du serveur.
// Enregistre chaque requête avec des détails comme la méthode, l’URL et le statut.
const morgan = require("morgan");

const logger = morgan("combined"); // Utiliser 'tiny' pour un logging léger

module.exports = logger;
