const mongoose = require('mongoose');
const Child = require('../models/Child.js');

// Get all children
exports.getAllChildren = async (req, res) => {
    try {
        const children = await Child.find();
        res.status(200).json(children);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single child by ID
exports.getChildById = async (req, res) => {
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
exports.createChild = async (req, res) => {
    const child = new Child({
        name: req.body.name,
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
exports.updateChild = async (req, res) => {
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
exports.deleteChild = async (req, res) => {
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