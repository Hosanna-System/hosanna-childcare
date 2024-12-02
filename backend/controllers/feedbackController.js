import Feedback from "../models/Feedback.js";

// Create new feedback
export const createFeedback = async (req, res) => {
    try {
        const { userId, message, rating } = req.body;
        const feedback = new Feedback({ userId, message, rating });
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all feedbacks
export const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().populate("userId", "name email");
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get feedback by ID
export const getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id).populate("userId", "name email");
        if (!feedback) {
            return res.status(404).json({ error: "Feedback not found" });
        }
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update feedback
export const updateFeedback = async (req, res) => {
    try {
        const { message, rating } = req.body;
        const feedback = await Feedback.findByIdAndUpdate(
            req.params.id,
            { message, rating },
            { new: true, runValidators: true }
        );
        if (!feedback) {
            return res.status(404).json({ error: "Feedback not found" });
        }
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete feedback
export const deleteFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        if (!feedback) {
            return res.status(404).json({ error: "Feedback not found" });
        }
        res.status(200).json({ message: "Feedback deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};