import Activity from "../models/Activity.js";

// Create a new activity
export const createActivity = async (req, res) => {
    try {
        const activity = new Activity(req.body);
        await activity.save();
        res.status(201).json(activity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all activities
export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find().populate("createdBy");
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single activity by ID
export const getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id).populate("createdBy");
        if (!activity) {
            return res.status(404).json({ message: "Activity not found" });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an activity by ID
export const updateActivity = async (req, res) => {
    try {
        const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!activity) {
            return res.status(404).json({ message: "Activity not found" });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an activity by ID
export const deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findByIdAndDelete(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: "Activity not found" });
        }
        res.status(200).json({ message: "Activity deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};