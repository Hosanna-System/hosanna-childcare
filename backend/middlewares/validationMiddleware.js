// Pour valider les données envoyées dans les requêtes 
// à l’aide de bibliothèques comme Joi ou express-validator.
const { body, validationResult } = require("express-validator");

const validateUser = [
  body("name").notEmpty().withMessage("Le nom est requis"),
  body("email").isEmail().withMessage("Un email valide est requis"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit avoir au moins 6 caractères"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUser };
