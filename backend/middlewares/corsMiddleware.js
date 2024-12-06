// Pour gérer les politiques de contrôle des accès cross-origin.
// CORS (Cross-Origin Resource Sharing) est un mécanisme qui utilise des en-têtes HTTP pour permettre aux applications d’un domaine d’accéder aux ressources d’un autre domaine.
import cors from "cors";

const enableCors = cors({
  origin: "http://localhost:3000", // URL de votre frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization'],
  //credentials: true,
});

export default enableCors;
