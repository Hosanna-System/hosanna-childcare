// Pour protéger l’application contre des vulnérabilités courantes. 
// Helmet aide à sécuriser les applications Express en définissant divers en-têtes HTTP.
import helmet from "helmet";

const enableSecurity = helmet();

export default enableSecurity;
