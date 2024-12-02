import Message from "../models/Message.js";

// Create a new message
export const createMessage = async (req, res) => {
    try {
        const { senderId, receiverId, content } = req.body;
        const message = new Message({ senderId, receiverId, content });
        await message.save();
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all messages for a user
export const getMessagesForUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const messages = await Message.find({
            $or: [{ senderId: userId }, { receiverId: userId }],
        }).populate("senderId receiverId", "name email");
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mark a message as read
export const markMessageAsRead = async (req, res) => {
    try {
        const { messageId } = req.params;
        const message = await Message.findByIdAndUpdate(
            messageId,
            { isRead: true },
            { new: true }
        );
        if (!message) {
            return res.status(404).json({ error: "Message not found" });
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a message
export const deleteMessage = async (req, res) => {
    try {
        const { messageId } = req.params;
        const message = await Message.findByIdAndDelete(messageId);
        if (!message) {
            return res.status(404).json({ error: "Message not found" });
        }
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};