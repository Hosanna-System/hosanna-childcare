// Pour protéger l’application contre des vulnérabilités courantes. 
// Helmet aide à sécuriser les applications Express en définissant divers en-têtes HTTP.
const helmet = require("helmet");

const enableSecurity = helmet();

module.exports = enableSecurity;
