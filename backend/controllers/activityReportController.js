const ActivityReport = require("../models/ActivityReport");

// Create a new activity report
exports.createActivityReport = async (req, res) => {
  try {
    const activityReport = new ActivityReport(req.body);
    await activityReport.save();
    res.status(201).json(activityReport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all activity reports
exports.getAllActivityReports = async (req, res) => {
  try {
    const activityReports = await ActivityReport.find().populate(
      "childId createdBy"
    );
    res.status(200).json(activityReports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single activity report by ID
exports.getActivityReportById = async (req, res) => {
  try {
    const activityReport = await ActivityReport.findById(
      req.params.id
    ).populate("childId createdBy");
    if (!activityReport) {
      return res.status(404).json({ message: "Activity report not found" });
    }
    res.status(200).json(activityReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an activity report by ID
exports.updateActivityReport = async (req, res) => {
  try {
    const activityReport = await ActivityReport.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!activityReport) {
      return res.status(404).json({ message: "Activity report not found" });
    }
    res.status(200).json(activityReport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an activity report by ID
exports.deleteActivityReport = async (req, res) => {
  try {
    const activityReport = await ActivityReport.findByIdAndDelete(
      req.params.id
    );
    if (!activityReport) {
      return res.status(404).json({ message: "Activity report not found" });
    }
    res.status(200).json({ message: "Activity report deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
