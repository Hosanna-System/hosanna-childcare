import ChildcareCenter from "../models/ChildcareCenter.js";
import User from "../models/User.js";

// Obtenir tous les centres de garde
export const getAllChildcareCenters = async (req, res) => {
  try {
    const centers = await ChildcareCenter.find();
    res.status(200).json(centers);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des centres." });
  }
};

// Créer un centre de garde
export const createChildcareCenter = async (req, res) => {
  const { name, address, email, phone, adminId } = req.body;

  try {
    // Vérifier si un centre existe déjà avec cet email
    const existingCenter = await ChildcareCenter.findOne({ email });
    if (existingCenter) {
      return res
        .status(400)
        .json({ error: "Un centre avec cet email existe déjà." });
    }

    // Créer le centre
    const center = new ChildcareCenter({
      name,
      address,
      email,
      phone,
      adminId,
    });

    await center.save();

    res.status(201).json({
      message: "Centre de garde créé avec succès.",
      center,
    });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du centre." });
  }
};

// Obtenir un centre de garde par son ID
export const getChildcareCenterById = async (req, res) => {
  const { id } = req.params;

  try {
    const center = await ChildcareCenter.findById(id);
    if (!center) {
      return res.status(404).json({ error: "Centre de garde non trouvé." });
    }

    res.status(200).json(center);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération du centre." });
  }
};

// Mettre à jour un centre de garde
export const updateChildcareCenter = async (req, res) => {
  const { id } = req.params;
  const { name, address, email, phone } = req.body;

  try {
    const center = await ChildcareCenter.findById(id);
    if (!center) {
      return res.status(404).json({ error: "Centre de garde non trouvé." });
    } else {
      center.name = name;
      center.address = address;
      center.email = email;
      center.phone = phone;
    }
    await center.save();

    res.status(200).json({
      message: "Centre de garde mis à jour avec succès.",
      center,
    });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du centre." });
  }
};

// Supprimer un centre de garde
export const deleteChildcareCenter = async (req, res) => {
  const { id } = req.params;

  try {
    const center = await ChildcareCenter.findById(id);
    if (!center) {
      return res.status(404).json({ error: "Centre de garde non trouvé." });
    }

    await center.remove();

    res.status(200).json({ message: "Centre de garde supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du centre." });
  }
};
