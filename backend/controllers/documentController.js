const Document = require("../models/Document");

// Create a new document
exports.createDocument = async (req, res) => {
    try {
        const { userId, name, url } = req.body;
        const newDocument = new Document({ userId, name, url });
        await newDocument.save();
        res.status(201).json(newDocument);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all documents
exports.getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a document by ID
exports.getDocumentById = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: "Document not found" });
        }
        res.status(200).json(document);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a document by ID
exports.updateDocumentById = async (req, res) => {
    try {
        const { name, url } = req.body;
        const document = await Document.findByIdAndUpdate(
            req.params.id,
            { name, url },
            { new: true }
        );
        if (!document) {
            return res.status(404).json({ message: "Document not found" });
        }
        res.status(200).json(document);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a document by ID
exports.deleteDocumentById = async (req, res) => {
    try {
        const document = await Document.findByIdAndDelete(req.params.id);
        if (!document) {
            return res.status(404).json({ message: "Document not found" });
        }
        res.status(200).json({ message: "Document deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};