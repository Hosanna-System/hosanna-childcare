// Initialize multer middleware for file upload
// Pour gérer l’upload de fichiers comme les photos des enfants ou les documents. 
// Multer est un middleware Node.js pour gérer les données de formulaire multipart / encoded.
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
module.exports = upload;