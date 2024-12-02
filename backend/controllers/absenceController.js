import mongoose from "mongoose";
import Absence from "../models/Absence.js";

// Get all absences
export const getAllAbsences = async (req, res) => {
  try {
    const absences = await Absence.find().populate("childId");
    res.status(200).json(absences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single absence by ID
export const getAbsenceById = async (req, res) => {
  try {
    const absence = await Absence.findById(req.params.id).populate("childId");
    if (!absence) {
      return res.status(404).json({ message: "Absence not found" });
    }
    res.status(200).json(absence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new absence
export const createAbsence = async (req, res) => {
  const { childId, startDate, endDate, reason } = req.body;

  const newAbsence = new Absence({
    childId,
    startDate,
    endDate,
    reason,
  });

  try {
    const savedAbsence = await newAbsence.save();
    res.status(201).json(savedAbsence);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an absence by ID
export const updateAbsence = async (req, res) => {
  try {
    const updatedAbsence = await Absence.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedAbsence) {
      return res.status(404).json({ message: "Absence not found" });
    }

    res.status(200).json(updatedAbsence);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an absence by ID
export const deleteAbsence = async (req, res) => {
  try {
    const deletedAbsence = await Absence.findByIdAndDelete(req.params.id);

    if (!deletedAbsence) {
      return res.status(404).json({ message: "Absence not found" });
    }

    res.status(200).json({ message: "Absence deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
