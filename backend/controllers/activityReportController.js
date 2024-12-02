import ActivityReport from "../models/ActivityReport.js";

// Create a new activity report
export const createActivityReport = async (req, res) => {
  try {
    const activityReport = new ActivityReport(req.body);
    await activityReport.save();
    res.status(201).json(activityReport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all activity reports
export const getAllActivityReports = async (req, res) => {
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
export const getActivityReportById = async (req, res) => {
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
export const updateActivityReport = async (req, res) => {
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
export const deleteActivityReport = async (req, res) => {
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
