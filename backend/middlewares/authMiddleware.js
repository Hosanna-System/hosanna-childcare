import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Vérification de l'authentification
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ error: "Non autorisé, token invalide" });
    }
  } else {
    res.status(401).json({ error: "Non autorisé, aucun token" });
  }
};

// Vérification des permissions monitor
const isMonitor = (req, res, next) => {
  if (req.user && req.user.role === "monitor") {
    next();
  } else {
    res.status(403).json({ error: "Non autorisé, rôle moniteur requis" });
  }
};

// Vérification des permissions parent
const isParent = (req, res, next) => {
  if (req.user && req.user.role === "parent") {
    next();
  } else {
    res.status(403).json({ error: "Non autorisé, rôle parent requis" });
  }
};

// Vérification des permissions superadmin
const isSuperAdmin = (req, res, next) => {
  if (req.user && req.user.role === "superadmin") {
    next();
  } else {
    res.status(403).json({ error: "Non autorisé, rôle superadmin requis" });
  }
};

// Vérification des permissions admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "Non autorisé, rôle admin requis" });
  }
};

export { protect, isMonitor, isParent, isSuperAdmin, isAdmin };
