import mongoose from 'mongoose';
import Child from '../models/Child.js';

// Get all children
export const getAllChildren = async (req, res) => {
    try {
        const children = await Child.find();
        res.status(200).json(children);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single child by ID
export const getChildById = async (req, res) => {
    try {
        const child = await Child.findById(req.params.id);
        if (!child) {
            return res.status(404).json({ message: 'Child not found' });
        }
        res.status(200).json(child);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new child
export const createChild = async (req, res) => {
    const child = new Child({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        parentId: req.body.parentId,
        allergies: req.body.allergies
    });

    try {
        const newChild = await child.save();
        res.status(201).json(newChild);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a child by ID
export const updateChild = async (req, res) => {
    try {
        const updatedChild = await Child.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedChild) {
            return res.status(404).json({ message: 'Child not found' });
        }
        res.status(200).json(updatedChild);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a child by ID
export const deleteChild = async (req, res) => {
    try {
        const deletedChild = await Child.findByIdAndDelete(req.params.id);
        if (!deletedChild) {
            return res.status(404).json({ message: 'Child not found' });
        }
        res.status(200).json({ message: 'Child deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};