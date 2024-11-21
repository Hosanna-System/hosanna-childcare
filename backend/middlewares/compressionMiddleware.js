// Pour réduire la taille des réponses HTTP et améliorer les performances.
const compression = require("compression");

const enableCompression = compression();

module.exports = enableCompression;
