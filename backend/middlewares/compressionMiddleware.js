// Pour réduire la taille des réponses HTTP et améliorer les performances.
import compression from "compression";

const enableCompression = compression();

export default enableCompression;
